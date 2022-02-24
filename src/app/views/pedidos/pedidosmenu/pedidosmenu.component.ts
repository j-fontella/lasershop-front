import { Component, OnInit } from '@angular/core';
import {Pedido} from "../../../models/pedido";
import {Router} from "@angular/router";
import {PedidosService} from "../../../services/pedidos.service";
import {Produto} from "../../../models/produto";

@Component({
  selector: 'app-pedidosmenu',
  templateUrl: './pedidosmenu.component.html',
  styleUrls: ['./pedidosmenu.component.scss']
})
export class PedidosmenuComponent implements OnInit {

  public listaPedidos : Pedido[] = [];
  private dadosPedidos : any[] = [];

  constructor(private router : Router, private pedidosService : PedidosService) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  redirecionarCadastro() {
    this.router.navigate(["pedidoscadastra"])
  }

  redirecionarGeral() {
    this.router.navigate([""])
  }

  getPedidos(){
    this.pedidosService.getPedidos().subscribe(data =>{
      let ret = data as any
      this.listaPedidos = ret.dadosExibicao as unknown as Pedido[];
      this.dadosPedidos = ret.dadosPedidos
      console.log(this.dadosPedidos)
    })
  }

  detalhesPedido(id : any) {
    let pedidoDetalhado = this.dadosPedidos.find(value => {
      return value.id = id;
    })
    let detalhes = `Pedido ID: ${pedidoDetalhado.id} - Parcelas ${pedidoDetalhado.parcelas}`
    alert(detalhes)
  }


}
