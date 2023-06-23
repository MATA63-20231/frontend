import * as Yup from "yup";
import FormErrorMessages from "../../../enums/FormErrorMessages.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import YupHelpers from "../../../enums/YupHelpers.tsx";

export const initialValues: IRecipeCreationFields = {
  title: "",
  description: "",
  servings: 0,
  prepTime: {
    hours: 0,
    minutes: 0,
  },
  ingredients: [""],
  directions: [""],
  image: "",
};

const RecipeCreationSchema = Yup.object<IRecipeCreationFields>().shape({
  title: YupHelpers.DEFAULT_STRING,

  description: YupHelpers.DEFAULT_STRING,

  servings: YupHelpers.DEFAULT_POSITIVE_INTEGER,

  prepTime: Yup.object()
    .shape({
      hours: YupHelpers.DEFAULT_POSITIVE_INTEGER,
      minutes: YupHelpers.DEFAULT_POSITIVE_INTEGER,
    })
    .required(FormErrorMessages.REQUIRED),

  ingredients: Yup.array()
    .of(YupHelpers.DEFAULT_STRING)
    .required(FormErrorMessages.REQUIRED),

  directions: Yup.array()
    .of(YupHelpers.DEFAULT_STRING)
    .required(FormErrorMessages.REQUIRED),

  image: YupHelpers.DEFAULT_STRING,
});

export default RecipeCreationSchema;