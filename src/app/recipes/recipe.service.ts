import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test Recipe 1','this is simply a tes',
          'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
        new Recipe('A test Recipe 2','this is simply a tes',
            'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
        new Recipe('A test Recipe 3','this is simply a tes',
              'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
        new Recipe('A test Recipe 4','this is simply a tes',
                'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain')
      ];

    getRecipes() {
        return this.recipes.slice(); // we use .slice() to access a copy not the direct reference of the array
        
    }
}