import { customElement, bindable } from 'aurelia-framework'

@customElement('my-button')
export class Button {
  @bindable color: 'success' | 'warn' | 'danger'
  @bindable click: () => void

  onClick() {
    this.click()
  }
}
