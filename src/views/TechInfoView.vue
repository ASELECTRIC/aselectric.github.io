<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import ManualCard from '@/components/ui/card/ManualCard.vue';
import { getAllManuals, getFilteredManuals } from '@/js/repository/manuals_repository';

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
    <section class="container mx-auto min-h-screen flex flex-col justify-between">
        <!-- BLOQUE SUPERIOR: Contiene la barra fija de filtros/búsqueda -->
        <div>
            <br>
            <div class="sticky top-[64px] z-45 w-full max-w-4xl mx-auto px-4 md:px-0">
                <!-- BARRA PARA PANTALLAS GRANDES (md o más) -->
                <div
                    class="hidden md:flex navbar bg-base-100/90 backdrop-blur-md shadow-md rounded-xl p-2 gap-3 items-center border border-base-200/50">
                    <select v-model="selectedCategory"
                        class="select select-error select-bordered w-64 focus:outline-none focus:ring-2 focus:ring-error/20 transition-all">
                        <option value="Categoría" disabled>Categoría</option>
                        <option value="Ninguno">Ninguno</option>
                        <option value="Equipos Digitales">Equipos Digitales</option>
                        <option value="Equipos Progresivos">Equipos Progresivos</option>
                        <option value="Equipos Solares">Equipos Solares</option>
                        <option value="Equipos Variadores de Frecuencia">Equipos Variadores de Frecuencia</option>
                        <option value="Material">Material</option>
                    </select>
                    <div class="flex flex-1 join shadow-sm">
                        <input v-model="searchInput" id="title_input" type="text" placeholder="Buscar manuales..."
                            class="input input-error input-bordered join-item w-full focus:outline-none focus:ring-2 focus:ring-error/20 transition-all" />
                    </div>
                </div>

                <!-- COMPONENTE PARA MÓVILES (Desplegable flotante) -->
                <div
                    class="md:hidden collapse bg-base-100/90 backdrop-blur-md shadow-md rounded-xl border border-base-200 relative overflow-visible">
                    <input type="checkbox"
                        class="peer absolute top-0 left-0 w-full h-14 opacity-0 z-50 cursor-pointer" />

                    <div
                        class="collapse-title flex items-center justify-between p-4 h-14 peer-checked:[&_svg]:rotate-90">
                        <div class="flex flex-col items-start gap-0.5">
                            <span class="font-semibold text-sm text-base-content/80">Filtros de búsqueda</span>
                            <span class="text-xs text-error/80 font-medium truncate max-w-[200px]">
                                {{ selectedCategory !== 'Categoría' && selectedCategory !== 'Ninguno' ? selectedCategory
                                : 'Sin categoría' }}
                                {{ searchInput ? '• "' + searchInput + '"' : '' }}
                            </span>
                        </div>
                        <div class="btn btn-square btn-ghost btn-sm pointer-events-none text-base-content/70">
                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24"
                                class="inline-block h-5 w-5 stroke-current transition-transform duration-200">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                    </div>

                    <div
                        class="collapse-content absolute left-0 right-0 top-full mt-2 bg-base-100/95 backdrop-blur-md border border-base-200 shadow-xl rounded-xl flex flex-col gap-3 p-4 z-50 invisible peer-checked:visible opacity-0 peer-checked:opacity-100 transition-all duration-200 case-out">
                        <div class="form-control w-full">
                            <label class="label py-1"><span
                                    class="label-text-alt text-base-content/60 font-medium">Filtrar por
                                    Categoría</span></label>
                            <select v-model="selectedCategory"
                                class="select select-error select-bordered w-full focus:outline-none">
                                <option value="Categoría" disabled>Categoría</option>
                                <option value="Ninguno">Ninguno</option>
                                <option value="Equipos Digitales">Equipos Digitales</option>
                                <option value="Equipos Progresivos">Equipos Progresivos</option>
                                <option value="Equipos Solares">Equipos Solares</option>
                                <option value="Equipos Variadores de Frecuencia">Equipos Variadores de Frecuencia
                                </option>
                                <option value="Material">Material</option>
                            </select>
                        </div>
                        <div class="form-control w-full">
                            <label class="label py-1"><span
                                    class="label-text-alt text-base-content/60 font-medium">Término de
                                    búsqueda</span></label>
                            <input v-model="searchInput" type="text" placeholder="Buscar manuales..."
                                class="input input-error input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- CONTENEDOR INTERMEDIO: Grid principal de tarjetas o pantalla vacía -->
            <div class="container mx-auto relative mt-4">
                <div class="w-full h-full min-h-[750px] px-4 py-8 relative">
                    <!-- RECURSO 1: ANIMACIÓN DE CARGA -->
                    <div v-if="isLoading"
                        class="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                        <span class="loading loading-spinner loading-lg text-error"></span>
                        <p class="text-sm font-medium text-base-content/60 animate-pulse">Cargando manuales técnicos...
                        </p>
                    </div>

                    <!-- RENDERIZADO CUANDO TERMINA DE CARGAR -->
                    <div v-else class="w-full h-full">
                        <!-- CASO A: Hay manuales -->
                        <div v-if="paginatedManuals.length > 0"
                            class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start content-start animate-fade-in">
                            <ManualCard v-for="manual in paginatedManuals" :key="manual.id" :manual="manual" />
                        </div>

                        <!-- CASO B: No hay manuales -->
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
                                <p class="text-sm opacity-70 mt-1">Intenta cambiando los filtros o la palabra clave de
                                    búsqueda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- BLOQUE INFERIOR: Paginación empujada al fondo absoluto -->
        <div v-if="!isLoading && totalPages > 1" class="flex justify-center pt-8 pb-12 px-4 animate-fade-in">
            <div class="join shadow-md border border-base-200 bg-base-100">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="join-item btn btn-sm md:btn-md btn-ghost">«</button>
                <button class="join-item btn btn-sm md:btn-md bg-base-100 no-animation pointer-events-none font-medium">
                    Página {{ currentPage }} de {{ totalPages }}
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="join-item btn btn-sm md:btn-md btn-ghost">»</button>
            </div>
        </div>
    </section>
</template>