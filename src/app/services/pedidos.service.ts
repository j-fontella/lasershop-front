import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../models/produto";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  apiUrl = "http://localhost:8081/pedidos/";


  constructor(private httpClient : HttpClient) { }

  public getPedidos() {
    let uri = this.apiUrl + `todos`
    return this.httpClient.get(uri)
  }

  public cadastrarPedido(pedido:any) {
    let uri = this.apiUrl + "registrar"
    return this.httpClient.post(uri, pedido)
  }
}
