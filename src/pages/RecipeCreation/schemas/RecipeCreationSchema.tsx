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

const cantBeBothZero = {
  is: 0,
  then: (schema: Yup.NumberSchema) => schema.moreThan(0, "Tempo de preparo não pode ser 0h0min."),
};

const RecipeCreationSchema = Yup.object<IRecipeCreationFields>().shape({
  title: YupHelpers.STRING_REQUIRED,

  description: YupHelpers.STRING_OPTIONAL,

  servings: YupHelpers.INTEGER_MORE_THAN_ZERO,

  image: YupHelpers.STRING_OPTIONAL,

  prepTime: Yup.object().shape(
    {
      hours: YupHelpers.INTEGER_MIN_ZERO.when("minutes", cantBeBothZero),
      minutes: YupHelpers.INTEGER_MIN_ZERO.when("hours", cantBeBothZero).max(
        59,
        FormErrorMessages.MAX_59,
      ),
    },
    [["hours", "minutes"]],
  ),

  // prepTime: Yup.object()
  //   .shape({
  //     hours: YupHelpers.INTEGER_MIN_ZERO,
  //     minutes: YupHelpers.INTEGER_MIN_ZERO.max(59, FormErrorMessages.MAX_59),
  //   })
  //   .test(
  //     "at-least-one-should-be-more-than-zero",
  //     "Tempo de preparo não pode ser 0h0min.",
  //     ({ hours, minutes }) => !(hours === 0 && minutes === 0)
  //   ),

  ingredients: Yup.array()
    .of(YupHelpers.STRING_REQUIRED)
    .min(1, FormErrorMessages.MIN_1_ITEM),

  directions: Yup.array()
    .of(YupHelpers.STRING_REQUIRED)
    .min(1, FormErrorMessages.MIN_1_ITEM),
});

export default RecipeCreationSchema;
