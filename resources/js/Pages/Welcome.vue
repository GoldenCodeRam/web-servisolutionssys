<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();

const breakpoints = {
// 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
}
</script>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>

<template>
    <Head title="Bienvenido" />

    <Header />

    <div class="flex flex-col bg-white">
        <div class="my-auto py-12 px-3">
            <div class="container mx-auto">
                <h1 class="text-center text-3xl text-gray-800 pb-8">
                    Somos un mundo de soluciones a las necesidades de nuestros clientes
                </h1>

                <video class="shadow-xl mx-auto w-full aspect-video max-w-3xl" controls autoplay>
                    <source src="videos/welcome.mp4" type="video/mp4">
                </video>

                <h1 class="text-center text-2xl text-gray-800 pt-12">
                    Nuestros clientes
                </h1>
                <div class="py-5">
                    <Carousel wrapAround :autoplay="5000" snapAlign="center" :breakpoints="breakpoints">
                        <Slide key="1">
                                <img src="images/clients/cdm.png">
                        </Slide>
                        <Slide key="2">
                                <img src="images/clients/cvp.jpg">
                        </Slide>
                        <Slide key="3">
                                <img src="images/clients/lupita.jpg">
                        </Slide>
                        <Slide key="4">
                                <img src="images/clients/mp.png">
                        </Slide>
                        <Slide key="5">
                                <img src="images/clients/snr.jpeg" class="aspect-auto">
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
