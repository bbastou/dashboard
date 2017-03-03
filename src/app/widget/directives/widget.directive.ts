import {Directive, Input} from "@angular/core";

/**
 * Directive permettant de généraliser la création d'un module.
 */
@Directive({
  selector: '[widgetName]'
})
export class WidgetDirective {

  @Input('widgetName') widgetName:string;
  @Input('widgetWidth') widgetWidth: number;
}
