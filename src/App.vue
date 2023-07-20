<script setup>
  import { RouterView } from 'vue-router'
  import { ref } from 'vue'

  const mobileOpen = ref(false)
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-around my-4">
      <!-- logo -->
      <div>
        <router-link class="text-primary mt-3 flex justify-center text-2xl" to="/">Simon Hryszko!</router-link>
      </div>

      <!-- menu: https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/ -->
        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-1">
          <div v-for="route in $router.options.routes" :key="route.path">
            <router-link
              :to="route.path"
              active-class="underline text-primary"
              class="hover:text-primary py-4 px-2 font-semibold transition duration-300">
              {{ route.name }}
            </router-link>
          </div>
        </div>
    </div>
  </div>

  <!-- content -->
  <router-view class="container mx-auto"></router-view>
</template>
