<template>
    <div class="min-h-screen nav-size-box bg-prim-50" :class="!productsData.isLoading && productsData.products.length === 0 ? 'grid place-items-center' : ''">
        <div class="container">
            <ItemsSkeleton v-if="productsData.isLoading" />
            <div v-if="!productsData.isLoading && productsData.products.length === 0" class="max-w-[600px] w-full mx-auto">
                <img class="w-full h-full" src="@/public/assets/empty.png" alt="">
            </div>
            <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                <div v-for="(item, index) in productsData.products" :key="index">
                    <Item :item="item" :isCart="true" @removeFromCart="removeFromCart" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { apiService } from '../../services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';
import ItemsSkeleton from '@/components/skeletons/items.vue';
import Item from '@/components/global/itemCard.vue';

onMounted(() => {
    getProducts(); 
});

const productsData = reactive({
    isLoading: true,
    products: [],
});

const getProducts = async () => {
    const ids = localStorage.getItem('cart');    
    const query = {
        ids: ids
    };
    productsData.isLoading = true;
    try {
        const response = await apiService.request(API_ENDPOINTS.STORE.CART, {}, query);        
        productsData.products = [];
        Object.assign(productsData.products, response);        
    } catch (error) {
        console.log(error);
    }
    productsData.isLoading = false;
};

const removeFromCart = (itemId) => {
    productsData.products = productsData.products.filter(item => item.id !== itemId);
};

</script>