import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {bookReducer} from "./_2_ngrx-store-demo/store/reducer/book.reducer";
import {EffectsModule} from "@ngrx/effects";
import {BookEffect} from "./_2_ngrx-store-demo/store/effect/book.effect";
import {provideStore} from "@ngxs/store";
import {withNgxsLoggerPlugin} from "@ngxs/logger-plugin";
import {withNgxsReduxDevtoolsPlugin} from "@ngxs/devtools-plugin";
import {environment} from "../environments/environment.development";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    // importProvidersFrom(
    //   StoreModule.forRoot({
    //     book: bookReducer
    //   }),
    //   EffectsModule.forRoot([
    //     BookEffect
    //   ])
    // )
    provideStore(
      [],
      withNgxsReduxDevtoolsPlugin({
        disabled:environment.production
      }),
      withNgxsLoggerPlugin(),
      ),

  ]
};
