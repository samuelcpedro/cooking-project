import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '', component: AppComponent,
  },
  {
    path: 'recipes', component: RecipesComponent,
  },
  {
    path: 'recipes/:id', component: RecipeDetailComponent,
  },
  {
    path: 'shoppinglist', component: AppComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
