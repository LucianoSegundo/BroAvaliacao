import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pagina-recupe',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './pagina-recupe.component.html',
  styleUrl: './pagina-recupe.component.css'
})
export class PaginaRecupeComponent {
  constructor(){
    sessionStorage.setItem("redirecionamento", "login");
  }

  formulario = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(4)]),
    senha: new FormControl("", [Validators.required, Validators.minLength(4)]),
    cSenha: new FormControl("", [Validators.required, Validators.minLength(4)])
  });

  validarForm(){
    if(this.formulario.valid)
      if(this.formulario.value.senha == this.formulario.value.cSenha ) return false;
    return true;
  }
}
