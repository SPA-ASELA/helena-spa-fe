<template>
    <div class="my-5 flex justify-center items-center gap-1 md:gap-2">
        <img class="w-[50px] md:w-[80px] scale-x-[-1]" src="@/public/assets/title-l-r.webp" alt="">
        <Title :label="label" :size="'md'" :align="'center'" color="prim-dark" :margin-bottom="false" />
        <img class="w-[50px] md:w-[80px]" src="@/public/assets/title-l-r.webp" alt="">
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';

const props = defineProps({
    label: String
});

</script>