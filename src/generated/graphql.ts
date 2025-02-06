import { GraphQLClient, RequestOptions } from 'graphql-request';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type DogResult = {
  __typename?: 'DogResult';
  ageInWeeks: Scalars['Int']['output'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String']['output'];
  breed: Scalars['String']['output'];
  color: Scalars['String']['output'];
  description: Array<Scalars['String']['output']>;
  fee: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export type GetDogsResult = {
  __typename?: 'GetDogsResult';
  ageInWeeks: Scalars['Int']['output'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String']['output'];
  breed: Scalars['String']['output'];
  color: Scalars['String']['output'];
  description: Array<Scalars['String']['output']>;
  fee: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  dogByName?: Maybe<DogResult>;
  getDogs: Array<GetDogsResult>;
};


export type QueryDogByNameArgs = {
  name: Scalars['String']['input'];
};

export type DogByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type DogByNameQuery = { __typename?: 'Query', dogByName?: { __typename?: 'DogResult', name: string, breed: string, ageInWeeks: number, image: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> } | null };

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', getDogs: Array<{ __typename?: 'GetDogsResult', name: string, breed: string, ageInWeeks: number, image: string, sex: string, weight: number, fee: number }> };


export const DogByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dogByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"ageInWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"ageInWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}}]}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    dogByName(variables: DogByNameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DogByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DogByNameQuery>(DogByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dogByName', 'query', variables);
    },
    getDogs(variables?: GetDogsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetDogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogsQuery>(GetDogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogs', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;