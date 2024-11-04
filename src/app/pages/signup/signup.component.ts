import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeComponent, RouterLink ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
