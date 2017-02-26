/**
 * Classe représentant un train.
 */
export class Train {
  nom:string;
  direction:string;
  horairePrevu:Date;
  horaireReel:Date;
  arriveDans:String;

  constructor(private nom:string, private direction:string, private horairePrevu:Date, private horaireReel:Date) {

  }
}
