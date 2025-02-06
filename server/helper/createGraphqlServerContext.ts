import type { ExpressContextFunctionArgument } from '@apollo/server/express4'
import { Context } from '../graphql/type'


export async function createGraphqlServerContext(
  context: ExpressContextFunctionArgument
): Promise<Context> {
  return context
}
