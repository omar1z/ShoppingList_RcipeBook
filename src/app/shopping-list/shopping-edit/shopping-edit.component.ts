import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('inputName') nameRef: ElementRef;
  @ViewChild('inputAmount') amountRef: ElementRef;

  constructor(private slService: ShoppingListService) {}
  onAdd(){
    const inName = this.nameRef.nativeElement.value;
    const inAmount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(inName, inAmount);
    this.slService.onAddedIngredient(ingredient);
  }
}
