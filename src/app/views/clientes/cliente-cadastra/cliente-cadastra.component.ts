import { Component, OnInit } from '@angular/core';
import {EnderecoService} from "../../../services/endereco.service";
import {ClienteService} from "../../../services/cliente.service";
import {UtilsService} from "../../../services/utils.service";
import {Cliente} from "../../../models/cliente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cliente-cadastra',
  templateUrl: './cliente-cadastra.component.html',
  styleUrls: ['./cliente-cadastra.component.scss']
})
export class ClienteCadastraComponent implements OnInit {

  constructor(private enderecoService : EnderecoService,
              private clienteService : ClienteService,
              private utils : UtilsService,
              private router : Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarCliente() {
    let cliente = new Cliente();
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
        "cep" : cep,
        "logradouro" : logradouro,
        "numero" : numero,
        "complemento" : complemento,
        "bairro" : bairro,
        "cidade" : cidade,
        "uf" : uf,
      }
      cliente.nome = nomeInput.value
      cliente.limiteParcelas = limiteParcelasInput.value
      cliente.limiteCredito = limiteCreditoInput.value
      cliente.endereco = endereco
      this.clienteService.cadastrarCliente(cliente).subscribe(data =>{
        alert("Cliente cadastrado com sucesso!")
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

  redirecionarclientes() {
    this.router.navigate(["clientes"])
  }
}
