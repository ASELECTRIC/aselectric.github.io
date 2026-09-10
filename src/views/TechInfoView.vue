<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import ManualCard from '@/components/ui/card/ManualCard.vue';
import { getAllManuals, getFilteredManuals } from '@/js/repository/manuals_repository';
import SearchSVG from '@/components/ui/svg/SearchSVG.vue';

const manuals = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;

const searchInput = ref('');
const selectedCategory = ref('Categoría');

const isLoading = ref(true);



onMounted(async () => {
    try {
        isLoading.value = true
        manuals.value = await getAllManuals();
    } finally {
        isLoading.value = false;
    }
});

async function filterManuals() {
    currentPage.value = 1;
    manuals.value = await getFilteredManuals(selectedCategory.value, searchInput.value);
}

watch([searchInput, selectedCategory], async () => {
    await filterManuals();
});

const paginatedManuals = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return manuals.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(manuals.value.length / itemsPerPage);
});

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}


</script>
<template>
    <section class="container mx-auto">
        <br>
        <div class="navbar bg-base-100 shadow-md rounded-xl p-4 md:p-2">
            <!-- El contenedor pasa de vertical (col) a horizontal (row) de forma fluida -->
            <div class="flex flex-col md:flex-row gap-3 w-full max-w-4xl mx-auto items-stretch md:items-center">

                <select v-model="selectedCategory" class="select select-error select-bordered w-full md:w-64">
                    <option value="Categoría" disabled>Categoría</option>
                    <option value="Ninguno">Ninguno</option>
                    <option value="Equipos Digitales">Equipos Digitales</option>
                    <option value="Equipos Progresivos">Equipos Progresivos</option>
                    <option value="Equipos Solares">Equipos Solares</option>
                    <option value="Equipos Variadores de Frecuencia">Equipos Variadores de Frecuencia</option>
                    <option value="Material">Material</option>
                </select>
                <!-- Grupo de Búsqueda: Input + Botón pegados -->
                <div class="flex flex-1 join">
                    <input v-model="searchInput" id="title_input" type="text" placeholder="Buscar manuales..."
                        class="input input-error input-bordered join-item w-full" />
                </div>
            </div>
        </div>
        <div class="container mx-auto relative">

            <!-- CONTENEDOR PRINCIPAL: Mantiene tu configuración de Grid y dimensiones -->
            <div class="w-full h-full min-h-[1000px] px-4 py-8 relative">

                <!-- RECURSO 1: ANIMACIÓN DE CARGA (Se muestra si isLoading es verdadero) -->
                <div v-if="isLoading"
                    class="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                    <span class="loading loading-spinner loading-lg text-error"></span>
                    <p class="text-sm font-medium text-base-content/60 animate-pulse">
                        Cargando manuales técnicos...
                    </p>
                </div>

                <!-- RENDERIZADO CUANDO TERMINA DE CARGAR (v-else) -->
                <div v-else class="w-full h-full">

                    <!-- CASO A: Hay manuales -> Renderizamos las tarjetas en tu Grid -->
                    <div v-if="paginatedManuals.length > 0"
                        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start content-start animate-fade-in">
                        <ManualCard v-for="manual in paginatedManuals" :key="manual.id" :manual="manual" />
                    </div>

                    <!-- CASO B: No hay manuales -> El aviso se posiciona en el centro -->
                    <div v-else
                        class="absolute inset-0 flex items-center justify-center text-center p-12 text-base-content/60 animate-fade-in">
                        <div
                            class="max-w-md bg-base-200/30 border border-base-200 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                            <div class="text-base-content/40 mb-3 flex justify-center">
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-12 h-12">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
                                </svg>
                            </div>
                            <p class="text-lg font-semibold text-base-content/80">No se encontraron manuales</p>
                            <p class="text-sm opacity-70 mt-1">
                                Intenta cambiando los filtros o la palabra clave de búsqueda.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <!-- PAGINACIÓN: Solo se muestra si NO está cargando y si hay más de 1 página -->
            <div v-if="!isLoading && totalPages > 1" class="flex justify-center mt-6 mb-10 px-4 animate-fade-in">
                <div class="join shadow-sm border border-base-200">
                    <!-- Botón Anterior -->
                    <button @click="prevPage" :disabled="currentPage === 1"
                        class="join-item btn btn-sm md:btn-md btn-ghost">
                        «
                    </button>

                    <!-- Indicador de Página Actual -->
                    <button class="join-item btn btn-sm md:btn-md bg-base-100 no-animation pointer-events-none">
                        Página {{ currentPage }} de {{ totalPages }}
                    </button>

                    <!-- Botón Siguiente -->
                    <button @click="nextPage" :disabled="currentPage === totalPages"
                        class="join-item btn btn-sm md:btn-md btn-ghost">
                        »
                    </button>
                </div>
            </div>

        </div>
    </section>
</template>