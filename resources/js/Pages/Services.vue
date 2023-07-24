<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
</script>

<template>
    <Head title="¿Quiénes somos?" />

    <Header />

    <div class="bg-white">
        <div
            class="text-center text-3xl text-white py-24 bg-[url('/images/stock/2.jpg')] bg-cover bg-center bg-slate-500 bg-blend-multiply"
        >
            <h1 class="text-white">Servicios</h1>
        </div>
        <div class="container flex flex-col gap-14 py-14 px-5 mt-8 mx-auto max-w-5xl">
            <div class="pb-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    class="md:order-last m-auto h-48 w-48 object-cover rounded-full shadow-md outline outline-slate-500"
                    src="/images/stock/7.jpg"
                />
                <div>
                    <h1 class="text-center text-3xl text-gray-800 pb-5">
                        Aseo de Área Comercial
                    </h1>
                    <div class="grid sm:grid-cols-2 gap-8">
                        <div>
                            Esta área cubre establecimientos como:
                            <ul class="list-disc">
                                <li>Oficinas</li>
                                <li>Edificios institucionales</li>
                                <li>Centros comerciales</li>
                                <li>Bancos</li>
                                <li>Supermercados</li>
                                <li>Conjuntos residenciales</li>
                                <li>Colegios</li>
                            </ul>
                        </div>
                        <div>
                            Principales actividades:
                            <ul class="list-disc">
                                <li>Aseo interno</li>
                                <li>Lavado de pisos</li>
                                <li>
                                    Protección y tratamiento de pisos mediante
                                    el sistema de emulsionado, cristalizado,
                                    micropulido y diamantado.
                                </li>
                                <li>Desinfección y limpieza de baños</li>
                                <li>Lavado de fachadas</li>
                                <li>
                                    Limpieza de vidrios internos y externos
                                    (trabajo de alturas)
                                </li>
                                <li>Brigadas de aseo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    class="m-auto h-48 w-48 object-cover rounded-full shadow-md outline outline-slate-500"
                    src="/images/stock/6.jpg"
                />
                <div>
                    <h1 class="text-center text-3xl text-gray-800 pb-5">
                        Mantenimiento General
                    </h1>
                    <ul class="list-disc">
                        <li>Mantenimiento de redes eléctricas</li>
                        <li>Instalación y mantenimiento de cámaras</li>
                        <li>Mantenimiento de redes hidráulicas</li>
                        <li>Reparaciones locativas</li>
                        <li>Pintura y mantenimiento</li>
                    </ul>
                </div>
            </div>
            <div class="pb-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    class="md:order-last m-auto h-48 w-48 object-cover rounded-full shadow-md outline outline-slate-500"
                    src="/images/stock/4.jpg"
                />
                <div>
                    <h1 class="text-center text-3xl text-gray-800 pb-5">
                        Servicios de Asistencia en el Área de Cafetería
                    </h1>
                    <ul class="list-disc">
                        <li>Preparación de bebidas calientes y frías</li>
                        <li>Apoyo en diferentes eventos</li>
                        <li>Servicio a la mesa</li>
                        <li>Atención a eventos</li>
                    </ul>
                </div>
            </div>
            <div class="pb-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    class="m-auto h-48 w-48 object-cover rounded-full shadow-md outline outline-slate-500"
                    src="/images/stock/8.jpg"
                />
                <div>
                    <h1 class="text-center text-3xl text-gray-800 pb-5">
                        Suministro de Recurso Humano
                    </h1>
                    <div>
                        Suministro de personal idóneo para cargos administrativos temporales:
                    <ul class="list-disc">
                        <li>Auxiliares administrativos</li>
                        <li>Administradores (Propiedad horizontal)</li>
                        <li>Contadores</li>
                        <li>Ingenieros</li>
                        <li>Médicos</li>
                        <li>Enfermeros</li>
                        <li>Técnicos y tecnólogos en todas las áreas</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="pb-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    class="md:order-last m-auto h-48 w-48 object-cover rounded-full shadow-md outline outline-slate-500"
                    src="/images/stock/9.jpg"
                />
                <div>
                    <h1 class="text-center text-3xl text-gray-800 pb-5">
                        Aseo Área Industrial y Hospitalaria
                    </h1>
                    <ul class="list-disc">
                        <li>Aseo terminación de obra</li>
                        <li>Servicio de mantenimiento de jardines exteriores e interiores</li>
                        <li>Aspirado, pulido y limpieza de alfombras</li>
                        <li>Lavabo de fachadas</li>
                        <li>Brigadas de aseo</li>
                        <li>Hospitales</li>
                        <li>IPS</li>
                        <li>Clínicas</li>
                        <li>Laboratorios</li>
                        <li>Pabellones quirúrgicos</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
