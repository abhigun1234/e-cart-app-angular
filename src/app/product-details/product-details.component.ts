import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  myname=''
  constructor(private active :ActivatedRoute,private service:ProductServiceService) { }

  ngOnInit(): void {
    let id=parseInt(this.active.snapshot.paramMap.get('id'))
    console.log(" @@@id",id)
    let data=this.service.getData()
    console.log("recived product from service",data)
  }

}
