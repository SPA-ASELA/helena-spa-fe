<template>
    <div>
        <div class="mb-5 flex justify-between items-center">
            <USkeleton class="max-w-[150px] w-full h-8" />
            <USkeleton class="max-w-[300px] w-full h-8" />
        </div>
        <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <div v-for="x in 25" class="flex flex-col gap-2 border border-[#c8c8c82f] rounded-md">
                <USkeleton class="w-full pt-[100%]" />
                <div class="px-2 flex flex-col items-center gap-2">
                    <USkeleton class="max-w-[90%] w-full h-6" />
                    <USkeleton class="max-w-[150px] w-full h-4" />
                    <USkeleton class="max-w-[90%] w-full h-8 mb-2" />
                </div>
            </div>
        </div>
    </div>
</template>