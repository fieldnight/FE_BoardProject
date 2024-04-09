/*
# app.js (pages의 index)에서 모두 합쳐짐.
container - js의 기능(data, state) 
presenter - jsx(UI)

# container 기능;
1. react의 상태관리변수인 useState와 로직을 담당하는 data가 있음. 
2. gql과 Mutation은 queries에서 구현 후 import,Mutation 함수만 container에서 생성.
3. 이벤트 헨들러나 바인딩 등 return 의 자식 컴포넌트 styles에 container의 함수를 전달할때 props를 이용. 
*/

//useState 는 react의 상태관리변수.
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  //자료형이 useMutation인 변수createBoard 생성

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") setWriterError("");

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") setTitleError("");

    if (event.target.value && writer && contents && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") setContentsError("");
    if (event.target.value && writer && title && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") setPasswordError("");

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
        router.push(`/board/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput: { title, contents },
        },
      });
      router.push(`/board/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI //styles 컴포넌트 함수
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
      titleError={titleError}
      passwordError={passwordError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit} //page에서 받아온 props
    />
  );
  // styles의 onChange(onChangeContents)이벤트 핸들러에 container의 onChange 함수 바인딩.
}
