import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-book-details', 
  templateUrl: 'book-details.html',
  
})
export class BookDetailsPage {
  bookDetail: {isbn:'', title:'', subtitle:'', author:'', published:'', publisher:'', pages:'', description:'', website:''};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.bookDetail = navParams.get('book');
    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailsPage');
  }
}
