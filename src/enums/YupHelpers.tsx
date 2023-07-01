import * as Yup from "yup";
import FormErrorMessages from "./FormErrorMessages.tsx";

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

  // .transform((value) => {
  //   console.log(value);
  //   return isNaN(value) ? undefined : value;
  // }),
  // .transform((value) => {
  //   // const str = String(value);
  //   // const strMatch = str.match(/^[0-9]+$/);
  //   // const cond = Boolean(strMatch);
  //   // console.log({ value, str, strMatch, cond });
  //   const nIsNaN = isNaN(value);
  //   const myReturn = nIsNaN ? "" : value;
  //   console.log({ value, nIsNaN, myReturn });
  //   return myReturn;
  // })
  // .test("notString", "foo", (value) => {
  //   const str = String(value);
  //   const strMatch = str.match(/^[0-9]+$/);
  //   const cond = Boolean(strMatch);
  //   console.log({ value, str, strMatch, cond });
  //   return cond;
  // })
  // .test(
  //   "noEOrSign", // type of the validator (should be unique)
  //   "Number had an 'e' or sign.", // error message
  //   (value) => typeof value === "number" && !/[eE+-]/.test(value.toString())
  // )
};

export default YupHelpers;
