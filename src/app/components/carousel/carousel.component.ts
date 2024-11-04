import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgOptimizedImage, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent  {

  readonly carouselItems = [
    {
      image: "../../../assets/museuClassico.jpg",
      title: 'Explore o nosso museu de história e arte',
      text: "Descubra culturas e histórias preservadas ao longo dos séculos, com peças raras e documentos históricos que capturam a evolução humana em diferentes eras."
    },
    {
      image: "../../../assets/sarcofago.jpg",
      title: "Descubra as exposições antigas e clássicas",
      text: "Explore civilizações antigas e seus mistérios. De sarcófagos egípcios a esculturas gregas, cada peça revela a arte e o simbolismo de um passado distante."
    },
    {
      image: "../../../assets/desenho.jpg",
      title: "Admire as obras de arte contemporâneas",
      text: "Obras que refletem a essência do século XX e XXI, com inovação, cores vibrantes e instalações que expressam a diversidade e transformação cultural."
    }
  ];
  

  currentIndex = 0;


  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  get slideOffset() {
    return -this.currentIndex * 100; // Desloca para a esquerda
  }
}
