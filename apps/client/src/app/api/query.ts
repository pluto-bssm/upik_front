import { gql } from "@apollo/client";
import client from "./apolloClient";

//가이드 api
export const GUIDES_BY_CATEGORY_QUERY = gql`
  query MyQuery($category: String!) {
    guidesByCategory(category: $category) {
      id
      content
      createdAt
      like
      title
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

export default client;

