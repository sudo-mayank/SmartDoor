import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-settings',
  templateUrl: './input-settings.component.html',
  styleUrls: ['./input-settings.component.css']
})
export class InputSettingsComponent implements OnInit {

  constructor() { }

  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value);
  } 

  ngOnInit() {
  }

}
