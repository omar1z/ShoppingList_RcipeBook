import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() rec: Recipe;
  @Output() selectedR = new EventEmitter<void>();
  onSelect(){
    this.selectedR.emit();
  }
}
