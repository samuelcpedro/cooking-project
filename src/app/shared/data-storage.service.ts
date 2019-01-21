import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from './../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-samu.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-samu.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          // add new ones
          this.recipeService.setRecipes(recipes);
        },
        (error: any) => { console.log(error); }
      );
  }
}
