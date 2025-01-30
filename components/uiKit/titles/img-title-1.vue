<template>
    <div class="mb-5 flex flex-col items-center">
        <img class="w-[120px]" src="@/assets/images/logo/logo_ico.png" alt="">
        <Title :label="label" :size="'md'" :align="'center'" />
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';

const props = defineProps({
    label: String
});

</script>