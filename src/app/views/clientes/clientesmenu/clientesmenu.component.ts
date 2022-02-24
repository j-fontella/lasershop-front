import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../../models/cliente";
import {Router} from "@angular/router";
import {ClienteService} from "../../../services/cliente.service";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-clientesmenu',
  templateUrl: './clientesmenu.component.html',
  styleUrls: ['./clientesmenu.component.scss']
})
export class ClientesmenuComponent implements OnInit {

  public listaClientes: Cliente[] = [];

  constructor(public router : Router, private clienteService : ClienteService, private utils : UtilsService) { }

  ngOnInit(): void {
    this.getClientes()
  }

  redirecionarGeral() {
    this.router.navigate([""])
  }

  private getClientes(){
    this.clienteService.getClientes().subscribe(data => {
      this.listaClientes = data as unknown as Cliente[];
    } )
  }

  public redirecionarPaciente(cliente:Cliente){
    this.router.navigate(["clientedetalhe"], { state: { "cliente" : cliente } })
  }

  redirecionarCadastro() {
    this.router.navigate(["clientecadastra"])
  }

  pesquisarPorNome() {
    let nomePesquisaInput = document.querySelector("#nomePesquisa") as HTMLInputElement;
    if(nomePesquisaInput && nomePesquisaInput.value){
      this.clienteService.getClientePorNome(nomePesquisaInput.value).subscribe(data => {
        let cliente = data as Cliente
        this.redirecionarPaciente(cliente)
      },error => {
        let msg : string = this.utils.getErrorMsg(error, "produto")
        alert(msg ? msg : "Erro ao registrar produto.")
      } )
    }else{
      alert("Preencha o nome corretamente.")
    }
  }
}
