import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  turn: string;
  onChoose(link: string){
    if(link === 'r'){
      this.turn = 'r'
    }else{
      this.turn = 's'
    }
  }
}
