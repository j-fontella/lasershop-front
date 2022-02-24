import { Component, OnInit } from '@angular/core';
import {EnderecoService} from "../../../services/endereco.service";
import {ClienteService} from "../../../services/cliente.service";
import {UtilsService} from "../../../services/utils.service";
import {Router} from "@angular/router";
import {ProdutoService} from "../../../services/produto.service";
import {Produto} from "../../../models/produto";

@Component({
  selector: 'app-produtos-cadastra',
  templateUrl: './produtos-cadastra.component.html',
  styleUrls: ['./produtos-cadastra.component.scss']
})
export class ProdutosCadastraComponent implements OnInit {

  constructor(private produtoService : ProdutoService,
              private utils : UtilsService,
              private router : Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    let produto = new Produto();
    let nomeInput = document.querySelector("#nome") as HTMLInputElement;
    let descricaoInput = document.querySelector("#descricao") as HTMLInputElement;
    let valorInput = document.querySelector("#valor") as HTMLInputElement;

    if(nomeInput && nomeInput.value
      && descricaoInput && descricaoInput.value
      && valorInput && valorInput.value
    ){

      produto.nome = nomeInput.value
      produto.descricao = descricaoInput.value
      produto.valor = valorInput.value
      this.produtoService.cadastrarProduto(produto).subscribe(data =>{
        alert("Produto cadastrado com sucesso!")
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
