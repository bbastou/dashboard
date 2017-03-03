import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";
import {TransilienUtils} from "../utils/transilien.utils";

@Injectable()
export class TransilienService {

  private actionUrl:string;
  private headers:Headers;

  /** Fichier de configuration de l'url tansilien {@see http://doc.navitia.io/} */
  public config:any;

  constructor(private _http:Http) {
    this.config = require('./../config/transilien.json');

    this.actionUrl = this.config.urlApi + 'coverage/' + this.config.coverage;

    this.headers = new Headers();
    this.headers.append('Authorization', 'Basic ' + btoa(this.config.token));
    this.headers.append('Accept', this.config.contentType);
  }

  public getNextTrain = (codeGare:string = null):any => {
    let departures = 'departures';
    let realTime = 'data_freshness=realtime';
    let limit = 'count=' + this.config.limitResult;
    let limitTime = 'duration=' + this.config.limitTime;

    // Prochains train au départ de la gare choisie dans la conf dans un intervalle en secondes égal à config.limitTime.
    var url = this.actionUrl + this.config.networkUrl + this.config.gareUrl + departures + '?' + realTime + '&' + limit + '&' + limitTime;

    return this._http.get(url,
      {
        headers: this.headers
      }).map(TransilienUtils.mapTrains);
  }
}
