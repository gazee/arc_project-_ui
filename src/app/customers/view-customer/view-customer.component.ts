import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ActivatedRoute } from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
    customerId:string ='';
    custemerDetails:any;
  constructor(private activatedRoute:ActivatedRoute,private CustomerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
     this.customerId=data['id'];
    //params include both key and value we need only 
     console.log(this.customerId);
    //console.log(data)
    })
    if(this.customerId){
      this.CustomerService.viewcustomer(this.customerId).subscribe(data=>{
        console.log(data)
        this.custemerDetails=data['results'];
      })
      
    }
   
    
  }

}
