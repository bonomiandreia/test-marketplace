<template>
    
  <div class="w-full h-full box-marketplace relative">
    <div :class="['absolute', 'z-10', 'w-[50%]', 'text-left', 'left-3', 'pl-3', 'pt-5']">
        <div class="py-0.5 pr-2.5 pl-1.5 chip-marketplace">
          <Icon 
            name="i-material-symbols:speaker"
            class="select-none text-lg text-gray-800 dark:text-gray-500 transition-all duration-200 hover:scale-125"
          />
          <span>Music is Classic</span>
        </div>
        <h3 class="md:text-5xl text-2xl text-bold pt-3">
          {{ widget.title }} 
        </h3>
      <div class="mt-3">
        <div class="flex items-center gap-x-3 sm:gap-x-2" v-if="$viewport.isGreaterThan('md')">
          
          <div class="flex-shrink-0 text-lg font-light text-transparent [-webkit-text-stroke:2px_theme(colors.gray.300)] sm:text-4xl">
            01
          </div>
          
          <div class="flex-shrink-0">
            <svg
              class="w-20 text-gray-300 sm:w-28"
              height="10"
              viewBox="0 0 120 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 5H110"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-dasharray="3 3"
              />
              <path
                d="M108 1L114 5L108 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="flex-shrink-0">
            <h2 class="text-2xl text-zinc-800 sm:text-2xl">
              {{ widget.subtitle }}
            </h2>
            <div class="mt-1 text-base text-gray-500 sm:text-sm w-[300px]">
              <p class="bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
                Making your dream music come true
                stay with Sequios Sounds!
              </p>
            </div>
          </div>              
      </div>
      <button
        class="group inline-flex mt-5 items-center gap-4 rounded-full bg-mindaro300 p-1 pl-2 pr-1 md:p-2 md:pl-5 font-semibold text-black transition hover:bg-mindaro400 focus:outline-none focus:ring-2 focus:ring-mindaro500 focus:ring-offset-2"
      >
        <span>
          View all products
        </span>

        <span class="arrow-button flex p-items-center justify-center p-1">
          <Icon class="hover:scale-110" name="i-ic:twotone-arrow-outward"/>
        </span>
      </button>
      </div>
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


  const { $viewport } = useNuxtApp()

  watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
    console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
  })

  </script>