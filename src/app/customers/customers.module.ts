import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    EditCustomersComponent,
    AddCustomersComponent,
    DeleteCustomersComponent,
    SearchCustomersComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,FormsModule ,ReactiveFormsModule
  ]
})
export class CustomersModule { }
