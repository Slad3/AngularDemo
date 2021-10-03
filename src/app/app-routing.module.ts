import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondpageComponent } from './secondpage/secondpage.component';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';

const routes: Routes = [
  { path: '', component: FirstcomponentComponent },
  { path: 'secondpage', component: SecondpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
