<template>
    <div>
      <div class="container mx-auto px-4 p-3">
        <GalleryProducts></GalleryProducts>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
    definePageMeta({
        layout: "default",
    });

  </script>
  
  <style scoped>
  
  </style>