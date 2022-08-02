import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { EnumIngredients, IRecipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  public recipes$: BehaviorSubject<IRecipe[]> = new BehaviorSubject<IRecipe[]>([
    {
      id: '568f57ba-3476-4a8d-9d7f-3a662b4554b1',
      title: 'Schnitzel',
      imageURL: 'https://dom-resepti.ru/wp-content/uploads/2019/10/8.jpg',
      ingredients: [EnumIngredients.FrenchFries, EnumIngredients.PorkMeat, EnumIngredients.Salad],
    },
    {
      id: 'adf584d8-f94e-46e3-bc33-66c8c7dafd21',
      title: 'Spaghetti',
      imageURL:
          'https://www.ufootje.nl/wp-content/uploads/2018/01/spaghetti-bolognaise-104579-1.jpeg',
      ingredients: [EnumIngredients.Spaghetti, EnumIngredients.Meat, EnumIngredients.Tomatoes],
    },
  ]);

  public getRecipe(recipeId: string): IRecipe {
    return this.recipes$.getValue().find((recipe) => recipe.id === recipeId);
  }

  public deleteRecipe(recipeId: string): void {
    this.recipes$.next(this.recipes$.getValue().filter((recipe) => recipe.id !== recipeId));
  }
}
