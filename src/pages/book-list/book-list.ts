import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";


import 'rxjs/add/operator/map';
import { BookDetailsPage } from "../book-details/book-details";
//import { LoginPage } from "../login/login";
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
           console.log(this.booksProvider); //bookProvider that is passed in has the provider details.    
  //  // this.http.get( "https://jsonplaceholder.typicode.com/posts")
  //  this.http.get( "http://localhost:8100/")
  //     .map(res => res.json())
  //     .subscribe(
  //       data => {
  //         this.booksProvider = data.books; //must remain booklist for the data to pas.
  //       },
  //       err => console.log("booksProvider and this request failed. The error is " + err), //error
  //       () => console.log("read books complete " + this.booksProvider) // complete
  //     );
  //     console.log("booksProvider a sucess....loaded and completed");
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


// getCountries() {
//   this.rest.getCountries()
//      .subscribe(
//        countries => this.countries = countries,
//        error =>  this.errorMessage = <any>error);
// }


// getItems(ev: any) {
//   // Reset items back to all of the items
//   this.initializeItems();

//   // set val to the value of the searchbar
//   let val = ev.target.value;

//   // if the value is an empty string don't filter the items
//   if (val && val.trim() != '') {
//     this.searchItems = this.searchItems.filter((item) => {
//       return (item.header.toLowerCase().indexOf(val.toLowerCase()) > -1);
//     })
//   }
// }
