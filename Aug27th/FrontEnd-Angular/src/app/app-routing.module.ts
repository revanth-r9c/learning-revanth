// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppHomeComponent } from './app-home/app-home.component';
// import { AppLoginComponent } from './app-login/app-login.component';

// const routes: Routes = [
//   { path: 'home', component: AppHomeComponent },
//   { path: 'login', component: AppLoginComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { FormexampleComponent } from './formexample/formexample.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { BooksComponent } from './books/books.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { 
    path: "", 
    redirectTo: '/login', 
    pathMatch: 'full', 
  },

  { 
    path: 'login', 
    component: AppLoginComponent 
  },
  
  { 
    path: "home", 
    title: "home",
    component: AppHomeComponent ,
  },
  { 
    path: 'edit/:id', 
    component: ProductEditComponent 
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }

  // {
  //   path: "templateform",
  //   title : "templateform",
  //   component: FormexampleComponent,
  // },{
  //   path:"dynamicform",
  //   title: "dynamicform",
  //   component: DynamicformComponent,
  // },{
  //   path: "books/:bookId",
  //   title: "Books",
  //   component: BooksComponent,
  //   data: {pageInfo: "sample book page"},
  // },
  {
    path: "contact",
    title: "contact",
    component: AppContactComponent,
  },
  {
    path: "admin",
    title: "admin",
    component: AppAdminComponent,
  },
  {
    path:"addproduct",
    title:"AddProduct",
    component:AddproductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }