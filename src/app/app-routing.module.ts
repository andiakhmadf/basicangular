import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/product/product-list/product-list.component';
import { SalesOrderListComponent } from '../app/sales-order/sales-order-list/sales-order-list.component'
const routes: Routes = [
    {path: 'product',component: ProductListComponent},
    {path: 'order',component: SalesOrderListComponent },
    { path: '',  redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
