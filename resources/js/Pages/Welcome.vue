<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template>
    <Head title="Bienvenido" />

    <Header />

    <div class="flex flex-col h-full bg-white">
        <div class="my-auto py-12">
            <div class="container mx-auto">
                <h1 class="text-center text-3xl text-gray-800 pb-8">
                    Somos un mundo de soluciones a las necesidades de nuestros clientes
                </h1>

                <iframe
                    class="shadow-xl mx-auto w-full aspect-video max-w-3xl"
                    src="https://www.youtube.com/embed/PkDFXgqqblE?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>

    <Footer />
</template>
