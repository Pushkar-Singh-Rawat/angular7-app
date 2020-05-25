import { Component, OnInit } from '@angular/core';
import { DummyServiceService } from './dummy-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private title = 'Exploring NG!';
  private currentDate;
  constructor(private dummyService: DummyServiceService){}
  ngOnInit(){
   this.currentDate=this.dummyService.getCurrentDate();
  }

}
