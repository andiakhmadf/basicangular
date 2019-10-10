import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PopupComponent } from '../popup/popup.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';


@NgModule({
  declarations: [ProductListComponent,PopupComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    DialogsModule
  ],
  bootstrap: [ProductListComponent]
})
export class ProductModule { }
