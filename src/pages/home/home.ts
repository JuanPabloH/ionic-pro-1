import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares: any=[];
  constructor(public navCtrl: NavController, public lugaresService: LugaresService) {
  //this.lugaresService.getLugares().valueChanges();

  }
  navegarALugar(name){
    this.navCtrl.push(LugarPage,{nombre:name});
  }
  irAVistaDetalleLugar(lugar){
    this.navCtrl.push(LugarPage,{lugar:lugar});
  }
  irAVistaDeDetalle(){
    this.navCtrl.push(LugarPage,{lugar:{}});
  }
}
