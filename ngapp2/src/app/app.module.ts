import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DummyServiceService } from './dummy-service.service';
import { GetDataServiceService } from './get-data-service.service';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DummyServiceService,GetDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
