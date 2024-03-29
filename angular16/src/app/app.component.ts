import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'angular16';
  logout() {
    localStorage.removeItem('auth_token');
  }
 
  public get logIn():boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}
