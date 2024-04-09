import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickToBoardNew: () => void;
  onClickToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;

}
