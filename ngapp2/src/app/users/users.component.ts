import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from '../get-data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private userData=[];
  constructor(private getUserDataService: GetDataServiceService) { }

  ngOnInit() {
    this.getUserDataService.getUserData().subscribe((data)=>{
      console.log(data);
    this.userData=Array.from(Object.keys(data),k=>data[k]);
    console.log(this.userData);
    });
  }

}
