import 'server-only'
 
import { cookies } from 'next/headers'
import { decrypt } from './encrypt'
import { cache } from 'react'
import db from './db'
import { auth } from 'googleapis/build/src/apis/abusiveexperiencereport'
// import renderApi from '@api/render-api';

interface Auth {
    isAuth: boolean;
    sessionId?: string;
    userId?: string;
    emailVerified?: boolean;
    mfaVerified?: boolean;
    role?: string;
}

export const verifySession = cache(async (sessionString : string): Promise<Auth> => {
    const cookie = cookies().get(sessionString)?.value
    const authData : Auth = { isAuth: false }
    if (!cookie) {
        return authData
    }
    const session = await decrypt(cookie)
    if (!session.userId) {
        return authData
    }

    if (sessionString === 'session') {
        authData.sessionId = session.sessionId
    }
    authData.isAuth = true
    authData.userId = session.userId
    return authData
})

export const getUser = cache(async (sessionString : string) : Promise<Auth>  => {
    const session = await verifySession(sessionString)

    if (!session.isAuth) {
        return session
    }
    if (!session.userId) {
        return session
    }
    // Get the user data
    const user = await db.user.findUnique({
        where: {
            id: session.userId
        }
    })
    if (!user) {
        return session
    }
    session.role = user.role
    return session
})

export const getSession = cache(async (sessionString: string) : Promise<Auth> => {
    const authData= await getUser(sessionString)
    try {

    
        if (!authData.isAuth) {
            return { isAuth: false}
        }
    
        if (sessionString === 'session') {
            const session = await db.session.findUnique({
                where: {
                    id: authData.sessionId
                }
            })
            if (!session) {
                return authData
            }
            authData.mfaVerified = session.mfaVerified
            authData.role = authData.role
            return authData
        }
        if (sessionString === 'otp') {
            const session = await db.oTP.findUnique({
                where: {
                    userId: authData.userId
                }
            })
            if (!session) {
                return authData
            }
            return authData
        }
        if (sessionString === 'resetPassword') {
            const session = await db.resetPassword.findUnique({
                where: {
                    userId: authData.userId
                }
            })
            if (!session) {
                return authData
            }
            return authData
        }
        if (sessionString === 'verifyEmail') {
            const session = await db.emailVerification.findUnique({
                where: {
                    userId: authData.userId
                }
            })
            if (!session) {
                return authData
            }
            return authData
        }
        return authData
    } catch (error) {
        return authData
    }
} )
