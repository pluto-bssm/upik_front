import { gql } from "@apollo/client";
import client from "./apolloClient";

//가이드 api
export const GUIDES_BY_CATEGORY_QUERY = gql`
  query MyQuery($category: String!) {
    guidesByCategory(category: $category) {
      content
      createdAt
      id
      like
      title
      voteId
    }
  }
`;

//메인에 인기/오늘 가이드 뽑아주는거
export const GUIDES_SELECT = gql`
  query MyQuery($category: String!) {
    guidesByCategory(category: $category) {
      id
      title
      createdAt
      like
    }
  }
`;

//메인에 인기/오늘 투표 뽑아주는거
export const VOTE_SELECT = gql`
query MyQuery{
  vote {
    getMostPopularOpenVote {
      category
      finishedAt
      id
      status
      title
      totalResponses
    }
  }
}
`;

//voteid갖고 투표결과확인(최최최종)
export const VOTE_CHART = gql`
query MyQuery($id: ID!) {
  vote {
    getVoteById(id: $id) {
      category
      createdBy
      finishedAt
      hasVoted
      id
      options {
        content
        percentage
        responseCount
        id
      }
      status
      title
      totalResponses
    }
  }
}

`;

//재투표 요청보내기
export const REVOTE_REQUEST = gql`
mutation MyMutation($id: ID!, $reason:String!)  {
  guide {
    incrementGuideRevote(id: $id, reason: $reason)
  }
}
`;

export default client;