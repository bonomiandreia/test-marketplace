<template>
    <div v-if="pending" class="flex flex-col justify-center items-center gap-4 text-center pt-[200px]">
        <p class="inline w-8 h-8 text-gray-200 animate-spin dark:text-mindaro500">
            <Icon class="" name="i-tabler:loader-2"/>
        </p>
    </div>
    <div v-else-if="products && products.length > 0">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-[75px]">
            <div class="lg:col-span-4">
                <div class="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 gap-4">
                    <div class="lg:col-span-7 main-product-marketplace-gallery-marketplace">
                        <MainProduct :widget="mockMain" />
                    </div>
                    <div class="h-[100px]" v-if="$viewport.isLessThan('lg')">
                        <PopularColors />
                    </div>
                    <div class="lg:col-span-2 lg:row-start-2 h-[250px]">
                        <MoreProducts :widget="mockMoreProducts" />
                    </div>
                    <div class="lg:col-span-2 lg:col-start-3 lg:row-start-2 h-[250px]">
                        <Downloads :widget="mockDownloads" />
                    </div>
                    <div class="lg:col-span-3 lg:col-start-5 lg:row-start-2 h-[250px]" >
                        <PopularProduct :widget="mockPopular" />
                    </div>
                </div>
            </div>
            <div class="lg:col-start-5">
                <div class="grid grid-cols-1 gap-4 lg:h-full lg:grid-rows-[100px_150px_405px]">

                    <div class="h-[100px]"  v-if="$viewport.isGreaterOrEquals('lg')">
                        <PopularColors/>
                    </div>

                    <div>
                        <CommonProduct :widget="productFirst" />
                    </div>

                    <div>
                        <CommonProduct :widget="productSecond" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-4 text-center pt-[100px]"  v-else-if="products && products.length == 0">
        <Icon
            name="i-streamline:interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash"
            class="h-16 w-16 text-gray-400 dark:text-gray-200"
        />

        <p class="text-lg text-gray-600 dark:text-gray-50">
            Ops! Something went wrong, please try again later.
        </p>

    </div>
    <div class="flex flex-col justify-center items-center gap-4 text-center pt-[100px]" v-if="error">
        <Icon
            name="i-streamline:interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash"
            class="h-16 w-16 text-gray-400 dark:text-gray-200"
        />

        <p class="text-lg text-gray-600 dark:text-gray-50">
            Sorry, I don't have nothing to show for while ): 
        </p>

    </div>
  </template>
  
  <script setup lang="ts">
  import type { Product, Products } from '~/types/products.ts';
    const { data: products, pending, error } = useFetch<Products>('/api/products', {
        lazy: true
    });

    const mockMain = computed(() => products.value?.find(p => p.type === 'mainProduct') || null) as any as Product;
    const mockMoreProducts = computed(() => products.value?.find(p => p.type === 'moreProducts') || null) as any as Product;
    const mockDownloads = computed(() => products.value?.find(p => p.type === 'downloads') || null) as any as Product;
    const mockPopular = computed(() => products.value?.find(p => p.type === 'productPopular') || null) as any as Product;

    const commonProducts = computed(() => products.value?.filter(p => p.type === 'product') || []) 
    const productFirst = computed(() => commonProducts.value[1]); 
    const productSecond = computed(() => commonProducts.value[0]);
    
  </script>