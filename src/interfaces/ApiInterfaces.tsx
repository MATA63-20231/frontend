import { AxiosResponse } from "axios";

export interface IRequestBase<DataType> {
  setLoading: (loading: boolean) => void;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}

export interface IDefaultRequestBehavior<DataType> extends IRequestBase<DataType> {
  // It's a Axios type so we can't change it
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  axiosRequest: Promise<AxiosResponse<DataType, any>>;
}

export interface IGet<DataType> extends IRequestBase<DataType> {
  path: string;
}

export interface IPost<DataType, BodyType> extends IRequestBase<DataType> {
  path: string;
  body: BodyType;
}
