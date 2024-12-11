import { Component } from '@angular/core';
import {ShopsyState} from "../../state/shopsy.state";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {ViewState} from "../../state/view.state";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(
    public viewState: ViewState,
    public cartService: ShopsyState
  ) {
  }
}
