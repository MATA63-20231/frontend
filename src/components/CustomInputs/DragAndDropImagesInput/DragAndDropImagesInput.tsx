import { enqueueSnackbar } from "notistack";
import { FileUploader } from "react-drag-drop-files";
import { FormikErrors } from "formik";
import Box from "@mui/material/Box";
import DragAndDropImagesLargeScreens from "./DragAndDropImagesLargeScreens";
import DragAndDropImagesSmallScreens from "./DragAndDropImagesSmallScreens";
import DragAndDropImagesView from "./DragAndDropImagesView";
import FormErrorMessages from "../../../enums/FormErrorMessages";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";

interface IProps<FormFieldsType> {
  title: string;
  name: string;
  label: string;
  images: File[];
  errors: string | string[] | FormikErrors<File>[] | undefined;
  loading: boolean;
  acceptedFileTypes: string[];
  acceptedFileTypesStr: string;
  maxFileSizeMB: number;
  maxFilesAmount: number;
  setFieldValue: (
    field: string,
    value: any
  ) => Promise<void | FormikErrors<FormFieldsType>>;
}

export default function DragAndDropImagesInput<FormFieldsType>({
  title,
  name,
  label,
  images,
  errors,
  loading,
  acceptedFileTypes,
  acceptedFileTypesStr,
  maxFileSizeMB,
  maxFilesAmount,
  setFieldValue,
}: IProps<FormFieldsType>) {
  const setImages = (callbackFn: (previousImages: File[]) => File[]) => {
    setFieldValue(name, callbackFn(images));
  };

  const handleChange = (newfiles: File[]) => {
    setImages((previousFiles) => [...previousFiles, ...newfiles]);
  };

  const handleTypeError = () => {
    enqueueSnackbar({
      variant: "error",
      message:
        FormErrorMessages.NOT_ALLOWED_FILE_TYPE +
        ` Tipos permitidos: ${acceptedFileTypes}.`,
    });
  };

  const handleSizeError = () => {
    enqueueSnackbar({
      variant: "error",
      message:
        FormErrorMessages.MAX_FILE_SIZE +
        ` Tamanho máximo: ${maxFileSizeMB}MB.`,
    });
  };

  return (
    <>
      <Typography sx={{ mb: 1 }}>{title}</Typography>
      <Box
        sx={{
          backgroundColor: "#eeeeee",
          borderStyle: "dashed",
          borderWidth: typeof errors === "string" ? 2 : 1,
          borderColor: typeof errors === "string" ? "error.main" : "gray",
          borderRadius: 3,
          p: 4,
          mx: 2,
        }}>
        {typeof errors === "string" && (
          <FormHelperText
            error
            filled
            sx={{ textAlign: "center", fontWeight: 600, mb: 2 }}>
            Erro: {errors}
          </FormHelperText>
        )}
        <FileUploader
          multiple
          name={name}
          disabled={loading}
          fileOrFiles={images}
          types={acceptedFileTypes}
          maxSize={maxFileSizeMB}
          onTypeError={handleTypeError}
          onSizeError={handleSizeError}
          handleChange={handleChange}>
          <DragAndDropImagesLargeScreens
            label={label}
            disabled={loading}
            acceptedFileTypesStr={acceptedFileTypesStr}
            maxFileSizeMB={maxFileSizeMB}
            maxFilesAmount={maxFilesAmount}
          />
          <DragAndDropImagesSmallScreens
            disabled={loading}
            acceptedFileTypesStr={acceptedFileTypesStr}
            maxFileSizeMB={maxFileSizeMB}
            maxFilesAmount={maxFilesAmount}
          />
        </FileUploader>

        <DragAndDropImagesView
          disabled={loading}
          images={images}
          setImages={setImages}
        />
      </Box>
    </>
  );
}
