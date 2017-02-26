import {Component} from "@angular/core";
import {TransilienService} from "./transilien/transilien.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransilienService]
})
export class AppComponent {
  title = 'app works!';

  constructor(){}

  ngOnInit(){
  }
}
