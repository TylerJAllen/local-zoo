import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Beast } from '../beast.model';

@Component({
  selector: 'edit-beast',
  templateUrl: './edit-beast.component.html',
  styleUrls: ['./edit-beast.component.css']
})
export class EditBeastComponent implements OnInit {

  @Input() childSelectedBeast: Beast;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  constructor() {}
  ngOnInit() {}

}
