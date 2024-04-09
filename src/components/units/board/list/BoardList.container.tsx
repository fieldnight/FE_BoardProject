import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickToBoardNew = () => {
    router.push("/board/new");
  };

  const onClickToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickToBoardNew={onClickToBoardNew}
      onClickToBoardDetail={onClickToBoardDetail}
    />
  );
}
