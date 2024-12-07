import {ActivatedRoute, Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class ViewState{

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) {
  }

  navigateRoute(route: string){
    this.router.navigate([{outlets: {shopsy : [route]}}],{relativeTo: this.route})
  }

}
