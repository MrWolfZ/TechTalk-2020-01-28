import { observable, computed, autorun } from 'mobx'

export class CounterStore {
  @observable count = 0

  @computed get countTimesTwo() {
    return this.count * 2
  }

  increment() {
    this.count += 1
  }
}

export const store = new CounterStore()

autorun(() => console.log(store.countTimesTwo))

store.increment()

store.count += 2
