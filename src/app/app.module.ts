import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'angular9-exp' }),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
