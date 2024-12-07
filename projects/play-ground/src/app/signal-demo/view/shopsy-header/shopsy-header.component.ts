import {Component, effect, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ShopsyState} from "../../state/shopsy.state";
import {RouterLink} from "@angular/router";
import {ViewState} from "../../state/view.state";

@Component({
  selector: 'app-shopsy-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './shopsy-header.component.html',
  styleUrl: './shopsy-header.component.scss'
})
export class ShopsyHeaderComponent implements OnInit{

  count: number = 0

  constructor(
    public cartSrv : ShopsyState,
    public viewState: ViewState
  ) {
    effect(() => {
      console.log('Cart Item count : '+this.cartSrv.cartItemCount())
      this.count = this.cartSrv.cartItemCount()
    })
  }

  ngOnInit() {

  }

}
