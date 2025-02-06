import type { Context } from '../type'
import dogs from '../dogByName/dogs.json' assert { type: 'json' }

const resolvers = {
  Query: {
    getDogs: async (
      _parent: unknown,
      args: any,
      context: Context,
    ): Promise<any[]> => {
      return dogs
    },
  },
}

export default resolvers
