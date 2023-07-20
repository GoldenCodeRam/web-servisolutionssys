<template>
    <Head title="Contáctanos" />

    <Header />

    <div class="h-screen flex flex-col bg-white">
        <div class="my-auto py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-sky-600">
                        ¿Quieres saber más?
                    </h2>
                    <p
                        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        En Servisolutions te podemos ayudar
                    </p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Tenemos diferentes medios de contacto, los cuales puedes
                        utilizar para conocer más sobre nuestros servicios, o
                        solicitar más información.
                    </p>
                </div>
                <div class="flex">
                    <div
                        class="m-auto mt-12 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl inline-flex flex-col justify-center items-center"
                    >
                        <div
                            class="bg-sky-600 rounded-lg px-5 py-3 flex gap-4 text-white items-center mb-8"
                        >
                            <EnvelopeIcon class="h-8 w-8 text-white" />
                            <h1 class="text-lg">
                                informacion@servisolutionssys.com
                            </h1>
                        </div>
                        <div
                            class="bg-sky-600 rounded-lg px-5 py-3 flex gap-4 text-white items-center mb-8"
                        >
                            <PhoneIcon class="h-8 w-8 text-white" />
                            <h1 class="text-lg">(+57) 313 2441 8196</h1>
                        </div>
                        <div
                            class="bg-sky-600 rounded-lg px-5 py-3 flex gap-4 text-white items-center"
                        >
                            <PhoneIcon class="h-8 w-8 text-white" />
                            <h1 class="text-lg">(+57) 317 364 2783</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup>
import { Head } from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
</script>
