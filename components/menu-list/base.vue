<template>
    <div>
        <div class="w-full h-[300px]">
            <img class="w-full h-full object-cover" v-if="image" :src="'/assets/menu_list/' + image" alt="">
        </div>
        <ImgTitle :label="title" />
        <div class="p-3 pb-10 bg-white">
            <div v-for="(item, index) in types" :key="index">
                <Title :label="item.title" :size="'md'" color="prim-light" />
                <div class="mb-4 block md:hidden w-full relative pt-[40%] rounded-lg overflow-hidden bg-red-50">
                    <img class="w-full h-full absolute top-0 left-0 object-cover" v-if="item.image" :src="'/assets/menu_list/' + item.image" alt="">
                </div>
                <div class="flex justify-between items-start gap-3">
                    <div>
                        <div class="text text-prim-900" v-html="item.description"></div>
                        <table class="mt-10 w-full text-center bg-prim-100">
                            <thead>
                                <tr class="bg-beige-200">
                                    <th class="px-6 py-3 font-bold"></th>
                                    <th class="border border-gray-400 px-6 py-3 font-bold">Duration</th>
                                    <th class="border border-gray-400 px-6 py-3 font-bold">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(detail, index) in item.details" :key="index">
                                    <td class="border border-gray-400 px-6 py-3 text-sm text-left">{{ detail.title }}</td>
                                    <td class="border border-gray-400 px-6 py-3 text-sm">{{ detail.duration }}</td>
                                    <td class="border border-gray-400 px-6 py-3 text-sm">{{ detail.price }}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="w-[250px] h-[150px] flex-shrink-0 rounded-xl hidden md:block overflow-hidden">
                        <img class="w-full h-full object-cover" v-if="item.image" :src="'/assets/menu_list/' + item.image" alt="">
                    </div>
                </div>
                <div v-if="index !== types.length - 1" class="w-full h-[1px] mt-10 mb-5 bg-prim-500"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImgTitle from '@/components/uiKit/titles/img-title-2.vue';
import Title from '@/components/uiKit/titles/title.vue';

const props = defineProps({
    image: String,
    title: String,
    types: {
        type: Array,
        default: () => [
            { title: '', image: '', details: [], description: '' },
        ]
    }
});

</script>