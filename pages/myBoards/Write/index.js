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
  Error,
} from "../../../styles/myboardsNew";

//style component와 같은 성능을 지닌 eslint 사용, CSS In JS

import { useState } from "react"; //useState 는 react의 상태관리변수.
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  //자료형이 useMutation인 변수createBoard 생성

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") setWriterError("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") setTitleError("");
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") setContentsError("");
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") setPasswordError("");
  };

  const onClickSubmit = async () => {
    //비동기 상태에서 서버의 응답이 올 떄 까지 기다리기 위한 명령어. promise가 임시 명령어를 날리는 것과 비교됨.
    if (!writer) setWriterError("작성자를 입력해주세요");

    if (!password) setPasswordError("비밀번호를 입력해주세요");

    if (!title) setTitleError("제목을 입력해주세요");

    if (!contents) setContentsError("내용을 입력해주세요");

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents, //short hand property : 키값이 같을 경우 값 생략. useState와 변수명 동일
            },
          },
        });
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <Wrapper>
      <header>
        <BigTitle>게시글 등록</BigTitle>
        <HeaderWrapper>
          <InputWrapper>
            <Title>작성자</Title>
            <HeaderInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={onChangeWriter}
            />
            <Error>{writerError}</Error>
          </InputWrapper>

          <InputWrapper>
            <Title>비밀번호</Title>
            <HeaderInput
              type="password"
              placeholder="비밀번호를 적어주세요"
              onChange={onChangePassword}
            />
            <Error>{passwordError}</Error>
          </InputWrapper>
        </HeaderWrapper>
      </header>
      <main>
        <InputWrapper>
          <Title>제목</Title>
          <Input
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={onChangeTitle}
          />
          <Error>{titleError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Title>내용</Title>
          <Contents
            placeholder="내용을 작성해 주세요"
            onChange={onChangeContents}
          />
          <Error>{contentsError}</Error>
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
        </InputWrapper>{" "}
        {/*htmlFor과동일한 id의 radioButton과 연결.*/}
        <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
      </main>
      <footer></footer>
    </Wrapper>
  );
}
