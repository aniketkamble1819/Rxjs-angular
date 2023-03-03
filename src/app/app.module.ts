import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubScriptionComponent } from './sub-scription/sub-scription.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserverComponent,
    OperatorsComponent,
    SubScriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
