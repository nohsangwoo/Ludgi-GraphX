import { gql } from 'graphql-tag'
export default gql`

  type DogAttribute {
    key: String!
    value: String!
  }

  type DogResult { 
    name: String!
    attributes: [DogAttribute!]!
    description: [String!]!
    image: String!
    ageInWeeks: Int!
    sex: String!
    breed: String!
    color: String!
    fee: Float!
    weight: Float!
    availableDate: String!
  }
`
