import { gql } from '@apollo/client';
export const POST_VOTE = gql`
  mutation MyMutation($title: String!, $category: String!, $options: [String!]!) {
    vote {
      createVote(input: { title: $title, category: $category, options: $options }) {
        id
      }
    }
  }
`;


export const POST_VOTERESUlT = gql`
mutation MyMutation($voteId : ID!,$optionId : ID!) {
  voteResponse {
    createVoteResponse(input: {voteId: $voteId, optionId: $optionId}) {
      id
      optionContent
      optionId
      userId
      voteTitle
      voteId
      createdAt
    }
  }
}
`;