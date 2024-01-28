
<template>

    <nav class="bg-slate-100 dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">

            <!-- Page switch -->
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between hidden md:flex w-full md:w-auto md:order-1 gap-x-12 gap-y-4" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 w-full"
                >
                    <NavbarLink v-for="link in links" :href="link.href" :label="link.label" />
                </ul>
                <DarkModeSwitchButton class="order-1"/>
            </div>

        </div>
    </nav>
    
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

import NavbarLink from './Navbar/NavbarLink.vue';
import DarkModeSwitchButton from '../../utils/DarkModeSwitchButton.vue';

const links = [
    {
        href: "/",
        label: "首頁"
    },
    {
        href: "/about-service",
        label: "關於本服務"
    },
    {
        href: "/create-event",
        label: "新增活動"
    },
    {
        href: "/conditional-and-terms",
        label: "隱私權/服務條款"
    },
];

onMounted(() => {
    initFlowbite();
})
</script>