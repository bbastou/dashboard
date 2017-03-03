import {TransilienComponent} from "../../transilien/components/transilien.component";
import {Injectable} from "@angular/core";
import {MeteoComponent} from "../../meteo/components/meteo.component";

/**
 * Classe permettant de faire le lien entre le nom du widget et le {@link Component} qu'il représente.
 */
@Injectable()
export class WidgetConfig {
  static nameToComponentBinding = {
    'app-transilien': TransilienComponent,
    'app-meteo': MeteoComponent
  };
}
