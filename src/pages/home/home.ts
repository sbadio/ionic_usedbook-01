import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BookListPage } from "../book-list/book-list";
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  options: BarcodeScannerOptions;
  constructor(
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController
  ) {
    // this.navCtrl.setRoot(HomePage);
  }
  bookListPage() {
    this.navCtrl.push(BookListPage);
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
