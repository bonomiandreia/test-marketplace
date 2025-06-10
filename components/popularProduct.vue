<template>
    <div class="border rounded-3xl text-center relative h-full box-marketplace">
        <div v-if="!widget" class="w-full h-full absolute z-10 flex justify-center items-center">
            <ErrorLoad/>
        </div>
      <div class="grid overflow-hidden h-full" v-if="widget">
  
        <img v-if="widget?.imageSrc" :src="widget?.imageSrc" class="w-full h-full object-cover rounded-3xl z-0" :alt="`Product Image ${widget?.name}`"/>
        <div
            :class="[
                'absolute', 'inset-0', 'z-1', 'rounded-3xl',
                mapPositionToGradientClass( widget.isGradient, widget.titlePosition)
            ]"
        >
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

            <div v-if="widget.isPopular && widget.rating" 
            :class="[
                'absolute','z-2', 'border', 'border-gray-500', 'text-gray-500', 
                'rounded-2xl', 'p-2', 'bg-white/50',
                'flex', 'items-center', 'gap-x-1', 
                    mapPositionToTailwind(widget.isRatingPosition)
                ]">
                <Icon name="i-fluent-color:star-16"/>
                <span>{{ widget.rating }}</span>
            </div>

            <h3 :class="['absolute', 'z-2', 'h2-marketplace', 'w-[170px]', 'text-left', 'cursor-pointer', mapPositionToTailwind(widget.titlePosition)]">
                {{ widget.title }}
            </h3>

            <div :class="['absolute', 'z-2', 'h2-marketplace', mapPositionToTailwind(widget.imagesPosition)]">
                <ImagesPopular
                    :images="widget.imagesUsers?.images" 
                />
            </div>
            
    
            <div :class="['absolute', mapPositionToTailwind(widget.buttonPosition)]">
                <button aria-labelledby="ViewAllProducts" class="arrow-cta-marketplace flex p-items-center justify-center p-1" @click="goDetail(widget.id)">
                    <Icon class="hover:scale-110" name="i-ic:twotone-arrow-outward"/>
                </button>
            </div>

        </div>
      </div>
    </div>


  </template>
  
  <script setup lang="ts">
    import type { Product } from '~/types/products.ts';
  interface Props { widget: Product; }
  const props = defineProps<Props>();


  const router = useRouter();
  
  const goDetail = (id: any) => {
    router.push(`/details/${id}`);
  };
  

  const mapPositionToTailwind = (position?: any): string => {
    if (!position) return '';
    switch (position) {
      case 'top-left': return 'top-3 left-3 text-left';
      case 'top-right': return 'top-3 right-3 text-right';
      case 'bottom-left': return 'bottom-3 left-3 text-left';
      case 'bottom-right': return 'bottom-3 right-5 text-right';
      case 'top': return 'top-3 left-1/2 -translate-x-1/2';
      case 'bottom': return 'bottom-3 left-1/2 -translate-x-1/2';
      case 'left': return 'left-3 top-1/2 -translate-y-1/2';
      case 'right': return 'right-3 top-1/2 -translate-y-1/2';
      case 'left-middle': return 'left-3 top-1/2 -translate-y-1/2';
      case 'right-middle': return 'right-3 top-1/2 -translate-y-1/2';
      
      default: return '';
    }
  };


    const mapPositionToGradientClass = (isGradient: boolean, position?: any, ): string => {
        if (!isGradient) return '';
        const gradientColors = 'from-transparent to-white/90';

        switch (position) {
            case 'top-left':     return `bg-gradient-to-tl ${gradientColors}`;
            case 'top-right':    return `bg-gradient-to-tr ${gradientColors}`;
            case 'bottom-left':  return `bg-gradient-to-bl ${gradientColors}`;
            case 'bottom-right': return `bg-gradient-to-br ${gradientColors}`;
            case 'top':          return `bg-gradient-to-t ${gradientColors}`;
            case 'bottom':       return `bg-gradient-to-b ${gradientColors}`;
            case 'left':         return `bg-gradient-to-l ${gradientColors}`;
            case 'right':        return `bg-gradient-to-t ${gradientColors}`;
            case 'left-middle':  return `bg-gradient-to-l ${gradientColors}`;
            case 'right-middle':  return `bg-gradient-to-r ${gradientColors}`;
            default: return '';
        }
    };
  </script>