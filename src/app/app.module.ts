import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelativeTimePipe } from './relative-time.pipe';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    RelativeTimePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
