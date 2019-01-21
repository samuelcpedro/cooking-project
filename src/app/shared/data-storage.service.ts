import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-samu.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-samu.firebaseio.com/recipes.json')
      .map((response: Response) => {
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
