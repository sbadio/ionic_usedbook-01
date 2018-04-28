import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { BookDetailsPage } from "../book-details/book-details";
import { LoginPage } from "../login/login";
import { Books } from "../../providers/books/books";


@IonicPage()
@Component({
  selector: "page-book-list",
  templateUrl: "book-list.html"
})
export class BookListPage {
  bookList = [];
  filteredBooks = [];
  isfiltered: boolean;
  navController: any;
 

  constructor(    
    private http: Http, 
    public navCtrl: NavController, 
    public booksProvider: Books,
    ) {
    this.isfiltered = false;
    this.http.get('/assets/json/books.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.bookList = data.books;
          console.log(this.bookList);         
        },
        err => console.log("error is " + err), //error
        () => console.log("read books complete " + this.bookList) // complete
      );
  }

  ionViewDidLoad() {
   console.log("ionViewDidLoad BookListPage");
    this.booksProvider.load();
  }

  searchBook(event) {
    if (event.target.value.length > 2) {
      var filteredJson = this.bookList.filter(function(row) {
        if (row.title.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.isfiltered = true;
      this.filteredBooks =  filteredJson;
    }
  }
  itemTapped(event, book) {
    console.log(book);
    this.navCtrl.push(BookDetailsPage, { book : book });
  }

}


