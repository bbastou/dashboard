import {OnInit} from "@angular/core";
import {Observable} from "rxjs/Rx";

/**
 * Classe abstraire regroupant les fonctions communes aux 'widgets'.
 */
export abstract class Widgetable implements OnInit {

  /** Objet timer nécessaire pour le rafraichissement de la page. */
  timer;

  /** Objet permettant d'être à l'écoute du rafraichissement des données. */
  subscriptor:Observable<any>;

  /** Données. */
  data:any;

  /**
   * A l'initialisation on récupère les données.
   */
  ngOnInit() {
    this.refreshData();
  }

  /**
   * A la destruction on se désabonne du rafraichissement.
   * Evite d'envoyer les requêtes si le composant n'est plus affiché.
   */
  ngOnDestroy() {
    this.timer.unsubscribe();
  }

  /**
   * Méthode permettant d'initialiser le timer pour le rafraichissement des données.
   */
  protected subscribeData() {
    this.timer = Observable.timer(60 * 1000).first().subscribe(() => this.refreshData());
  }

  /**
   * Méthode permetttant de s'abonner pour permettre aux données de se mettre à jour lorsqu'elle sont rafraichies.
   */
  protected refreshData() {
    this.subscriptor = this.getData().subscribe(trains => {
      this.data = trains;
      this.subscribeData();
    });
  }

  /**
   * Médhode de récupération des données à implémenter en fonction du widget.
   */
  abstract getData();
}
