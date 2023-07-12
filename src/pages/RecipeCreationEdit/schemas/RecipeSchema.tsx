import * as Yup from "yup";
import { IRecipeFormFields } from "../../../interfaces/RecipeInterfaces.tsx";
import FormErrorMessages from "../../../enums/FormErrorMessages.tsx";
import YupHelpers from "../../../enums/YupHelpers.tsx";

interface IProps {
  acceptedFileTypes: string[];
  acceptedFileTypesStr: string;
  maxFileSize: number;
  maxFileSizeMB: number;
  maxFilesAmount: number;
}

export const initialValues: IRecipeFormFields = {
  title: "",
  description: "",
  servings: "",
  prepTime: {
    hours: "",
    minutes: "",
  },
  ingredients: [""],
  directions: [""],
  images: [],
};

const cantBeBothZero = {
  is: 0,
  then: (schema: Yup.NumberSchema) =>
    schema.moreThan(0, "Tempo de preparo não pode ser 0h0min."),
};

export default function generateRecipeSchema({
  // acceptedFileTypes,
  // acceptedFileTypesStr,
  // maxFileSize,
  // maxFileSizeMB,
  maxFilesAmount,
}: IProps) {
  return Yup.object<IRecipeFormFields>().shape({
    title: YupHelpers.STRING_REQUIRED,

    description: YupHelpers.STRING_OPTIONAL,

    servings: YupHelpers.INTEGER_MORE_THAN_ZERO,

    image: YupHelpers.STRING_OPTIONAL,

    prepTime: Yup.object().shape(
      {
        hours: YupHelpers.INTEGER_MIN_ZERO.when("minutes", cantBeBothZero),
        minutes: YupHelpers.INTEGER_MIN_ZERO.when("hours", cantBeBothZero).max(
          59,
          FormErrorMessages.MAX_59
        ),
      },
      [["hours", "minutes"]]
    ),

    ingredients: Yup.array()
      .of(YupHelpers.STRING_REQUIRED)
      .min(1, FormErrorMessages.MIN_1_ITEM),

    directions: Yup.array()
      .of(YupHelpers.STRING_REQUIRED)
      .min(1, FormErrorMessages.MIN_1_ITEM),

    images: Yup.array()
      .of(
        Yup.mixed<File>()
        // .test(
        //   "fileFormat",
        //   `${FormErrorMessages.NOT_ALLOWED_FILE_TYPE} Tipos permitidos: ${acceptedFileTypesStr}.`,
        //   (value) => {
        //     console.log(value)
        //     if (!value) return true;
        //     return acceptedFileTypes
        //       .map((x) => `image/${x.toLowerCase()}`)
        //       .includes(value.type);
        //   }
        // )
        // .test(
        //   "fileSize",
        //   `${FormErrorMessages.MAX_FILE_SIZE} Tamanho máximo: ${maxFileSizeMB}MB.`,
        //   (value) => {
        //     if (!value) return true;
        //     return value.size <= maxFileSize;
        //   }
        // )
      )
      .max(
        maxFilesAmount,
        `Não é permitido adcionair mais de ${maxFilesAmount} itens.`
      ),
  });
}
