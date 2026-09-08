<script setup>
import { defineProps } from 'vue';
import DownloadSVG from '@/components/ui/svg/DownloadSVG.vue';

const props = defineProps({
    manual: {
        type: JSON,
        required: true
    }
});

const manual = props.manual || {};

</script>
<template>
    <div
        class="card bg-base-100 shadow-md border border-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full max-w-sm mx-auto overflow-hidden">

        <!-- Contenedor fijo para la portada completa -->
        <figure
            class="w-full aspect-[3/4] bg-base-200/50 p-4 flex items-center justify-center border-b border-base-100 relative group">
            <a :href="manual.download_link">
                <img :src="manual.front_page" alt="Front Page Category"
                    class="h-full max-w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.03]" />
            </a>
        </figure>

        <div class="card-body p-5 flex flex-col justify-between flex-grow">
            <div class="space-y-2">
                <h2 class="card-title text-base md:text-lg font-bold text-base-content line-clamp-2 leading-tight">
                    {{ manual.title }}
                </h2>
                
                <p v-if="manual.description"
                    class="text-xs md:text-sm text-base-content/70 line-clamp-3 leading-relaxed">
                    {{ manual.description }}
                </p>
                <div class="badge badge-soft badge-accent">{{manual.category}}</div>
            </div>

            <div class="card-actions flex justify-between items-center w-full mt-5 pt-3 border-t border-base-200/60">

                <div class="badge badge-soft badge-secondary font-medium">
                    {{ manual.size }}
                </div>

                <a type="button" :href="manual.download_link" :download="manual.filename"
                    class="btn btn-primary btn-sm gap-2 shadow-sm transition-transform active:scale-95">
                    <DownloadSVG class="w-4 h-4" />
                    <span class="font-semibold text-xs md:text-sm">Descargar</span>
                </a>
            </div>
        </div>
    </div>
</template>
