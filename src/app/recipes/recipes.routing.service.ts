import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

export enum RecipesRoutes {
  Index = 'recipes',
  DetailParam = 'recipeId'
}

@Injectable({
  providedIn: 'root'
})
export class RecipesRoutingService {

  constructor(private _router: Router) {}

  public routes = {
    recipes: 'recipes',
  };

  public toRecipes() {
    this._router.navigate([this.routes.recipes]).then();
  }

  public toRecipesDetail(recipeId: string) {
    this._router.navigate([this.routes.recipes, recipeId]).then();
  }
}
