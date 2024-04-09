import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );
  const onClickToBoardList = () => {
    router.push("../../../../../board");
  };

  const onClickToBoardEdit = () => {
    router.push(`${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickToBoardList={onClickToBoardList}
      onClickToBoardEdit={onClickToBoardEdit}
    />
  );
}
