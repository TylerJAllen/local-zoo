import { Component } from '@angular/core';
import { Beast } from './beast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBeast = null;

  masterBeastList: Beast [] = [
    new Beast("Frank", "grizzly bear", 13, "male", "Carnivore", "Cascadia", 4, "long naps", "onions"),
    new Beast("Sandy", "penguin", 1, "female", "Carnivore", "Snow Zone", 3, "swimming", "vegetables"),
    new Beast("Clyde", "octopus", 1, "male", "Carnivore", "Water World", 2, "puppies", "sushi"),
    new Beast("Gerald", "rhinoceros", 27, "male", "Herbivore", "African Trek", 6, "belly rubs", "extinction")
  ];

  addBeast(newBeastFromChild: Beast) {
    this.masterBeastList.push(newBeastFromChild);
  }

  editBeast(clickedBeast) {
    this.selectedBeast = clickedBeast;
  }

  finishedEditing() {
    this.selectedBeast = null;
  }

}
