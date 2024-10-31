import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerFixed: boolean = false;


  ngOnInit(): void {
    window.addEventListener('scroll', this.onscroll.bind(this));
  }

  onscroll() {
    if(window.scrollY > 100) {
      this.headerFixed = true
    } else {
      this.headerFixed = false;
    }
  }

}
