import {Injectable} from "@angular/core";
import {Headers, Jsonp} from "@angular/http";
import {MeteoUtils} from "../utils/meteo.utils";

@Injectable()
export class MeteoService {

  private actionUrl:string;
  private headers:Headers;

  public config:any;

  constructor(private _jsonp:Jsonp) {
    this.config = require('./../config/meteo.json');

    this.actionUrl = this.config.urlApi + this.config.token + '/' + this.config.latitudeHome + ',' + this.config.longitudeHome + '?lang=' + this.config.langage + '&units=' + this.config.unitSystem;
    this.actionUrl += '&callback=JSONP_CALLBACK';

    console.log(this.actionUrl);
  }

  public getMeteo = ():any => {
    return this._jsonp.get(this.actionUrl).map((res) => MeteoUtils.mapMeteos(res));
  }

}
