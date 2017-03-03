import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {DonneeMeteo} from "../models/donnee-meteo";
import * as moment from 'moment';

/**
 * Classe utilitaire pour le module Transilien.
 */
@Injectable()
export class MeteoUtils {
  /**
   * Fonction permettant de transformer une réponse en tableau de {@link Train}.
   * @param response.
   * @returns un tableau de trains.
   */
  public static mapMeteos = (response:Response):DonneeMeteo[] => {
    return response.json().hourly.data.map(MeteoUtils.toMeteo).filter((meteo, idx) => idx == 1 || idx == 12);
  };

  public static toMeteo = (r:any):DonneeMeteo => {
    let meteo = <DonneeMeteo>({
      resume: r.summary,
      icon: 'wi-forecast-io-' + r.icon,
      temperature: r.temperature,
      temperatureRessentie: r.apparentTemperature,
      heure: moment.unix(r.time).format('DD/MM HH:mm'),
      temperatureMax: 0,
      temperatureMin: 0,
    });

    return meteo;
  }

}
