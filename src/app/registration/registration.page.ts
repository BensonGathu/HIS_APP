import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user = {
    f_name: '',
    l_name: '',
    email: '',
    password: '',
  };
  constructor(private authService: AuthService, private router: Router) { }

// function handling the registration api
  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
      
        console.error('Registration failed', error);
      }
    );}
  
  ngOnInit() {
  }

}
