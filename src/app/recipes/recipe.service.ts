import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

    getRecipes() {
        return this.recipes.slice(); // we use .slice() to access a copy not the direct reference of the array

    }
}