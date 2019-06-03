import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
  welcomemessage: string ;
  lists: any[] ;
  message = 'Some Message Here';
  name = '';

  constructor(private service: WelcomeDataService,
              private route: ActivatedRoute
             ) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
    // console.log(this.getdcdlists());  
  }

  getWelcomeMessage() {
    this.service.retrieveUserData().subscribe(
      response => this.handleSuccessFulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('get welcome message');
  }

  handleSuccessFulResponse(response) {
    this.welcomemessage = (response);
    this.lists = (response.list);
  }

  handleErrorResponse(error) {
    this.welcomemessage = (error.error.message);
  }

  getdcdlists() {
    this.service.getListDCDs().subscribe(
      (response) => this.handleSuccessFulResponse(response),
     err => this.handleErrorResponse(err),
    () => console.log("getdcdlists working..")
    );
  }

}
