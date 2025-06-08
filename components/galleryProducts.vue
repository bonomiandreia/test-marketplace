<template>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 pt-[60px]">
      <div class="md:col-span-4">
        <div class="grid grid-cols-1 md:grid-cols-7 md:grid-rows-2 gap-4">
          <div class="md:col-span-7 h-[400px] md:h-[500px]">
            <MainProduct :widget="mock"></MainProduct>
          </div>
          <div class="md:col-span-2 md:row-start-2 h-[250px]">
            <MoreProducts :widget="mock"></MoreProducts>
          </div>
          <div class="md:col-span-2 md:col-start-3 md:row-start-2 h-[250px]">
            <Downloads :widget="mock"></Downloads>
          </div>
          <div class="md:col-span-3 md:col-start-5 md:row-start-2 h-[250px]">
            <PopularProduct :widget="mock"></PopularProduct>
          </div>
        </div>
      </div>
  
      <div class="md:col-start-5">

        <div class="grid grid-cols-1 gap-4 md:h-full md:grid-rows-[auto_1fr_1fr]">
          <div class="h-[100px]">
            <PopularColors :widget="mock"></PopularColors>
          </div>
          <div>
            <CommonProduct :widget="mock"></CommonProduct>
          </div>
          <div>
            <CommonProduct :widget="mock"></CommonProduct>
          </div>
        </div>
      </div>
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
  </script>