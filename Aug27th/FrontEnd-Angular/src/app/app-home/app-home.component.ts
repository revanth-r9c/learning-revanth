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

// working code
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Product {
//   name: string;
//   excerpt: string;
//   price: number;
//   code: string;
// }

// interface ProductBackendResponse {
//   products: Product[];
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: './app-home.component.html',
//   styleUrls: ['./app-home.component.css']
// })
// export class AppHomeComponent {

//   products: Product[] = [];

//   constructor(private http: HttpClient) {
//     this.getData();
//   }

//   getData() {
//     this.http.get<ProductBackendResponse>("http://localhost:3000/product").subscribe(
//       (response) => {
//         this.products = response.products;
//         console.log(this.products);
//       },
//       (error) => {
//         console.error("Error fetching data:", error);
//       },
//     );
//   }
//   getRandomLightColor(): string {
//     const r = Math.floor(Math.random() * 128 + 127); 
//     const g = Math.floor(Math.random() * 128 + 127);
//     const b = Math.floor(Math.random() * 128 + 127);
//     return `rgba(${r},${g},${b},0.4)`;
//   }
// }


// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Product {
//   name: string;
//   price: number;
//   availability: string;
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: './app-home.component.html',
//   styleUrls: ['./app-home.component.css']
// })
// export class AppHomeComponent {
//   products: Product[] = [];

//   constructor(private http: HttpClient) {
//     this.getData();
//   }

//   getData() {
//     this.http.get<Product[]>("http://localhost:3000/product").subscribe(
//       (response) => {
//         this.products = response;
//         console.log('Products:', this.products);  
//       },
//       (error) => {
//         console.error("Error fetching data:", error);  
//       }
//     );
//   }

//   getRandomLightColor(): string {
//     const r = Math.floor(Math.random() * 128 + 127); 
//     const g = Math.floor(Math.random() * 128 + 127);
//     const b = Math.floor(Math.random() * 128 + 127);
//     return `rgba(${r},${g},${b},0.4)`;
//   }
// }

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   availability: string;
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: './app-home.component.html',
//   styleUrls: ['./app-home.component.css']
// })
// export class AppHomeComponent {
//   products: Product[] = [];

//   constructor(private http: HttpClient) {
//     this.getData();
//   }

//   getData() {
//     this.http.get<Product[]>('http://localhost:3000/product').subscribe(
//       (response) => {
//         this.products = response;
//         console.log('Products:', this.products);  // For debugging
//       },
//       (error) => {
//         console.error('Error fetching data:', error);  // For debugging
//       }
//     );
//   }

//   getRandomLightColor(): string {
//     const r = Math.floor(Math.random() * 128 + 127); 
//     const g = Math.floor(Math.random() * 128 + 127);
//     const b = Math.floor(Math.random() * 128 + 127);
//     return `rgba(${r},${g},${b},0.4)`;
//   }
// }



// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   availability: string;
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: './app-home.component.html',
//   styleUrls: ['./app-home.component.css']
// })
// export class AppHomeComponent {
//   products: Product[] = [];
//   filteredProducts: Product[] = [];
//   searchTerm: string = '';
//   searchBy: string = 'name'; 

//   constructor(private http: HttpClient) {
//     this.getData();
//   }

//   getData() {
//     this.http.get<Product[]>('http://localhost:3000/product').subscribe(
//       (response) => {
//         this.products = response;
//         this.filteredProducts = response;
//         console.log('Products:', this.products); 
//       },
//       (error) => {
//         console.error('Error fetching data:', error);  
//       }
//     );
//   }

//   search() {
//     if (!this.searchTerm) {
//       this.filteredProducts = this.products;
//       return;
//     }

//     const searchUrl = this.getSearchUrl();
//     this.http.get<Product[]>(searchUrl).subscribe(
//       (response) => {
//         this.filteredProducts = response;
//         console.log('Search results:', this.filteredProducts);  
//       },
//       (error) => {
//         console.error('Error fetching search data:', error);
//         this.filteredProducts = [];
//       }
//     );
//   }

//   getSearchUrl(): string {
//     const baseUrl = 'http://localhost:3000/product';
//     switch (this.searchBy) {
//       case 'name':
//         return `${baseUrl}/search/${this.searchTerm}`;
//       case 'price':
//         return `${baseUrl}/price/${this.searchTerm}`;
//       case 'availability':
//         return `${baseUrl}/availablity/${this.searchTerm}`;
//       default:
//         return `${baseUrl}/`;
//     }
//   }

//   getRandomLightColor(): string {
//     const r = Math.floor(Math.random() * 128 + 127); 
//     const g = Math.floor(Math.random() * 128 + 127);
//     const b = Math.floor(Math.random() * 128 + 127);
//     return `rgba(${r},${g},${b},0.4)`;
//   }
// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

interface Product {
  _id: string;
  name: string;
  price: number;
  availability: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  searchBy: string = 'name'; 

  constructor(private http: HttpClient, private router: Router) {
    this.getData();
  }

  getData() {
    this.http.get<Product[]>('http://localhost:3000/product').subscribe(
      (response) => {
        this.products = response;
        this.filteredProducts = response;
        console.log('Products:', this.products); 
      },
      (error) => {
        console.error('Error fetching data:', error);  
      }
    );
  }

  search() {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
      return;
    }

    const searchUrl = this.getSearchUrl();
    this.http.get<Product[]>(searchUrl).subscribe(
      (response) => {
        this.filteredProducts = response;
        console.log('Search results:', this.filteredProducts);  
      },
      (error) => {
        console.error('Error fetching search data:', error);
        this.filteredProducts = [];
      }
    );
  }

  getSearchUrl(): string {
    const baseUrl = 'http://localhost:3000/product';
    switch (this.searchBy) {
      case 'name':
        return `${baseUrl}/search/${this.searchTerm}`;
      case 'price':
        return `${baseUrl}/price/${this.searchTerm}`;
      case 'availability':
        return `${baseUrl}/availability/${this.searchTerm}`;
      default:
        return `${baseUrl}/product`;
    }
  }

  editProduct(productId: string) {
    this.router.navigate(['/edit', productId]); 
  }

  deleteProduct(productId: string) {
    this.http.delete(`http://localhost:3000/product/${productId}`).subscribe(
      () => {
        this.getData(); 
        console.log('Product deleted');
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  getRandomLightColor(): string {
    const r = Math.floor(Math.random() * 128 + 127); 
    const g = Math.floor(Math.random() * 128 + 127);
    const b = Math.floor(Math.random() * 128 + 127);
    return `rgba(${r},${g},${b},0.4)`;
  }
}
