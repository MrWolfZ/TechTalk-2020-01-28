import { observable, computed } from 'mobx'

export class CounterStore {
  @observable count = 0

  @computed get countTimesTwo() {
    return this.count * 2
  }
}

export const store = new CounterStore()

store.count += 2
