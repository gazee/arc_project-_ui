import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customerResult:any;
  customerList:any;

  constructor(private CustomerService:CustomerService) { }

  ngOnInit(): void {
    this. getcustomerlist()
  }
  getcustomerlist(){
    this.CustomerService.getcustomers().subscribe((data:any[])=>{
      this.customerResult=data;
      this.customerList=this.customerResult.results;
      console.log(this.customerList)
      // console.log(this.customerResult)
    })
  }
}
