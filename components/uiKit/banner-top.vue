<template>
    <div class="nav-size-box bg-center bg-no-repeat bg-cover relative" :style="{ backgroundImage: `url('/assets/${image}')` }">
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#00000080]"></div>
        <div class="container py-20 relative">
            <Title :label="title" size="lg" :align="'center'" color="white" :margin-bottom="false" />
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';

const props = defineProps({
    image: String,
    title: String
})

</script>