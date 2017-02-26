import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Train} from "./train";
import * as moment from 'moment';
/**
 * Classe utilitaire pour le module Transilien.
 */
@Injectable()
export class TransilienUtils {
  /**
   * Fonction permettant de transformer une réponse en tableau de {@link Train}.
   * @param response.
   * @returns un tableau de trains.
   */
  public static mapTrains = (response:Response):Train[] => {
    return response.json().departures.map(TransilienUtils.toTrain);
  };

  public static toTrain = (r:any):Train => {
    let train = <Train>({
      nom: r.display_informations.headsign,
      direction: r.display_informations.direction,
      horairePrevu: r.stop_date_time.base_departure_date_time,
      horaireReel: r.stop_date_time.departure_date_time,
      arriveDans:  moment(r.stop_date_time.base_departure_date_time).diff(moment(), 'minutes').toString()
    });

    return train;
  }

}
