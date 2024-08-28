import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Product {
  name: string;
  price: number;
  availability: string;
}

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    price: 0,
    availability: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  createProduct() {
    this.http.post('http://localhost:3000/product', this.product).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error creating product:', error);
      }
    );
  }
}
