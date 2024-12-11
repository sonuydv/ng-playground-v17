import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {ShopsyState} from "../../state/shopsy.state";
import {NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(
    public cartService: ShopsyState
  ) {
  }

}
