import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { ClientesmenuComponent } from './views/clientes/clientesmenu/clientesmenu.component';
import {OrderListModule} from "primeng/orderlist";
import {HttpClientModule} from "@angular/common/http";
import { ClienteDetalhaComponent } from './views/clientes/cliente-detalha/cliente-detalha.component';
import { ClienteCadastraComponent } from './views/clientes/cliente-cadastra/cliente-cadastra.component';
import { ProdutosmenuComponent } from './views/produtos/produtosmenu/produtosmenu.component';
import { ProdutosCadastraComponent } from './views/produtos/produtos-cadastra/produtos-cadastra.component';
import { ProdutosDetalhaComponent } from './views/produtos/produtos-detalha/produtos-detalha.component';
import { PedidosmenuComponent } from './views/pedidos/pedidosmenu/pedidosmenu.component';
import { PedidosCadastraComponent } from './views/pedidos/pedidos-cadastra/pedidos-cadastra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesmenuComponent,
    ClienteDetalhaComponent,
    ClienteCadastraComponent,
    ProdutosmenuComponent,
    ProdutosCadastraComponent,
    ProdutosDetalhaComponent,
    PedidosmenuComponent,
    PedidosCadastraComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    OrderListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
