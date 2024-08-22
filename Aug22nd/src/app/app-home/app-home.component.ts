// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// // interface ProductBackendResponse{
// //     name: string;
// //     excerpt: string;
// //     price: number;
// //     code: string;
// //     products: object[]
// // }
// interface Product {
//     name: string;
//     excerpt: string;
//     price: number;
//     code: string;
//   }
  
//   interface ProductBackendResponse {
//     products: Product[];
//   }
  

// @Component({
//   selector: 'app-home',
//   templateUrl: './app-home.component.html',
//   styleUrls: ['./app-home.component.css']
// })
// export class AppHomeComponent {

//     products: any;
//     ProductName: string = "";
//     ProductExcerpt: string = "";
//     ProductPrice: number = 0;
//     ProductCode: string = "";

//     constructor(private http: HttpClient){
//         this.products = "";
//         this.getData();
//     }

//     getData(){
//         this.http.get<ProductBackendResponse>("http://localhost:3000/api/v1/products").subscribe(
//             (response)=>{
//                 this.products=response.products;
//                 console.log(this.products);
//             },
//             (error)=>{
//                 console.error("Error fetching data:", error);
//             },
//         );
//     }
//     }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  name: string;
  excerpt: string;
  price: number;
  code: string;
}

interface ProductBackendResponse {
  products: Product[];
}

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {

  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<ProductBackendResponse>("http://localhost:3000/api/v1/products").subscribe(
      (response) => {
        this.products = response.products;
        console.log(this.products);
      },
      (error) => {
        console.error("Error fetching data:", error);
      },
    );
  }
}
