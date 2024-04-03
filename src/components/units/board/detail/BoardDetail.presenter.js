import * as S from "./BoardWrite.styles"

export default function BoardWriteUI(props){
    return (
        <>
          <S.Wrapper>
            <S.Profile>
              <S.Writer>
                노원두
                {data?.fetchBoard?.writer}
                <S.Date>2024.3.28{data?.fetchBoard?.createdAt}</S.Date>
              </S.Writer>
            </S.Profile>
            <hr style={{ width: "50rem" }} />
            <Main>
              <Title>제목{data?.fetchBoard?.title}</Title>
              <Contents>내용 랄랄라{data?.fetchBoard?.contents}</Contents>
            </Main>
          </S.Wrapper>
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
                <Writ  erInput placeholder="작성자" />{" "}
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