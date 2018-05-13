import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Books } from "../../providers/books/books";
import { BookDetailsPage } from "../book-details/book-details";

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
 
  navController: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,    
    public booksProvider: Books
  ) {
    
           console.log(this.booksProvider);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
 
  }

  itemTapped() { 
    console.log("I want to see the Book Details")    
  }

  itemFavTapped() {
    console.log("I touched Favourite");    
  }

}
