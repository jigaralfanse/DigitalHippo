// server initialisation
import { authRouter } from './auth-router';
import { publicProcedure,router } from './trpc';

export const appRouter = router({
  auth:authRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;