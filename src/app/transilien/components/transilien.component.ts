import {Component} from "@angular/core";
import {TransilienService} from "../services/transilien.service";
import {Refreshable} from "../../shared/refreshable";

/**
 * Composant pour les prochains trains au départ.
 * {@link Refreshable}.
 */
@Component({
  selector: 'app-transilien',
  templateUrl: './transilien.component.html',
  styleUrls: ['./transilien.component.css'],
  providers: [TransilienService]
})
export class TransilienComponent extends Refreshable {
  title:string;
  hurriedTime: number;
  constructor(private transilienService:TransilienService) {
    super();
    this.title = 'Prochains trains';
    this.hurriedTime = this.transilienService.config.hurriedTime;
  }

  /**
   * @see {Refreshable#getData}
   * @returns {any}
   */
  getData() {
    return this.transilienService.getNextTrain();
  }
}
