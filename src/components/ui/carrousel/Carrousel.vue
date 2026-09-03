<script setup>
import {ref, onMounted, onUnmounted} from 'vue'; 
import { defineProps } from 'vue';

const props = defineProps({
    slides: {
        type: Array,
        required: true,
        default: () => []
    }
});

const slides = props.slides || [];

const currentIndex = ref(0)
let timer = null

// Navegación
const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  resetAutoplay()
}

// Reproducción automática opcional
const startAutoplay = () => {
  timer = setInterval(() => {
    nextSlide()
  }, 5000)
}

const resetAutoplay = () => {
  clearInterval(timer)
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearInterval(timer)
})

</script>
<template>
    <div
        class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-zinc-950/80 shadow-2xl backdrop-blur-md group">
        <!-- Pista del Carrusel (Slide Track) -->
        <div class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="slide in slides" :key="slide.id"
                class="w-full flex-shrink-0 relative aspect-[4/3] sm:aspect-[16/9] bg-zinc-900">
                <img :src="slide.src"
                    class="w-full h-full object-cover" />

                <!-- Degradado inferior para proteger contraste de los dots -->
                <div
                    class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none">
                </div>
            </div>
        </div>

        <!-- Botón Anterior -->
        <button @click="() => { prevSlide(); resetAutoplay(); }" aria-label="Imagen anterior"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-zinc-950/70 hover:bg-zinc-900 text-zinc-100 p-2 sm:p-3 rounded-full border border-zinc-700/50 backdrop-blur-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 active:scale-95 shadow-lg z-10">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <!-- Botón Siguiente -->
        <button @click="() => { nextSlide(); resetAutoplay(); }" aria-label="Siguiente imagen"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-zinc-950/70 hover:bg-zinc-900 text-zinc-100 p-2 sm:p-3 rounded-full border border-zinc-700/50 backdrop-blur-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 active:scale-95 shadow-lg z-10">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <!-- Indicadores (Dots) -->
        <div
            class="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10 bg-zinc-950/40 px-3 py-1.5 rounded-full border border-zinc-800/40 backdrop-blur-sm">
            <button v-for="(slide, index) in slides" :key="'dot-' + slide.id"
                @click="() => { goToSlide(index); resetAutoplay(); }" :aria-label="`Ir a la diapositiva ${index + 1}`"
                :class="[
                    'h-2 rounded-full transition-all duration-300',
                    currentIndex === index
                        ? 'w-6 sm:w-7 bg-red-500'
                        : 'w-2 bg-stone-400/50 hover:bg-stone-200'
                ]"></button>
        </div>
    </div>
</template>