import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { importType } from '@angular/compiler/src/output/output_ast';
import { BookDetailsPage } from '../book-details/book-details';


@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',  
})
export class BookListPage {
  navController: any;
  bookList = [];
  filteredBooks = [];
  isfiltered : boolean;

  constructor(private navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.isfiltered = false;
    this.http.get('books.json')
    .map(res => res.json())
    .subscribe(
      data => {
        this.bookList = data.books;
      },
      err => console.log("error is " +err), //error
      () => console.log('read books complete ' + this.bookList) // complete
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

  searchBooks(event){
    if(event.target.value.length > 2) {
      var filteredJson = this.bookList.filter(function (row) {
        if(row.author.indexOf(event.target.value) != -1) {
        return true
      } else {
        return false;
      }
    });
    this.isfiltered = true;
    this.filteredBooks = filteredJson;
    }
  }
  itemTapped(event, book) {
    console.log(book);
    this.navController.push(BookDetailsPage, {
      book : this.bookList
    });
  }
}
