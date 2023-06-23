import * as Yup from "yup";
import FormErrorMessages from "./FormErrorMessages";

const YupHelpers = {
  DEFAULT_STRING: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  DEFAULT_POSITIVE_INTEGER: Yup.number()
    .positive(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
    .integer(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
    .typeError(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
    .required(FormErrorMessages.REQUIRED),
};

export default YupHelpers;
