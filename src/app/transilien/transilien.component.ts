import {Component} from "@angular/core";
import {TransilienService} from "./transilien.service";
import {Widgetable} from "../widget/widgetable";

/**
 * Composant pour les prochains trains au départ.
 * {@link Widgetable}.
 */
@Component({
  selector: 'app-transilien',
  templateUrl: './transilien.component.html',
  styleUrls: ['./transilien.component.css'],
  providers: [TransilienService]
})
export class TransilienComponent extends Widgetable{
  title:string;

  constructor(private transilienService:TransilienService) {
    super();
    this.title = 'Prochains trains';
  }

  /**
   * @see {Widgetable#getData}
   * @returns {any}
     */
  getData() {
    return this.transilienService.getNextTrain();
  }
}
