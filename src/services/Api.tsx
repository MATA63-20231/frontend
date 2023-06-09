import axios from "axios";
import { enqueueSnackbar } from "notistack";
import {
  IDefaultRequestBehavior,
  IGet,
  IPost,
} from "../interfaces/ApiInterfaces.tsx";
import env from "../config/env.tsx";

const api = axios.create({
  baseURL: env.baseUrl,
});

const defaultOnError = (
  message: string | undefined,
  Error: string | undefined,
): void => {
  enqueueSnackbar({
    variant: "error",
    message,
  });

  if (Error) {
    // Intentional console for debug purposes
    // eslint-disable-next-line no-console
    console.error(Error);
  }
};

function wrapDefaultRequestBehavior<DataType>({
  axiosRequest,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IDefaultRequestBehavior<DataType>) {
  setLoading(true);
  axiosRequest
    .then(({ data }) => onSuccess(data))
    .catch(({ message, Error }) => (onError ? onError() : defaultOnError(message, Error)))
    .finally(() => {
      onFinish?.();
      setLoading(false);
    });
}

function GET<DataType>({
  path,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IGet<DataType>) {
  wrapDefaultRequestBehavior({
    axiosRequest: api.get<DataType>(path),
    setLoading,
    onSuccess,
    onError,
    onFinish,
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
  wrapDefaultRequestBehavior({
    axiosRequest: api.post<DataType>(path, body),
    setLoading,
    onSuccess,
    onError,
    onFinish,
  });
}

function PUT<DataType, BodyType>({
  path,
  body,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IPost<DataType, BodyType>) {
  wrapDefaultRequestBehavior({
    axiosRequest: api.put<DataType>(path, body),
    setLoading,
    onSuccess,
    onError,
    onFinish,
  });
}

function DELETE<DataType>({
  path,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IGet<DataType>) {
  wrapDefaultRequestBehavior({
    axiosRequest: api.delete<DataType>(path),
    setLoading,
    onSuccess,
    onError,
    onFinish,
  });
}

export {
  api, GET, POST, PUT, DELETE,
};
