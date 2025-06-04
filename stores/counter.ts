// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increase(amount: number = 1) {
        this.count += amount
    },
    decrease(amount: number = 1) {
        this.count -= amount
    },
  },
  getters: {
    doubleCount: (state): number => state.count * 2,
  },
})