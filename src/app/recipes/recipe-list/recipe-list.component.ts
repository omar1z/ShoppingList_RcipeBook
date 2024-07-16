import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }
  constructor(private recipeService: RecipeService, private router: Router,
    private route: ActivatedRoute
  ) {}

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
