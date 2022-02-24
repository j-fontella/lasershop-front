import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ClientesmenuComponent} from "./views/clientes/clientesmenu/clientesmenu.component";
import {ClienteDetalhaComponent} from "./views/clientes/cliente-detalha/cliente-detalha.component";
import {ClienteCadastraComponent} from "./views/clientes/cliente-cadastra/cliente-cadastra.component";
import {ProdutosmenuComponent} from "./views/produtos/produtosmenu/produtosmenu.component";
import {ProdutosDetalhaComponent} from "./views/produtos/produtos-detalha/produtos-detalha.component";
import {ProdutosCadastraComponent} from "./views/produtos/produtos-cadastra/produtos-cadastra.component";
import {PedidosmenuComponent} from "./views/pedidos/pedidosmenu/pedidosmenu.component";
import {PedidosCadastraComponent} from "./views/pedidos/pedidos-cadastra/pedidos-cadastra.component";

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "clientes",
    component : ClientesmenuComponent
  },
  {
    path : "clientedetalhe",
    component : ClienteDetalhaComponent
  },
  {
    path : "clientecadastra",
    component : ClienteCadastraComponent
  },
  {
    path : "produtos",
    component : ProdutosmenuComponent
  },
  {
    path : "produtosdetalhe",
    component : ProdutosDetalhaComponent
  },
  {
    path : "produtoscadastra",
    component : ProdutosCadastraComponent
  },
  {
    path : "pedidos",
    component : PedidosmenuComponent
  },
  {
    path : "pedidoscadastra",
    component : PedidosCadastraComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
