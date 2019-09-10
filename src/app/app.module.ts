import {NgModule} from '@angular/core';
import {TimelinesComponent} from './timelines/timelines.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
