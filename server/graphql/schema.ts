
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLSchema } from 'graphql'


import dogByNameResolvers from './dogByName/dogByName.resolvers'
import getDogsResolvers from './getDogs/getDogs.resolvers'

import dogByNameTypeDefs from './dogByName/dogByName.typeDefs'
import getDogsTypeDefs from './getDogs/getDogs.typeDefs'
import typesResolvers from './types/types.resolvers'
import typesTypeDefs from './types/types.typeDefs'


export const resolvers = mergeResolvers([
  typesResolvers,
  dogByNameResolvers,
  getDogsResolvers,
])

export const typeDefs = mergeTypeDefs([
  typesTypeDefs,
  dogByNameTypeDefs,
  getDogsTypeDefs,
])

let schema: GraphQLSchema;

try {
  schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });
} catch (error) {
  console.error('GraphQL 스키마 생성 중 오류 발생:', error);
  // 기본 스키마를 설정하거나 빈 스키마를 설정하여 서버가 계속 실행되도록 함
  schema = makeExecutableSchema({
    typeDefs: `
      type Query {
        _empty: String
      }
    `,
    resolvers: {},
  });
}

export { schema };
  