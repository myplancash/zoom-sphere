import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

export const useGetCalls = () => {
  const { user } = useUser();
  const client = useStreamVideoClient(); //will be able to fetch our calls
  const [calls , setCalls] = useState<Call[]>(); //also fetch call for speficic user
  const [isLoading, setIsLoading] = useState(false); // track loading state

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user?.id) return;
      
      setIsLoading(true); // we started to fetch the calls  

      try {
        // https://getstream.io/video/docs/react/guides/querying-calls/#filters
        const { calls } = await client.queryCalls({
          sort: [{ field: 'sta rts_at', direction: -1 }], //sorting them by when they start
          filter_conditions: {
            starts_at: { $exists: true   },
            'custom.color': 'red',
            $or: [
              // we want to show this call  if we are the one that created it or if we are a member withing the call 
              { created_by_user_id: user.id },
              { members: { $in: [user.id] } },
            ],
          },
        });

        setCalls(calls);
      } catch (error) {
        console.error(error);
      } finally { //whether we succeed or something went wrong in any case we need to stop the loading
        setIsLoading(false); 
      }
    };

    loadCalls();
  }, [client, user?.id]); // we need both to properly fetch the meetings for user

  const now = new Date();

  const endedCalls = calls?.filter(({ state: { startsAt, endedAt } }: Call) => {
    return (startsAt && new Date(startsAt) < now) || !!endedAt
  })

  const upcomingCalls = calls?.filter(({ state: { startsAt } }: Call) => {
    return startsAt && new Date(startsAt) > now
  })

  return { endedCalls, upcomingCalls, callRecordings: calls, isLoading }
};