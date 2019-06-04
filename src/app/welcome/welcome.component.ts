import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { adslist } from '../service/classes/adslist';
declare var $:any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomemessage: string ;
  lists: any[] ;
  adslists: adslist[];
  message = 'Some Message Here';
  name = '';
  Id: any;

  constructor(private service: WelcomeDataService,
              private route: ActivatedRoute
             ) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
    this.getdcdlists();

    this.service.getListADs()
    .subscribe(
      data=>{
        this.adslists = data;
      }
    )
  }

  handleSuccessFulResponse(response) {
    this.welcomemessage = (response);
    this.lists = (response.list);
    this.adslists = (response.list);
  }

  handleSuccessFulResponse1(response,Id) {
    this.welcomemessage = (response);
    this.lists = (response.list);
    this.adslists = (response.list);
    this.adslists.filter(function(conte) {
      return conte.dcdId == Id;
    });
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

  getadslists(Id) { console.log(Id);
    this.service.getListADs().subscribe(
      (response) =>this.handleSuccessFulResponse1(response,Id),
     err => this.handleErrorResponse(err),
    () => console.log('getdcdlists working..')
    );
  }

}
