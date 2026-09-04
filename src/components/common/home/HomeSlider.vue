<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Configuración
const slides = [
  { id: 1, src: '/src/assets/images/home/slider/image1.jpeg', alt: 'Imagen 1' },
  { id: 2, src: '/src/assets/images/home/slider/image2.jpeg', alt: 'Imagen 2' },
  { id: 3, src: '/src/assets/images/home/slider/image3.jpeg', alt: 'Imagen 3' }
]

const currentSlide = ref(0)
const intervalTime = 5000 // 5 segundos
let timer = null

// Funciones de navegación
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

// Control del temporizador automático
const startTimer = () => {
  stopTimer() // Evita duplicar temporizadores
  timer = setInterval(nextSlide, intervalTime)
}

const stopTimer = () => {
  if (timer) clearInterval(timer)
}

// Ciclo de vida
onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <!-- Contenedor del carrusel con pausa al pasar el ratón (hover) -->
  <div class="relative w-full overflow-hidden bg-black h-[300px] sm:h-[380px] md:h-[450px]" @mouseenter="stopTimer"
    @mouseleave="startTimer">

    <!-- 1. CONTENEDOR DE LAS IMÁGENES (Ya no usa flex, ahora las imágenes se apilan) -->
    <div v-for="(slide, index) in slides" :key="slide.id"
      class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
      :class="index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'">

      <!-- Imagen con filtro oscuro (brightness-50) para dar contraste al texto -->
      <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover brightness-50" />
    </div>

    <!-- 2. CONTENEDOR CENTRAL: LOGO + TEXTO (z-20 para quedar por encima de las fotos) -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:gap-4 w-[70%] md:w-full px-4 text-center z-20 pointer-events-none">
      <!-- Logo -->
      <img src="/src/assets/images/logo1.png" alt="As Electric"
        class="h-16 sm:h-24 md:h-36 lg:h-44 w-auto object-contain" />

      <!-- Texto optimizado -->
      <span
        class="text-white text-sm sm:text-base md:text-2xl lg:text-3xl font-bold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
        Automatización • Proyectos • Energía Solar
      </span>
    </div>

    <!-- 3. BOTONES DE NAVEGACIÓN (Z-30 para que siempre se puedan clicar) -->
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between items-center pointer-events-none z-30">
      <!-- Botón Izquierdo -->
      <button @click="prevSlide"
        class="btn btn-circle btn-sm md:btn-md bg-base-100/50 backdrop-blur border-none pointer-events-auto flex items-center justify-center text-white">
        ❮
      </button>

      <!-- Botón Derecho -->
      <button @click="nextSlide"
        class="btn btn-circle btn-sm md:btn-md bg-base-100/50 backdrop-blur border-none pointer-events-auto flex items-center justify-center text-white">
        ❯
      </button>
    </div>

  </div>
</template>
