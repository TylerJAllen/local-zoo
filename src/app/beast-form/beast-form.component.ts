import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Beast } from '../beast.model';

@Component({
  selector: 'beast-form',
  templateUrl: './beast-form.component.html',
  styleUrls: ['./beast-form.component.css']
})
export class BeastFormComponent implements OnInit {

  @Output() newBeastSender = new EventEmitter();

    submitForm(name: string, species: string, age: number, sex: string, diet: string, location: string, caretakers: number, likes: string, dislikes: string ) {
      console.log(diet);
      var newBeastAdd: Beast = new Beast(name, species, age, sex, diet, location, caretakers, likes, dislikes);
      this.newBeastSender.emit(newBeastAdd);
    }


  constructor() { }

  ngOnInit() {
  }

}
