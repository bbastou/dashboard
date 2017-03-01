import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TransilienComponent } from './transilien/components/transilien.component';
import { WidgetComponent } from './widget/components/widget.component';
import { WidgetDirective } from './widget/directives/widget.directive';
import {TransilienService} from "./transilien/services/transilien.service";

@NgModule({
  declarations: [
    AppComponent,
    TransilienComponent,
    WidgetComponent,
    WidgetDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [
    TransilienComponent
  ],
  providers: [TransilienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
