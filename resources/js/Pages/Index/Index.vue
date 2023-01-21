<template>
    <MainLayout>
    <div>
       <p> index111 </p>
       
    </div>

    <div>le message en propse est {{ message }}</div>
</MainLayout>
</template>
<script setup>
//importer Link avec"L" pour faire du routage du style spa  
import {Link} from '@inertiajs/inertia-vue3'
import MainLayout from "../Layout/MainLayout.vue"
defineProps({
    'message' : String
    
})
</script>