import { gql } from "@apollo/client";

export const REJECT_REPORT = gql`
  mutation RejectReport($questionId: ID!, $userId: ID!) {
    report {
      rejectQuestionReport(questionId: $questionId, userId: $userId)
    }
  }
`;

export const ACCEPT_GUIDE_REPORT = gql`
  mutation AcceptReport($questionId: ID!, $userId: ID!) {
    report {
      acceptQuestionReport(questionId: $questionId, userId: $userId)
    }
  }
`;