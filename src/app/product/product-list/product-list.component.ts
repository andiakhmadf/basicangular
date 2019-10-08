import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@Injectable()
export class ProductListComponent implements OnInit {

  constructor(private http:HttpClient) {}
  
  prod : any;

  ngOnInit() {
    this.listProduct();
  }

  getProduct(){
    return this.http.get("http://localhost:51024/api/Product/GetAllProduct");
  }

  listProduct() {
    this.getProduct().subscribe((data) => this.prod=data);
  }

  public deleteProduct(productId: number){
    this.http.delete("http://localhost:51024/api/Product/"+productId)
              .subscribe();
  }

  public cancel(){

  }
}
