import * as Yup from "yup";
import FormErrorMessages from "./FormErrorMessages.tsx";

const YupHelpers = {
  STRING_OPTIONAL: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255),

  STRING_REQUIRED: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  EMAIL_REQUIRED: Yup.string()
    .email(FormErrorMessages.INVALID_EMAIL)
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  INTEGER_MORE_THAN_ZERO: Yup.number()
    .moreThan(0, FormErrorMessages.INTEGER_MORE_THAN_ZERO)
    .integer(FormErrorMessages.INTEGER_MORE_THAN_ZERO)
    .typeError(FormErrorMessages.INTEGER_MORE_THAN_ZERO)
    .required(FormErrorMessages.REQUIRED),

  INTEGER_MIN_ZERO: Yup.number()
    .min(0, FormErrorMessages.INTEGER_GREATER_EQUAL_ZERO)
    .integer(FormErrorMessages.INTEGER_GREATER_EQUAL_ZERO)
    .typeError(FormErrorMessages.INTEGER_GREATER_EQUAL_ZERO)
    .required(FormErrorMessages.REQUIRED),
};

export default YupHelpers;
