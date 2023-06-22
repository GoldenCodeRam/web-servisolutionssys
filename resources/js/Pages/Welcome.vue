<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template>
    <Head title="Welcome" />

    <div class="my-auto py-12 bg-white shadow-xl">
        <div class="container mx-auto">
            <h1 class="text-center text-3xl text-gray-800 pb-3">Servisolutions</h1>

            <iframe
                class="shadow-xl mx-auto"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PkDFXgqqblE?autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>
