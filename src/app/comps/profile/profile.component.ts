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
  mockUserProfile = {
    imageUrl: 'https://via.placeholder.com/150',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'This is a sample user profile.',
    email: 'john.doe@example.com',
    phoneNumber: '+27 21 123 4567',
    age: 35,
    idNumber: '12345678',
    vehicleType: 'Toyota Corolla',
    agvehicleRege: '2021-05-01',
    location: '123 Main St, Philippi Village RSA'
  };
}
