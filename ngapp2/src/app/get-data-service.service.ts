import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {
  private apiUrl= "http://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  //uses httpClient to fetch data from an url.
getUserData(){
  return this.http.get(this.apiUrl);
}
}
