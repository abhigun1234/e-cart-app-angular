import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
data:any
  constructor() { }
  getData(){

    return this.data 
  }
  setData(data){
    this.data=data;

  }
}
