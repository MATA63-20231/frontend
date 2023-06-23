export interface IRecipeCreationFields {
  title: string;
  description: string;
  servings: number;
  prepTime: {
    hours: number;
    minutes: number;
  };
  ingredients: string[];
  directions: string[];
  image: string;
}
