import { Component } from '@angular/core';

@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrl: './formexample.component.css'
})
export class FormexampleComponent {
  username: string;
  email: string;
  constructor() {
    this.username="";
    this.email="";
  }
  onSubmit(myform: any){
    console.log(myform.value);
    this.username=myform.value.username;
    this.email=myform.value.email;
  }
}
