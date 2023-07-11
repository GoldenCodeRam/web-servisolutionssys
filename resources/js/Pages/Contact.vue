<template>
    <Head title="Contáctanos" />

    <Header />

    <div class="h-screen flex flex-col bg-white">
        <div
            class="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
        >
            <div
                class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#42f5e0] to-[#122b87] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style="
                    clip-path: polygon(
                        74.1% 44.1%,
                        100% 61.6%,
                        97.5% 26.9%,
                        85.5% 0.1%,
                        80.7% 2%,
                        72.5% 32.5%,
                        60.2% 62.4%,
                        52.4% 68.1%,
                        47.5% 58.3%,
                        45.2% 34.5%,
                        27.5% 76.7%,
                        0.1% 64.9%,
                        17.9% 100%,
                        27.6% 76.8%,
                        76.1% 97.7%,
                        74.1% 44.1%
                    );
                "
            />
        </div>
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
