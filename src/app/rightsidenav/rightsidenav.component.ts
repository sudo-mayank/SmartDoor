import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/data/shared-data.service';
import { InputDataService } from '../service/data/form/input-data.service';
import { USER_LIST_CHECK } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-rightsidenav',
  templateUrl: './rightsidenav.component.html',
  styleUrls: ['./rightsidenav.component.css']
})
export class RightsidenavComponent implements OnInit {

  datalist: any[] = [];
  inputlist: any;
  id: number;
  constructor(private shareddata: SharedDataService,
              private inputdataservice: InputDataService) { }

  ngOnInit() {
    this.shareddata.currentlist.subscribe(datalist => {
        this.datalist = datalist ,
        this.getallinputdata(datalist[0], datalist[1]); });
  }

  getlog() {
    this.shareddata.currentlist.subscribe(datalist => {
      this.datalist = datalist,
      console.log(datalist[0]);
    });
  }

  getnavlist() {
    return sessionStorage.getItem(USER_LIST_CHECK);
  }

  getallinputdata(adsId, dcdId) {
    return this.inputdataservice.getinputalllist(dcdId, adsId)
      .subscribe((data: any) => {
        // this.inputlist = data;
        this.id = data.list[0].id;
      },
        errors => {
          console.log(errors);
        });
  }

}
