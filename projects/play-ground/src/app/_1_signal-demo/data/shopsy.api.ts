import {Injectable} from "@angular/core";
import {delay, from, Observable, of} from "rxjs";
import {ProductModel} from "../state/model/shopys.model";

@Injectable()
export class ShopsyApi{


  public getProductList(): Observable<ProductModel[]>{
    return of([
      {
        productId: 0,
        productTitle : 'Product 1'
      },

      {
        productId: 1,
        productTitle : 'Product 2'
      },

      {
        productId: 2,
        productTitle : 'Product 3'
      },


      {
        productId: 3,
        productTitle : 'Product 4'
      },


      {
        productId: 4,
        productTitle : 'Product 5'
      }
    ]).pipe(delay(1000))
  }

}
