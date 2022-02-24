import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EnderecoService} from "../../../services/endereco.service";
import {ClienteService} from "../../../services/cliente.service";
import {UtilsService} from "../../../services/utils.service";
import {ProdutoService} from "../../../services/produto.service";
import {Cliente} from "../../../models/cliente";
import {Produto} from "../../../models/produto";

@Component({
  selector: 'app-produtos-detalha',
  templateUrl: './produtos-detalha.component.html',
  styleUrls: ['./produtos-detalha.component.scss']
})
export class ProdutosDetalhaComponent implements OnInit {

  public produto : any

  constructor(private router : Router,
              private enderecoService : EnderecoService,
              private produtoService : ProdutoService,
              private utils : UtilsService
  ) { }

  ngOnInit(): void {
    let rota : any = this.router
    if(rota.lastSuccessfulNavigation.extras.state){
      this.produto = rota.lastSuccessfulNavigation.extras.state.produto;
    }else{
      this.redirecionarProdutos()
      return;
    }

  }

  atualizarProduto() {
    let produto = new Produto();
    let idInput = document.querySelector("#idProduto") as HTMLInputElement;
    let nomeInput = document.querySelector("#nome") as HTMLInputElement;
    let descricaoInput = document.querySelector("#descricao") as HTMLInputElement;
    let valorInput = document.querySelector("#valor") as HTMLInputElement;

    if(idInput && idInput.value
      && nomeInput && nomeInput.value
      && descricaoInput && descricaoInput.value
      && valorInput && valorInput.value
      ){

      produto.id = idInput.value
      produto.nome = nomeInput.value
      produto.descricao = descricaoInput.value
      produto.valor = valorInput.value
      this.produtoService.atualizarProduto(produto).subscribe(data =>{
        alert("Produto atualizado com sucesso!")
        this.router.navigate(["produtos"])
      },error =>{
        console.log(error)
        let msgErro = document.querySelector("#msgErro") as HTMLElement;
        let msg : string = this.utils.getErrorMsg(error, "produto")
        msgErro.innerHTML = msg ? msg : "Erro ao registrar produto.";
      })
    }else{
      alert("Preencha todos os dados corretamente;")
    }


  }

  redirecionarProdutos() {
    this.router.navigate(["produtos"])
  }
}
