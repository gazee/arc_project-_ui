import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import {CustomerService} from '../../services/customer.service';


@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {
/*  
user={
    firstName :'' ,
    lastName : '',
    emailAdderess:'',
    phoneNumber:'',
    dob:''
   };
   */
  user:any;
  customerId:string ='';
  custemerDetails:any;
  constructor(private activatedRoute:ActivatedRoute,private CustomerService:CustomerService,private router:Router) { }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.customerId=data['id'];
     //params include both key and value we need only 
      console.log(this.customerId);
     //console.log(data)
     })
     if(this.customerId){
       this.CustomerService.viewcustomer(this.customerId).subscribe(data=>{
        //  console.log(data)
          this.custemerDetails=data['results'];
          // console.log(this.custemerDetails)
          this.user=this.custemerDetails
          console.log(this.user)
       })
       
    } 
  }
 
  async onsubmit(form:any){
    let user=form.value
     console.log(user)
    this.CustomerService.editcustomer(this.customerId,user).subscribe(res=>{
      console.log('from ts',res)
      // this.router.navigate(['/customer'])
    })
      await this.router.navigate(['/customer'])

      /*
      note:
      above awaite eyuthiyillel customer pagil edit cheythathu upadate cheyan nam veendum manually refresh cheyendivarum
      evide async function akkiyathu vayi oru step kayije adutha step call cheyyu

      >above problem we can solve by calling navigate in subscribe function also
     */
   
  }

//   refreshComponent(){
//     this.router.navigate([this.router.url])
//  }
}
