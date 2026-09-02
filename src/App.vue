<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="flex flex-col items-center justify-center min-h-screen bg-base-200">
  <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
</style>
