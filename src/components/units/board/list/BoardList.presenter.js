import { getDate } from "@/src/commons/libraries/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.SearchHeader>
          <S.SearchInput placeholder="제목을 검색해주세요" />
          <S.SearchDateInput placeHolder="YYYY.MM.DD ~ YYYY.MM.DD"></S.SearchDateInput>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.SearchHeader>
        <S.Hr />
        <S.MapList>
          <S.MapTitle>번호</S.MapTitle>
          <S.MapTitle>제목</S.MapTitle>
          <S.MapTitle>작성자</S.MapTitle>
          <S.MapTitle>날짜</S.MapTitle>
        </S.MapList>
        <S.Hr />

        {props.data?.fetchBoards.map((el) => (
          <S.ListWrapper key={el._id}>
            <S.List> {String(el._id).slice(-4).toUpperCase()}</S.List>
            <S.ListTitle id={el._id} onClick={props.onClickToBoardDetail}>{el.title} </S.ListTitle>
            <S.List> {el.writer}</S.List>
            <S.List> {getDate(el.createdAt)}</S.List>
          </S.ListWrapper>
        ))}
      </S.Wrapper>

      <S.Footer>
        <S.EnrollButton onClick={props.onClickToBoardNew}>
          게시물 등록하기
        </S.EnrollButton>
      </S.Footer>
    </>
  );
}
