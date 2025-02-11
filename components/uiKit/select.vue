<template>
    <div class="mb-5 flex flex-col sm:flex-row items-start gap-1 sm:gap-5">
        <span class="w-[150px] mt-0 sm:mt-2">{{ label }}:</span>
        <div class="w-full">
            <select :value="modelValue" @change="handleChange" class="w-full h-10 pl-3 mb-1 rounded-md outline-none border" :class="error ? 'border-red-500' : 'border-transparent'">
                <option v-if="placeholder" value="" selected disabled>{{ placeholder }}</option>
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
            <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    options: Array,
    modelValue: [String, Number],
    error: String,
    placeholder: String
});

const emit = defineEmits(['update:value']);

function handleChange(event) {
    emit('update:value', event.target.value);
}
</script>