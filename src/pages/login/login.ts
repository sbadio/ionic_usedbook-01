import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ToastController,
  NavParams
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
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login(user: User) {
    const result = this.afAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        this.navCtrl.setRoot(HomePage);
        console.log(result);
      })
      .catch(function(e) {
        console.error(e);
      })
      .then(user => {
        this.toast
          .create({
            message: `Try Again! Enter a valid Name or and Email!`,
            duration: 3000
          })
          .present();
      });
  }

  async register() {
    try {
      this.navCtrl.push(RegisterPage);
    } catch (e) {
      console.error(e);
    }
  }
}
