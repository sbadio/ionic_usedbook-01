import { Component } from "@angular/core";
import {  IonicPage,  ToastController,  NavController,  NavParams} from "ionic-angular";
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

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
  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      console.log(result);
      if (result ) {
        this.navCtrl.setRoot("HomePage");debugger;
      }
    } catch (e) {debugger;
      this.navCtrl.push("LoginPage");
      this.toast
        .create({
          message: `Please enter a valid Name or and Email!`,
          duration: 3000
        })
        .present();
      console.log("Please enter a valid Name or and Email!");
      console.error(e);
    }
  }
  register() {
    this.navCtrl.push("RegisterPage");
  }
}


