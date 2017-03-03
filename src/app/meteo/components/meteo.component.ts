import {Component} from "@angular/core";
import {Refreshable} from "../../shared/refreshable";
import {MeteoService} from "../services/meteo.service";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  providers: [MeteoService]
})
export class MeteoComponent extends Refreshable {

  private title: string;

  constructor(private meteoService: MeteoService) {
    super();
    this.title = 'Météo';
  }

  getData() {
    return this.meteoService.getMeteo();
  }
}
