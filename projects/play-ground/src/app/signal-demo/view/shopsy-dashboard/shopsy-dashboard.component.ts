import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ShopsyHeaderComponent} from "../shopsy-header/shopsy-header.component";
import {ShopsyState} from "../../state/shopsy.state";
import {ShopsyApi} from "../../data/shopsy.api";
import {ProductListComponent} from "../product-list/product-list.component";
import {RouterOutlet} from "@angular/router";
import {ViewState} from "../../state/view.state";

@Component({
  selector: 'app-shopsy-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIconModule,
    MatButtonModule,
    ShopsyHeaderComponent,
    ProductListComponent,
    RouterOutlet
  ],
  providers: [ShopsyApi,ShopsyState,ViewState],
  templateUrl: './shopsy-dashboard.component.html',
  styleUrl: './shopsy-dashboard.component.scss'
})
export class ShopsyDashboardComponent implements OnInit{

  constructor(
    private shopsyApi: ShopsyApi,
    private cartService : ShopsyState,
    private viewState: ViewState,
  ) {
  }

  ngOnInit() {
    this.viewState.navigateRoute('products')
    this.shopsyApi.getProductList().subscribe(products => {
      this.cartService.updateProducts(products)
    })
  }

}
