import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [ProductListComponent]
})
export class ProductModule { }
