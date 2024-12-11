import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BookState, selectAll} from "../reducer/book.reducer";

export const selectBookState =
    createFeatureSelector<BookState>('book')

export const selectAllBooks = createSelector(
  selectBookState,
    selectAll
)
