
// referrd and followed https://github.com/apollographql/apollo-client-nextjs for apollo provider for makig graphql queries and mutations

import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '../lib/apollo-wraper'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayur-Arogyam',
  description: 'Elvate health with Ayurveda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ApolloWrapper> */}
          {children}
          {/* </ApolloWrapper> */}
      </body>
    </html>
  )
}
