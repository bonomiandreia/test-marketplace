<template>
    <NuxtLayout name="404">
      <div class="container mx-auto px-4 text-center">
        <div class="text-4xl">Oops, wrong url page!</div>
        <button
              @click="goBack"
              class="group inline-flex items-center justify-center button-mindaro-marketplace p-2 mt-3"
            >
          <span class="text-center">
            Back to home!
          </span>
        </button>
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