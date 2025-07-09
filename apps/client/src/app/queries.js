import { gql } from '@apollo/client';

export const GET_ALL_VOTES = gql`
    query MyQuery {
        vote {
            getAllVotes {
                category
                finishedAt
                id
                status
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