<template>
    <div class="flex justify-center items-center">
      
      <img
        :src="images[0]"
        alt="Overlapping icon 1"
        class="h-10 w-10 rounded-full object-cover shadow"
        :class="[borderColorClass, borderThicknessClass]"
        style="z-index: 10;"
      />
      <img
        :src="images[1]"
        alt="Overlapping icon 2"
        class="h-12 w-12 rounded-full object-cover shadow-md -ml-5"
        :class="[borderColorClass, borderThicknessClass]"
        style="z-index: 20;"
      />
      <img
        :src="images[2]"
        alt="Overlapping icon 3"
        class="h-10 w-10 rounded-full object-cover shadow -ml-5" 
        :class="[borderColorClass, borderThicknessClass]"
        style="z-index: 10;"
      />
    </div>
  </template>
  
  <script setup>
  defineProps({
    images: {
      type: Array,
      required: true,
      validator: (value) => {
        if (value.length !== 3) {
          console.warn('The "images" prop must contain exactly 3 image URLs.');
          return false;
        }
        return true;
      },
    },
    borderColorClass: {
      type: String,
      default: 'border-white', 
    },
    borderThicknessClass: {
      type: String,
      default: 'border-2',
    }
  });
  </script>
  
  <style scoped>
  </style>