/*
presenter; app.js에서 합쳐지는 페이지의 return부분 컨테이너. 
styles의 css in js를 import 하고,
해당 페이지의 컴포넌트 함수를 container에서 import 하고,
props를 통해 container로부터 정보를 전달받아 연결한다.  

props; 부모-> 자식 단방향 정보 전달 
바인딩; props가 있어야 부모로부터 알맹이(실 함수)를 넘겨받는다. 

*/
import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.Wrapper>
      <header>
        <S.BigTitle>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.BigTitle>
        <S.HeaderWrapper>
          <S.InputWrapper>
            <S.Title>작성자</S.Title>
            <S.HeaderInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Title>비밀번호</S.Title>
            <S.HeaderInput
              type="password"
              placeholder="비밀번호를 적어주세요"
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.HeaderWrapper>
      </header>
      <main>
        <S.InputWrapper>
          <S.Title>제목</S.Title>
          <S.Input
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Title>내용</S.Title>
          <S.Contents
            placeholder="내용을 작성해 주세요"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Title>주소</S.Title>
          <S.AddressWrapper>
            <S.AddressInput /> <S.AddressBtn>우편번호 검색</S.AddressBtn>
          </S.AddressWrapper>

          <S.Input />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Title>유튜브</S.Title>
          <S.Input placeholder="링크를 복사해주세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Title>사진첨부</S.Title>
          <S.UploadWrapper>
            <S.UploadBtn>+</S.UploadBtn>
            <S.UploadBtn>+</S.UploadBtn>
            <S.UploadBtn>+</S.UploadBtn>
          </S.UploadWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Title>메인설정</S.Title>
          <S.RadioWrapper>
            <S.RadioBtn type="radio" id="youtube" name="radio-button" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadioBtn type="radio" id="image" name="radio-button" />
            <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
          </S.RadioWrapper>
        </S.InputWrapper>{" "}
        {/*htmlFor과동일한 id의 radioButton과 연결.*/}
        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitBtn>
      </main>
      <footer></footer>
    </S.Wrapper>
  );
}
