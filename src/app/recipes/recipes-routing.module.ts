import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService, // just because is the only place where we use it
  ]
})
export class RecipesRoutingModule { }
