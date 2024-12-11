import {createAction, props} from "@ngrx/store";
import {BookModel} from "../model/book.model";


export enum BookAction{
  getBooks  = 'Request The Books',
  updateBooks = 'Load Book List',
  bookLoadError = 'Book Load Error'
}


export const getBooks =
  createAction(BookAction.getBooks);

export const updateBooks = createAction(
  BookAction.updateBooks,
  props<{books: BookModel[]}>()
)

export const bookLoadError  = createAction(
  BookAction.bookLoadError,
  props<{error: any}>()
)
