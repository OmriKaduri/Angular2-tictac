import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SquareComponent} from './Square/square.component';
import {SquareRowComponent} from './Board/square-row.component';
import {BoardComponent} from './Board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    SquareRowComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
