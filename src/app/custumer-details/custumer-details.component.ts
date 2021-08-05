import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustumerService } from '../custumer.service';
@Component({
  selector: 'app-custumer-details',
  templateUrl: './custumer-details.component.html',
  styleUrls: ['./custumer-details.component.css']
})
export class CustumerDetailsComponent implements OnInit {

  constructor(private activated:ActivatedRoute, private service:CustumerService) { }

  ngOnInit(): void {
    let id=parseInt(this.activated.snapshot.paramMap.get('id'))
    console.log(" data  recived from custumer component",id)
    let custumer=this.service.getCustData()
    console.log("recived data from service from the custumer comp",custumer)

  }

}
