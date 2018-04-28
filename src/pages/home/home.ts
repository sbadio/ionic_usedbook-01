import { Component } from "@angular/core";
import { NavController, ToastController, NavParams, AlertController } from "ionic-angular";
import { BookListPage } from "../book-list/book-list";
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  options: BarcodeScannerOptions;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    // this.navCtrl.setRoot(HomePage);
  }

  ionViewWillUnload() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast
        .create({
          message: `Welcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      }
      else{
         this.toast
        .create({
          message: `Could not find authentication details`,
          duration: 3000
        }).present();
      }
     
    });
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  bookListPage() {
    this.navCtrl.push(BookListPage);
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
    this.alert('Logged Out');
    return this.afAuth.auth.signOut();    
  }
  // async scanBarcode(){
  //   const results = await this.barcode.scan();
  //   console.log(results);
  // }

  async scanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  //   ,
  //   {
  //     preferFrontCamera : true, // iOS and Android
  //     showFlipCameraButton : true, // iOS and Android
  //     showTorchButton : true, // iOS and Android
  //     torchOn: true, // Android, launch with the torch switched on (if available)
  //     saveHistory: true, // Android, save scan history (default false)
  //     prompt : "Place a barcode inside the scan area", // Android
  //     resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  //     formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
  //     orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
  //     disableAnimations : true, // iOS
  //     disableSuccessBeep: false // iOS and Android
  // }
}
