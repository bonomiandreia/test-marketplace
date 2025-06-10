<template>
  <div>
    <div class="container mx-auto px-4 py-8 pt-[100px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full h-full box-marketplace p-5 relative">
        

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <img 
            :src="mockMain.imageSrc" 
            :alt="mockMain.name" 
            class="w-full h-[500px] object-cover object-right"
          >
        </div>

        <div class="flex flex-col justify-center">
          <div class="flex items-start md:items-center gap-4 mb-4">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ mockMain.name }}</h1>
            
            <div v-if="mockMain.isPopular" class="flex-shrink-0 z-2 border border-gray-500 text-gray-500 dark:border-gray-50 dark:text-gray-50 rounded-2xl p-2 flex items-center gap-x-1">
                    <Icon name="i-fluent-color:heart-48"/>
                    <span>Popular</span>
            </div>
          
          </div>
          <p class="text-gray-600 dark:text-gray-200 leading-relaxed mb-6">{{ mockMain.about }}</p>

          <div class="text-4xl font-bold text-gray-800 dark:text-gray-100 pb-3">
            {{ formattedPrice }}
          </div>

            <button
              class="group inline-flex items-center justify-center button-mindaro-marketplace p-1 pl-2 pr-1 md:p-2 md:pl-5"
            >
              <span class="text-center">
                Buy Now!
              </span>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  
  definePageMeta({
      layout: "default",
  });

  const mockMain = {
    type: "mainProduct",
    id: 201,
    imageSrc: "/images/airpodsMax/airpodmax-white.png",
    name: 'Sequoia Inspiring Musico',
    about: 'Airpods by Sequoia. Proin sed scelerisque ipsum. Vestibulum nunc mauris, cursus eget dolor sit amet, laoreet viverra purus. Donec sit amet mi sagittis massa volutpat mollis at id lectus. Maecenas sagittis erat eget tempor placerat. Phasellus turpis dui, condimentum in viverra a, molestie non purus. Proin pellentesque eu massa in accumsan. Nulla facilisi.',
    isPopular: true,
    price: 99,
    rating: 4.8,
    buttonPosition: "bottom-left",
    titlePosition: "top-left",
    isGradient: false,
  };

  const userName = ref('');
  const newCommentText = ref('');

  const formattedPrice = computed(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(mockMain.price);
  });

</script>

<style scoped>
  /* No custom styles needed, all handled by Tailwind CSS */
</style>