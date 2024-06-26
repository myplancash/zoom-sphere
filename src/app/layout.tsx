import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZoomSphere App",
  description: "ZoomSphere isn't just another video conferencing platform; it's a transformative experience that redefines how we communicate and collaborate in the digital age.",
  icons: {
    icon: '/icons/logo.svg '
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary:
          "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
      },
      layout: {
        logoImageUrl: 'icons/zoomsphere-logo.svg',
        socialButtonsVariant: 'iconButton'
      },
      variables: {
        colorText: '#fff',
        colorPrimary: '#8419D8',
        colorBackground: "#4B0D89",
        colorInputBackground:"#24064C",
        colorInputText: "#fff",
      }
    }}>   
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>
          {children}  
           <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
