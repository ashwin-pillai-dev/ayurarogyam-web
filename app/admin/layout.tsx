
// referrd and followed https://github.com/apollographql/apollo-client-nextjs for apollo provider for makig graphql queries and mutations

// import '../global.css'
import "react-toastify/dist/ReactToastify.css";
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '../../lib/apollo-wraper'
import DefaultNavbar from "./components/navbar/navbar";
import DefaultSidebar from "./components/sidebar/sideBar";
import NavSideWrapper from "./components/NavSideWrapper/navSideWrapper";

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

        <ApolloWrapper>
          <NavSideWrapper/>

          {/* <DefaultNavbar /> 
          <DefaultSidebar/> */}
         <main className="md:ml-64 h-auto pt-20">

          {children}
          </main>
        </ApolloWrapper>
      </body>
    </html>
  )
}
