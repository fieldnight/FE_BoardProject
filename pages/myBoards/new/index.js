import {
  Wrapper,
  HeaderWrapper,
  BigTitle,
  Contents,
  Title,
  AddressBtn,
  UploadBtn,
  RadioBtn,
  RadioLabel,
  SubmitBtn,
  InputWrapper,
  HeaderInput,
  Input,
  AddressInput,
  AddressWrapper,
  UploadWrapper,
  RadioWrapper,
} from "../../../styles/myboardsNew";

export default function BoardPage() {
  return (
    <Wrapper>
      <header>
        <BigTitle>게시글 등록</BigTitle>
        <HeaderWrapper>
          <InputWrapper>
            <Title>작성자</Title>
            <HeaderInput />
          </InputWrapper>
          <InputWrapper>
            <Title>비밀번호</Title>
            <HeaderInput />
          </InputWrapper>
        </HeaderWrapper>
      </header>
      <main>
        <InputWrapper>
          <Title>제목</Title>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Title>내용</Title>
          <Contents placeholder="내용을 작성해 주세요" />
        </InputWrapper>

        <InputWrapper>
          <Title>주소</Title>
          <AddressWrapper>
            <AddressInput /> <AddressBtn>우편번호 검색</AddressBtn>
          </AddressWrapper>

          <Input />
        </InputWrapper>
        <InputWrapper>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <Title>유튜브</Title>
          <Input placeholder="링크를 복사해주세요" />
        </InputWrapper>

        <InputWrapper>
          <Title>사진첨부</Title>
          <UploadWrapper>
            <UploadBtn>+</UploadBtn>
            <UploadBtn>+</UploadBtn>
            <UploadBtn>+</UploadBtn>
          </UploadWrapper>
        </InputWrapper>

        <InputWrapper>
          <Title>메인설정</Title>
          <RadioWrapper>
            <RadioBtn type="radio" id="youtube" name="radio-button" />
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioBtn type="radio" id="image" name="radio-button" />
            <RadioLabel htmlFor="image">사진</RadioLabel>
          </RadioWrapper>
        </InputWrapper>

        <SubmitBtn>등록하기</SubmitBtn>
      </main>
      <footer></footer>
    </Wrapper>
  );
}
