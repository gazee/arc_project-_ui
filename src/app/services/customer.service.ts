import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Customer } from '../models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  constructor(private HttpClient:HttpClient) { }

  getcustomers(){
    let url=environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMER;
    // "http://localhost:3000/customer/list"
   return this.HttpClient.get(url);
  }

  viewcustomer(id){
    // let id:string =6221fcf820ec281fa1229011;

    console.log('from service',id)
    let url=environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER + "/" + id;
    // "http://localhost:3000/customer/view"

    // return this.HttpClient.get("http://localhost:3000/customer/view/:id");
    return this.HttpClient.get(url );
  }
  addcustomer(emp:any){
    console.log(emp)  
    let url=environment.CUSTOMER_BASE_URL +environment.CUSTOMER.ADD_CUSTOMER
    return this.HttpClient.post(url,emp);
  }
  editcustomer(id:any,user:any){
    let url=environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER +"/";
    // return this.HttpClient.put("http://localhost:30000/employee/"+id,user)
    return this.HttpClient.put(url +id,user);
  }

  deletecustomer(id:any){
      console.log(id);
    let url=environment.CUSTOMER_BASE_URL + environment.CUSTOMER.DELETE_CUSTOMER+"/";
    // "http://localhost:3000/customer/delete/:id"
    console.log("from delete customer",url)
    return this.HttpClient.delete("http://localhost:3000/customer/delete/" +id);
  }
  searchcustomer(keyword){
    
  }
   
}
