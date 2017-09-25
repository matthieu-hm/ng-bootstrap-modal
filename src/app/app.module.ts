import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './components/bootstrap-modal/bootstrap-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
