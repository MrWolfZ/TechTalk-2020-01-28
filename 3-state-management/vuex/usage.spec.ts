import { shallowMount } from '@vue/test-utils'
import Counter from 'usage.vue'

describe('Counter', () => {
  it('displays the value', () => {
    const wrapper = shallowMount(Counter, {
      mocks: {
        $store: {
          state: { counter: 10 },
        },
      },
    })

    expect(wrapper.find("#value").text()).toBe("value: 10")
  })

  it('increments the counter when the "Increment" button is clicked', () => {
    const commitSpy = jest.fn()

    const wrapper = shallowMount(Counter, {
      mocks: {
        $store: {
          state: { counter: 10 },
          commit: commitSpy,
        },
      },
    })

    wrapper.find('#incBtn').trigger('click')

    expect(commitSpy).toHaveBeenCalledWith('increment')
  })

})
