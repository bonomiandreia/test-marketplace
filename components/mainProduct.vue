<template>
    
  <div class="w-full h-full box-marketplace relative">
    <div :class="['absolute', 'z-10', 'w-[50%]', 'text-left', 'left-3']">
        <h3 class="md:text-5xl text-2xl text-bold">
          {{ widget.title }}
        </h3>
    </div>
    <div class="grid h-full">
      <img :src="widget.imageSrc" class="w-full  main-product object-contain rounded-3xl z-0" />
    </div>
    <button class="
      arrow-cta
      flex items-center justify-center p-1 rounded-full
      absolute 
      bottom-2
      -translate-x-1/2
      left-1/2
      md:left-3/4
    ">
      <Icon class="hover:scale-110"  name="i-material-symbols-light:arrow-back-ios-rounded"/>
      <Icon class="hover:scale-110"  name="i-material-symbols-light:arrow-forward-ios-rounded"/>
    </button>
</div>

</template>
  
  <script setup lang="ts">
  interface Props { widget: any; }
  const props = defineProps<Props>();

  </script>