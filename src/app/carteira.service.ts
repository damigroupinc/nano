import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  listaReceitaFixa = [];
  listaReceitaUnica = [];
  listaDespesaFixa = [];
  listaDespesaUnica = [];
  listaGeral = [];

  receitaTotal = 0;
  despesaTotal = 0;
  valorDisponivelMes = 0;

  constructor(private storage: Storage) {

    this.storage.get('listaReceitaFixa').then((val) => {
      if (val) {
        this.listaReceitaFixa = val;
      }
    });
    this.storage.get('listaReceitaUnica').then((val) => {
      if (val) {
        this.listaReceitaUnica = val;
      }
    });
    this.storage.get('listaDespesaFixa').then((val) => {
      if (val) {
        this.listaDespesaFixa = val;
      }
    });
    this.storage.get('listaDespesaUnica').then((val) => {
      if (val) {
        this.listaDespesaUnica = val;
      }
    });
    this.storage.get('listaGeral').then((val) => {
      if (val) {
        this.listaGeral = val;
      }
    });
    this.storage.get('receitaTotal').then((val) => {
      if (val) {
        this.receitaTotal = val;
      }
    });
    this.storage.get('despesaTotal').then((val) => {
      if (val) {
        this.despesaTotal = val;
      }
    });
    this.storage.get('valorDisponivelMes').then((val) => {
      if (val) {
        this.valorDisponivelMes = val;
      }
    });
  }

  getReceita() {
    return this.receitaTotal;
  }
  getDespesa() {
    return this.despesaTotal;
  }
  getValorDisponivelMes() {
    return this.valorDisponivelMes;
  }

  getReceitaListaFixa() {
    return this.listaReceitaFixa;
  }
  getReceitaListaUnica() {
    return this.listaReceitaUnica;
  }
  getDespesaListaFixa() {
    return this.listaDespesaFixa;
  }
  getDespesaListaUnica() {
    return this.listaDespesaUnica;
  }
  getGeralLista() {
    return this.listaGeral;
  }

  addReceita(registro) {
    if (registro.tipo == "fixa") {
      this.listaReceitaFixa.unshift(registro);
      this.storage.set('listaReceitaFixa', this.listaReceitaFixa);
    } else {
      this.listaReceitaUnica.unshift(registro);
      this.storage.set('listaReceitaUnica', this.listaReceitaUnica);
    }
    this.listaGeral.unshift(registro);
    this.storage.set('listaGeral', this.listaGeral);
  }

  addDespesa(registro) {
    if (registro.tipo == "fixa") {
      this.listaDespesaFixa.unshift(registro);
      this.storage.set('listaDespesaFixa', this.listaDespesaFixa);
    } else {
      this.listaDespesaUnica.unshift(registro);
      this.storage.set('listaDespesaUnica', this.listaDespesaUnica);
    }
    this.listaGeral.unshift(registro);
    this.storage.set('listaGeral', this.listaGeral);
  }

  deleteItemCarteira(recno: number, type: string, receita: boolean) {
    if (receita) {
      if (type == 'fixa') {
        console.log(' entrei na opcao de deletar da carteira de servicos==> receita type fixo: ', recno, type, receita);
        this.listaReceitaFixa.splice(recno, 1);
        this.storage.set('listaReceitaFixa', this.listaReceitaFixa);
      } else if (type == 'Single') {
        console.log(' entrei na opcao de deletar da carteira de servicos==> receita type unica:', recno, type, receita);
        this.listaReceitaFixa.splice(recno, 1);
        this.storage.set('listaReceitaUnica', this.listaReceitaUnica);
      }
    } else {
      if (type == 'fixa') {
        console.log(' entrei na opcao de deletar da carteira de servicos  ==> despesas type fixo:', recno, type, receita);
        this.listaDespesaFixa.splice(recno, 1);
        this.storage.set('listaDespesaFixa', this.listaDespesaFixa);
      } else if (type == 'Single') {
        console.log(' entrei na opcao de deletar da carteira de servicos ==> despesas type fixo:', recno, type, receita);
        this.listaDespesaUnica.splice(recno, 1);
        this.storage.set('listaDespesaUnica', this.listaDespesaUnica);
      }
      else {
        if (type == 'geral') {
          console.log(' entrei na opcao de deletar da carteira de servicos ==> despesas e receitas type geral:', recno, type, receita);
        this.listaGeral.splice(recno, 1);
        this.storage.set('listaGeral', this.listaGeral);
        }
      }
    }
    this.listaGeral.unshift(recno);
    this.storage.set('listaGeral', this.listaGeral);
    this.atualizaTotalValorReceitaDespesa();
  }

  calculaTotalLista(lista) {
    let total = 0;
    for (let item of lista) {
      total += parseFloat(item.valor);
    }
    return total;
  }

  atualizaTotalValorReceitaDespesa() {
    this.receitaTotal = this.calculaTotalLista(this.listaReceitaFixa) + this.calculaTotalLista(this.listaReceitaUnica);
    this.despesaTotal = this.calculaTotalLista(this.listaDespesaFixa) + this.calculaTotalLista(this.listaDespesaUnica);
    this.valorDisponivelMes = this.receitaTotal - this.despesaTotal;

    this.storage.set('receitaTotal', this.receitaTotal);
    this.storage.set('despesaTotal', this.despesaTotal);
    this.storage.set('valorDisponivelMes', this.valorDisponivelMes);
  };

  alterarMes() {
    this.listaReceitaUnica = [];
    this.listaDespesaUnica = [];
    this.storage.set('listaReceitaUnica', this.listaReceitaUnica);
    this.storage.set('listaDespesaUnica', this.listaDespesaUnica);
    let novaLista = [];
    for (let item of this.listaGeral) {
      if (item.tipo == "fixa") {
        novaLista.push(item);
      }
    }
    this.listaGeral = novaLista;
    this.storage.set('listaGeral', this.listaGeral);

    if (this.valorDisponivelMes > 0) {
      this.addReceita({
        titulo: "Income",
        descricao: "Last month",
        receita: true,
        tipo: "Single",
        dia: 1,
        valor: this.valorDisponivelMes
      });
    }
    if (this.valorDisponivelMes < 0) {
      this.valorDisponivelMes = this.valorDisponivelMes * -1;
      this.addDespesa({
        titulo: "Expense",
        descricao: "Last Month",
        receita: false,
        tipo: "Single",
        dia: 1,
        valor: this.valorDisponivelMes
      });
    }
  }
}
