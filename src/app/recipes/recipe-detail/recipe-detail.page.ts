import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IRecipe } from '../recipes.model';
import { RecipesRoutes, RecipesRoutingService } from '../recipes.routing.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  public recipe: IRecipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private recipesRoutingService: RecipesRoutingService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.preload();
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  preload() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.has(RecipesRoutes.DetailParam)) {
        const recipeId = paramMap.get(RecipesRoutes.DetailParam);
        this.recipe = this.recipesService.getRecipe(recipeId);
      } else {
        this.recipesRoutingService.toRecipes();
      }
    });
  }

  deleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.recipe.id);
            this.recipesRoutingService.toRecipes();
          }
        }
      ]
    }).then(alertElement => alertElement.present());
  }
}
