<template>
    
    <div class="w-full h-full box-marketplace flex flex-col items-center justify-center pt-4">
        <div class="z-10">
            <ImagesPopular
                :images="widget.imagesUsers.images" 
            />
        </div>
        <div class="relative -mt-5 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-blue100 to-blue500 text-white">
            <span class="text-4xl font-bold">5m+</span>
            <span class="text-sm">Downloads</span>
        </div>

        <div class="relative z-10 -mt-4 flex items-center gap-x-1.5 rounded-full bg-white dark:bg-gray-900  px-3 py-1 shadow-sm">
            <span class="text-xl text-yellow-300">★</span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-50"> {{ widget.rating}} reviews </span>
        </div>
    </div>
    
</template>
      
<script setup lang="ts">
    interface Props { widget: any; }
    const props = defineProps<Props>();

</script>