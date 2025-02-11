<template>
    <div>
        <div class="w-full h-[200px] sm:h-[250px] md:h-[300px]">
            <img class="w-full h-full object-cover" v-if="image" :src="'/assets/' + image" alt="">
        </div>
        <ImgTitle :label="title" />
    </div>
</template>

<script setup>
import ImgTitle from '@/components/uiKit/titles/img-title-2.vue';

const props = defineProps({
    image: String,
    title: String
});

</script>