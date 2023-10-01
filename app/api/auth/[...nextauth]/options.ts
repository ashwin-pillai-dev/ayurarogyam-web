import { PrismaClient } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';
import {PrismaAdapter} from '@auth/prisma-adapter'


const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter:PrismaAdapter(prisma),

    session: {
      strategy: 'jwt'
    },
    pages:{
        signIn:'/admin/login'

    },
    providers: [
      CredentialsProvider({
        name: 'Sign in',
        credentials: {
          email: {
            label: 'Email',
            type: 'email',
            placeholder: 'hello@example.com'
          },
          password: { label: 'Password', type: 'password' }
        },
        async authorize(credentials) {
            // console.log('creds'+{...credentials})
          if (!credentials?.email || !credentials.password) {
            throw new Error('Email or password not provided')
          }
  
          const admin = await prisma.admin.findUnique({
            where: {
              email: credentials.email
            }
          })

          console.log('admin: ' + admin);
          
  
          if (!admin) {
            throw new Error('Admin not found')
          }
  
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            admin.password
          )
  
          if (!isPasswordValid) {
            throw new Error('Invalid Password')
          }
  
          return {
            id: admin.id + '',
            email: admin.email,
            name: admin.name,
            randomKey: 'Hey cool'
          }


        }
      })
    ],
    callbacks: {
      session: ({ session, token }) => {
        console.log('Session Callback', { session, token })
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            randomKey: token.randomKey
          }
        }
      },
      jwt: ({ token, user }) => {
        console.log('JWT Callback', { token, user })
        if (user) {
          const u = user as unknown as any
          return {
            ...token,
            id: u.id,
            randomKey: u.randomKey
          }
        }
        return token
      }
    }
  }


  