import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1','this is simply a tes',
      'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('A test Recipe 2','this is simply a tes',
        'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('A test Recipe 3','this is simply a tes',
          'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('A test Recipe 4','this is simply a tes',
            'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
