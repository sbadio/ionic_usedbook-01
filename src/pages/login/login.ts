import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,  
  NavParams,
  AlertController
} from "ionic-angular";
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login(user: User) {
    const result = this.afAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        this.navCtrl.setRoot(HomePage);
        alert('Logged in!')
        console.log(result);
      })
      .catch(function(error) {
        console.error(error); 
        alert(error.message);
      })
  }

  async register() {
    try {
      this.navCtrl.push(RegisterPage);
    } catch (error) {
      console.error(error);
      alert(error.message);  
    }
  }
}
