import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaust, exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            'https://recipe-book-c5c20-default-rtdb.firebaseio.com/recipes.json',
            recipes
        ).subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipes() {
        return this.http
          .get<Recipe[]>(
            'https://recipe-book-c5c20-default-rtdb.firebaseio.com/recipes.json',
            
          ).pipe(
            map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
      tap((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
    );
  }
}