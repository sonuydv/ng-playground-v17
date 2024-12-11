import { Component } from '@angular/core';
import { demoPathList} from "../../model/demo-nav.model";
import {NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  routeList = demoPathList

}
