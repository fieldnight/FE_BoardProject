import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const style = css`
  :root {
    --color--grey: rgb(139, 106, 106);
  }
`;

export const Profile = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: inherit;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.5rem;
`;

export const Date = styled.div`
  font-size: 1rem;
  color: var(--color--grey);
`;

export const Main = styled.main`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

export const Contents = styled.div`
  width: inherit;
  height: 30rem;
  padding: 1rem 0;
`;

export const UnderWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;
export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const UnderButton = styled.button`
  padding: 0.5rem;
  margin: 0 1rem;
  font-weight: 800;
  box-shadow: 1px 5px 10px gray;
  border-radius: 6px;
  border: 1px solid gainsboro;
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
`;
export const WriterInput = styled.input`
  width: 6rem;
  height: 1.5rem;
  margin-right: 1rem;
`;
export const PassInput = styled.input`
  width: 6rem;
  height: 1.5rem;
`;

export const Comment = styled.div``;
export const CommentTitle = styled.div``;
export const CommentTextarea = styled.textarea`
  width: 50rem;
  height: 10rem;
  outline: none;
  background-color: rgb(233, 233, 233);
  padding: 1rem;
  resize: none;
`;
export const CommentSubmit = styled.button`
  width: 6rem;
  height: 3rem;
  background-color: black;
  transform: translate(46rem, -3rem);

  transition: 0.5s;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    transition: all 0.5s ease-in-out 0.1s;
    transform: translate(46rem, -4rem);
  }
`;
export const CommentBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10rem;
`;
export const CommentWriter = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  padding: 0.5rem 0;
`;
export const CommentDate = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;
export const CommentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50rem;
  margin: auto;
  padding: 0;
`;
