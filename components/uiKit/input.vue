<template>
    <div class="mb-5 flex flex-col sm:flex-row items-start gap-1 sm:gap-5">
        <span class="w-[150px] mt-0 sm:mt-2">{{ label }}:</span>
        <div class="w-full">
            <input :value="value" @input="handleInput" class="w-full h-10 pl-3 mb-1 rounded-md outline-none border" :class="error ? 'border-red-500' : 'border-transparent'" :type="type">
            <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'text',
    },
    value: String,
    error: String,
});

const emit = defineEmits(['update:value'])

function handleInput(event) {
    emit('update:value', event.target.value)
}

</script>