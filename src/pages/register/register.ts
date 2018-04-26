import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';
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
    public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    try {
     const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.push(LoginPage);
      
      
    }
    catch (e) {
      this.toast
        .create({
          message: `Please enter a valid Name or and Email!`,
          duration: 3000
        })
        .present();
      console.error(e);
    } 
  } 
}
