<template>

    <div v-if="mock">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-[60px]">
            <div class="lg:col-span-4">
                <div class="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 gap-4">
                    <div class="lg:col-span-7 main-product-marketplace-gallery-marketplace">
                        <MainProduct :widget="mockMain" />
                    </div>
                    <div class="h-[100px]" v-if="$viewport.isLessThan('lg')">
                        <PopularColors :widget="mock" />
                    </div>
                    <div class="lg:col-span-2 lg:row-start-2 h-[250px]">
                        <MoreProducts :widget="mock" />
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
                        
                        <PopularColors :widget="mock" />
                    </div>

                    <div>
                        <CommonProduct :widget="mock2" />
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
    title: "Light Grey Superface Headphone",
    subtitle: "Boosted with bass",
    buttonPosition: "top-left",
    titlePosition: "bottom-left",
    isGradient: true,
  };


  const mock2 = {
    type: "product",
    id: 201,
    imageSrc: "/images/pic1.jpg",
    title: "New Gen X-Bud",
    subtitle: "Perfect for daily use",
    description: "A versatile and durable backpack with multiple compartments.",
    isPopular: false,
    rating: 4.8,
    buttonPosition: "bottom-left",
    titlePosition: "top-left",
    isGradient: false,
  };

  const mockMain = {
    type: "mainProduct",
    id: 201,
    imageSrc: "/images/airpodsMax/airpodmax-white.png",
    title: "Sequoia Inspiring Musico",
    subtitle: "Clear Sounds",
    description: "Making your dream music come true stay with Sequios Sounds!",
    isPopular: false,
    rating: 4.8,
    buttonPosition: "bottom-left",
    titlePosition: "top-left",
    isGradient: false,
    imagesUsers: {
        images: [
            "/images/miband/miband.webp",
            "/images/miband/image1.jpg",
            "/images/miband/user2.webp"
        ]
    }
  };

  const mockDownloads = {
    type: "downloads",
    id: 201,
    imageSrc: "/images/airpodsMax/airpodmax-white.png",
    title: "Sequoia Inspiring Musico",
    subtitle: "Perfect for daily use",
    description: "A versatile and durable backpack with multiple compartments.",
    isPopular: false,
    rating: 4.8,
    buttonPosition: "bottom-left",
    titlePosition: "top-left",
    isGradient: false,
    imagesUsers: {
        images: [
            "/images/miband/miband.webp",
            "/images/miband/image1.jpg",
            "/images/miband/user2.webp"
        ]
    }
  };


  const mockPopular = {
    type: "productPopular",
    id: 201,
    imageSrc: "/images/pic4.jpg",
    title: "Listening Has been released",
    subtitle: "Perfect for daily use",
    description: "",
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