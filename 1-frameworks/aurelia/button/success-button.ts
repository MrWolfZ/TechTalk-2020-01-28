import { customElement, bindable } from 'aurelia-framework'

@customElement('success-button')
export class SuccessButton {
  @bindable click: () => void

  onClick() {
    this.click()
  }
}
