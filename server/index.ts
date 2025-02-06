import express, { Application } from 'express'
import next from 'next'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { createGraphqlServerContext } from './helper/createGraphqlServerContext'
import { schema } from './graphql/schema'


const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const server: Application = express()


  const apolloServer = new ApolloServer({
    schema: schema,
    cache: 'bounded',
    introspection: true,
  })

  await apolloServer.start()

  // Apollo Server를 Express 미들웨어로 추가
  server.use(
    '/api/graphql',
    express.json(),
    expressMiddleware(apolloServer, {
      context: createGraphqlServerContext,
    }) as unknown as express.RequestHandler,
  )


  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: unknown) => {
    if (err) throw err
    console.log(
      `✅ Express Server ready on http://localhost:${port}`,
    )
  })
})
