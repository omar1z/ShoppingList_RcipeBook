import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() link = new EventEmitter<string>();
  onRecipes() {
    this.link.emit('r');
  }
  onShopping() {
    this.link.emit('s');
  }
}
