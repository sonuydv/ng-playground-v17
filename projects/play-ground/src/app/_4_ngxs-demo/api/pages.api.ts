import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {PageModel} from "../state/page.model";

@Injectable()
export class PagesApi {

  fetchAllPages():Observable<PageModel[]>{
    let array = new Array(5);
    array = array.fill(0).map((i,index)=>{
      return {id:index,title:`Page ${index+1}`};
    })
    return of(array);
  }

}
