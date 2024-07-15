import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipe;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
      
  }
  
  onSelect(){
    this.recipeService.recipeSelected.emit(this.rec);
  }
}
