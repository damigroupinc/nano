import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../carteira.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.page.html',
  styleUrls: ['./mes.page.scss'],
})
export class MesPage implements OnInit {

  constructor(private carteira:CarteiraService,public modalController: ModalController) { }

  ngOnInit() {
  }

  alterarMes(){
    this.carteira.alterarMes();
    this.modalController.dismiss();
  }

  cancelar(){
    this.modalController.dismiss();
  }

}
