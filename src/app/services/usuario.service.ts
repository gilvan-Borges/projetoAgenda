import { HttpClient } from "@angular/common/http";
import { RegisterRequestDTO } from "../models/register.request.dto";
import { Observable } from "rxjs";
import { RegisterResponseDto } from "../models/register.response.dto";
import { environment } from "../../environments/environment.development";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    /*
    Método construtor da classe utilizado para injeção de depenencia o serviço de HttpClient
    */

    constructor(private httpClient: HttpClient) {}
    /*
    Método responsável por realizar a requisição POST para api de usuários 
    */
    register(request: RegisterRequestDTO) : Observable<RegisterResponseDto>{
        return this.httpClient.post<RegisterResponseDto>(environment.usuariosApi, request);
    }
}