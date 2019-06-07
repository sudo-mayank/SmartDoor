import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  datalist: any[] = [];

  private getadlist =   new BehaviorSubject<any[]>([]);

  currentlist = this.getadlist.asObservable();

  constructor() { }

  changedata(datalist) {
    console.log(datalist);
    this.getadlist.next(datalist);
  }
}
