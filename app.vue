<template>
  <div>
    <GalleryProducts></GalleryProducts>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';


interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

// const currentPage = ref(1);
// const photosPerPage = 30;
// const {
//   data: photos, 
//   pending: isLoading,
//   error: fetchError,
//   refresh, 
// } = useFetch<PicsumPhoto[]>('/api/photos', {

//   query: {
//     page: currentPage,
//     limit: photosPerPage,
//   },

// });

// const nextPage = () => {
//   currentPage.value++;
// };

// const prevPage = () => {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//   }
// };

// const isLastPage = computed(() => {
//   return photos.value && photos.value.length < photosPerPage;
// });


</script>

<style scoped>

</style>