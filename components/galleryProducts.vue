<template>

    <div v-if="mock">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 pt-[60px]">
            <div class="md:col-span-4">
                <div class="grid grid-cols-1 md:grid-cols-7 md:grid-rows-2 gap-4">
                <div class="md:col-span-7 h-[200px] md:h-[400px]">
                    <MainProduct :widget="mock" />
                </div>
                <div class="md:col-span-2 md:row-start-2 h-[250px]">
                    <MoreProducts :widget="mock" />
                </div>
                <div class="md:col-span-2 md:col-start-3 md:row-start-2 h-[250px]">
                    <Downloads :widget="mock" />
                </div>
                <div class="md:col-span-3 md:col-start-5 md:row-start-2 h-[250px]">
                    <PopularProduct :widget="mockPopular" />
                </div>
                </div>
            </div>
            <div class="md:col-start-5">
                <div class="grid grid-cols-1 gap-4 md:h-full md:grid-rows-[100px_150px_380px]">
                    <div class="h-[100px]">
                        <PopularColors :widget="mock" />
                    </div>

                    <div>
                        <CommonProduct :widget="mock" />
                    </div>

                    <div>
                        <CommonProduct :widget="mock" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-4 text-center pt-[100px]" v-if="!mock">
        <Icon
            name="i-streamline:interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash"
            class="h-16 w-16 text-gray-400 dark:text-gray-200"
        />

        <p class="text-lg text-gray-600 dark:text-gray-50">
            Ops! Something went wrong, please try again later.
        </p>

    </div>
  </template>
  
  <script setup lang="ts">
  const mock = {
    type: "product",
    id: 201,
    imageSrc: "/images/pic2.jpg",
    title: "Stylish Backpack",
    subtitle: "Perfect for daily commutes",
    description: "A versatile and durable backpack with multiple compartments.",
    isPopular: true,
    rating: 4.8,
    buttonPosition: "top-left",
    titlePosition: "bottom-right",
    isPopularPosition: "top-right",
    isGradient: true,
  };

  const mockPopular = {
    type: "productPopular",
    id: 201,
    imageSrc: "/images/pic4.jpg",
    title: "Listening Has been released",
    subtitle: "Perfect for daily commutes",
    description: "A versatile and durable backpack with multiple compartments.",
    isPopular: true,
    rating: 4.8,
    buttonPosition: "top-right",
    titlePosition: "left-middle",
    isPopularPosition: "top-left",
    isRatingPosition: 'bottom-right',
    isGradient: true,
    imagesPosition: 'bottom-left',
    imagesUsers: {
        images: [
            "/images/miband/miband.webp",
            "/images/miband/image1.jpg",
            "/images/miband/user2.webp"
        ]
    }
  };
  </script>