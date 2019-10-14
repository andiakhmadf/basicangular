import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
@Injectable()
export class SalesOrderListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  salesOrderList : any;

  ngOnInit() {
    this.OrderIndex();
  }

  OrderIndex(){
    return this.http.get("http://localhost:51024/api/SalesOrder")
              .subscribe((data) => this.salesOrderList=data);
  }

  deleteOrder(){

  }

  cancel(){
    
  }
}
