import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { IMutation } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  // edit 파일은 data를 넘기나, new 파일은 data를 넘기지 않는다.
  //IQuery에서 fetchBoard 타입 사용
} //props를 받는 자식컴포넌트에서 props 타입 지정

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
//graphql의 경우 code.gen.yaml 파일을 통해 types을 다운로드받았으나 REST API의 경우 하나하나 입력해야한다.

export interface MutateType {
  MutateType1: Pick<IMutation, "createBoard">;
  MutateType2: Pick<IMutation, "updateBoard">;
}

//2중 pick 사용할 경우, result.data?.createBoard._id} 에러 발생 
//'Pick<MutateType, "MutateType1">' 형식에 'createBoard' 속성이 없습니다.ts(2339)
