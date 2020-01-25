import { StageComponent, ComponentTester } from 'aurelia-testing'
import { bootstrap } from 'aurelia-bootstrapper'
import { Button } from './button';

describe('Button', () => {
  let component: ComponentTester<Button>

  beforeEach(() => {
    component = StageComponent
      .withResources('my-button')
      .inView('<my-button color="success" click.call="onClick()"></my-button>')
      .boundTo({ onClick: () => void 0 })
  })

  it('sets background color to green if type is success', async () => {
    await component.create(bootstrap)
    const style = document.querySelector('button')!.style
    expect(style.backgroundColor).toBe('green')
  })

  afterEach(() => {
    component.dispose()
  })
})
