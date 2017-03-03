import {
  Component,
  ViewChild,
  ContentChild,
  AfterContentInit,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import {WidgetDirective} from "../directives/widget.directive";
import {WidgetConfig} from "../config/widget.config";

/**
 * Composant servant de capsule aux widgets.
 * Panel générique dans lequel inséré les widgets
 */
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements AfterContentInit {

  // Composant injecté dans
  private injectedComponent;

  private widthClass;

  private title:string;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) {

  }

  ngAfterContentInit():void {

    let componentName = WidgetConfig.nameToComponentBinding[this.widgetDirective.widgetName];
    let compFactory = this.componentFactoryResolver.resolveComponentFactory(componentName);

    //Insert le component.
    this.widget.clear();
    let component = this.widget.createComponent(compFactory);
    this.injectedComponent = component.injector.get(componentName)
    this.title = this.injectedComponent.title;
    this.widthClass = 'col-md-' + this.widgetDirective.widgetWidth;
  }


  /**
   * Méthode appelée lors d'un cliq sur le bouton de rafraihchissement dans le header du panel.
   */
  callRefresh():void {
    this.injectedComponent.refreshData();
  }

  /**
   * Permet de récupérer le composant permettant d'insérer les nouveaux modules dans la coquille de ce componsant.
   */
  @ViewChild('widget', {
    read: ViewContainerRef
  }) widget:ViewContainerRef;

  @ContentChild(WidgetDirective) widgetDirective;
}
