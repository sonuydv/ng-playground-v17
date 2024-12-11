import {PageModel} from "./page.model";

export namespace PagesActions{

  export class OnLoad{
    static readonly type = '[Pages] OnLoad';
  }

  export class LoadError{
    static readonly type = '[Pages] LoadError';
    constructor(public error:Error) {
    }
  }

  export class LoadSuccess{
    static readonly type = '[Pages] LoadSuccess';
    constructor(public pages:PageModel[]) {
    }
  }

  export class Add{
    static readonly type = '[Pages] Add';
    constructor(public page:PageModel) {
    }
  }

  export class Delete{
    static readonly type = '[Pages] Delete';
    constructor(public pageId:number) {
    }
  }

  export class Update{
    static readonly type = '[Pages] Update';
    constructor(public page:PageModel) {
    }
  }

}
