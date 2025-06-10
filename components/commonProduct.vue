<template>
    <div class="rounded-3xl relative h-full">
  
      <div class="grid overflow-hidden h-full">
  
        <img :src="widget.imageSrc" class="w-full h-full object-cover rounded-3xl z-0" />
            <div
                :class="[
                'absolute', 'inset-0', 'z-1', 'rounded-3xl',
                mapPositionToGradientClass(widget.isGradient, widget.titlePosition)
                ]"
            >
                <div :class="['absolute', 'z-2', mapPositionToTailwind(widget.titlePosition)]">
                    <h3 class="h1-marketplace">
                      {{ widget.title }}
                    </h3>
                    <span v-if="widget.subtitle" class="text-gray-500">
                      {{ widget.subtitle }}
                    </span>
                </div>
        
                <div :class="['absolute', mapPositionToTailwind(widget.buttonPosition)]">
                <button class="arrow-cta-marketplace flex p-items-center justify-center p-1">
                    <Icon class="hover:scale-110"  name="i-ic:twotone-arrow-outward"/>
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
            case 'bottom-left':  return `bg-gradient-to-b ${gradientColors}`;
            case 'bottom-right': return `bg-gradient-to-b ${gradientColors}`;
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