<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    slides: {
        type: Array,
        required: true,
        default: () => []
    }
});

const slides = props.slides || [];

const carouselRef = ref(null);

function nextSlide() {
    if (carouselRef.value) {
        const width = carouselRef.value.offsetWidth;
        carouselRef.value.scrollBy({ left: width, behavior: 'smooth' });
    }
}

function prevSlide() {
    if (carouselRef.value) {
        const width = carouselRef.value.offsetWidth;
        carouselRef.value.scrollBy({ left: -width, behavior: 'smooth' });
    }
}

function goToSlide(index) {
    if (carouselRef.value) {
        const width = carouselRef.value.offsetWidth;
        carouselRef.value.scrollTo({ left: width * index, behavior: 'smooth' });
    }
}
</script>

<template>
    <div class="w-full max-w-7xl mx-auto px-4">
        <div class="relative group">
            <!-- Carrusel Principal -->
            <div ref="carouselRef" class="carousel w-full scroll-smooth flex overflow-x-auto snap-x snap-mandatory rounded-2xl shadow-xl">
                <div v-for="slide in slides" :key="slide.id" class="carousel-item w-full snap-start flex-shrink-0 relative overflow-hidden">
                    
                    <!-- Imagen de fondo -->
                    <img :src="slide.src" :alt="'Imagen de fabricación ' + slide.id"
                        class="w-full rounded object-cover h-[400px] md:h-[600px] lg:h-[800px]" />
                    
                    <!-- Capa de Texto Opcional (Solo se renderiza si existe título o descripción) -->
                    <div 
                        v-if="slide.title || slide.description" 
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-16 text-white pb-16 md:pb-24"
                    >
                        <div class="max-w-2xl space-y-2 animate-fade-in">
                            <h3 v-if="slide.title" class="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                                {{ slide.title }}
                            </h3>
                            <p v-if="slide.description" class="text-sm md:text-base lg:text-lg text-gray-200 font-light">
                                {{ slide.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Flecha Lateral Izquierda -->
            <div class="absolute inset-y-0 left-4 flex items-center justify-center z-10">
                <button 
                    @click="prevSlide" 
                    class="btn btn-circle btn-sm md:btn-md bg-base-100/70 hover:bg-base-100 backdrop-blur border-none shadow-md text-neutral transition-all"
                >
                    ❮
                </button>
            </div>
            <!-- Flecha Lateral Derecha -->
            <div class="absolute inset-y-0 right-4 flex items-center justify-center z-10">
                <button 
                    @click="nextSlide" 
                    class="btn btn-circle btn-sm md:btn-md bg-base-100/70 hover:bg-base-100 backdrop-blur border-none shadow-md text-neutral transition-all"
                >
                    ❯
                </button>
            </div>
        </div>
        <!-- Indicador Numérico Inferior -->
        <div class="flex w-full justify-center gap-2 py-4 flex-wrap">
            <button 
                v-for="(slide, index) in slides" 
                :key="'btn-' + slide.id"
                @click="goToSlide(index)" 
                class="btn btn-xs md:btn-sm btn-circle btn-neutral"
            >
                {{ index + 1 }}
            </button>
        </div>
    </div>
</template>

