export interface IRecipeCreationFields {
  title: string;
  description: string;
  image: string;
  servings: number | "";
  prepTime: {
    hours: number | "";
    minutes: number | "";
  };
  ingredients: string[];
  directions: string[];
}
