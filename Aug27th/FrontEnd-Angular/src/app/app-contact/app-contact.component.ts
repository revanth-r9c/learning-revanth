import { Component, OnInit } from '@angular/core';

interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  officeHours: string;
}

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class AppContactComponent implements OnInit {
  contact: ContactDetails = {
    address: 'Ascendion Eng, Tech City, Bangalore',
    phone: '+91 987654321',
    email: 'contact@ascendion.com',
    officeHours: 'Mon-Fri: 9:30 AM - 6:00 PM'
  };

  constructor() {}

  ngOnInit() {}
}
