import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EnderecoService} from "../../../services/endereco.service";
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../../services/cliente.service";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-cliente-detalha',
  templateUrl: './cliente-detalha.component.html',
  styleUrls: ['./cliente-detalha.component.scss']
})
export class ClienteDetalhaComponent implements OnInit {

  constructor(private router : Router,
              private enderecoService : EnderecoService,
              private clienteService : ClienteService,
              private utils : UtilsService
  ) { }
  public cliente : any

  ngOnInit(): void {
    let rota : any = this.router
    if(rota.lastSuccessfulNavigation.extras.state){
      this.cliente = rota.lastSuccessfulNavigation.extras.state.cliente;
    }else{
      this.redirecionarclientes()
      return;
    }

  }

  atualizarCliente() {
    let cliente = new Cliente();
    let idInput = document.querySelector("#idCliente") as HTMLInputElement;
    let nomeInput = document.querySelector("#nome") as HTMLInputElement;
    let limiteCreditoInput = document.querySelector("#limiteCredito") as HTMLInputElement;
    let limiteParcelasInput = document.querySelector("#limiteParcelas") as HTMLInputElement;
    let cepInput = document.querySelector("#cep") as HTMLInputElement;
    let logradouroInput = document.querySelector("#logradouro") as HTMLInputElement;
    let numeroInput = document.querySelector("#numero") as HTMLInputElement;
    let complementoInput = document.querySelector("#complemento") as HTMLInputElement;
    let bairroInput = document.querySelector("#bairro") as HTMLInputElement;
    let cidadeInput = document.querySelector("#cidade") as HTMLInputElement;
    let ufInput = document.querySelector("#uf") as HTMLInputElement;
    if(nomeInput && cepInput && nomeInput.value && cepInput.value
      && limiteCreditoInput && limiteCreditoInput.value
      && limiteParcelasInput && limiteParcelasInput.value
      && idInput && idInput.value
      && logradouroInput && logradouroInput.value
      && numeroInput && numeroInput.value
      && bairroInput && bairroInput.value
      && cidadeInput && cidadeInput.value
      && ufInput && ufInput.value){
      let cep = cepInput.value
      let logradouro = logradouroInput.value
      let numero = numeroInput.value
      let complemento = complementoInput.value.length > 0 ? complementoInput.value : null;
      let bairro = bairroInput.value
      let cidade = cidadeInput.value
      let uf = ufInput.value
      let endereco = {
        "id" : this.cliente.endereco.id,
        "cep" : cep,
        "logradouro" : logradouro,
        "numero" : numero,
        "complemento" : complemento,
        "bairro" : bairro,
        "cidade" : cidade,
        "uf" : uf,
      }
      cliente.id = idInput.value
      cliente.nome = nomeInput.value
      cliente.limiteParcelas = limiteParcelasInput.value
      cliente.limiteCredito = limiteCreditoInput.value
      cliente.endereco = endereco
      this.clienteService.atualizarCliente(cliente).subscribe(data =>{
        alert("Cliente atualizado com sucesso!")
        this.router.navigate(["clientes"])
      },error =>{
        console.log(error)
        let msgErro = document.querySelector("#msgErro") as HTMLElement;
        let msg : string = this.utils.getErrorMsg(error, "cliente")
        msgErro.innerHTML = msg ? msg : "Erro ao registrar cliente.";
      })
    }else{
      alert("Preencha todos os dados corretamente;")
    }


  }

  redirecionarclientes() {
    this.router.navigate(["clientes"])
  }

  public getEndereco(){
    let cep = document.querySelector("#cep") as HTMLInputElement;
    let logradouro = document.querySelector("#logradouro") as HTMLInputElement;
    let bairro = document.querySelector("#bairro") as HTMLInputElement;
    let cidade = document.querySelector("#cidade") as HTMLInputElement;
    let uf = document.querySelector("#uf") as HTMLInputElement;
    if(cep && cep.value){
      this.enderecoService.getEnderecoPorCep(cep.value).subscribe(data =>{
        let endereco : any = data
        if(endereco.erro){
          alert("CEP inválido");
          return;
        }
        bairro.value = endereco.bairro
        cidade.value = endereco.localidade
        uf.value = endereco.uf
        logradouro.value = endereco.logradouro
      },error => {
        console.log(error)
      })
    }
  }

}
