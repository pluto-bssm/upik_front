import { gql } from "@apollo/client";
export const GET_ALL_DATA = gql`
query MyQuery {
  report {
    getAllReports {
      reason
      targetId
      userId
      targetType
    }
  }
  vote {
    getAllVotes {
      finishedAt
      hasVoted
      id
      title
    }
  }
}
`;

export const GET_ALL_REPORTS = gql`
query MyQuery {
  report {
    getAllReports {
      reason
      targetId
      userId
      targetType
    }
  }
}
`;

export const GET_VOTE = gql`
query MyQuery {
  report {
    getReportsByTarget(targetId: "") {
      reason
      targetId
      targetType
      userId
    }
  }
}
`;

export const GET_ALL_VOTES = gql`
query MyQuery {
  vote {
    getAllVotes {
      finishedAt
      hasVoted
      id
      title
      totalResponses
    }
  }
}
`;

export const GET_REASON= gql`
query MyQuery {
  report {
    getReportsByTarget(targetId: "") {
      reason
      targetId
      userId
      createdAt
    }
  }
}
`