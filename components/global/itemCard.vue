<template>
    <div @click="router.push(`/shop/${item.id}`)"
        class="pb-2 flex flex-col justify-center overflow-hidden rounded-lg cursor-pointer bg-prim-100">
        <div class="w-full pt-[100%] relative">
            <div v-if="isCart" @click.stop class="absolute top-1 right-1 z-10">
                <UIcon @click="removeFromCart(item.id)" class="w-6 h-6 cursor-pointer text-red-500" name="i-solar:trash-bin-trash-outline" dynamic />
            </div>
            <img class="w-full h-full absolute top-0 left-0 object-cover" :src="BASE_URL + item.mainImage" alt="">
        </div>
        <div class="mt-2 px-2">
            <p class="text-lg text-center">{{ item.title }}</p>
            <p class="text-xs text-center">Rs. {{ item.price }}</p>
            <div @click.stop>
                <button @click="addToCart(item.id)" class="w-full px-2 py-1 mt-2 rounded-lg bg-prim-500">Add
                    to Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { BASE_URL } from '@/utils/constants/const';

const router = useRouter();
const toast = useToast();

const props = defineProps({
    item: Object,
    isCart: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits(['removeFromCart']);

const addToCart = (itemId) => {
    let savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
        savedCart = savedCart.filter(item => item !== itemId);
        savedCart.unshift(itemId);
    } else {
        savedCart = [itemId];
    }
    localStorage.setItem('cart', JSON.stringify(savedCart));
    toast.add({ title: 'Item added to cart' })
};

const removeFromCart = (itemId) => {
    let savedCart = JSON.parse(localStorage.getItem('cart'));
    savedCart = savedCart.filter(item => item !== itemId);
    localStorage.setItem('cart', JSON.stringify(savedCart));
    emits('removeFromCart', itemId);
    toast.add({ title: 'Item removed from cart' });
};

</script>