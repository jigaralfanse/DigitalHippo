import { User } from '@/payload-types';
import { ExpressContext } from '@/server';
import { TRPCError, initTRPC } from '@trpc/server';
import { PayloadRequest } from 'payload/types';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<ExpressContext>().create();
const middleware = t.middleware

const isAuth = middleware(async({ctx,next})=>{
    const req = ctx.req as PayloadRequest

    const {user} = req as {user: User | null}

    if (!user || !user.id) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
      }
    
      return next({
        ctx: {
          user,
        },
      })
})
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth)