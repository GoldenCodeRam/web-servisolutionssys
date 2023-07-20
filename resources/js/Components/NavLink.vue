<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    href: string;
    active?: boolean;
}>();

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center text-sm font-semibold leading-5 text-gray-600 transition duration-150 ease-in-out hover:text-green-600 focus:text-green-600'
        : 'inline-flex items-center text-sm font-semibold leading-5 text-gray-600 transition duration-150 ease-in-out hover:text-green-600 focus:text-green-600'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
