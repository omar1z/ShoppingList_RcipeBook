import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService, private recipeService: RecipeService) {}
  onSaveData(){
    this.dataStorage.storeRecipes();
  }
  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
