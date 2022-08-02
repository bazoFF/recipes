import { Component, Input} from '@angular/core';
import { IRecipe } from '../recipes.model';
import { RecipesRoutingService } from '../recipes.routing.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() item: IRecipe;

  constructor(public recipesRoutingService: RecipesRoutingService) {}
}
