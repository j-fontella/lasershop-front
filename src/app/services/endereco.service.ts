import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private httpClient : HttpClient) { }

  public getEnderecoPorCep(cep:string){
    let uri = `https://viacep.com.br/ws/${cep}/json`
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        'content-type': 'application/json;charset=utf-8',
      }
    }
    return this.httpClient.get(uri,options)
  }
}
