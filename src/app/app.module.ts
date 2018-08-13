import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TasksService } from './services/tasks.service';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    TasksService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
