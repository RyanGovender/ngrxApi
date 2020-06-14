import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SportReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SportsEffects } from './effects/sports.effects';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      sport: SportReducer
    }),
    EffectsModule.forRoot([SportsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
