import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";
import {TransilienUtils} from "./transilien.utils";

/** Fichier de configuration de l'url tansilien {@see http://doc.navitia.io/} */
var config = require('./transilien.json');

@Injectable()
export class TransilienService {

  private actionUrl:string;
  private headers:Headers;

  constructor(private _http:Http) {
    this.actionUrl = config.urlApi + 'coverage/' + config.coverage;

    this.headers = new Headers();
    this.headers.append('Authorization', 'Basic ' + btoa(config.token));
    this.headers.append('Accept', config.contentType);
  }

  public getNextTrain = (codeGare:string = null):any => {
    let departures = 'departures';
    let realTime = 'data_freshness=realtime';
    let limit = 'count=' + config.limitResult;
    let limitTime = 'duration=' + config.limitTime;

    // Prochains train au départ de la gare choisie dans la conf dans un intervalle en secondes égal à config.limitTime.
    var url = this.actionUrl + config.networkUrl + config.gareUrl + departures + '?' + realTime + '&' + limit + '&' + limitTime;
    return this._http.get(url,
      {
        headers: this.headers
      }).map(TransilienUtils.mapTrains);
  }
}
