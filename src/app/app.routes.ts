import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeirasComponent } from './pages/feiras/feiras.component';
import { ExposicoesComponent } from './pages/exposicoes/exposicoes.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },
    {
        path: "feiras",
        component: FeirasComponent
    },
    {
        path: "exposicoes",
        component: ExposicoesComponent
    },
    {
        path: "artistas",
        component: ArtistasComponent
    },
    {
        path: "editorial",
        component: EditorialComponent
    }
    ,
    {
        path: "login",
        component: LoginComponent
    }
    
];
