import { Routes } from '@angular/router';
import {DashboardComponent} from "./demo-nav/view/dashboard/dashboard.component";
import {DemoRoutes} from "./app-route-path";
import {ShopsyDashboardComponent} from "./signal-demo/view/shopsy-dashboard/shopsy-dashboard.component";
import {ProductListComponent} from "./signal-demo/view/product-list/product-list.component";
import {CartComponent} from "./signal-demo/view/cart/cart.component";
import {BookDashboardComponent} from "./ngrx-store-demo/view/book-dashboard/book-dashboard.component";
import {FormComponent} from "./reactive-form/form/form.component";




export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent
  },
  {
    path: DemoRoutes.ngSignalDemo,
    // component: SignalDemoComponent
    //for lazy loading standalone component uncomment below code
    loadComponent : () => ShopsyDashboardComponent,
    children: [
      {
        path: 'products', component: ProductListComponent, outlet: 'shopsy'
      },
      {
        path: 'cart', component: CartComponent, outlet: 'shopsy'
      }
    ]
  },
  {
    path: DemoRoutes.reduxStoreDemo,
    loadComponent: () => BookDashboardComponent,
    children: [

    ]
  },
  {
    path:DemoRoutes.reactiveForm,
    component: FormComponent,
  }
];


