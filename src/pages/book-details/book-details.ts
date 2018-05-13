import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';

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

  itemTapped(event, book) {
    console.log("ItemTapped");
    console.log(book);
    this.navCtrl.push(FavouritesPage, { book : book });
  }

  itemTappedFav(event, favBook) {
    console.log("ItemTappedFav");
    console.log(favBook);
    this.navCtrl.push(FavouritesPage, { favBook : favBook });
  }

}
