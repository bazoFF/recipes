export interface IRecipe {
  id: string;
  title: string;
  imageURL: string;
  ingredients: EnumIngredients[];
}

export enum EnumIngredients {
  FrenchFries = 'French Fries',
  PorkMeat = 'Pork Meat',
  Salad = 'Salad',
  Spaghetti = 'Spaghetti',
  Meat = 'Meat',
  Tomatoes = 'Tomatoes'
}
