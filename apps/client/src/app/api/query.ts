import { gql } from "@apollo/client";
import client from "./apolloClient";

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

export default client;

