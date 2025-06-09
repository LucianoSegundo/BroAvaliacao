export class cadastroUsuarioRequest{
    nome: string ;
    senha: string ;
    email: string ;
    data: string;
    cidade: string ;
    estado: string ;
    fperfil: File;
}

export class UsuarioResponse{
    nome: string ;
    cidade: string ;
    estado: string ;
    fperfil: File;
}