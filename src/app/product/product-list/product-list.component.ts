import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
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

  public deleteProduct(productId: number): void{
    this.http.delete("http://localhost:51024/api/Product/"+productId,{ responseType: "text"})
              .subscribe(response => {
                Swal.fire(response,"The page will reload after 3 second","success")});
    setTimeout(()=>{ 
      location.reload();
    }, 3000);
  }

  public cancel(){

  }
}
