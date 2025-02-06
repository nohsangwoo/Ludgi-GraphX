import dogs from './dogs.json' assert { type: 'json' }
// import { DogByNameQueryVariables, DogResult } from '../../generated/graphql'
import { Context } from '../type'
// var _ = require('lodash');

const resolvers = {
  Query: {
    dogByName: async (
      _parent: unknown,
      args: any,
      context: Context,
    ): Promise<any> => {
      const { name } = args
      const dog = dogs.find(dog => dog.name === name)

      console.log('dog: ', dog)

      if (dog === undefined) {
        throw new Error('Dog not found')
      }


      console.log('test console.log')

      return dog
    },
  },
}

export default resolvers
