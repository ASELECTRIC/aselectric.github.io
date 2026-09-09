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

onMounted(async () => {
    manuals.value = await getAllManuals();
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
        <div class="container mx-auto">
            <div
                class="w-full h-full min-h-[1000px] px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start content-start">

                <!-- CASO A: Hay manuales -> Renderizamos las tarjetas de forma normal -->
                <ManualCard v-if="paginatedManuals.length > 0" v-for="manual in paginatedManuals" :key="manual.id"
                    :manual="manual" />

                <!-- CASO B: No hay manuales -> El aviso se posiciona de forma absoluta en el centro del Grid -->
                <div v-else
                    class="absolute inset-0 flex items-center justify-center text-center p-12 text-base-content/60">
                    <div class="max-w-md">
                        <!-- Opcional: puedes poner un icono aquí -->
                        <p class="text-lg font-medium">No se encontraron manuales</p>
                        <p class="text-sm opacity-70 mt-1">Intenta cambiando los filtros o la palabra clave de búsqueda.
                        </p>
                    </div>
                </div>

            </div>

            <div v-if="totalPages > 1" class="flex justify-center mt-6 mb-10 px-4">
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