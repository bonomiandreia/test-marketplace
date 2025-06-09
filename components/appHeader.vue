<template>
    
    <header class="w-full bg-gray-100 dark:bg-gray-900 fixed h-[70px] z-20">
      <div class="flex items-center w-full max-w-7xl mx-auto h-[60px] bg-gray-200/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full p-3">
      
        <div class="flex items-center flex-shrink-0 pl-4 pr-2">
          <Logo/>
          <span class="font-semibold text-lg text-black dark:text-white"  v-if="$viewport.isGreaterOrEquals('lg')">nitec.</span>
        </div>
        <div class="flex-grow flex justify-center px-4 p-3">
          <div class="relative flex items-center w-full max-w-lg bg-white dark:bg-slate-800 rounded-full h-10 shadow-sm">
            <input 
              type="text" 
              placeholder="Search products..." 
              class="w-full h-full pl-6 pr-16 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
            />
            <button class="absolute right-1 top-1/2 -translate-y-1/2 flex items-center text-2xl justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-offset-slate-800">
              <Icon name="i-material-symbols-light:search-insights-rounded"/>
            </button>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <button class="flex items-center justify-center text-2xl w-10 h-10 bg-white dark:text-gray-50 dark:bg-slate-800 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-offset-gray-900">
            <Icon name="i-ri:archive-fill"/>
          </button>
          <button 
            @click="toggleDarkMode" 
            class="flex items-center justify-center text-2xl w-10 h-10 bg-white dark:bg-slate-800 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 dark:focus:ring-offset-gray-900"
            aria-label="Toggle Dark Mode"
          >
          <Icon name="i-fluent-color:heart-48"/>
          </button>

          <div class="flex items-center space-x-3 bg-white dark:bg-slate-800 rounded-full h-10 px-2 ">
            <span class="font-semibold text-sm text-black dark:text-white pl-2"  v-if="$viewport.isGreaterOrEquals('lg')">Ryman Alex</span>
            <img class="w-9 h-9 rounded-full object-cover" :src="Icon1" alt="User avatar">
          </div>
        </div>
      </div>
    </header>
    
</template>
      
<script setup lang="ts">
  import Logo from '@/components/icons/logo.vue'
  import Icon1 from '@/public/images/downloads/icon1.jpg'

const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
};
</script>