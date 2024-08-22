import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {
  items = [
    { title: "Home", path: "/home" },
    { title: "Admin", path: "/admin" },
    { title: "Contact", path: "/contact" },
    {title:"AddProduct",path:"/addproduct"},
  ];
}
