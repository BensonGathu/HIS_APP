import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) { }
  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
         this.authService.setAuthenticationStatus(true);
        // this.authService.saveAuthToken(response.token); // Save the token
      ;
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
  ngOnInit() {
  }

}
