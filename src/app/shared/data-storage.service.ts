import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getIdToken();

    return this.httpClient.put('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(), {
      // observe: 'events'
      observe: 'body'
    });
  }

  getRecipes() {
    const token = this.authService.getIdToken();

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token)
    // this.httpClient.get('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token, {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token, {
      // observe: 'response',
      observe: 'body',
      responseType: 'json'
      // responseType: 'text'
      // responseType: 'blob' // for file
      // responseType: 'arrayBuffer' // for buffer some data
    })
      .map((recipes) => {
        // console.log(recipes);

        // check if recipe as ingredients property
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
        // return [];
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
