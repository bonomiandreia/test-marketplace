<template>
    
    <div class="w-full h-full bg-white dark:bg-gray-900 rounded p-2">
        <h3 class="text-lg text-gray-800 dark:text-gray-50 mb-4">
            Popular Colors
        </h3>
        <div class="flex items-center space-x-4">
        <button
            v-for="color in popularColors"
            :key="color.name"
            type="button"
            @click="handleColorSelect(color.value)"
            :title="color.name"
            :aria-label="`Select ${color.name} color`"
            class="w-7 h-7 rounded-full bg-white p-1 flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 focus:outline-none"
            :class="{
            'ring-2 ring-offset-2 ring-blue-500 shadow-md': selectedColor === color.value,
            'shadow-sm hover:shadow-md': selectedColor !== color.value,
            }"
        >
            <div class="w-full h-full rounded-full" :class="color.twClass"></div>
        </button>
        </div>
    </div>
    
</template>
      
<script setup lang="ts">

const selectedColor = ref(null);
const popularColors = [
  { name: 'Blue', value: 'blue-300', twClass: 'bg-blue-300' },
  { name: 'Orange', value: 'orange-200', twClass: 'bg-orange-200' },
  { name: 'Green', value: 'leafGreen-300', twClass: 'bg-leafGreen-300' },
  { name: 'Red', value: 'redWine-300', twClass: 'bg-redWine-300' },
  { name: 'Aqua', value: 'aquaBlue-300', twClass: 'bg-aquaBlue-300' },
];


const handleColorSelect = (colorValue: any) => {
  if (selectedColor.value === colorValue) {
    selectedColor.value = null; 
  } else {
    selectedColor.value = colorValue; 
  }

  console.log('Selected color value:', selectedColor.value);
};


</script>