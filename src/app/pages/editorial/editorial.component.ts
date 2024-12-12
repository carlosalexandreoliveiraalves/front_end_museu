import { Component } from '@angular/core';
import { DebatesCardComponent } from '../../components/debates-card/debates-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editorial',
  standalone: true,
  imports: [DebatesCardComponent, RouterLink],
  templateUrl: './editorial.component.html',
  styleUrl: './editorial.component.scss'
})
export class EditorialComponent {

}
