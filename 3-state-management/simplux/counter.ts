import { createEffect, createMutations, createSelectors, createSimpluxModule } from '@simplux/core'

const counterModule = createSimpluxModule({
  name: 'counter',
  initialState: {
    value: 0,
  },
})

export const counter = {
  ...counterModule,

  ...createMutations(counterModule, {
    increment(state) {
      state.value += 1
    },
    incrementBy(state, amount: number) {
      state.value += amount
    },
  }),

  ...createSelectors(counterModule, {
    value: state => state.value,
    plus: (state, amount: number) => state.value + amount,
  }),
}

counter.increment()
console.log('incremented counter:', counter.value())
console.log('counter value + 2:', counter.plus(2))

counter.incrementBy(5)
console.log('incremented counter by 5:', counter.value())
















const incrementByAsync = createEffect(async (amount: number) => {
  console.log(`current counter value: ${counter.value()}`)
  await new Promise(resolve => setTimeout(resolve, 1000))
  counter.incrementBy(amount)
})

incrementByAsync(5)









// learn more at https://github.com/MrWolfZ/simplux
