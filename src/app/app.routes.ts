import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PaginaRecupeComponent } from './pagina-recupe/pagina-recupe.component';

export const routes: Routes = [
   {path: "", component:HomePageComponent},
   {path: "recuperar", component:PaginaRecupeComponent}
];
