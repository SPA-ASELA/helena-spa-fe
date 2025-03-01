<template>
    <div class="min-h-screen nav-size-box bg-prim-50">
        <div v-if="isPlaceOrderPopupVisible" @click="isPlaceOrderPopupVisible = false;"
            class="p-2 fixed top-0 right-0 bottom-0 left-0 grid place-items-center bg-[#000000a3] z-50">
            <div @click.stop class="max-w-[700px] w-full max-h-[80vh] p-5 overflow-y-auto rounded bg-white">
                <div class="mb-5 flex justify-end">
                    <UIcon @click="isPlaceOrderPopupVisible = false;" class="w-4 h-4 cursor-pointer" name="i-maki:cross-11"
                        dynamic />
                </div>
                <div>
                    <div class="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <p>First Name</p>
                            <input v-model="placeOrder.firstName" type="text"
                                class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                                :class="errors.firstName ? 'border-red-500' : ''" placeholder="First Name">
                            <p v-if="errors.firstName" class="text-sm text-red-600">{{ errors.firstName }}</p>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input v-model="placeOrder.lastName" type="text"
                                class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                                :class="errors.lastName ? 'border-red-500' : ''" placeholder="Last Name">
                            <p v-if="errors.lastName" class="text-sm text-red-600">{{ errors.lastName }}</p>
                        </div>
                    </div>
                    <div class="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <p>Email</p>
                            <input v-model="placeOrder.email" type="email"
                                class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                                :class="errors.email ? 'border-red-500' : ''" placeholder="Email">
                            <p v-if="errors.email" class="text-sm text-red-600">{{ errors.email }}</p>
                        </div>
                        <div>
                            <p>Phone</p>
                            <input v-model="placeOrder.phone" type="number"
                                class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                                :class="errors.phone ? 'border-red-500' : ''" placeholder="Phone">
                            <p v-if="errors.phone" class="text-sm text-red-600">{{ errors.phone }}</p>
                        </div>
                    </div>
                    <div class="mb-5">
                        <p>Address Line 1</p>
                        <input v-model="placeOrder.addressLine1" type="text"
                            class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                            :class="errors.addressLine1 ? 'border-red-500' : ''" placeholder="Address Line 1">
                        <p v-if="errors.addressLine1" class="text-sm text-red-600">{{ errors.addressLine1 }}</p>
                    </div>
                    <div class="mb-5">
                        <p>Address Line 2</p>
                        <input v-model="placeOrder.addressLine2" type="text"
                            class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                            :class="errors.addressLine2 ? 'border-red-500' : ''" placeholder="Address Line 2">
                        <p v-if="errors.addressLine2" class="text-sm text-red-600">{{ errors.addressLine2 }}</p>
                    </div>
                    <div class="mb-10">
                        <p>City</p>
                        <input v-model="placeOrder.city" type="text"
                            class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                            :class="errors.city ? 'border-red-500' : ''" placeholder="City">
                        <p v-if="errors.city" class="text-sm text-red-600">{{ errors.city }}</p>
                    </div>
                    <Button @click="placeAnOrder()" class="w-full" :label="loaders.placeOrder ? 'Placing Order...' : 'Place Order'" type="square"
                        :full-width="true" />
                </div>
            </div>
        </div>
        <div v-if="loaders.loadProductData" class="fixed top-0 right-0 bottom-0 left-0 grid place-items-center bg-[#000000a6] z-50">
            <UIcon class="w-16 h-16 text-prim-50" name="eos-icons:bubble-loading"
                dynamic />
        </div>
        <div v-else>
            <div class="w-full h-[50px] mb-[2px] bg-prim-100">
                <div class="container h-full py-0 flex justify-center items-center gap-5">
                    <div class="flex gap-7 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap">
                        <span v-for="(item, index) in categories" :key="index" @click="selectCategory(item)"
                            class="inline-block cursor-pointer">{{ item }}</span>
                    </div>
                    <div class="h-full flex-shrink-0 flex justify-end items-center">
                        <UIcon @click="router.push('/cart')" class="w-8 h-8 cursor-pointer"
                            name="i-material-symbols:garden-cart-outline-rounded" dynamic />
                    </div>
                </div>
            </div>
            <div class="container grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <div class="w-full pt-[60%] lg:pt-[80%] mb-3 relative bg-red-50">
                        <img class="w-full h-full absolute top-0 left-0 object-cover"
                            :src="images.filter(item => item.isSelected).map(image => image.img)[0]" alt="">
                    </div>
                    <div class="w-full h-[70px] xs:h-[100px] sm:h-[150px] flex justify-between items-center gap-1 xs:gap-2">
                        <img @click="ImageChangeArrow('prev')"
                            class="w-6 xs:w-10 sm:w-16 h-6 xs:h-10 sm:h-16 flex-shrink-0 cursor-pointer rotate-180"
                            src="/assets/arrow.png" alt="">
                        <div class="w-full overflow-x-auto flex gap-1 xs:gap-3">
                            <div v-for="(item, index) in images" :key="index" @click="imageSelect(index)"
                                class="w-[70px] xs:w-[100px] sm:w-[150px] h-[70px] xs:h-[100px] sm:h-[150px] flex-shrink-0 border-2"
                                :class="item.isSelected ? 'border-prim-900' : 'border-transparent'">
                                <img class="w-full h-full object-cover" :src="item.img" alt="">
                            </div>
                        </div>
                        <img @click="ImageChangeArrow('next')"
                            class="w-6 xs:w-10 sm:w-16 h-6 xs:h-10 sm:h-16 flex-shrink-0 cursor-pointer"
                            src="/assets/arrow.png" alt="">
                    </div>
                </div>
                <div>
                    <p class="mb-5 text-[25px] xs:text-[35px] sm:text-[50px] font-bold line-clamp-2">{{ itemData.title }}
                    </p>
                    <p class="mb-10 text-xl xs:text-2xl sm:text-3xl">Rs: {{ new
                        Intl.NumberFormat('en-US').format(itemData.price) }}</p>
                    <p class="mb-2">Quantity: ({{ itemData.quantity === 0 ? 'Out of Stock' : `${itemData.quantity} In Stock`
                    }})</p>
                    <div class="mb-16 flex justify-start items-center">
                        <button @click="setItemQty('decrease')" class="w-10 h-16 flex-shrink-0 bg-[#D9D9D9]">-</button>
                        <div class="min-w-[50px] h-16 px-1 flex justify-center items-center bg-[#D9D9D9]">
                            <p class="text-center">{{ placeOrder.quantity }}</p>
                        </div>
                        <button @click="setItemQty('increase')" class="w-10 h-16 flex-shrink-0 bg-[#D9D9D9]">+</button>
                    </div>
                    <button @click="addToCart()" class="w-full p-4 mb-3 rounded-lg bg-prim-100">ADD TO CART</button>
                    <button @click="isPlaceOrderPopupVisible = true;" class="w-full p-4 rounded-lg bg-prim-500">BUY IT
                        NOW</button>
                </div>
            </div>
            <div class="b bg-prim-100">
                <div class="container">
                    <p class="mb-5 text-3xl">Description:</p>
                    <p class="whitespace-pre-line">{{ itemData.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { apiService } from '../../services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';
import { BASE_URL } from '@/utils/constants/const';
import Button from '@/components/uiKit/button.vue';
import Swal from 'sweetalert2';

const toast = useToast();
const route = useRoute();
const router = useRouter();

const categories = reactive(['All', 'Skin Care', 'Body Care', 'Hair Care', 'Aromatherapy', 'Massage & Wellness', 'Herbal Products', 'Spa Accessories']);
const itemData = reactive({});
const images = reactive([]);
const isPlaceOrderPopupVisible = ref(false);
const placeOrder = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    quantity: 1,
    addressLine1: '',
    addressLine2: '',
    city: ''
});

const loaders = reactive({
    loadProductData: true,
    placeOrder: false
})
const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: ''
});

onMounted(() => {
    getProduct();
});

const getProduct = async () => {
    const id = route.params.id;
    if (id) {
        loaders.loadProductData = true;
        try {
            const response = await apiService.request(API_ENDPOINTS.STORE.PRODUCT, {}, { id });
            Object.assign(itemData, response);
            images.push({ img: BASE_URL + itemData.mainImage, isSelected: true });
            if (response.subImages.length > 0) {
                response.subImages.forEach((item) => {
                    images.push({ img: BASE_URL + item, isSelected: false });
                });
            }
        } catch (error) {
            console.log(error);
        }
        loaders.loadProductData = false;
    }
};

const selectCategory = (item) => {
    router.push(`/shop?category=${item}`);
};

const imageSelect = (index) => {
    images.map((item, i) => {
        if (i === index) {
            item.isSelected = true;
        } else {
            item.isSelected = false;
        }
    });
};

const ImageChangeArrow = (type) => {
    const currentIndex = images.findIndex(item => item.isSelected);
    images.forEach(item => {
        item.isSelected = false;
    });
    if (type === 'prev') {
        if (currentIndex > 0) {
            images[currentIndex - 1].isSelected = true;
        } else {
            images[images.length - 1].isSelected = true;
        }
    } else {
        if (currentIndex < images.length - 1) {
            images[currentIndex + 1].isSelected = true;
        } else {
            images[0].isSelected = true;
        }
    }
};

const setItemQty = (type) => {
    if (type === 'decrease') {
        if (placeOrder.quantity > 1) {
            placeOrder.quantity--;
        }
    } else {
        if (placeOrder.quantity < itemData.quantity) {
            placeOrder.quantity++;
        }
    }
};

const addToCart = () => {
    const itemId = route.params.id;
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

const placeAnOrder = async () => {
    if (!placeOrder.firstName) {
        errors.firstName = 'Please enter first name';
    } else {
        errors.firstName = '';
    }

    if (!placeOrder.lastName) {
        errors.lastName = 'Please enter last name';
    } else {
        errors.lastName = '';
    }

    if (!placeOrder.email) {
        errors.email = 'Please enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(placeOrder.email)) {
        errors.email = 'Please enter valid email';
    } else {
        errors.email = '';
    }

    if (!placeOrder.phone) {
        errors.phone = 'Please enter phone';
    } else if (placeOrder.phone.length < 9) {
        errors.phone = 'Please enter valid phone';
    } else {
        errors.phone = '';
    }

    if (!placeOrder.addressLine1) {
        errors.addressLine1 = 'Please enter address line 1';
    } else {
        errors.addressLine1 = '';
    }

    if (!placeOrder.addressLine2) {
        errors.addressLine2 = 'Please enter address line 2';
    } else {
        errors.addressLine2 = '';
    }

    if (!placeOrder.city) {
        errors.city = 'Please enter city';
    } else {
        errors.city = '';
    }

    if (!errors.firstName && !errors.lastName && !errors.email && !errors.phone && !errors.addressLine1 && !errors.addressLine2 && !errors.city) {
        loaders.placeOrder = true;
        placeOrder.item = itemData.id;
        try {
            await apiService.request(API_ENDPOINTS.ORDER.SUBMIT, placeOrder);
            placeOrder.item = null;
            placeOrder.firstName = '';
            placeOrder.lastName = '';
            placeOrder.email = '';
            placeOrder.phone = '';
            placeOrder.addressLine1 = '';
            placeOrder.addressLine2 = '';
            placeOrder.city = '';
            Swal.fire({
                title: 'Success!',
                text: 'Thank you for placing an order. We will get back to you soon.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).finally(() => {
                isPlaceOrderPopupVisible.value = false;
            })
        } catch (error) {
            Swal.fire({
                title: 'Out of Stock',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            }).finally(() => {
                isPlaceOrderPopupVisible.value = false;
            })
        }
        loaders.placeOrder = false;
    }
};

</script>