import styled from "@emotion/styled";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 1rem;
  width: 50rem;
 
`;

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const SearchInput = styled.input`
  padding: 0.8rem;
  width: 30rem;
`;

export const SearchDateInput = styled.input`
  padding: 0.8rem;
  width: 6rem;
  margin: 0 1rem;
`;

export const SearchButton = styled.button`
  width: 8rem;
  padding: 0.8rem;
  color: white;
  background-color: black;
  border-radius: 5px;
`;
export const Hr = styled.hr`
  width: inherit;
`;

const sharedStyles = `
 width: inherit;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;`;


const sharedInner = `width: 8rem;
display: flex;
flex-direction: row;
justify-content: center;`

export const MapTitle = styled.div`
${sharedInner}
`;
export const MapList = styled.div`
  ${sharedStyles}
`;

export const ListWrapper = styled.div`
  ${sharedStyles}
`;

export const List = styled.div`
${sharedInner}`;

export const ListTitle = styled.div`
${sharedInner};
cursor: pointer;


:hover{
  color: blue;
  transform: scale(105%);
  transition: ease-in-out 0.1s;
}
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;
export const EnrollButton = styled.button`

  width: 10rem;
  height: 2rem;
  transform: translateX(20rem); 

  :hover{
  transform : scale(120%);
  transition: ease-in-out 0.5s;

  }

`;
