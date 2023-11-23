import { withAuth } from "next-auth/middleware"
import { authOptions } from './app/api/auth/[...nextauth]/options'


export default withAuth({
    jwt: authOptions.jwt,
    pages: authOptions.pages,
    callbacks: {
            authorized: ({ req, token }) => {                
              if (req.nextUrl.pathname === '/admin') {
                return token?.role === 'superadmin'
              }
              return Boolean(token)
            }
          }
})

export const config = { matcher: ['/admin/:path*'] }


