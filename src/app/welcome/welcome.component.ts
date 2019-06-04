import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { adslist } from '../service/classes/adslist';
import { map, concatMap, filter } from 'rxjs/operators';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomemessage: string ;
  lists: any[] = [];
  adslists: adslist[] = [];
  message = 'Some Message Here';
  name = '';
  Id: any = '';

  constructor(private service: WelcomeDataService,
              private route: ActivatedRoute
             ) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
    this.getdcdlists();
  }

  handleSuccessFulResponse(response) {
    this.welcomemessage = (response);
    this.lists = (response.list);
    this.adslists = (response.list);
  }

  handleErrorResponse(error) {
    this.welcomemessage = (error.error.message);
  }

  getdcdlists() {
    this.service.getListDCDs().subscribe(
      (response) => this.handleSuccessFulResponse(response),
     err => this.handleErrorResponse(err),
    () => console.log('getdcdlists working..')
    );
  }

  getadslist(id) {
    return this.service.getListADs()
      .subscribe(response => {
        this.adslists = response.list
        .filter(adslists => (adslists.dcdId) === id );
        console.log(response);
        console.log(this.adslists);
      },
      errors => {
         console.log(errors);
      });
  }

}
