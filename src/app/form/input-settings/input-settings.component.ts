import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { InputDataService } from 'src/app/service/data/form/input-data.service';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { InputList } from 'src/app/service/classes/inputlist';

@Component({
  selector: 'app-input-settings',
  templateUrl: './input-settings.component.html',
  styleUrls: ['./input-settings.component.css']
})
export class InputSettingsComponent implements OnInit {

  inputlist: any;
  datalist: InputList;
  message: string;
  dcdId: number;
  adId: number;
  Id: number;

  // addressForm = this.fb.group({
  //   company: null,
  //   firstName: [null, Validators.required],
  //   lastName: [null, Validators.required],
  //   address: [null, Validators.required],
  //   address2: null,
  //   city: [null, Validators.required],
  //   state: [null, Validators.required],
  //   postalCode: [null, Validators.compose([
  //     Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  //   ],
  //   shipping: ['free', Validators.required]
  // });

  constructor(private fb: FormBuilder,
              private inputdataservice: InputDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dcdId = this.route.snapshot.params.dcdId;
    this.adId = this.route.snapshot.params.adsId;
    this.Id = this.route.snapshot.params.Id;
    this.getallinputfromdata(this.dcdId, this.adId, this.Id);
  }


  getallinputfromdata(dcdId, adsId, id) {
    return this.inputdataservice.getinputlist(dcdId, adsId, id)
      .subscribe(response => {
        this.inputlist = response;
      },
        errors => {
          console.log(errors);
        });
  }

  saveInput() {
    return this.inputdataservice.putinputlist(this.dcdId, this.adId, this.Id, this.inputlist).subscribe(
      data => {
        console.log(data);
        this.message = `Updated ${this.Id} Successfull!`;
        this.router.navigate(['inputsettings', this.adId, this.dcdId, this.Id]);
      }
    );
  }
}
