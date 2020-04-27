import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../carteira.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  registro = {
    titulo:"",
    descricao:"",
    receita:false,
    tipo:"fixa",
    dia:1,
    valor:0, // 45.99
    category:"Food"
  };

  constructor(private carteira:CarteiraService,public modalController: ModalController) { }

  ngOnInit() {
  }

  addRegistro(){
    if(this.registro.titulo == "" || this.registro.valor == 0 || !this.registro.valor || this.registro.valor <= 0){
      return;
    }

    if(this.registro.receita){
      this.carteira.addReceita(this.registro);
    }else{
      this.carteira.addDespesa(this.registro);
    }
    this.modalController.dismiss();
  }

  cancelar(){
    this.modalController.dismiss();
  }

}
