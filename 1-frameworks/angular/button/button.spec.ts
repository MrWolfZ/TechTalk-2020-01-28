import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonComponent } from './button'

describe(ButtonComponent.name, () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>

  beforeEach(() => {
    TestBed.configureTestingModule(({
      declarations: [
        ButtonComponent,
      ],
    }))

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
  })

  describe('basic behavior', () => {
    it('sets the class for the color', () => {
      const color = 'success'
      component.color = color

      fixture.detectChanges()

      const className = (fixture.nativeElement as HTMLElement).className
      expect(className).toBe(color)
    })
  })
})
