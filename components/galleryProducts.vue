<template>
    <div>
        <div class="grid grid-cols-5 grid-rows-5 gap-4">
            <div class="col-span-4">
                <div class="grid grid-cols-7 grid-rows-2 gap-4">
                    <div class="col-span-7">
                        <CommonProduct :widget="mock"></CommonProduct>
                    </div>
                    <div class="col-span-2 row-start-2">
                        <CommonProduct :widget="mock"></CommonProduct>
                    </div>
                    <div class="col-span-2 col-start-3 row-start-2">
                        <CommonProduct :widget="mock"></CommonProduct>
                    </div>
                    <div class="col-span-3 col-start-5 row-start-2">
                        <CommonProduct :widget="mock"></CommonProduct>
                    </div>
                </div>
    
            </div>
            <div class="grid grid-cols-1 grid-rows-3 gap-4">
                <div >
                    <CommonProduct :widget="mock"></CommonProduct>
                </div>
                <div >
                    <CommonProduct :widget="mock"></CommonProduct>
                </div>
                <div >
                    <CommonProduct :widget="mock"></CommonProduct>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-5 grid-rows-5 gap-4">
            <div class="col-span-4">

            </div>
            <div class="col-start-5">

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

    }
</script>