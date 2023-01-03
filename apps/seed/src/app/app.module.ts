import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestUiComponent } from '@vcpp/shared-ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ClarityModule, TestUiComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
