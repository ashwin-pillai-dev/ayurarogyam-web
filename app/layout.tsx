
// referrd and followed https://github.com/apollographql/apollo-client-nextjs for apollo provider for makig graphql queries and mutations

import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import { Inter } from 'next/font/google'
import NavSideWrapper from "./admin/components/NavSideWrapper/navSideWrapper";
import { Suspense } from "react";
import Loading from './admin/loading'

const inter = Inter({ subsets: ['latin'] })
import { getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]/options'
import { Viewport } from 'next';
export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
  themeColor: {
    color: "#fff"
  }
}


export const metadata = {
  title: 'Ayur-Arogyam',
  description: 'Elvate health with Ayurveda',
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  let user;

  if (session?.user) {
    user = session.user

  }
  return (
    <html lang="en">
      <body className={inter.className}>

       {user?<NavSideWrapper user={session?.user} />:<></>} 

        {/* <DefaultNavbar /> 
          <DefaultSidebar/> */}
        <main className= {user?"md:ml-64 h-auto pt-20":''}>

          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>


        </main>
      </body>
    </html>
  )
}
