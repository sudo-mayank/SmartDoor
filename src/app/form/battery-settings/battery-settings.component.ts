import { Component, OnInit } from '@angular/core';
import { Battery } from 'src/app/service/classes/battery';
import { BatteryDataService } from 'src/app/service/data/form/battery-data.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-battery-settings',
  templateUrl: './battery-settings.component.html',
  styleUrls: ['./battery-settings.component.css']
})
export class BatterySettingsComponent implements OnInit {

  batterylist: any;
  datalist: Battery;
  dcdId: number;
  message: string;
  adId: number;
  Id: number;
  constructor(private fb: FormBuilder,
              private batterydataservice: BatteryDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dcdId = this.route.snapshot.params.dcdId;
    this.adId = this.route.snapshot.params.adsId;
    this.Id = this.route.snapshot.params.Id;
    this.getallinputfromdata(this.dcdId, this.adId, this.Id);
  }


  getallinputfromdata(dcdId, adsId, id) {
    return this.batterydataservice.getbatterylist(dcdId, adsId, id)
      .subscribe(response => {
        this.batterylist = response;
      },
        errors => {
          console.log(errors);
        });
  }

  saveBattery() {
    return this.batterydataservice.putbatterylist(this.dcdId, this.adId, this.Id, this.batterylist).subscribe(
      data => {
        console.log(data);
        this.message = `Updated ${this.Id} Successfull!`;
        this.router.navigate(['batterysettings', this.adId, this.dcdId, this.Id]);
      }
    );
  }
}
