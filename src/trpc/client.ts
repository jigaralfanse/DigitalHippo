// This file sets up the tRPC client for the React application.It uses the createTRPCReact function from the
// @trpc/react-query package to create a trpc instance that will be used to interact with your tRPC API routes from the React components.


 import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from './index'
export const trpc = createTRPCReact<AppRouter>({})