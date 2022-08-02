import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesRoutes} from './recipes/recipes.routing.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: RecipesRoutes.Index,
    pathMatch: 'full',
  },
  {
    path: RecipesRoutes.Index,
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then(
          (m) => m.RecipesPageModule
        ),
      },
      {
        path: `:${RecipesRoutes.DetailParam}`,
        loadChildren: () =>
          import('./recipes/recipe-detail/recipe-detail.module').then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
