import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {
  // user={
  //   firstName :'' ,
  //   lastName : '',
  //   emailAdderess:'',
  //   phoneNumber:'',
  //   dob:''
  //  };
  // customerId:string ='';
  // custemerDetails:any;
  constructor(private activatedRoute:ActivatedRoute,private CustomerService:CustomerService) { }
 
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(data=>{
    //   this.customerId=data['id'];
    //  //params include both key and value we need only 
    //   console.log(this.customerId);
    //  //console.log(data)
    //  })
    //  if(this.customerId){
    //    this.CustomerService.viewcustomer(this.customerId).subscribe(data=>{
    //      console.log(data)
    //     //  this.custemerDetails=data['results'];
    //    })
       
    //  }
  }

}
