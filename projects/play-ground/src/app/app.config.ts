import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {bookReducer} from "./ngrx-store-demo/store/reducer/book.reducer";
import {EffectsModule} from "@ngrx/effects";
import {BookEffect} from "./ngrx-store-demo/store/effect/book.effect";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({
        book: bookReducer
      }),
      EffectsModule.forRoot([
        BookEffect
      ])
    )
  ]
};
