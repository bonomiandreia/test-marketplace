<template>
    
  <div class="w-full h-full box-marketplace relative">
    <div v-if="!widget" class="w-full h-full absolute z-10 flex justify-center items-center">
      <ErrorLoad/>
    </div>
    <div v-else="widget">
        <div :class="['absolute', 'z-10', 'w-[50%]', 'text-left', 'left-3', 'pl-3', 'pt-5']">
          <div class="py-0.5 pr-2.5 pl-1.5 chip-marketplace dark:text-gray-50">
            <Icon 
              name="i-material-symbols:speaker"
              class="select-none text-lg chip-text-marketplace transition-all duration-200 hover:scale-125"
            />
            <span>Music is Classic</span>
          </div>
          <h3 class="md:text-5xl text-2xl text-bold pt-3">
            {{ widget?.title }} 
          </h3>
        <div class="mt-3">
          <div class="flex items-center gap-x-3 sm:gap-x-2" v-if="$viewport.isGreaterThan('md')">
            
            <div class="flex-shrink-0 text-lg font-light text-transparent [-webkit-text-stroke:2px_theme(colors.gray.300)] sm:text-4xl">
              01
            </div>
            
            <div class="flex-shrink-0">
                <DottedArrow
                  class="w-20 text-gray-300 dark:text-gray-50 sm:w-28"
                />
            </div>
            <div class="flex-shrink-0">
              <h2 class="text-2xl text-zinc-800 dark:text-gray-50 sm:text-2xl">
                {{ widget?.subtitle }}
              </h2>
              <div class="mt-1 text-base text-gray-500 sm:text-sm w-[300px]">
                <p class="description-main-marketplace bg-clip-text text-transparent">
                  {{ widget?.description }}
                </p>
              </div>
            </div>              
        </div>
        <button
          class="group inline-flex mt-5 items-center gap-4 button-mindaro-marketplace p-1 pl-2 pr-1 md:p-2 md:pl-5"
          aria-labelledby="ViewAllProducts"
        >
          <span>
            View all products
          </span>

          <span class="arrow-button-marketplace flex p-items-center justify-center p-1">
            <Icon class="hover:scale-110" name="i-ic:twotone-arrow-outward"/>
          </span>
        </button>
        </div>
      </div>
      <div class="grid h-full" v-if="widget?.imageSrc">
        <img :src="widget?.imageSrc" class="w-full  main-product-marketplace object-contain rounded-3xl z-0" :alt="`Product Image ${widget?.name}`" />
      </div>

      <div id="button-container" class="      
        flex items-center 
        justify-center 
        slide-marketplace
        absolute 
        bottom-4
        pl-3
        pr-2
        pt-2
        pb-2
        h-[45px] w-[45px]
        md:h-[50px] md:w-[50px]
        -translate-x-1/2
        left-3/4"
      >
        <Icon 
          id="left-arrow"
          name="i-material-symbols-light:arrow-back-ios-rounded"
          class="arrow-marketplace"
        />

        <Icon 
          id="right-arrow"
          name="i-material-symbols-light:arrow-forward-ios-rounded"
          class="arrow-marketplace"
        />
      </div>
      

      <div class="absolute bottom-5 left-3 sm:left-6 flex items-center gap-x-3 z-10" >
        <span class="text-sm text-gray-500 dark:text-gray-50" v-if="$viewport.isGreaterThan('md')">Follow us on:</span>
        <div class="flex items-center gap-x-2 sm:gap-x-3">
          <a href="#" aria-label="Twitter" class="flex items-center justify-center w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 rounded-full transition-transform hover:scale-110">
            <Icon name="i-mdi:twitter" class="text-gray-700 dark:text-gray-200" />
          </a>
          <a href="#" aria-label="TikTok" class="flex items-center justify-center w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 rounded-full transition-transform hover:scale-110">
            <Icon name="i-ic:baseline-tiktok" class="text-gray-700 dark:text-gray-200" />
          </a>
          <a href="#" aria-label="Instagram" class="flex items-center justify-center w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 rounded-full transition-transform hover:scale-110">
            <Icon name="i-mdi:instagram" class="text-gray-700 dark:text-gray-200" />
          </a>
          <a href="#" aria-label="LinkedIn" class="flex items-center justify-center w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 rounded-full transition-transform hover:scale-110">
            <Icon name="i-mdi:linkedin" class="text-gray-700 dark:text-gray-200" />
          </a>
        </div>
      </div>

    </div>
</div>

</template>
  
  <script setup lang="ts">
  import DottedArrow from '@/components/icons/dottedArrow.vue'
  import type { Product } from '~/types/products.ts';

  interface Props { widget: Product; }
  const props = defineProps<Props>();

  const { $viewport } = useNuxtApp()

  </script>