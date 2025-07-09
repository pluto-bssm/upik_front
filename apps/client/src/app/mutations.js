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