<template>
  <div>
    <div v-if="pending" class="flex flex-col justify-center items-center gap-4 text-center pt-[200px]">
      <Loader/>
    </div>

    <div v-else-if="product" class="container mx-auto px-4 py-8 pt-[100px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full h-full box-marketplace p-5 relative">
        
        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <img 
            :src="product.imageSrc" 
            :alt="product.name" 
            class="w-full h-[500px] object-cover object-right"
          >
        </div>

        <div class="flex flex-col justify-center">
          <div class="flex items-start md:items-center gap-4 mb-4">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ product.name }}</h1>
            
            <div v-if="product.isPopular" class="flex-shrink-0 z-2 border border-gray-500 text-gray-500 dark:border-gray-50 dark:text-gray-50 rounded-2xl p-2 flex items-center gap-x-1">
                <Icon name="i-fluent-color:heart-48"/>
                <span>Popular</span>
            </div>
          
          </div>
          <p class="text-gray-600 dark:text-gray-200 leading-relaxed mb-6">{{ product.about }}</p>

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
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import type { Product } from '~/types/products'; 

  definePageMeta({
      layout: "default",
  });


  const route = useRoute();

  const productId = route.params.id;

  const { data: product, pending, error, execute } = await useFetch<Product>(() => `/api/products?id=${productId}`);


  onMounted(() => {
      execute();
  });

  if (error.value) {
    throw showError({ statusCode: 404, statusMessage: 'Product Not Found' })
  }

  const formattedPrice = computed(() => {
    if (!product.value || typeof product.value.price !== 'number') {
      return ''; 
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(product.value.price);
  });


</script>

<style scoped>
/* Your styles remain the same */
</style>