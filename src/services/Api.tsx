import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { Dispatch, SetStateAction } from "react";

interface IGet<DataType> {
  path: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}

interface IPost<DataType, BodyType> {
  path: string;
  body: BodyType;
  setLoading: (loading: boolean) => void;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}

const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
});

function GET<DataType>({
  path,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IGet<DataType>) {
  setLoading(true);
  api
    .get<DataType>(path)
    .then(({ data }) => {
      onSuccess(data);
    })
    .catch(() => {
      onError
        ? onError()
        : enqueueSnackbar({
            variant: "error",
          });
    })
    .finally(() => {
      onFinish?.();
      setLoading(false);
    });
}

function POST<DataType, BodyType>({
  path,
  body,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IPost<DataType, BodyType>) {
  setLoading(true);
  api
    .post<DataType>(path, body)
    .then(({ data }) => {
      onSuccess(data);
    })
    .catch(() => {
      onError
        ? onError()
        : enqueueSnackbar({
            variant: "error",
          });
    })
    .finally(() => {
      onFinish?.();
      setLoading(false);
    });
}

export { GET, POST };
