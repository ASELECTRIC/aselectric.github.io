<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Configuración
const slides = [
  { id: 1, src: '/src/assets/images/home/slider/image1.jpg', alt: 'Imagen 1' },
  { id: 2, src: 'https://daisyui.com', alt: 'Imagen 2' },
  { id: 3, src: 'https://daisyui.com', alt: 'Imagen 3' }
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
  <div 
    class="relative w-full overflow-hidden"
    @mouseenter="stopTimer"
    @mouseleave="startTimer"
  >
    <div class="flex w-full min-h-[300px] md:min-h-[450px]">
      <!-- Iteración de imágenes -->
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        class="w-full flex-shrink-0 transition-all duration-700 ease-in-out"
        :class="index === currentSlide ? 'block' : 'hidden'"
      >
        <img 
          :src="slide.src" 
          :alt="slide.alt" 
          class="w-full object-cover h-[300px] md:h-[450px]"
        />
      </div>
    </div>

    <!-- Botones de Navegación (Flechas) -->
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between pointer-events-none">
      <button 
        @click="prevSlide" 
        class="btn btn-circle btn-sm md:btn-md bg-base-100/50 backdrop-blur border-none pointer-events-auto"
      >
        ❮
      </button>
      <button 
        @click="nextSlide" 
        class="btn btn-circle btn-sm md:btn-md bg-base-100/50 backdrop-blur border-none pointer-events-auto"
      >
        ❯
      </button>
    </div>
  </div>
</template>
