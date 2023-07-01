import * as Yup from "yup";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import FormErrorMessages from "../../../enums/FormErrorMessages.tsx";
import YupHelpers from "../../../enums/YupHelpers.tsx";

export const initialValues: IRecipeCreationFields = {
  title: "",
  description: "",
  servings: "",
  prepTime: {
    hours: "",
    minutes: "",
  },
  ingredients: [""],
  directions: [""],
  image: "",
};

const RecipeCreationSchema = Yup.object<IRecipeCreationFields>().shape({
  title: YupHelpers.DEFAULT_STRING,

  description: YupHelpers.DEFAULT_STRING,

  servings: YupHelpers.DEFAULT_POSITIVE_INTEGER,

  image: YupHelpers.DEFAULT_STRING,

  prepTime: Yup.object()
    .shape({
      hours: YupHelpers.DEFAULT_POSITIVE_INTEGER,
      minutes: YupHelpers.DEFAULT_POSITIVE_INTEGER,
    })
    .required(FormErrorMessages.REQUIRED),

  ingredients: Yup.array()
    .of(YupHelpers.DEFAULT_STRING)
    .min(1, "É necessário adicionar pelo menos um ingrediente."),

  directions: Yup.array()
    .of(YupHelpers.DEFAULT_STRING)
    .min(1, "É necessário adicionar pelo menos uma instrução de preparo."),
});

export default RecipeCreationSchema;
