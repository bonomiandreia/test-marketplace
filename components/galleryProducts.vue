<template>
    <div>
      <!-- 
        Correction 1: Removed `grid-rows-2` from the main grid. 
        This allows the single row's height to be determined naturally by its tallest content (the left column).
      -->
      <div class="grid grid-cols-5 gap-4">
        <!-- This left column's structure is fine as it defines the overall height -->
        <div class="col-span-4">
          <div class="grid grid-cols-7 grid-rows-2 gap-4">
            <div class="col-span-7 h-[500px]">
              <MainProduct :widget="mock"></MainProduct>
            </div>
            <div class="col-span-2 row-start-2 h-[300px]">
              <MoreProducts :widget="mock"></MoreProducts>
            </div>
            <div class="col-span-2 col-start-3 row-start-2 h-[300px]">
              <Downloads :widget="mock"></Downloads>
            </div>
            <div class="col-span-3 col-start-5 row-start-2 h-[300px]">
              <PopularProduct :widget="mock"></PopularProduct>
            </div>
          </div>
        </div>
  
        <div class="col-start-5">
          <div class="grid h-full grid-cols-1 grid-rows-[100px_1fr_1fr] gap-4">
            <div>
              <PopularColors :widget="mock"></PopularColors>
            </div>
            <div>
              <PopularProduct :widget="mock"></PopularProduct>
            </div>
            <div>
              <PopularProduct :widget="mock"></PopularProduct>
            </div>
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