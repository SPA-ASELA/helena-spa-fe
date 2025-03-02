<template>
    <div class="min-h-screen nav-size-box bg-prim-50"
        :class="!productsData.isLoading && productsData.products.length === 0 ? 'grid place-items-center' : ''">
        <div class="w-full h-[50px] mb-[2px] bg-prim-100">
            <div class="container h-full py-0 flex justify-center items-center gap-5">
                <div class="flex gap-7 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap">
                    <span v-for="(item, index) in categories" :key="index" @click="selectCategory(item)"
                        class="inline-block cursor-pointer"
                        :class="productsData.isLoading ? 'text-light-gray cursor-not-allowed' : selectedCategory === item ? 'text-prim-500' : 'text-black'">{{
                            item }}</span>
                </div>
                <div class="h-full flex-shrink-0 flex justify-end items-center">
                    <UIcon @click="router.push('/cart')" class="w-8 h-8 cursor-pointer"
                        name="i-material-symbols:garden-cart-outline-rounded" dynamic />
                </div>
            </div>
        </div>
        <div class="w-full h-[500px] relative">
            <div class="container flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
                <p class="text-[30px] sm:text-[40px] text-center">Explore Our Exclusive Range of Organic & Spa Products</p>
            </div>
            <img class="w-full h-full object-cover" src="@/public/assets/shop/bg.webp" alt="">
        </div>
        <div class="container">
            <ItemsSkeleton v-if="productsData.isLoading" />
            <div class="mb-5 flex justify-between items-center gap-5">
                <span class="text-sm">Total Products: {{ productsData.totalResults }}</span>
                <div class="flex items-center">
                    <span class="text-sm">{{ selectedCategory }}</span>
                    <UIcon @click="selectCategory('All')" v-if="selectedCategory !== 'All'" class="w-6 h-6 cursor-pointer"
                        name="i-material-symbols:close-small-outline-rounded" dynamic />
                </div>
            </div>
            <div v-if="!productsData.isLoading && productsData.products.length === 0" class="max-w-[600px] w-full mx-auto">
                <img class="w-full h-full" src="@/public/assets/empty.png" alt="">
            </div>
            <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                <div v-for="(item, index) in productsData.products" :key="index">
                    <Item :item="item" />
                </div>
            </div>
            <div v-if="productsData.totalResults > 0" class="py-10 flex justify-center">
                <UPagination @click="getProducts()" :disabled="productsData.isLoading" v-model="productsData.page"
                    :page-count="productsData.limit" :total="productsData.totalResults" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { apiService } from '../../services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';
import ItemsSkeleton from '@/components/skeletons/items.vue';
import Item from '@/components/global/itemCard.vue';

const route = useRoute();
const router = useRouter();

const categories = reactive(['All', 'Skin Care', 'Body Care', 'Hair Care', 'Aromatherapy', 'Massage & Wellness', 'Herbal Products', 'Spa Accessories']);
const selectedCategory = ref('');
const productsData = reactive({
    isLoading: true,
    page: 1,
    limit: 25,
    totalResults: 0,
    products: [],
});

onMounted(() => {
    pageOnLoad();
});

const pageOnLoad = () => {
    const category = route.query.category;
    if (category) {
        if (categories.includes(category)) {
            selectedCategory.value = category;
        }
    } else {
        selectedCategory.value = 'All';
    }
    getProducts();
};

const selectCategory = (item) => {
    selectedCategory.value = item;
    if (!productsData.isLoading) {
        getProducts();
    }
};

const getProducts = async () => {
    productsData.isLoading = true;
    const filters = {
        category: selectedCategory.value,
        page: productsData.page,
        limit: productsData.limit
    };
    try {
        const response = await apiService.request(API_ENDPOINTS.STORE.LIST, {}, filters);
        productsData.totalResults = response.totalResults;
        productsData.products = [];
        Object.assign(productsData.products, response.results);
    } catch (error) {
        console.log(error);
    }
    productsData.isLoading = false;
};

</script>