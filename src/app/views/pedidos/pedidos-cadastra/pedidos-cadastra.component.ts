import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";
import {ProdutoService} from "../../../services/produto.service";
import {Produto} from "../../../models/produto";
import {Carrinho} from "../../../models/carrinho";
import {ProdutoCarrinho} from "../../../models/produtocarrinho";
import {PedidosService} from "../../../services/pedidos.service";
import {Router} from "@angular/router";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-pedidos-cadastra',
  templateUrl: './pedidos-cadastra.component.html',
  styleUrls: ['./pedidos-cadastra.component.scss']
})
export class PedidosCadastraComponent implements OnInit {
  public produtos : Produto[] = []
  public carrinho : Carrinho = new Carrinho();
  constructor(private clienteService : ClienteService,
              private produtoService : ProdutoService,
              private pedidoService : PedidosService,
              private router : Router,
              private utils : UtilsService) { }

  ngOnInit(): void {
    this.carrinho.produtos = []
    let clienteSelect = document.querySelector("#cliente");
    let produtoSelect = document.querySelector("#produtos")
    this.clienteService.getClientes().subscribe(data => {
      console.log(data)
      for (let dataKey in data) {
        // @ts-ignore
        let cliente = data[dataKey];
        let option = document.createElement("option");
        option.value = cliente.id;
        option.innerHTML = cliente.nome;
        // @ts-ignore
        clienteSelect.appendChild(option)
      }
    })

    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data as unknown as Produto[]
      for (let dataKey in data) {
        // @ts-ignore
        let produto = data[dataKey];
        let option = document.createElement("option");
        option.value = produto.id;
        option.innerHTML = produto.nome;
        // @ts-ignore
        produtoSelect.appendChild(option)
      }
    })

  }

  redirecionarPedidos() {

  }

  finalizarPedido() {
    let cliente = document.querySelector("#cliente") as HTMLSelectElement
    let parcelas = document.querySelector("#parcelas") as HTMLInputElement
    let idsProdutos = []
    for (const produto of this.carrinho.produtos) {
      if(produto){
        idsProdutos.push(produto.id)
      }
    }
    let pedidoRequest = {
      "idProdutosComprados" : idsProdutos,
      "parcelas" : parcelas.value,
      "idUsuario" : cliente.value
    }
    this.pedidoService.cadastrarPedido(pedidoRequest).subscribe(data =>{
      alert("Pedido cadastrado com sucesso!")
      this.router.navigate(["pedidos"])
    },error =>{
      console.log(error)
      let msgErro = document.querySelector("#msgErro") as HTMLElement;
      let msg : string = this.utils.getErrorMsg(error, "cliente")
      msgErro.innerHTML = msg ? msg : "Erro ao registrar cliente.";
    })
  }

  adicionarCarrinho() {
    let produtoSelect = document.querySelector("#produtos") as HTMLSelectElement
    let idProduto = produtoSelect.value
    let produto : any = this.produtos.find(value => {
      return value.id == idProduto;
    })
    this.carrinho.produtos.push(produto)
    alert(produto.nome + " adicionado no carrinho.")
    this.setupCarrinho()
  }

  setupCarrinho(){
    let produtoTabela = document.querySelector("#produtoTabela") as any
    produtoTabela.innerHTML = ""
    let total = 0;
    this.carrinho.produtos.forEach(pdt => {
      total += pdt.valor
      let tr = document.createElement("tr");
      let produto = document.createElement("td");
      let valor = document.createElement("td");
      let remover = document.createElement("td");
      produto.textContent = pdt.nome
      // @ts-ignore
      valor.textContent = pdt.valor
      remover.textContent = "X"
      remover.style.cursor = "pointer"
      // @ts-ignore
      remover.addEventListener("click",() =>{
        this.removerCarrinho(pdt.id)
      })
      produtoTabela.appendChild(tr)
      tr.appendChild(produto)
      tr.appendChild(valor)
      tr.appendChild(remover)
    })
    let totalCompra = document.querySelector("#totalCompra") as any
    totalCompra.innerText = total.toFixed(2)

  }

  removerCarrinho(id : any){
    for (let i in this.carrinho.produtos) {
        let produto = this.carrinho.produtos[i]
      if(produto.id == id){
        delete this.carrinho.produtos[i];
        break;
      }
    }
    alert("Produto removido com sucesso")
    this.setupCarrinho()
  }


}
