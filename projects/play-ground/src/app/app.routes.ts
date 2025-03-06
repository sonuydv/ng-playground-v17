import { Routes } from '@angular/router';
import {DashboardComponent} from "./_0_demo-index/view/dashboard/dashboard.component";
import {DemoRoutes} from "./app-route-path";
import {ShopsyDashboardComponent} from "./_1_signal-demo/view/shopsy-dashboard/shopsy-dashboard.component";
import {ProductListComponent} from "./_1_signal-demo/view/product-list/product-list.component";
import {CartComponent} from "./_1_signal-demo/view/cart/cart.component";
import {BookDashboardComponent} from "./_2_ngrx-store-demo/view/book-dashboard/book-dashboard.component";
import {FormComponent} from "./_3_reactive-form/form/form.component";
import {NgxsDemoComponent} from "./_4_ngxs-demo/ngxs-demo.component";
import {provideStates} from "@ngxs/store";
import {PagesState} from "./_4_ngxs-demo/state/pages.store";
import {PagesApi} from "./_4_ngxs-demo/api/pages.api";
import {_5_HtmlContentComponent} from "./_5_html-content/_5_-html-content.component";


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
  },

  {
    path:DemoRoutes.ngxsDemo,
    component: NgxsDemoComponent,
    providers:[PagesApi,provideStates([PagesState])]
  },
  {
    path:DemoRoutes.htmlContentInPopup,
    component:_5_HtmlContentComponent,
  }
];


