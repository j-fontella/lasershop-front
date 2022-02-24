import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cliente} from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = "http://localhost:8081/login/";

  constructor(private httpClient : HttpClient) { }

  public getClientes(){
    let uri = this.apiUrl + `usuarios`
    return this.httpClient.get(uri)
  }

  public cadastrarCliente(cliente:Cliente){
    let uri = this.apiUrl + "registrar"
    return this.httpClient.post(uri, {
      "nome" : cliente.nome,
      "id" : cliente.id,
      "endereco" : cliente.endereco,
      "limiteCredito" : cliente.limiteCredito,
      "limiteParcelas" : cliente.limiteParcelas
    })
  }

  public atualizarCliente(cliente:Cliente){
    let uri = this.apiUrl + "editar"
    return this.httpClient.put(uri, {
      "nome" : cliente.nome,
      "id" : cliente.id,
      "endereco" : cliente.endereco,
      "limiteCredito" : cliente.limiteCredito,
      "limiteParcelas" : cliente.limiteParcelas
    })
  }

  public getClientePorNome(nome: string) {
    let uri = this.apiUrl + `porNome?nome=${nome}`
    return this.httpClient.get(uri)
  }
}
