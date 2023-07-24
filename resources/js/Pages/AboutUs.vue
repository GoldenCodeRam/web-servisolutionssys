<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";

</script>

<template>
    <Head title="¿Quiénes somos?" />

    <Header />

    <div class="bg-white">
        <div class="my-auto">
            <div
                class="text-center text-3xl text-white py-24 bg-[url('/images/stock/1.jpg')] bg-cover bg-center bg-slate-500 bg-blend-multiply"
            >
                <h1 class="text-white">¿Quiénes somos?</h1>
            </div>
            <div class="container px-5 py-12 mx-auto max-w-5xl">
                <p class="mb-3">
                    Somos una empresa concebida como gestora del mejoramiento de
                    la calidad de vida de madres y padres cabezas de hogar bajo
                    condiciones de vulnerabilidad.
                </p>
                <p class="mb-3">
                    Capacitamos a todo nuestro personal de manera idónea y
                    competente para ubicarlos en diferentes empresas públicas o
                    privadas prestando servicios integrales de limpieza,
                    mantenimientos locativos, cafetería, jardinería, fumigación,
                    entre otros, con los más altos estándares de calidad.
                </p>
                <p class="mb-5">
                    Adicionalmente, contamos con experiencia en la contratación
                    de personal calificado y capacitado para cada labor, y con
                    profesionales para el área administrativa de nuestras
                    compañía; dando cumplimiento con la normatividad vigente.
                </p>
                <h1 class="text-3xl text-gray-800 pb-5">Nuestra Misión</h1>
                <div>
                    SERVISOLUTIONS S & S S.A.S es una empresa que se destaca por
                    ofrecer soluciones integrales en el mantenimiento de
                    espacios locativos, nuestro compromiso es brindar un
                    servicio de calidad; con responsabilidad ambiental en los
                    sectores público y privado; contamos con talento humano
                    calificado lo que garantiza la optimización del servico
                    ofrecido y por ende la satisfaccion del cliente. Promovemos
                    permanentemente una cultura de aseo que contribuye al
                    mejoramiento de la calidad de vida de nuestros usuarios sin
                    afectar al ambiente.
                </div>
                <h1 class="text-3xl text-gray-800 py-5">Nuestra Visión</h1>
                <div>
                    En el año 2025 la empresa SERVISOLUTIONS S&S , será
                    reconocida por brindar calidad en las áreas de servicios
                    generales, mantenimiento y fumigación en los sectores
                    público y privado, dejando plasmado en nuestro desempeño, el
                    compromiso y el respeto hacia la necesidad de nuestros
                    clientes; brindando las herramientas necesarias para que
                    nuestros colaboradores realicen su labor de manera
                    eficiente, con responsabilidad ambiental; generando
                    confianza y fidelización hacia nuestra marca.
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
