<template>
    <div class="product-widget border rounded-lg text-center relative">
  
      <div class="grid w-full overflow-hidden">
  
        <img :src="imageSrc" class="col-start-1 row-start-1 w-full h-auto object-cover rounded z-0" />
            <h3 :class="['absolute', 'z-2', 'text-bold', 'text-5xl', 'font-rethink', mapPositionToTailwind(widget.titlePosition)]">
                {{ widget.title }}
            </h3>
    
            <div v-if="widget.isPopular" 
            :class="[
                'absolute','z-2', 'border', 'border-gray-500', 'text-gray-500', 
                'rounded-2xl', 'p-2', 
                'flex', 'items-center', 'gap-x-1', 
                    mapPositionToTailwind(widget.isPopularPosition)
                ]">
                <Icon name="i-fluent-color:heart-48"/>
                <span>Popular</span>
            </div>
    
            <div :class="['absolute', mapPositionToTailwind(widget.buttonPosition)]">
            <button class="text-black py-2 px-4 text-5xl bg-white rounded-full">
                <Icon name="i-ic:twotone-arrow-outward"/>
            </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props { widget: any; }
  const props = defineProps<Props>();
    import imageSrc from '~/assets/images/pic2.jpg';

  
  const mapPositionToTailwind = (position?: any): string => {
    if (!position) return '';
    switch (position) {
      case 'top-left': return 'top-2 left-2';
      case 'top-right': return 'top-2 right-2';
      case 'bottom-left': return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      case 'top': return 'top-2 left-1/2 -translate-x-1/2';
      case 'bottom': return 'bottom-2 left-1/2 -translate-x-1/2';
      case 'left': return 'left-2 top-1/2 -translate-y-1/2';
      case 'right': return 'right-2 top-1/2 -translate-y-1/2';
      default: return '';
    }
  };
  </script>