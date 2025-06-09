<template>
    
  <div class="w-full h-full box-marketplace relative">
    <div :class="['absolute', 'z-10', 'w-[50%]', 'text-left', 'left-3', 'pl-3', 'pt-5']">
        <div class="rounded-full flex items-center justify-center gap-x-1.5 w-[150px] bg-white dark:bg-grey700 py-0.5 pr-2.5 pl-1.5 border border-transparent text-sm text-gray-900 transition-all shadow-sm">
          <Icon 
            name="i-material-symbols:speaker"
            class="select-none text-lg text-gray-800 dark:text-gray-500 transition-all duration-200 hover:scale-125"
          />
          <span>Music is Classic</span>
        </div>
        <h3 class="md:text-5xl text-2xl text-bold pt-3">
          {{ widget.title }}
        </h3>
        <h3 class="md:text-2xl invisible md:visible text-bold pt-2">
          {{ widget.subtitle }}
        </h3>
    </div>
    <div class="grid h-full">
      <img :src="widget.imageSrc" class="w-full  main-product object-contain rounded-3xl z-0" />
    </div>
    <div id="button-container" class="      
      text-lg
      flex items-center 
      justify-center 
      rounded-full
      absolute 
      bottom-4
      pl-3
      pr-2
      pt-2
      pb-2
      h-[45px] w-[45px]
      md:h-[50px] md:w-[50px]
      -translate-x-1/2
      left-3/4
      bg-white shadow-lg">
        <Icon 
          id="left-arrow"
          name="i-material-symbols-light:arrow-back-ios-rounded"
          class="cursor-pointer select-none text-lg text-gray-800 transition-all duration-200 hover:scale-125"
        />

        <Icon 
          id="right-arrow"
          name="i-material-symbols-light:arrow-forward-ios-rounded"
          class="cursor-pointer select-none text-lg text-gray-800 transition-all duration-200 hover:scale-125"
        />
    </div>
</div>

</template>
  
  <script setup lang="ts">
  interface Props { widget: any; }
  const props = defineProps<Props>();

  </script>