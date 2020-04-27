import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../carteira.service';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  listaFixa = [];
  listaUnica = [];

  constructor(private carteira:CarteiraService, public global: GlobalService) { }

  ngOnInit() {
    this.listaFixa = this.carteira.getReceitaListaFixa();
    this.listaUnica = this.carteira.getReceitaListaUnica();
  }
  
  deleteItem(recno: number, type: string, receita: boolean) {
    console.log(' Entrei em apagar receita ==>',recno, type, receita);
    this.carteira.deleteItemCarteira(recno, type, receita);
  }

}
