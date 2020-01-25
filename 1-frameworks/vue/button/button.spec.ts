import { shallowMount } from '@vue/test-utils'
import Button from './button.vue'

describe('Button', () => {
  it('sets the class for the color', () => {
    const color = 'success'

    const wrapper = shallowMount(Button, {
      propsData: {
        color
      }
    })

    expect(wrapper.find('button').classes()).toContain(color)
  })
})
