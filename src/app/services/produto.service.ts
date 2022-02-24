import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../models/produto";
import {Cliente} from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl = "http://localhost:8081/produtos/";

  constructor(private httpClient : HttpClient) { }

  public getProdutos() {
    let uri = this.apiUrl + `todos`
    return this.httpClient.get(uri)
  }

  public atualizarProduto(produto:Produto){
    let uri = this.apiUrl + "editar"
    return this.httpClient.put(uri, {
      "nome" : produto.nome,
      "id" : produto.id,
      "descricao" : produto.descricao,
      "valor" : produto.valor,
    })
  }

  public cadastrarProduto(produto: Produto) {
    let uri = this.apiUrl + "registrar"
    return this.httpClient.post(uri, {
      "nome" : produto.nome,
      "descricao" : produto.descricao,
      "valor" : produto.valor,
    })
  }

  public getProdutoPorNome(nome: string) {
    let uri = this.apiUrl + `porNome?nome=${nome}`
    return this.httpClient.get(uri)
  }

  public getProdutoPorId(id: string) {
    let uri = this.apiUrl + `porId?id=${id}`
    return this.httpClient.get(uri)
  }
}
