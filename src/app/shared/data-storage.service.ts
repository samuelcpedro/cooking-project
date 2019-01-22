import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getIdToken();

    return this.http.put('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getIdToken();

    this.http.get('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token)
      .map((response) => {
        const recipes: Recipe[] = response.json();
        // check if recipe as ingredients property
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe(
        (recipes: Recipe[]) => {
          // add new ones
          this.recipeService.setRecipes(recipes);
        },
        (error: any) => { console.log(error); }
      );
  }
}
