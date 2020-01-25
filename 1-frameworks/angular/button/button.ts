import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'styled-button',
  templateUrl: './angular.html',
  styleUrls: ['./angular.css']
})
export class ButtonComponent {
  @Input() color: 'success' | 'warn' | 'danger'
  @Output() click: EventEmitter<void>
}
































@Component({
  selector: 'success-button',
  template: `?`,
  styles: [`?`],
})
export class SuccessButtonInheritanceComponent extends ButtonComponent {
  color = 'success' as const
}


























@Component({
  selector: 'success-button',
  template: `
  <styled-button color="success" (click)="click.emit()">
    <ng-content></ng-content>
  </styled-button>
  `,
})
export class SuccessButtonCompositionComponent {
  @Output() click: EventEmitter<void>
}
