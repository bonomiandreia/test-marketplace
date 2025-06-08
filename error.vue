<template>
    <NuxtLayout name="404">
      <div class="container mx-auto px-4 text-center">
        <div class="text-4xl">Oops, wrong url page!</div>
        <button class="font-bold button" @click="goBack">Back</button>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  const router = useRouter();
  
  const goBack = () => {
    router.push('/home');
  };
  </script>
  
  <style scoped>
  .button {
    padding: 4px 6px;
    margin: 10px 0px;
    background: black;
    color: white;
  }
  </style>