import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
  declarations: [
    RecipesComponent,
    RecipesStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ]
})
export class RecipesModule { }
