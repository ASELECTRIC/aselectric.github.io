<script setup>
import { ref, onMounted } from 'vue';
import ManualCard from '@/components/ui/card/ManualCard.vue';
import {getAllManuals} from '@/js/manuals_repository';

const manuals = ref([]);

onMounted(async () => {
    manuals.value = await getAllManuals();
});

</script>
<template>
    <section class="container">
        <div class="navbar bg-base-100 shadow-sm">
        </div>
        <div class="px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <ManualCard 
                v-for="manual in manuals"
                :key="manual.id"
                :manual="manual"    
            />
        </div>
    </section>
</template>