
<template>

    <!-- Navbar Link -->
    <li>
        <router-link :to=href class="block py-2 px-3 text-base"
            :class="$route.path === href ? 'text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' : 'text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'"
        >
            {{ label }}
        </router-link>
    </li>

</template>

<script setup lang="ts">

defineProps({
    label: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
})

</script>