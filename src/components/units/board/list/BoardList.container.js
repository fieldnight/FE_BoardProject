import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickToBoardNew = () => {
    router.push("/board/new");
  };

  const onClickToBoardDetail = (event) => {
    router.push(`/board/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickToBoardNew={onClickToBoardNew}
      onClickToBoardDetail={onClickToBoardDetail}
    />
  );
}
