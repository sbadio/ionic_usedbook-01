import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

import 'rxjs/add/operator/map';
import { BookDetailsPage } from "../book-details/book-details";
import { Books } from "../../providers/books/books";


@IonicPage()
@Component({
  selector: "page-book-list",
  templateUrl: "book-list.html"
})
export class BookListPage {
  bookListVault = [];
  filteredBooks = [];
  isfiltered: boolean;
  navController: any;
  
  constructor(    
    //private http: Http, 
    public navCtrl: NavController, 
    public booksProvider: Books,
    ) {
    this.isfiltered = false;
           console.log(this.booksProvider);
  } 

  ionViewDidLoad() {
    console.log("ionViewDidLoad BookListPage");
     this.booksProvider.load();     
   }
   
  searchBook(event) {   

    if (event.target.value.length > 2) {         
       var filteredJson = this.filteredBooks.filter(function(row) {         
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