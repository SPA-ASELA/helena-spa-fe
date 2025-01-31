<template>
    <div>
        <button class="h-[45px] drop-shadow-md text-prim-950 duration-300" :class="[type === 'rounded' ? 'px-5 rounded-full bg-prim-100 hover:bg-prim-500' : 'px-20 rounded-md bg-prim-900 hover:bg-prim-700']">
            <p class="mt-1 uppercase">{{ label }}</p>
        </button>
    </div>
</template>

<script setup>

const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'rounded',
    }
});

</script>