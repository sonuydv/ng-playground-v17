import {Injectable} from "@angular/core";
import {BookApi} from "../../data/api/book.api";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BookAction, bookLoadError, updateBooks} from "../action/book.action";
import {catchError, concatMap, map, of} from "rxjs";
import {BookModel} from "../model/book.model";

@Injectable()
export class BookEffect{

  constructor(
    private actions$: Actions,
    private bookApi: BookApi
  ) {
  }


  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookAction.getBooks),
      concatMap(action => this.bookApi.getBooks()),
      map((books: BookModel[])=>updateBooks({books})),
      catchError((err, caught) => of(bookLoadError(err)))
    )
  )

}
