import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle : string = 'Angular demo';
  randomProperty : boolean = false;
  anotherRandomProperty : boolean = false;
  toggleRandomProperty() : void {
    this.randomProperty = !this.randomProperty;
    console.log("toggleRandomProperty");
  }

  toggleAnotherRandomProperty() : void {
    this.anotherRandomProperty = !this.anotherRandomProperty;
    console.log("toggleAnotherRandomProperty");
  }
}
