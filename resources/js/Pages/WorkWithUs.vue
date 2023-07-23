<script setup lang="ts">
import { ref } from 'vue';

import { Head } from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

import { useForm } from '@inertiajs/vue3';

import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const positions = [
    { id: 1, name: 'Auxiliar de Servicios Generales' },
    { id: 2, name: 'Auxiliar de Mantenimiento' },
    { id: 3, name: 'Cargo Administrativo' },
    { id: 4, name: 'Otro' },
]
const selectedPosition = ref(positions[0])

const form = useForm({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    position: "",
});

function submit() {
    form.position = selectedPosition.value.name;
    form.post(route('work-with-us.register'));
}

</script>

<template>
    <Head title="Trabaja con nosotros" />

    <Header />

    <div class="bg-white py-12">
        <div class="container mx-auto px-8 max-w-3xl">
            <h1 class="text-3xl text-green-700 text-center">Trabaja con nosotros</h1>
            <p class="text-base text-center text-gray-900">
                En Servisolutions, estamos en la constante búsqueda de
                profesionales y gente apasionada; si quieres hacer parte de
                nuestro equipo, no dudes en dejarnos tu información.
            </p>

            <form @submit.prevent="submit" class="grid mt-8 gap-4 max-w-2xl mx-auto">
                <div>
                    <InputLabel for="firstName" value="Nombres" />

                    <TextInput id="firstName" type="text" class="mt-1 block w-full" v-model="form.firstName" required
                        autofocus autocomplete="name" />

                    <InputError class="mt-2" :message="form.errors.firstName" />
                </div>

                <div>
                    <InputLabel for="lastName" value="Apellidos" />

                    <TextInput id="lastName" type="text" class="mt-1 block w-full" v-model="form.lastName" required
                        autofocus autocomplete="name" />

                    <InputError class="mt-2" :message="form.errors.lastName" />
                </div>

                <div>
                    <InputLabel for="phone" value="Teléfono" />

                    <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" required autofocus />

                    <InputError class="mt-2" :message="form.errors.phone" />
                </div>

                <div>
                    <InputLabel for="email" value="Correo" />

                    <TextInput id="email" type="text" class="mt-1 block w-full" v-model="form.email" autofocus
                        autocomplete="email" placeholder="tucorreo@correo.com" />

                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div>
                    <InputLabel value="Cargo al que aspira" />
                    <Listbox v-model="selectedPosition">
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                                <span class="block truncate">{{ selectedPosition.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="position in positions" :key="position.name"
                                        :value="position" as="template">
                                        <li :class="[
                                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ position.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>

                <div class="flex mx-auto">
                    <PrimaryButton>Enviar</PrimaryButton>
                </div>
            </form>
        </div>
    </div>

    <Footer />
</template>
