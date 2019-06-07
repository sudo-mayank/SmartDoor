import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/data/shared-data.service';

@Component({
  selector: 'app-rightsidenav',
  templateUrl: './rightsidenav.component.html',
  styleUrls: ['./rightsidenav.component.css']
})
export class RightsidenavComponent implements OnInit {

  datalist: any[] = [];
  constructor(private shareddata: SharedDataService) { }

  ngOnInit() {
    console.log('hello');
    this.shareddata.currentlist.subscribe(datalist => this.datalist = datalist);
    console.log(this.datalist + ' ' + 'This message from main');
  }

  getlog() {
    console.log('hello');
    this.shareddata.currentlist.subscribe(datalist => this.datalist = datalist);
    console.log(this.datalist);
  }

}
