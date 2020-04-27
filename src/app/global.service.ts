import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //public urlServer = 'https://cors-anywhere.herokuapp.com/http://fixdoneserve.herokuapp.com/api/';  
  //public urlServer = 'https://cors-anywhere.herokuapp.com/http://.com/api/';  
  public urlServer = 'http://134.209.71.179/api/';
  public version = '0.0.1-Android';
  public name = 'nano';
  public company = 'Dami Group Inc';
  public published = '01/04/2020 01:20 US';
  public website = 'nano.com';
  constructor() {}

}