import { gql } from '@apollo/client';

export const GET_ALL_VOTES = gql`
query MyQuery {
    vote {
      getAllVotes {
        category
        finishedAt
        id
        options {
          content
          id
          percentage
          responseCount
        }
        status
        title
        totalResponses
      }
    }
  }
`;
export const GET_AIOPTION = gql`
query MyQuery($count: Int!, $title: String!) {
  optionGenerator {
    generateOptions(count: $count, title: $title) {
      options
    }
  }
}
`;