import { Component, OnInit } from '@angular/core';
import { Beast } from '../beast.model';

@Component({
  selector: 'beast-list',
  templateUrl: './beast-list.component.html',
  styleUrls: ['./beast-list.component.css']
})
export class BeastListComponent implements OnInit {

  masterBeastList: Beast [] = [
    new Beast("Andy", "grizzly bear", 2, "male", "Carnivore", "Cascadia", 3, "long naps", "onions"),
    new Beast("Sandy", "penguin", 5, "female", "Carnivore", "Snow Zone", 3, "swimming", "vegetables")
  ];

  constructor() {}
  ngOnInit() {}

}
