import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TransilienComponent} from './transilien/components/transilien.component';
import {WidgetComponent} from './widget/components/widget.component';
import {WidgetDirective} from './widget/directives/widget.directive';
import {TransilienService} from "./transilien/services/transilien.service";
import {MeteoComponent} from './meteo/components/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    TransilienComponent,
    WidgetComponent,
    WidgetDirective,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  entryComponents: [
    TransilienComponent,
    MeteoComponent
  ],
  providers: [TransilienService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
