import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Category {
  _id: string;
  name: string;
  description: string;
}

interface CategoryBackendResponse {
  categories: Category[];
}

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get<CategoryBackendResponse>("http://localhost:3000/api/v1/categories").subscribe(
      (response) => {
        this.categories = response.categories;
        console.log(this.categories);
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }
}
