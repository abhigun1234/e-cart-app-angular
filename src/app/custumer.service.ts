import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustumerService {
 data
  constructor() { }

  getCustData(){

    return this.data
  }
  setCustData(cust){
  this.data=cust

  }
}
