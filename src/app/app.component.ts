import { Component } from '@angular/core';
import { Beast } from './beast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterBeastList: Beast [] = [
    new Beast("Andy", "grizzly bear", 2, "male", "Carnivore", "Cascadia", 3, "long naps", "onions"),
    new Beast("Marcus", "white rhinoceros", 24, "female", "Herbivore", "African Trek", 3, "playing in dirt", "baths"),
    new Beast("Sandy", "penguin", 5, "female", "Carnivore", "Snow Zone", 3, "swimming", "vegetables")
  ];

  addBeast(newBeastFromChild: Beast) {
    this.masterBeastList.push(newBeastFromChild);
    console.log("ping");
    console.log(this.masterBeastList);
  }


}
