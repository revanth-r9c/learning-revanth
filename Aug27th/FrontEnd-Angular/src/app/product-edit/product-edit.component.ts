import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Product {
  _id: string;
  name: string;
  price: number;
  availability: string;
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product | null = null;
  productId: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.http.get<Product>(`http://localhost:3000/product/${this.productId}`).subscribe(
        (response) => {
          this.product = response;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  }

  saveProduct() {
    if (this.product) {
      this.http.put(`http://localhost:3000/product/${this.product._id}`, this.product).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}
