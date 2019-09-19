import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LugaresService } from '../../services/lugares.service';


/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar:any = { };
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService:LugaresService) {
    this.lugar=navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }
  guardarLugar(){
    if (!this.lugar.id) {
      this.lugar.id=Date.now();//generar fecha en milisegundos  
    }
    
    this.lugaresService.createLugar(this.lugar);
    this.navCtrl.pop();
    alert('Lugar guardado correctamente');
    console.log(this.lugar);
  }
  



}
