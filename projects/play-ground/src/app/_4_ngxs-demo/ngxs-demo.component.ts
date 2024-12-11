import {Component, inject, OnInit} from '@angular/core';
import {Actions, Store, provideStates, ofActionSuccessful} from "@ngxs/store";
import {PagesState} from "./state/pages.store";
import {AsyncPipe} from "@angular/common";
import {PagesActions} from "./state/pages.actions";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {PageModel} from "./state/page.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'ngxs-demo',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './ngxs-demo.component.html',
  styleUrl: './ngxs-demo.component.scss'
})
export class NgxsDemoComponent implements OnInit{

  private readonly snackBar = inject(MatSnackBar)

  private readonly store = inject(Store);
  private readonly action$ = inject(Actions);
  protected readonly isLoading$
    = this.store.select(PagesState.isLoading);
  protected readonly pages$
    = this.store.select(PagesState.pages);

  constructor() {

    this.action$
      .pipe(ofActionSuccessful(PagesActions.Delete),
        takeUntilDestroyed()).subscribe(
      res =>
        this.snackBar.open('Page deleted successfully.')
    )
  }


  ngOnInit() {
    this.store.dispatch(new PagesActions.OnLoad());
    console.log(this.store.snapshot());

  }


  onDelete(page:PageModel){
    this.store.dispatch(new PagesActions.Delete(page.id)).subscribe(
      res => console.log('Deleted sucessfully',res)
    )
  }

}
