import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    

    private recipes: Recipe[] = [
        new Recipe('A test Recipe 1','this is simply a tes',
          'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain',
        [
            new Ingredient('burger', 2),
            new Ingredient('fries', 20)
        ]
        ),
        new Recipe('A test Recipe 2','this is simply a tes',
            'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain',
            [
                new Ingredient('burger', 2),
                new Ingredient('fries', 20)
            ]),
        new Recipe('A test Recipe 3','this is simply a tes',
              'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain',
              [
                  new Ingredient('burger', 2),
                  new Ingredient('fries', 20)
              ]),
        new Recipe('A test Recipe 4','this is simply a tes',
                'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain',
                [
                    new Ingredient('burger', 2),
                    new Ingredient('fries', 20)
                ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // we use .slice() to access a copy not the direct reference of the array

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getSelectedRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice())
    }
}