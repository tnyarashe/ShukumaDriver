import { Component } from '@angular/core';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  imageUrl: string; 
  bio: string; 
  location: string; 
  age: number;
  idNumber: number;
  vehicleType: string;
  vehicleReg: string;
  status: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  mockUserProfile: any = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    imageUrl: 'https://placeimg.com/150/150/people', 
    bio: 'Driver.',
    location: 'New York, USA',
    age: 48,
    idNumber: 1234567899,
    vehicleType: 'CAR',
    vehicleReg: 'ca123456',
    status: true,

  }
}
