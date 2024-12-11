import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {BookModel} from "../../store/model/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookApi{

  getBooks(): Observable<BookModel[]>{
    console.log('getBooks api')
    let array:BookModel[] = Array.from<BookModel>({length: 10}).map((v,index)=>{
      let id = index + 1;
        return  new BookModel(id,'Book Title '+id,"Author "+id,"content")
        }
        );
    return  of(array)
  }

}
