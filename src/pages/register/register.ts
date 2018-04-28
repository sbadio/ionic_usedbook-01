import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
     public navCtrl: NavController, 
     public navParams: NavParams,    
  private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async register(user: User){
    const result = this.afAuth.auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(user => {
      alert('Registered');
      this.navCtrl.setRoot(LoginPage);      
      console.log(result);
      return;
    })
    .catch(function(error) {
      alert(error.message);
      console.error(error);
    })    
  } 
}
