<template>
  <div class="photo-gallery-container">
    <CommonProduct :widget="mock"></CommonProduct>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import CommonProduct from './components/commonProduct.vue';

const mock = {
      type: "product",
      id: 201,
      imageSrc: "/images/product-a.jpg",
      title: "Stylish Backpack",
      subtitle: "Perfect for daily commutes",
      description: "A versatile and durable backpack with multiple compartments.",
      isPopular: true,
      rating: 4.8,
      buttonPosition: "top-left",
      titlePosition: "bottom-right",
      isPopularPosition: "top-right"
}

interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const currentPage = ref(1);
const photosPerPage = 30;
const {
  data: photos, 
  pending: isLoading,
  error: fetchError,
  refresh, 
} = useFetch<PicsumPhoto[]>('/api/photos', {

  query: {
    page: currentPage,
    limit: photosPerPage,
  },

});

const nextPage = () => {
  currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const isLastPage = computed(() => {
  return photos.value && photos.value.length < photosPerPage;
});


</script>

<style scoped>

</style>