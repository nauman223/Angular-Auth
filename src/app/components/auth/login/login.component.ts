import { Component, OnInit } from '@angular/core';
import { Login } from '../auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  isLogin: boolean = false;

  loginUser: Login = new Login();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginUser = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn() === true) {
      this.router.navigateByUrl('/home');
    }
  }

  loginHandler = (loginUser: Login) => {
    console.log(`loginUser`, loginUser); 
    this.authService.loginUser(loginUser).subscribe({
      next: res => {
        if (res && res.accessToken) {
          localStorage.setItem('token', res.accessToken);
          this.router.navigateByUrl('/home');
          this.isSubmitted = true;
        }
      },
      error: error => console.error(error),
      complete: () => {}
    });
  };
}
