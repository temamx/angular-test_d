import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';

import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { SortTitlePipe } from './pipes/sort-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HomeComponent,
    TaskFilterPipe,
    SortTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
