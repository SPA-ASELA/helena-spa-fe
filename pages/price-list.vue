<template>
    <div class="bg-prim-50">
        <TopBanner image="price_list/bg.webp" title="Price List" />
        <div class="container bg-[url('/assets/price_list/bg-1.webp')] bg-no-repeat bg-cover grid grid-cols-4 gap-5">
            <div v-for="(item, index) in photoGallery" :key="index" class="w-full relative pt-[80%] rounded-lg overflow-hidden">
                <NuxtImg class="w-full h-full absolute top-0 left-0 object-cover" :src="'/assets/price_list/' + item" alt="Spa environment" />
            </div>
        </div>
        <div v-for="(item, index) in priceData" :key="index">
            <div v-if="!item.isBgDivider" class="container flex flex-col sm:flex-row gap-x-10 gap-y-5">
                <Title class="block sm:hidden" :label="item.title" :size="'md'" :align="'center'" :marginBottom="false" />
                <div class="w-full sm:w-[250px] relative pt-[60%] sm:pt-0 sm:h-[160px] flex-shrink-0 rounded-lg">
                    <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" :src="item.image" :alt="item.title" />
                </div>
                <div class="w-full">
                    <Title class="hidden sm:block" :label="item.title" :size="'md'" :align="'left'" :marginBottom="false" />
                    <p class="text-lg font-bold text-center sm:text-left"><span v-if="item.duration">Duration: {{ item.duration }} | </span> Price: <span class="text-red-500">Rs. {{ item.price }}</span></p>
                    <UDivider class="mb-3" />
                    <p class="text-center sm:text-left">{{ item.desc }}</p>
                </div>
            </div>
            <div v-else class="container py-20 bg-no-repeat bg-cover bg-center relative rounded-lg overflow-hidden" :style="{ backgroundImage: `url('${item.image}')` }">
                <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#00000080]"></div>
                <div class="relative z-10">
                    <Title class="hidden sm:block" :label="item.title" :size="'md'" :align="'center'" color="white" />
                    <p class="text-center text-white">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TopBanner from '@/components/uiKit/banner-top.vue';
import Title from '@/components/uiKit/titles/title.vue';
import { apiService } from '@/services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';

useSeoMeta({
    title: 'Helena Spa Prices – Transparent & Affordable Ayurvedic Packages in Ella, Sri Lanka',
    description: 'Discover clear and competitive pricing for our range of authentic Ayurvedic treatments at Helena Spa in Ella, Sri Lanka. Enjoy exceptional value on massages, facials, herbal therapies, and more, ensuring a luxurious wellness experience for every budget.',
    ogTitle: 'Helena Spa Prices – Transparent & Affordable Ayurvedic Packages in Ella, Sri Lanka',
    ogDescription: 'Discover clear and competitive pricing for our range of authentic Ayurvedic treatments at Helena Spa in Ella, Sri Lanka. Enjoy exceptional value on massages, facials, herbal therapies, and more, ensuring a luxurious wellness experience for every budget.',
    ogImage: 'https://helenaspa.lk/assets/logo.png',
});

useSchemaOrg([
    defineWebPage({
        name: 'Helena Spa Prices',
        description: 'Discover clear and competitive pricing for our range of authentic Ayurvedic treatments at Helena Spa in Ella.',
    })
]);

const photoGallery = ['1-1.webp', '1-2.webp', '1-3.webp', '1-4.webp'];
const priceData = ref([]);

onMounted(async () => {
    try {
        const data = await apiService.request(API_ENDPOINTS.PRICE.LIST);
        priceData.value = data.map(item => ({
            isBgDivider: item.isBgDivider,
            title: item.title,
            duration: item.duration,
            price: item.price,
            image: item.image, // Cloudinary URL
            desc: item.description
        }));
    } catch (e) {
        console.error('Failed to load price items', e);
    }
});

</script>