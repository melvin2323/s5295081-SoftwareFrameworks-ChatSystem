import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.newUser).subscribe(response => {
      // Handle successful registration
      console.log('Registration successful');
      this.router.navigate(['/login']); // Redirect to login page
    }, error => {
      // Handle registration error
      console.error('Registration failed', error);
    });
  }
}
