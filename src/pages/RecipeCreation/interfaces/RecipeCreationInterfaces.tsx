export interface IRecipeCreationFields {
  title: string;
  description: string;
  images: string[];
  servings: number | "";
  prepTime: {
    hours: number | "";
    minutes: number | "";
  };
  ingredients: string[];
  directions: string[];
}
