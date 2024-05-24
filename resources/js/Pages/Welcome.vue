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
        <div class="my-auto py-12 px-8">
            <div class="container mx-auto">
                <h1 class="text-center text-4xl text-gray-800 pb-8">
                    Somos un mundo de soluciones a las necesidades de nuestros clientes
                </h1>

                <video class="shadow-xl mx-auto w-full aspect-video max-w-3xl" controls autoplay muted>
                    <source src="videos/welcome.mp4" type="video/mp4">
                </video>

                <div class="flex flex-col sm:flex-row justify-center pt-24">
                    <div class="max-w-xl flex flex-col justify-center items-center p-0 sm:pe-12">
                        <h1 class="text-center font-bold text-3xl text-teal-800 pb-2">
                            Nuestro equipo
                        </h1>

                        <p class="hidden sm:block">
                            En <b class="font-semibold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-600">Servisolutions</b>,
                            nos enorgullece presentar a nuestro talentoso equipo
                            de limpieza, dedicado a transformar cada espacio en
                            un santuario de frescura y pulcritud. ¿Por qué
                            conformarse con lo común cuando puedes disfrutar de
                            un servicio de limpieza excepcional?
                        </p>
                    </div>

                    <video class="mx-auto sm:mx-0 shadow-xl w-[20rem]" controls autoplay muted>
                        <source src="videos/team1.mp4" type="video/mp4">
                    </video>
                </div>

                <div class="flex flex-col sm:flex-row justify-center pt-24 gap-12">
                    <div class="max-w-xl flex flex-col justify-center items-center p-0">
                        <h1 class="text-center font-bold text-3xl text-teal-800 pb-2">
                            Antes
                        </h1>

                        <video class="mx-auto sm:mx-0 shadow-xl w-[20rem]" controls muted>
                            <source src="videos/1.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="max-w-xl flex flex-col justify-center items-center p-0">
                        <h1 class="text-center font-bold text-3xl text-teal-800 pb-2">
                            Después
                        </h1>

                        <video class="mx-auto sm:mx-0 shadow-xl w-[20rem]" controls muted>
                            <source src="videos/2.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row justify-center py-24 gap-12">
                    <div class="max-w-xl flex flex-col justify-center items-center p-0">
                        <h1 class="text-center font-bold text-3xl text-teal-800 pb-2">
                            Nuestro Trabajo
                        </h1>

                        <video class="mx-auto sm:mx-0 shadow-xl w-[20rem]" controls muted>
                            <source src="videos/3.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>

                <h1 class="text-center font-bold text-3xl text-teal-800">
                    Nuestros clientes
                </h1>
                <div class="py-3">
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
                            <img src="images/clients/intex.jpg" class="aspect-auto">
                        </Slide>
                        <Slide key="6">
                            <img src="images/clients/tulipan.jpg" class="aspect-auto">
                        </Slide>
                        <Slide key="7">
                            <img src="images/clients/fioreste.jpg" class="aspect-auto">
                        </Slide>
                        <Slide key="8">
                            <img src="images/clients/auto.jpg" class="aspect-auto">
                        </Slide>
                        <Slide key="9">
                            <img src="images/clients/districars.jpg" class="aspect-auto">
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
