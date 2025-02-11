<template>
    <div v-if="props.isLoading" class="h-screen bg-[#00000091] flex justify-center items-center fixed top-0 left-0 right-0 z-50">
        <UIcon class="text-[60px] text-prim" name="i-eos-icons:bubble-loading" dynamic />
    </div>
</template>

<script setup>

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    }
});

</script>