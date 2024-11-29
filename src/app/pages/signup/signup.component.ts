import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeComponent, RouterLink ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent  {

  // Injeção do serviço Router
  constructor(private router: Router) {}

  confirmSignup(): void {
    console.log("Chamando função para abrir popup...\n");
    
    let txt: string;

    if (confirm("Todas as informações estão corretas?")) {
      txt = "Cadastro confirmado!";
      
      // Navegar para a tela inicial após confirmar
      this.router.navigate(['']);  // Aqui você usa o caminho da tela inicial (geralmente '/')
      
    } else {
      txt = "Você recusou o cadastro!";
    }

    // Opcional: exibir o texto gerado no console ou em algum outro lugar
    console.log(txt);
  }
}

