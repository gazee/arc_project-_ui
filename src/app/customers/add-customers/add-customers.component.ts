import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
// import { NgForm } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import {Customer} from '../../models/customer.model' ;


@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  // user=new Customer 
  user={
   firstName :'' ,
   lastName : '',
   emailAdderess:'',
   phoneNumber:'',
   dob:''
  }
  
  constructor(private CustomerService:CustomerService ,private router:Router) { }

  ngOnInit(): void {
  }

  async onsubmit(value:any){
    console.log(value)
    this.CustomerService.addcustomer(this.user).subscribe(res=>console.log('from ts',res))
  
    await this.router.navigate(['/customer'])
  }
  


}
