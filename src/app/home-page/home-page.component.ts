import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';
import {  MatInputModule} from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { Estado, Cidade } from '../DTOs/Estado';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule, MatSelectModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit{

ngAfterViewInit() {let redi = sessionStorage.getItem("redirecionamento");
  if(redi != null && redi == "login"){

       this.scrolar(redi);

    sessionStorage.removeItem("redirecionamento");
  }
}

  estados: Estado[] =[] ;
  cidades: Cidade[]= [];
  
  formulario = new FormGroup({
    login: new FormControl("", [Validators.required, Validators.minLength(4)]),
    senha: new FormControl("", [Validators.required, Validators.minLength(4)])
  });

  formCadastro = new FormGroup({
    nome: new FormControl("",[Validators.required, Validators.minLength(4)]),
    senha: new FormControl("",[Validators.required, Validators.minLength(4)]),
    confSenha: new FormControl("",[Validators.required, Validators.minLength(4)]),
    email: new FormControl("",[Validators.required, Validators.minLength(4), Validators.email]),
    data: new FormControl("",[Validators.required, Validators.minLength(10)]),
    cidade: new FormControl("",[Validators.required, Validators.minLength(5)]),
    estado: new FormControl("",[Validators.required, Validators.minLength(5)]),
    fperfil: new FormControl("")
  });

 
  scrolar(lugar:string){
    if("login" == lugar){ 
     window.scrollTo({
      top: window.innerHeight* 0.99,
      behavior:'smooth'

     });
    }
    else if("cadastro" == lugar){
      window.scrollTo({
        top: window.innerHeight* 1.89,
        behavior:'smooth'
  
       });
    }
    else if("cadastro2" == lugar){
      window.scrollTo({
        top: window.innerHeight* 0.90,
        behavior:'smooth'
  
       });
    }
  }
 
}
