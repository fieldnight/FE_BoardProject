import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid black;
  margin: 2rem auto;
  padding: 1rem;
  width: 50rem;
`;

export const BigTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  font-size: 25px;
  font-weight: 800;
`;

export const Title = styled.div`
  margin-bottom: 0.2rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const HeaderInput = styled.input`
  width: 20rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid black;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 1rem;
  margin-bottom: 0;
`;

export const Input = styled.input`
  width: 42rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid black;
  padding: 0.5rem;
`;

export const Contents = styled.textarea`
  width: 42rem;
  height: 25rem;
  padding: 1rem 0 0 1rem;
  border-radius: 6px;
`;

export const AddressBtn = styled.button`
  height: 2rem;
  border-radius: 6px;
  border: 1px solid black;
  background-color: black;
  color: white;
  padding: 0 0.2rem;
`;

export const AddressWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const AddressInput = styled.input`
  width: 5rem;
  margin-right: 1rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid black;
`;

export const UploadWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export const UploadBtn = styled.button`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RadioBtn = styled.input``;
export const RadioLabel = styled.div`
  margin: 0 0.2rem;
`;

export const SubmitBtn = styled.button`
  width: 5rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border: 1px solid yellow;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 2px black;
  margin: 2rem auto;
`;
