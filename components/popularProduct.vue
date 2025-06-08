<template>
    <div class="border rounded-lg text-center relative h-full">
  
      <div class="grid overflow-hidden h-full">
  
        <img :src="widget.imageSrc" class="w-full h-full object-cover rounded z-0" />
            <div
                v-if="widget.isGradient"
                :class="[
                'absolute', 'inset-0', 'z-1', 'rounded',
                mapPositionToGradientClass(widget.titlePosition)
                ]"
            >
                <h3 :class="['absolute', 'z-2', 'h2-marketplace', mapPositionToTailwind(widget.titlePosition)]">
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
                <button class="arrow-cta flex p-items-center justify-center">
                    <Icon class="hover:scale-110" name="i-ic:twotone-arrow-outward"/>
                </button>
            </div>
        </div>
      </div>
    </div>


  </template>
  
  <script setup lang="ts">
  interface Props { widget: any; }
  const props = defineProps<Props>();

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

  const mapPositionToGradientClass = (position?: any): string => {
  if (!position) return '';
  const gradientColors = 'from-transparent to-white/90';

  switch (position) {
    case 'top-left':     return `bg-gradient-to-tl ${gradientColors}`;
    case 'top-right':    return `bg-gradient-to-tr ${gradientColors}`;
    case 'bottom-left':  return `bg-gradient-to-bl ${gradientColors}`;
    case 'bottom-right': return `bg-gradient-to-br ${gradientColors}`;
    case 'top':          return `bg-gradient-to-t ${gradientColors}`;
    case 'bottom':       return `bg-gradient-to-b ${gradientColors}`;
    case 'left':         return `bg-gradient-to-l ${gradientColors}`;
    case 'right':        return `bg-gradient-to-r ${gradientColors}`;
    default: return '';
  }
};
  </script>