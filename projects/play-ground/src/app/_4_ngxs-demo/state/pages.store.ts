import {PageModel} from "./page.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {PagesApi} from "../api/pages.api";
import {PagesActions} from "./pages.actions";
import LoadSuccess = PagesActions.LoadSuccess;
import LoadError = PagesActions.LoadError;
import Delete = PagesActions.Delete;

export const PAGES_STATE_NAME:string = 'pages'

export interface PagesStateModel{
  pages:PageModel[];
  hasError:boolean
  isLoading:boolean;
}

const defaultState: PagesStateModel = {
  pages:[],
  hasError:false,
  isLoading:true,
};

@State<PagesStateModel>({
  name:PAGES_STATE_NAME,
  defaults:defaultState
}) @Injectable()
export class PagesState {
  constructor(
    private readonly pagesApi: PagesApi,
  ) {
  }


  @Action(PagesActions.OnLoad)
  loadPages(ctx:StateContext<PagesStateModel>) {
    ctx.patchState({
      isLoading:true
    })
    this.pagesApi.fetchAllPages()
      .subscribe(
        {
          next:pages => {
            ctx.dispatch(new LoadSuccess(pages))
          },
          error:err => {
            ctx.dispatch(new LoadError(err))
          }
        }
      )
  }

  @Action(PagesActions.LoadSuccess)
  loadSuccess(ctx:StateContext<PagesStateModel>,action:LoadSuccess){
    ctx.patchState({
      pages:action.pages,
      isLoading:false,
      hasError:false
    })
  }

  @Action(PagesActions.LoadError)
  loadError(ctx:StateContext<PagesStateModel>,action:LoadError){
    ctx.patchState({
      isLoading:false,
      hasError:true
    })
  }

  @Action(PagesActions.Delete)
  delete(ctx:StateContext<PagesStateModel>,action:Delete){
    ctx.patchState({
      pages:ctx.getState().pages.filter(value => value.id != action.pageId)
    })
  }


  @Selector()
  static hasError(state: PagesStateModel): boolean {
    return state.hasError;
  }
  @Selector()
  static isLoading(state: PagesStateModel): boolean {
    return state.isLoading;
  }
  @Selector()
  static pages(state: PagesStateModel) {
    return state.pages;
  }

}
