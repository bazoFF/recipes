import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {RecipeItemComponent} from './recipe-item/recipe-item.component';
import { RecipesPage } from './recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: RecipesPage }]),
  ],
  declarations: [RecipesPage, RecipeItemComponent],
})
export class RecipesPageModule {}
