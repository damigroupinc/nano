import { CarteiraService } from '../carteira.service';
import { ModalController } from '@ionic/angular';
import { FormularioPage } from '../formulario/formulario.page';
import { MesPage } from '../mes/mes.page';

import { GlobalService } from '../global.service';

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {  
  @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas: ElementRef;
  
  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  
  receita: number;
  despesa: number;
  valorDisponivelMes: number;
  listaGeral = [];
  despesaListaFixa = []; 
  despesaListaUnica = []; 
  
  constructor(
    private carteira: CarteiraService,
    public modalController: ModalController,
    public global: GlobalService,
    ) {
    setTimeout(() => {
      this.atualiza();
    }, 2000);
  }

  ngOnInit() {
    this.atualiza();
    
    let arrayPets = 10;
    let arrayHouse = 20;
    let arrayEducation = 30;
    let arrayTax = 40;
    let arrayHobbies = 60;
    let arrayOthers = 80;
    
    console.log(' despesa fixa ==> ', this.despesaListaFixa);
    console.log(' carteira ==>', this.carteira.getDespesaListaFixa);

    for ( let item of this.despesaListaFixa ) {
      console.log(' item ===> ', item);
      if      (item.category == "Pets") {
        arrayPets = arrayPets + item.valor;
      }
      else if (item.category == "House") {
        arrayHouse = arrayHouse  + item.valor;
      }
      else if (item.category == "Education") {
        arrayEducation = arrayEducation + item.valor;
      }
      else if (item.category == "Tax") {
        arrayTax = arrayTax + item.valor;
      }        
      else if (item.category == "Hobbies") {
        arrayHobbies = arrayHobbies + item.valor;
      }
      else if (item.category == "Others") {
        arrayOthers = arrayOthers + item.valor;
      }
    };
    
    console.log(arrayPets, arrayHouse, arrayEducation, arrayTax, arrayHobbies, arrayOthers);
    
    
    let json = JSON.parse('{ "Pets":10, "House":20, "Education":30, "Tax":40, "Hobbies":50, "Others":60 }');
    // cria uma array para nomes e valore
    let nomes = [];
    let valores = [];
    // percorre o json
    for(let i in json){
       // adiciona na array nomes a key do campo do json
       nomes.push(i);
       // adiciona na array de valore o value do campo do json
       valores.push(json[i]);
    }
    

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      options: { 
        responsive: true, 
        legend: { position: 'bottom'}, 
        animation: {animateRotate: true, animateScale: true}, 
      },
      data: {
        labels: nomes,
        datasets: [
          {
            label: "Category",
            data: valores,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  }

  isEmpty(obj) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].valor > 0) {
        return true;
      }
    }
    return false;
  }

  canHaveLink(type: string) {
    if (type == "receita") {
      if (this.carteira.receitaTotal > 0) {
        return true;
      } else { return false; }
    } else if (type == "despesa") {
      if (this.carteira.despesaTotal > 0) {
        return true;
      } else { return false; }
    }
  }

  atualiza() {
    this.carteira.atualizaTotalValorReceitaDespesa();
    this.receita = this.carteira.getReceita();
    this.despesa = this.carteira.getDespesa();
    this.valorDisponivelMes = this.carteira.getValorDisponivelMes();
    this.listaGeral = this.carteira.getGeralLista();
    this.despesaListaFixa = this.carteira.getDespesaListaFixa();
    this.despesaListaUnica = this.carteira.getDespesaListaUnica();
  }

  async abreModal(tipo) {
    let componente;
    if (tipo == "abrirFormulario") {
      componente = FormularioPage;
    } else {
      componente = MesPage;
    }
    const modal = await this.modalController.create({
      component: componente,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  deleteItem(recno: number, type: string, receita: boolean) {
    console.log(' emilio dami silva', recno, type, receita);
    this.carteira.deleteItemCarteira(recno, "geral", false);
  }
}
