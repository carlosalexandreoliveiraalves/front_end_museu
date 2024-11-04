import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { AgendaComponent } from '../../components/agenda/agenda.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarouselComponent, AgendaComponent, NgOptimizedImage, NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
