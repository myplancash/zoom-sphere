import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = [
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
];

export default authMiddleware({
  publicRoutes,
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};