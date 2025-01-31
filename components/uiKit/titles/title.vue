<template>
    <div>
        <p class="font-bold" :class="[size === 'lg' ? 'text-[30px] leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px]' : size === 'md' ? 'text-[20px] leading-[30px] md:text-[25px] md:leading-[35px] lg:text-[30px] lg:leading-[40px]' : 'text-[15px] leading-[30px] md:text-[20px] md:leading-[35px] lg:text-[20px] lg:leading-[40px]', align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left', color === 'white' ? 'text-white' : color === 'prim-light' ? 'text-prim-900' : color === 'prim-dark' ? 'text-prim-950' : 'text-black', marginBottom ? 'mb-5' : 'mb-0']">{{ label }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    label: String,
    color: String,
    align: String,
    size: String,
    marginBottom: {
        type: Boolean,
        default: true
    }
});

</script>