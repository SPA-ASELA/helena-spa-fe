<template>
    <div class="py-5">
        <!-- Mimics the standard (non-divider) price item layout -->
        <div v-for="n in count" :key="n" class="container flex flex-col sm:flex-row gap-x-10 gap-y-5 mb-10">
            <!-- Title visible only on mobile -->
            <USkeleton class="block sm:hidden h-7 max-w-[280px] w-full mx-auto mb-1 !bg-gray-300" />

            <!-- Thumbnail -->
            <div class="w-full sm:w-[250px] flex-shrink-0 rounded-lg overflow-hidden">
                <USkeleton class="w-full h-[160px] !bg-gray-300" />
            </div>

            <!-- Text block -->
            <div class="w-full flex flex-col gap-3 justify-center">
                <USkeleton class="hidden sm:block h-7 max-w-[300px] w-full !bg-gray-300" />
                <USkeleton class="h-5 max-w-[220px] w-full !bg-gray-300" />
                <USkeleton class="h-[1px] w-full !bg-gray-300" />
                <USkeleton class="h-4 w-full !bg-gray-300" />
                <USkeleton class="h-4 w-[85%] !bg-gray-300" />
                <USkeleton class="h-4 w-[70%] !bg-gray-300" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    count: {
        type: Number,
        default: 4,
    },
});
</script>
