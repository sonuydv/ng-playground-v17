import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {BookModel} from "../model/book.model";
import {createReducer, on} from "@ngrx/store";
import {updateBooks} from "../action/book.action";

export interface BookState extends EntityState<BookModel>{
  loading: boolean,
  error: string
}

export const adapter: EntityAdapter<BookModel> = createEntityAdapter({selectId: (book) => book.id})

export const initialState: BookState = adapter.getInitialState({
  loading: true,
  error: ''
})

export const bookReducer = createReducer(
  initialState,
  on(updateBooks,(state,{books})=>
    adapter.addMany(books,state)
  )
)

export const {selectAll} = adapter.getSelectors()
