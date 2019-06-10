import { Component, OnInit } from '@angular/core';
import { OutputDataService } from 'src/app/service/data/form/output-data.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OutputLists } from 'src/app/service/classes/outputlist';

@Component({
  selector: 'app-output-settings',
  templateUrl: './output-settings.component.html',
  styleUrls: ['./output-settings.component.css']
})
export class OutputSettingsComponent implements OnInit {

  outputlist: any;
  datalist: OutputLists;
  dcdId: number;
  message: string;
  adId: number;
  Id: number;
  constructor(private fb: FormBuilder,
              private outputdataservice: OutputDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dcdId = this.route.snapshot.params.dcdId;
    this.adId = this.route.snapshot.params.adsId;
    this.Id = this.route.snapshot.params.Id;
    this.getallinputfromdata(this.dcdId, this.adId, this.Id);
  }


  getallinputfromdata(dcdId, adsId, id) {
    return this.outputdataservice.getoutputlist(dcdId, adsId, id)
      .subscribe(response => {
        this.outputlist = response;
      },
        errors => {
          console.log(errors);
        });
  }

  saveOutput() {
    return this.outputdataservice.putoutputlist(this.dcdId, this.adId, this.Id, this.outputlist).subscribe(
      data => {
        console.log(data);
        this.message = `Updated ${this.Id} Successfull!`;
        this.router.navigate(['outputsettings', this.adId, this.dcdId, this.Id]);
      }
    );
  }
}
