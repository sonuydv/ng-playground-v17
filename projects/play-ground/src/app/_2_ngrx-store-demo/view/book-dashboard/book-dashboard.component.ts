import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectAllBooks} from "../../store/selector/book.selector";
import {getBooks} from "../../store/action/book.action";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-book-dashboard',
  standalone: true,
    imports: [
        AsyncPipe,
        JsonPipe
    ],
  templateUrl: './book-dashboard.component.html',
  styleUrl: './book-dashboard.component.scss'
})
export class BookDashboardComponent implements OnInit{

  books$ = this.store.pipe(select(selectAllBooks))
  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    this.store.dispatch(getBooks())
    this.store.dispatch(getBooks())
  }

}
