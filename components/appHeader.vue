<template>
    
    <div class="w-full bg-gray-100 dark:bg-gray-900 fixed h-[50px] z-10">
        <div class="container mx-auto px-4">
         <div class="h1-semibold" @click="toggleDarkMode">search</div>
        </div>
    </div>
    
</template>
      
<script setup lang="ts">

const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
};
</script>