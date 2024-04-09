import * as S from "./BoardDetail.styles";
import { Wrapper } from "../write/BoardWrite.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props:IBoardDetailUIProps) {
  return (
    <>
      <Wrapper>
        <S.Profile>
          <S.Writer>
            {props.data?.fetchBoard?.writer}
            <S.Date>2024.3.28{props.data?.fetchBoard?.createdAt}</S.Date>
          </S.Writer>
        </S.Profile>
        <hr style={{ width: "50rem" }} />
        <S.Main>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Main>
      </Wrapper>
      <S.UnderWrapper>
        <S.ButtonWrapper>
          <S.UnderButton onClick={props.onClickToBoardList}>
            목록으로
          </S.UnderButton>
          <S.UnderButton onClick={props.onClickToBoardEdit}>
            수정하기
          </S.UnderButton>
          <S.UnderButton>삭제하기</S.UnderButton>
        </S.ButtonWrapper>

        <hr id="1stHr" style={{ width: "55rem" }}></hr>

        <S.CommentWrapper>
          <S.CommentTitle>댓글</S.CommentTitle>
          <S.InputWrapper>
            <S.WriterInput placeholder="작성자" />
            <S.PassInput placeholder="비밀번호" type="number" />
          </S.InputWrapper>

          <S.CommentTextarea
            placeholder="개인정보 공유 및 요청하거나, 명예회손, 무단 광고, 불법 정보 유포시&#10; 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.CommentSubmit>등록하기</S.CommentSubmit>
          <S.CommentBox>
            <S.CommentWriter>노원두</S.CommentWriter>
            <S.Comment>
              진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
              부탁드립니다~!
            </S.Comment>
            <S.CommentDate>2024.03.22</S.CommentDate>
          </S.CommentBox>
        </S.CommentWrapper>
      </S.UnderWrapper>
    </>
  );
}
