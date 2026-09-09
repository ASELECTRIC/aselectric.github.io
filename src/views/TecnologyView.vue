<script setup>
import PreviewSlider from '@/components/common/tecnology/PreviewSlider.vue';
import { ref } from 'vue';


// Modificamos el array para aceptar propiedades opcionales 'title' y 'description'
const fabricationItems = [
    {
        id: 0,
        src: '/src/assets/images/tecnology/fabricacion/fabrication1.jpg',
        title: 'Línea de Producción Automatizada',
        description: 'Maquinaria de última generación para el ensamblaje de precisión.'
    },
    {
        id: 1,
        src: '/src/assets/images/tecnology/fabricacion/fabrication2.jpg',
        title: 'Control de Calidad Avanzado'
    },
    {
        id: 2,
        src: '/src/assets/images/tecnology/fabricacion/fabrication3.jpg'
    },
    { id: 3, src: '/src/assets/images/tecnology/fabricacion/fabrication4.jpg' },
    { id: 4, src: '/src/assets/images/tecnology/fabricacion/fabrication6.jpg' },
    { id: 5, src: '/src/assets/images/tecnology/fabricacion/fabrication7.jpg' },
    { id: 8, src: '/src/assets/images/tecnology/fabricacion/fabrication8.jpg' },
    { id: 9, src: '/src/assets/images/tecnology/fabricacion/fabrication9.jpg' },
    { id: 10, src: '/src/assets/images/tecnology/fabricacion/Fabrication10.jpg' }
];

const programmingItems = [
    {
        id: 0,
        src: '/src/assets/images/tecnology/programacion/programming1.png'
    },
    {
        id: 1,
        src: '/src/assets/images/tecnology/programacion/programming2.png'
    },
    {
        id: 2,
        src: '/src/assets/images/tecnology/programacion/programming3.png'
    },
    {
        id: 3,
        src: '/src/assets/images/tecnology/programacion/programming4.png'
    },
    {
        id: 4,
        src: '/src/assets/images/tecnology/programacion/programming5.png'
    },
    {
        id: 5,
        src: '/src/assets/images/tecnology/programacion/programming6.png'
    },
    {
        id: 6,
        src: '/src/assets/images/tecnology/programacion/programming7.png'
    },
    {
        id: 7,
        src: '/src/assets/images/tecnology/programacion/programming8.png'
    },
    {
        id: 8,
        src: '/src/assets/images/tecnology/programacion/programming9.png'
    }
];

const designItems = [
    {
        id: 0,
        src: '/src/assets/images/tecnology/design/design1.jpg'
    },
    {
        id: 1,
        src: '/src/assets/images/tecnology/design/design2.jpg'
    }
]


// Variable de estado para controlar la pestaña activa de forma explícita
const activeTab = ref('fabricacion');
</script>

<template>
    <div class="container mx-auto max-w-6xl px-4 mt-16 mb-12">

        <!-- 1. MENÚ DE PESTAÑAS (Pills): Solo contiene los inputs/botones de control -->
        <div
            class="tabs tabs-boxed p-1.5 bg-base-200/60 backdrop-blur rounded-2xl grid grid-cols-3 gap-1 md:inline-flex md:w-auto md:mx-auto md:flex justify-center shadow-inner">

            <!-- PESTAÑA 1: Fabricación -->
            <input type="radio" name="my_tabs_6" value="fabricacion" v-model="activeTab"
                class="tab tab-md md:tab-lg !rounded-xl font-semibold transition-all duration-300 text-[11px] sm:text-xs md:text-base checked:!bg-error checked:!text-white whitespace-nowrap"
                aria-label="Fabricación" />

            <!-- PESTAÑA 2: Programación a Medida -->
            <input type="radio" name="my_tabs_6" value="programacion" v-model="activeTab"
                class="tab tab-md md:tab-lg !rounded-xl font-semibold transition-all duration-300 text-[11px] sm:text-xs md:text-base checked:!bg-error checked:!text-white whitespace-nowrap"
                aria-label="Programación" />

            <!-- PESTAÑA 3: Diseño y Delineado -->
            <input type="radio" name="my_tabs_6" value="diseno" v-model="activeTab"
                class="tab tab-md md:tab-lg !rounded-xl font-semibold transition-all duration-300 text-[11px] sm:text-xs md:text-base checked:!bg-error checked:!text-white whitespace-nowrap"
                aria-label="Diseño" />

        </div>

        <!-- 2. CONTENEDOR INDEPENDIENTE: El contenido se renderiza abajo ocupando el 100% real del ancho -->
        <div class="w-full mt-4">

            <!-- Contenido Fabricación -->
            <div v-if="activeTab === 'fabricacion'"
                class="bg-base-100 rounded-2xl border border-base-200 p-3 sm:p-4 md:p-6 shadow-sm animate-fade-in">
                <PreviewSlider :slides="fabricationItems" />
            </div>

            <!-- Contenido Programación -->
            <div v-if="activeTab === 'programacion'"
                class="bg-base-100 rounded-2xl border border-base-200 p-3 sm:p-4 md:p-6 shadow-sm animate-fade-in">
                <PreviewSlider :slides="programmingItems" />
            </div>

            <!-- Contenido Diseño -->
            <div v-if="activeTab === 'diseno'"
                class="bg-base-100 rounded-2xl border border-base-200 p-3 sm:p-4 md:p-6 shadow-sm animate-fade-in">
                <PreviewSlider :slides="designItems" />
            </div>

        </div>

    </div>
</template>


<style scoped>
/* Transición de aparición suave para el contenido al cambiar de pestaña */
.animate-fade-in {
    animation: slideUpFade 0.35s ease-out forwards;
}

@keyframes slideUpFade {
    from {
        opacity: 0;
        transform: translateY(6px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
