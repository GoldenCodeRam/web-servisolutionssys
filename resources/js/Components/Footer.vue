<template>
    <div class="bg-sky-700 w-full">
        <div class="container shadow-sm mx-auto text-white my-10 px-3 px-sm-5">
            <div class="divide-y divide-white">
                <div class="grid grid-cols-1 sm:grid-cols-3">
                    <div>
                        <Link href="/" class="text-center">
                            <img
                                class="w-44 mx-auto sm:mx-0"
                                src="/images/logo.svg"
                            />
                        </Link>
                    </div>
                    <div class="sm:col-span-2">
                        <h1 class="text-xl font-bold">Empresa</h1>
                        <ul
                            role="list"
                            class="grid grid-cols-1 gap-1 text-sm leading-6"
                        >
                            <li class="flex gap-x-3">
                                <Link href="/about-us">¿Quiénes somos?</Link>
                            </li>
                            <li class="flex gap-x-3">
                                <Link href="/services">Servicios</Link>
                            </li>
                            <li class="flex gap-x-3">
                                <Link href="/contact">Contacto</Link>
                            </li>
                            <li class="flex gap-x-3">
                                <Link href="/work-with-us">Trabaja con nosotros</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-3 pt-3 text-sm">
                    © 2023 Servisolutions SAS. Todos los derechos reservados.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
</script>
