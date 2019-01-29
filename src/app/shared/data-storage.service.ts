import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
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
    // const headers = new HttpHeaders().set('Autorization', 'Bearer sdfgsdfgsdfgsdf');

    // return this.httpClient
    //   .put('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(), {
    // return this.httpClient.put('https://ng-recipe-book-samu.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   // observe: 'events'
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });

    const req = new HttpRequest('PUT',
      'https://ng-recipe-book-samu.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
        params: new HttpParams().set('auth', token)
      });

      return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getIdToken();

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token)
    // this.httpClient.get('https://ng-recipe-book-samu.firebaseio.com/recipes.json?auth=' + token, {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-samu.firebaseio.com/recipes.json', {
      // observe: 'response',
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token)
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
