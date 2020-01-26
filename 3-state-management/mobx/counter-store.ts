import { observable, computed, autorun } from 'mobx'

class CounterStore {
  @observable count = 0

  @computed get countTimesTwo() {
    return this.count * 2
  }

  increment() {
    this.count += 1
  }

  incrementBy(amount: number) {
    this.count += amount
  }
}

const store = new CounterStore()

autorun(() => console.log(store.countTimesTwo))

store.increment()
store.incrementBy(5)

store.count += 2
