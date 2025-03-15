import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TarefasRequestDTO } from "../models/tarefas.request.dto";
import { Observable } from "rxjs";
import { TarefasResponseDTO } from "../models/tarefas.response.dto";
import { environment } from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TarefasService {


    constructor(private httpClient: HttpClient) {}


    /*
       Método para executar o serviço de cadastro de tarefa na API
    */
    criar(request: TarefasRequestDTO): Observable<TarefasResponseDTO> {
        return this.httpClient.post<TarefasResponseDTO>(environment.tarefasApi, request);
    }


    /*
       Método para executar o serviço de atualização de tarefa na API
    */
    alterar(id: string, request: TarefasRequestDTO): Observable<TarefasResponseDTO> {
        return this.httpClient.put<TarefasResponseDTO>(`${environment.tarefasApi}/${id}`, request);
    }


    /*
       Método para executar o serviço de exclusão de tarefa na API
    */
    excluir(id: string): Observable<TarefasResponseDTO> {
        return this.httpClient.delete<TarefasResponseDTO>(`${environment.tarefasApi}/${id}`);
    }


    /*
       Método para consultar todas as tarefas na API
    */
    consultar(usuarioId: string): Observable<TarefasResponseDTO[]> {
        return this.httpClient.get<TarefasResponseDTO[]>(`${environment.tarefasApi}?usuarioId=${usuarioId}`);
    }


    /*
       Método para consultar 1 tarefa na API
    */
    obter(id: string): Observable<TarefasResponseDTO> {
        return this.httpClient.get<TarefasResponseDTO>(`${environment.tarefasApi}/${id}`);
    }
}


