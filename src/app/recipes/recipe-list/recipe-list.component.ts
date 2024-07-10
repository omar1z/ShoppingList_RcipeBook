import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','this is simply a tes',
      'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('A test Recipe','this is simply a tes',
        'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('A test Recipe','this is simply a tes',
          'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('A test Recipe','this is simply a tes',
            'https://th.bing.com/th/id/OIP.0wcq29kbowlHd3IKEzejSgHaLH?rs=1&pid=ImgDetMain')
  ];
}
