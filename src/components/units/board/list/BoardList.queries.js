import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

//Mutation → CREATE, UPDATE, DELETE
//Query -> READ (조회)
