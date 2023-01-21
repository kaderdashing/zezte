<template>
    <Link href="/show">show   </Link>&nbsp;
    <Link href="/">   index</Link>
    <slot></slot>

</template>
<script setup>
import {Link} from '@inertiajs/inertia-vue3'
</script>