import {DemoRoutes} from "../../app-route-path";

export interface DemoNavModel{
  title: string
  path: string
}


export const demoPathList: DemoNavModel[]  = [
  {
    title: 'Angular Signals Demo',
    path: DemoRoutes.ngSignalDemo
  },

  {
    title: 'Redux Store Demo',
    path: DemoRoutes.reduxStoreDemo
  },

  {
    title: 'Reactive Form Demo',
    path: DemoRoutes.reactiveForm
  },

]
