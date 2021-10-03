import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { TimecomponentComponent } from './timecomponent/timecomponent.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    TimecomponentComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
