<template>
  <div>
    <h1>Counter test {{ counter.count }}</h1>
    <button @click="counter.increase()">Increase</button>
    <button @click="counter.decrease()">Decrease</button>
    <button @click="counter.increase(5)">Increase +5</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter' 

const counter = useCounterStore()
</script>