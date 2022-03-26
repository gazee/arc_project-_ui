import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-delete-customers',
  templateUrl: './delete-customers.component.html',
  styleUrls: ['./delete-customers.component.css']
})
export class DeleteCustomersComponent implements OnInit {
  customerId;
  constructor(private activatedRoute:ActivatedRoute,private CustomerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.customerId=data['id'];
     //params include both key and value we need only 
      console.log(this.customerId);
     //console.log(data)
     })
     if(this.customerId){
       this.CustomerService.deletecustomer(this.customerId).subscribe(data=>{
          console.log(data)
        //  let text="deleted";
        this.router.navigate(['/customer'])
       })
       
     }

  }

}
