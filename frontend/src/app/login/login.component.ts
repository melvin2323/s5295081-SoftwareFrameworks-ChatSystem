import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser = { username: '', password: '' };

  onSubmit(): void {
    // Handle login logic here
    console.log('Username:', this.loginUser.username);
    console.log('Password:', this.loginUser.password);
  }
}
