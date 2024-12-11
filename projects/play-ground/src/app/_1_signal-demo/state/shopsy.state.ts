import {computed, Injectable, signal} from "@angular/core";
import {ProductModel} from "./model/shopys.model";

@Injectable()
export class ShopsyState {


  products = signal<ProductModel[]>([])
  cartItems = signal<ProductModel[]>([])
  cartItemCount = computed<number>(()=>this.cartItems().length)

  updateProducts(products: ProductModel[]){
   this.products.set(products)
  }

  addToCart(product: ProductModel){
   this.cartItems.update(products => [...products,product])
  }


  removeFromCart(product: ProductModel){
    this.cartItems.update(products =>
      products.filter(item =>
        item.productId != product.productId))
  }

}
