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


  touchStartX = 0; // Ponto inicial do toque
  touchEndX = 0;   // Ponto final do toque
  isDragging = false; // Indica se o usuário está arrastando

onTouchStart(event: TouchEvent): void {
  this.touchStartX = event.touches[0].clientX;
  this.isDragging = true;
}

onTouchMove(event: TouchEvent): void {
  if (this.isDragging) {
    this.touchEndX = event.touches[0].clientX;
  }
}

onTouchEnd(): void {
  this.isDragging = false;
  const swipeDistance = this.touchStartX - this.touchEndX;

  // Define um limite mínimo para considerar o movimento como um "deslize"
  const swipeThreshold = 50;

  if (swipeDistance > swipeThreshold) {
    // Próxima imagem (deslize para a esquerda)
    this.nextImage();
  } else if (swipeDistance < -swipeThreshold) {
    // Imagem anterior (deslize para a direita)
    this.prevImage();
  }

  // Reseta os valores de toque
  this.touchStartX = 0;
  this.touchEndX = 0;
}
}
