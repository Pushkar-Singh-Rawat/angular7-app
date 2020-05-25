import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  constructor() { }
  getCurrentDate(){
    let currDate=new Date();
    return currDate;
  }
}
