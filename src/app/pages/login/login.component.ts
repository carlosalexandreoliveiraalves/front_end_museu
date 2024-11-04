import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
