import { gql } from '@apollo/client';

export const GET_VOTE = gql`
    query MyQuery {
        vote {
        getAllVotes {
            status
            category
            finishedAt
            id
            title
            totalResponses
            options {
            content
            id
            percentage
            responseCount
            }
        }
        }
    }
`;