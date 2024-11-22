import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { cadastroUsuarioRequest, UsuarioResponse } from '../../DTOs/cadastroDTO';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { loginRequest, loginResponse } from '../../DTOs/LoginDTO';
import { recuperarRequest } from '../../DTOs/recuperarSenha';
import { Estado } from '../../DTOs/Estado';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private router: Router) { }

  private urlUsuario: string = environment.urlBase + "/usuario";

  cadastrarUsuario(body:cadastroUsuarioRequest): Observable<UsuarioResponse>{
    return  this.http.post<UsuarioResponse>(this.urlUsuario +"/cadastrar" , body);
  }

  LogarUsuario(body:loginRequest): Observable<loginResponse>{
    return  this.http.post<loginResponse>(this.urlUsuario +"/logar" , body);
  }

  RecuperarSenha(body:recuperarRequest): Observable<UsuarioResponse>{
    return  this.http.post<UsuarioResponse>(this.urlUsuario +"/recuperar" , body);
  }

  private urlEstado: string = environment.urlBase + "/Estados";

  requerirEstados(): Observable<Estado[]>{
    return  this.http.get<Estado[]>(this.urlEstado);
  }


  verificarErro(error: HttpErrorResponse): boolean {
    if (error.status == 0) {
      
      sessionStorage.clear();
      alert("De alguma forma não foi possivel se conectar ao servidor")

      setTimeout(() => {
        sessionStorage.setItem("redirecionamento", "login");
        this.router.navigate(['/']);
      }, 1000);
      return true;
    }
    else if (error.status === 401) {

      if (sessionStorage.getItem("token") != null) {
        alert("sessão expirou, necessário refazer o login");
      }
      else
        alert("é necessário estar logado para acessar este conteudo");

      sessionStorage.clear();
      setTimeout(() => {
        sessionStorage.setItem("redirecionamento", "login");
        this.router.navigate(['/']);
      }, 1000);

      return true;
    }
    return false;
  }
}
