import { createClient } from 'graphql-ws'

export const wsClient = createClient({
  url: process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:4800/api/graphql",
})