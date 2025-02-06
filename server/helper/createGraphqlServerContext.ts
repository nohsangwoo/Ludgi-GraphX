import type { ExpressContextFunctionArgument } from '@apollo/server/express4'

export type Context = ExpressContextFunctionArgument

export async function createGraphqlServerContext(
  context: ExpressContextFunctionArgument
): Promise<Context> {
  return context
}
