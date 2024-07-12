import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('inputName') nameRef: ElementRef;
  @ViewChild('inputAmount') amountRef: ElementRef;
  @Output() send = new EventEmitter<Ingredient>();
  onAdd(){
    const inName = this.nameRef.nativeElement.value;
    const inAmount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(inName, inAmount)
    this.send.emit(ingredient)
  }
}
