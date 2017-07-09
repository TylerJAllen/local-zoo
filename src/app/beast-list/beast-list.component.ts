import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Beast } from '../beast.model';

@Component({
  selector: 'beast-list',
  templateUrl: './beast-list.component.html',
  styleUrls: ['./beast-list.component.css']
})
export class BeastListComponent implements OnInit {

  @Input() childBeastList: Beast[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(beastToEdit: Beast) {
    this.clickSender.emit(beastToEdit);
  }

  filterByAge: string = "allBeasts";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  constructor() {}
  ngOnInit() {}

}
