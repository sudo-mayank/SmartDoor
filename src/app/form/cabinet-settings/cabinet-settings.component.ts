import { Component, OnInit } from '@angular/core';
import { Cabinet } from 'src/app/service/classes/cabinate';
import { FormBuilder } from '@angular/forms';
import { CabinetDataService } from 'src/app/service/data/form/cabinet-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabinet-settings',
  templateUrl: './cabinet-settings.component.html',
  styleUrls: ['./cabinet-settings.component.css']
})
export class CabinetSettingsComponent implements OnInit {

  cabinetlist: any;
  datalist: Cabinet;
  dcdId: number;
  message: string;
  adId: number;
  Id: number;
  constructor(private fb: FormBuilder,
              private cabinetdataservice: CabinetDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dcdId = this.route.snapshot.params.dcdId;
    this.adId = this.route.snapshot.params.adsId;
    this.Id = this.route.snapshot.params.Id;
    this.getallinputfromdata(this.dcdId, this.adId, this.Id);
  }


  getallinputfromdata(dcdId, adsId, id) {
    return this.cabinetdataservice.getcabinetlist(dcdId, adsId, id)
      .subscribe(response => {
        this.cabinetlist = response;
      },
        errors => {
          console.log(errors);
        });
  }

  saveCabinet() {
    return this.cabinetdataservice.putcabinetlist(this.dcdId, this.adId, this.Id, this.cabinetlist).subscribe(
      data => {
        console.log(data);
        this.message = `Updated ${this.Id} Successfull!`;
        this.router.navigate(['cabinetsettings', this.adId, this.dcdId, this.Id]);
      }
    );
  }
}
