import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../carteira.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage implements OnInit {

  listaFixa = [];
  listaUnica = [];

  constructor(private carteira:CarteiraService,
    public global: GlobalService, ) { }

  ngOnInit() {
    this.listaFixa = this.carteira.getDespesaListaFixa();
    this.listaUnica = this.carteira.getDespesaListaUnica();
  }

  deleteItem(recno: number, type: string, receita: boolean) {
    console.log(recno, type, receita);
    this.carteira.deleteItemCarteira(recno, type, receita);
    
  }

}
