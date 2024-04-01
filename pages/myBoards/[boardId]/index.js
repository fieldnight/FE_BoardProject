import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Wrapper } from "../../../styles/myboardsNew";

import {
  Profile,
  Writer,
  Date,
  Main,
  Title,
  Contents,
  UnderWrapper,
  ButtonWrapper,
  UnderButton,
  Comment,
  CommentTitle,
  CommentTextarea,
  CommentSubmit,
  CommentBox,
  InputWrapper,
  WriterInput,
  PassInput,
  CommentWriter,
  CommentDate,
  CommentWrapper,
} from "../../../styles/boardDetail";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <Wrapper>
        <Profile>
          <Writer>
            노원두
            {data?.fetchBoard?.writer}
            <Date>2024.3.28{data?.fetchBoard?.createdAt}</Date>
          </Writer>
        </Profile>
        <hr style={{ width: "50rem" }} />
        <Main>
          <Title>제목{data?.fetchBoard?.title}</Title>
          <Contents>내용 랄랄라{data?.fetchBoard?.contents}</Contents>
        </Main>
      </Wrapper>
      <UnderWrapper>
        <ButtonWrapper>
          <UnderButton>목록으로</UnderButton>
          <UnderButton>수정하기</UnderButton>
          <UnderButton>삭제하기</UnderButton>
        </ButtonWrapper>

        <hr id="1stHr" style={{ width: "55rem" }}></hr>

        <CommentWrapper>
          <CommentTitle>댓글</CommentTitle>
          <InputWrapper>
            <WriterInput placeholder="작성자" />{" "}
            <PassInput placeholder="비밀번호" type="number" />
          </InputWrapper>

          <CommentTextarea
            type="text"
            placeholder="개인정보 공유 및 요청하거나, 명예회손, 무단 광고, 불법 정보 유포시&#10; 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <CommentSubmit>등록하기</CommentSubmit>
          <CommentBox>
            <CommentWriter>노원두</CommentWriter>
            <Comment>
              진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
              부탁드립니다~!
            </Comment>
            <CommentDate>2024.03.22</CommentDate>
          </CommentBox>
        </CommentWrapper>
      </UnderWrapper>
    </>
  );
}

//JSX.IntrinsicElements.main에 직접 스타일을 적용하는 것은 불가능합니다. JSX.IntrinsicElements는 TypeScript에서 JSX를 사용할 때 요소의 타입을 정의하는데 사용되는 것으로, 이를 통해 각 요소의 타입을 정의할 수 있습니다. 그러나 이것은 요소의 스타일을 직접적으로 적용하는 것과는 관련이 없습니다.
