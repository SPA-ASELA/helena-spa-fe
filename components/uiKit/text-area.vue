<template>
    <div class="mb-5 flex flex-col sm:flex-row items-start gap-1 sm:gap-5">
        <span class="w-[150px] mt-0 sm:mt-2">{{ label }}:</span>
        <div class="w-full">
            <textarea :value="value" @input="handleInput" class="w-full pl-3 pt-1 mb-1 rounded-md outline-none border" :class="error ? 'border-red-500' : 'border-transparent'" rows="5"></textarea>
            <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    label: String,
    value: String,
    error: String,
});

const emit = defineEmits(['update:value'])

function handleInput(event) {
    emit('update:value', event.target.value)
}

</script>