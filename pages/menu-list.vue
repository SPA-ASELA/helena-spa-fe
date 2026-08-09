<template>
    <div>
        <TopBanner image="menu_list/bg.webp" title="Our Menu" />
        <div class="bg-prim-50">
            <div class="w-full flex items-center lg:hidden sticky top-[78px] drop-shadow-md overflow-x-auto bg-prim-100 z-10">
                <div v-for="(item, index) in list" :key="index" class="w-full flex items-center">
                    <div @click="selectList(index)" class="min-w-[180px] w-full h-[50px] text-center grid place-items-center cursor-pointer" :class="[item.isActive ? 'bg-prim-700' : 'bg-prim-100']">{{ item.name }}</div>
                    <div v-if="index !== list.length - 1" class="w-[1px] h-[40px] flex-shrink-0 bg-white"></div>
                </div>
            </div>
            <div class="container flex flex-col lg:flex-row">
                <div class="w-[200px] flex-shrink-0 pr-0 lg:pr-1 hidden lg:flex flex-col gap-2 border-r-none lg:border-r-2">
                    <button v-for="(item, index) in list" :key="index" @click="selectList(index)" class="w-full h-[50px] px-4 text-left" :class="item.isActive ? 'bg-prim-700' : 'bg-prim-100'">{{ item.name }}</button>
                </div>
                <div class="w-full ml-0 lg:ml-1 relative min-h-[400px]">
                    <div v-if="isLoading" class="absolute inset-0 flex justify-center items-center bg-white/50 z-10">
                         <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-prim-700"></div>
                    </div>
                    
                    <BaseTemp 
                        v-if="activeCategory" 
                        :image="getBannerImage(activeCategory.name)" 
                        :title="activeCategory.name" 
                        :types="menuItems" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import TopBanner from '@/components/uiKit/banner-top.vue';
import BaseTemp from '@/components/menu-list/base.vue';
import { apiService } from '@/services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';

useSeoMeta({
    title: 'Spa & Massage Services at Helena Spa – Ella, Sri Lanka',
    description: 'Indulge in a range of spa services, including full-body massages, Shirodhara, steam baths, pedicures, facials, and herbal treatments at Helena Spa in Ella.',
    ogTitle: 'Spa & Massage Services at Helena Spa – Ella, Sri Lanka',
    ogDescription: 'Indulge in a range of spa services, including full-body massages, Shirodhara, steam baths, pedicures, facials, and herbal treatments at Helena Spa in Ella.',
    ogImage: 'https://helenaspa.lk/assets/logo.png',
});

useSchemaOrg([
    defineWebPage({
        name: 'Spa & Massage Services',
        description: 'Explore our wide range of Ayurvedic and spa services.',
    }),
    {
        "@type": "Service",
        "serviceType": "Massage Therapy",
        "provider": {
            "@id": "https://helenaspa.lk/#organization"
        },
        "areaServed": "Ella, Sri Lanka"
    },
    {
        "@type": "Service",
        "serviceType": "Skin Care",
        "provider": {
            "@id": "https://helenaspa.lk/#organization"
        },
        "areaServed": "Ella, Sri Lanka"
    }
]);

const route = useRoute();
const isLoading = ref(false);
const menuItems = ref([]);

const list = reactive([
    { name: 'Massages', isActive: true },
    { name: 'Therapies', isActive: false },
    { name: 'Skin Care', isActive: false },
    { name: 'Hand & Foot', isActive: false },
]);

const activeCategory = computed(() => list.find(item => item.isActive));

const getBannerImage = (categoryName) => {
    switch (categoryName) {
        case 'Massages': return 'massages/main.webp';
        case 'Therapies': return 'therapies/main.webp';
        case 'Skin Care': return 'skin_care/main.webp';
        case 'Hand & Foot': return 'hand_and_foot/main.webp';
        default: return 'massages/main.webp';
    }
};

const fetchCategoryItems = async (category) => {
    isLoading.value = true;
    try {
        const data = await apiService.request(API_ENDPOINTS.MENU.LIST, {}, { category });
        menuItems.value = data.map(item => ({
            title: item.title,
            image: item.image,
            details: item.details,
            description: item.description
        }));
    } catch (e) {
        console.error('Failed to load menu items', e);
    }
    isLoading.value = false;
};

const selectList = (index) => {
    list.forEach(item => {
        item.isActive = false;
    });
    list[index].isActive = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fetch data for the selected category
    fetchCategoryItems(list[index].name);
};

onMounted(() => {
    let startingIndex = 0;
    if (route.query.type && list.find(item => item.name === route.query.type)) {
        startingIndex = list.findIndex(item => item.name === route.query.type);
    }
    selectList(startingIndex);
});

</script>