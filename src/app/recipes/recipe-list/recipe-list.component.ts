import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }
  constructor(private recipeService: RecipeService) {}

  // @Output() recipeSelected = new EventEmitter<Recipe>();
  onRecipeSelected(recipe: Recipe){
  }

}
