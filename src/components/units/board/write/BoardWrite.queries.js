import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(creteBoardInput: $createBoardInput) {
      _id
    }
  }
`;

//mutation 이름: createBoard
//해당 m의 변수: $cBI
//변수의 타입: CBI
//i : 해당 타입의 변수는 필수
//{}안 내용: cB m를 호출.
//1.  $cBI 타입의 변수 cBI를 m에 전달
//2. m 의 반환값으로 _id 받음
