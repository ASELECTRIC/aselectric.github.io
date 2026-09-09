<script setup>
import { ref, onMounted } from 'vue';
import CatalogCard from '@/components/ui/card/CatalogCard.vue';
import { getAllCatalogs } from '@/js/repository/catalogs_repository';

const catalogs = ref([]);

onMounted(async () => {
    catalogs.value = await getAllCatalogs(); // En el script SÍ se usa .value
});
</script>
<template>
    <section class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <CatalogCard
            v-for="catalog in catalogs"
            :key="catalog.id"
            :catalog="catalog"
        />
    </section>
</template>