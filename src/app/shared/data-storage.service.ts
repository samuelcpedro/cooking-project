import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from './../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-samu.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get('https://ng-recipe-book-samu.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          console.log(response);
          const value = response.json();
          // discard all present recipes
          this.recipeService.resetRecipes();
          // add new ones
          this.recipeService.addRecipes(<any>value);
        },
        (error: any) => { console.log(error); }
      );
  }
}
