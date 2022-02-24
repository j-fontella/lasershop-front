import { Component, OnInit } from '@angular/core';
import {Produto} from "../../../models/produto";
import {Router} from "@angular/router";
import {ProdutoService} from "../../../services/produto.service";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-produtosmenu',
  templateUrl: './produtosmenu.component.html',
  styleUrls: ['./produtosmenu.component.scss']
})
export class ProdutosmenuComponent implements OnInit {
  public listaProdutos : Produto[] = [];
  constructor(private router : Router,
              private produtoService : ProdutoService,
              private utils : UtilsService
              ) { }

  ngOnInit(): void {
    this.getProdutos()
  }

  redirecionarGeral() {
    this.router.navigate([""])
  }

  redirecionarCadastro() {
    this.router.navigate(["produtoscadastra"])
  }

  redirecionarProduto(produto: Produto) {
    this.router.navigate(["produtosdetalhe"], { state: { "produto" : produto } })
  }

  private getProdutos(){
    this.produtoService.getProdutos().subscribe(data => {
      this.listaProdutos = data as unknown as Produto[];
    } )
  }

  pesquisarPorId() {
    let idPesquisaInput = document.querySelector("#idPesquisa") as HTMLInputElement;
    if(idPesquisaInput && idPesquisaInput.value){
      this.produtoService.getProdutoPorId(idPesquisaInput.value).subscribe(data => {
        let produto = data as Produto
        this.redirecionarProduto(produto)
      },error => {
        let msg : string = this.utils.getErrorMsg(error, "produto")
        alert(msg ? msg : "Erro ao pesquisar produto.")
      } )
    }else{
      alert("Preencha o nome corretamente.")
    }
  }

  pesquisarPorNome() {
    let nomePesquisaInput = document.querySelector("#nomePesquisa") as HTMLInputElement;
    if(nomePesquisaInput && nomePesquisaInput.value){
      this.produtoService.getProdutoPorNome(nomePesquisaInput.value).subscribe(data => {
        let produto = data as Produto
        this.redirecionarProduto(produto)
      },error => {
        let msg : string = this.utils.getErrorMsg(error, "produto")
        alert(msg ? msg : "Erro ao pesquisar produto.")
      } )
    }else{
      alert("Preencha o nome corretamente.")
    }
  }
}
