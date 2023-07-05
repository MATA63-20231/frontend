import axios, { AxiosResponse } from "axios";
import { enqueueSnackbar } from "notistack";

interface IRequestBase<DataType> {
  setLoading: (loading: boolean) => void;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}

interface IDefaultRequestBehavior<DataType> extends IRequestBase<DataType> {
  // It's a Axios type so we can't change it
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  axiosRequest: Promise<AxiosResponse<DataType, any>>;
}

interface IGet<DataType> extends IRequestBase<DataType> {
  path: string;
}

interface IPost<DataType, BodyType> extends IRequestBase<DataType> {
  path: string;
  body: BodyType;
}

const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
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

export { GET, POST };
