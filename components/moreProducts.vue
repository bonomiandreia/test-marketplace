<template>
    
    <div class="w-full h-full box-marketplace p-3">
        <div v-if="!widget" class="w-full h-full z-10 flex justify-center items-center">
            <ErrorLoad/>
        </div>
        <div v-else="widget">

            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-2xl text-black dark:text-gray-50">{{ widget.title }}</h2>
                    <p class="text-base text-gray-500 dark:text-gray-100">{{ widget.subtitle }}</p>
                </div>

                <button class="flex h-10 w-10 p-2 items-center text-5xl justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-300">
                        <Icon name="i-fluent-color:heart-48"/>
                </button>
            </div>

            <div class="grid grid-cols-3 gap-4">
                <img
                    v-for="(imageSrc, index) in widget.imagesUsers?.images"
                    :key="index"
                    :src="imageSrc"
                    :alt="`${widget.title} preview image ${index + 1}`"
                    class="aspect-square w-full rounded-2xl object-cover bg-gray-50 max-h-[150px]"
                />
            </div>

        </div>
    </div>
    
</template>
      
<script setup lang="ts">
    import type { Product } from '~/types/products.ts';
    interface Props { widget: Product; }
    const props = defineProps<Props>();

</script>