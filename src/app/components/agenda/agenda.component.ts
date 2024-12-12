import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [NgFor, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {



  readonly cardInfo = [
    {
      dayOfWeek: "Segunda",
      dayOfMonth: "28/10",
      fullDate: "Segunda - 28/10",
      text: "Nesta Segunda, o Museu de Arte Moderna Horizonte teve o prazer de receber uma variedade de visitantes ansiosos para explorar nossa nova exposição, 'Reflexões Contemporâneas'. Este evento diário destaca obras de artistas emergentes que estão redefinindo a paisagem da arte moderna.",
      image: "../../../assets/agenda/contemporanio.jpg"
    },
    {
      dayOfWeek: "Terça",
      dayOfMonth: "29/10",
      fullDate: "Terça - 29/10",
      text: "Nesta Terça, teremos a honra de receber o artista Charle Trop Beau, que trará sua visão única e inovadora da arte moderna. Não perca a chance de conhecê-lo e explorar suas obras.",
      image: "../../../assets/agenda/CharleTrpBeau01.png" // Adicione a imagem correspondente aqui
    },
    {
      dayOfWeek: "Quarta",
      dayOfMonth: "30/10",
      fullDate: "Quarta - 30/10",
      text: "Nesta Quarta, a exposição de trilobitas será um destaque imperdível. Venha descobrir estas fascinantes formações fósseis e entender mais sobre sua importância na história da Terra.",
      image: "../../../assets/agenda/trilobita.png" // Adicione a imagem correspondente aqui
    },
    {
      dayOfWeek: "Quinta",
      dayOfMonth: "31/10",
      fullDate: "Quinta - 31/10",
      text: "Nesta Quinta, temos uma exposição especial da obra 'O Olho', do renomado artista Charle Trop Beau. Explore a profundidade e a beleza desta peça intrigante.",
      image: "../../../assets/agenda/olho.png" // Adicione a imagem correspondente aqui
    },
    {
      dayOfWeek: "Sexta",
      dayOfMonth: "01/11",
      fullDate: "Sexta - 01/11",
      text: "Nesta Sexta, prepare-se para uma experiência visual única na nossa exposição sobre arte psicodélica. Mergulhe nas cores vibrantes e nas formas alucinantes que caracterizam este movimento artístico.",
      image: "../../../assets/agenda/psicodelico.png" // Adicione a imagem correspondente aqui
    }
  ];




}
