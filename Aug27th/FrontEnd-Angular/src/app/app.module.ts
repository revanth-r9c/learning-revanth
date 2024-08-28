// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { AppMenuComponent } from './app-menu/app-menu.component';
// import { AppHomeComponent } from './app-home/app-home.component';
// import { AppLoginComponent } from './app-login/app-login.component';
// import { AppFooterComponent } from './app-footer/app-footer.component';
// import { RouterModule, Routes } from '@angular/router';
// import { FormexampleComponent } from './formexample/formexample.component';
// import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// import { DynamicformComponent } from './dynamicform/dynamicform.component';
// import { BooksComponent } from './books/books.component';

// const routes: Routes = [
//   {
//     path: "templateform",
//     title : "templateform",
//     component: FormexampleComponent,
//   },{
//     path:"dynamicform",
//     title: "dynamicform",
//     component: DynamicformComponent,
//   },{
//     path: "books/:bookId",
//     title: "Books",
//     component: BooksComponent,
//     data: {pageInfo: "sample book page"},
//   },
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     AppMenuComponent,
//     AppHomeComponent,
//     AppLoginComponent,
//     AppFooterComponent,
//     FormexampleComponent,
//     DynamicformComponent,
//     BooksComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes),
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AppMenuComponent } from './app-menu/app-menu.component';
// import { AppHomeComponent } from './app-home/app-home.component';
// import { AppLoginComponent } from './app-login/app-login.component';
// import { AppFooterComponent } from './app-footer/app-footer.component';
// import { FormsexampleComponent } from './formsexample/formsexample.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AppMenuComponent,
//     AppHomeComponent,
//     AppLoginComponent,
//     AppFooterComponent,
//     FormsexampleComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     // FormsModule,
//     // ReactiveFormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FormexampleComponent } from './formexample/formexample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { BooksComponent } from './books/books.component';
import { ServerComponent } from './server/server.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
// import { AppAddProductComponent } from './app-add-product/app-add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppHomeComponent,
    AppFooterComponent,
    FormexampleComponent,
    DynamicformComponent,
    BooksComponent,
    ServerComponent,
    AppContactComponent,
    AppAdminComponent,
    AddproductComponent,
    AppLoginComponent,
    ProductEditComponent,
    ProductCreateComponent
    // AppAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
