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
query MyQuery($count: Int! , $title: String!) {
  optionGenerator {
    generateOptions(title: $title, count:$count) {
      success
      options
      message
    }
  }
}
`;



export const HAS_VOTED = gql`
query MyQuery($votedId : ID!) {
  voteResponse {
    hasUserVoted(voteId: $votedId)
  }
}
`;


export const REPORT = gql`
query MyQuery {
  report {
    getMyReports {
      createdAt
      reason
      targetId
      targetType
      userId
    }
  }
}
`;



export const LOOKSLOKE = gql`
query MyQuery {
  vote {
    getMyVotes {
      category
      finishedAt
      title
      id
    }
  }
}
`;


export const GuideSim = gql`
query MyQuery($title : String!) {
  optionGenerator {
    findSimilarGuidesByTitle(title: $title) {
      message
      count
      guides {
        id
        summary
        title
      }
    }
  }
}
`;


