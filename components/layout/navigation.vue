<template>
    <transition name="nav-transition">
        <div class="drop-shadow-md z-40"
            :class="[isHomePage ? 'bg-white sticky top-0' : 'bg-prim-50 fixed left-0 top-0 right-0']">
            <div class="container py-2 lg:py-5 flex justify-between items-center gap-5">
                <nuxt-link to="/">
                    <img class="w-[100px]" src="@/assets/images/logo/logo.png" alt="LOGO - Helena Spa">
                </nuxt-link>
                <div class="hidden lg:flex gap-10">
                    <nuxt-link to="/about-us">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-prim-950">What is Helena</p>
                            <p class="text-[10px] text-prim-700">about helena</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/menu-list">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-prim-950">Menu List</p>
                            <p class="text-[10px] text-prim-700">menu list</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/price-list">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-prim-950">Price List</p>
                            <p class="text-[10px] text-prim-700">price list</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/contact-us">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-prim-950">Contact Us</p>
                            <p class="text-[10px] text-prim-700">contact us</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-prim-950">Products</p>
                            <p class="text-[10px] text-prim-700">shop our products</p>
                        </div>
                    </nuxt-link>
                </div>
                <button @click="isMobileSliderVisible = true"
                    class="w-8 h-8 flex-shrink-0 rounded grid lg:hidden place-items-center bg-prim-700">
                    <UIcon name="i-icon-park-outline:hamburger-button" class="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    </transition>
    <transition name="slider-transition">
        <div v-if="isMobileSliderVisible" @click="isMobileSliderVisible = false"
            class="flex lg:hidden justify-end fixed top-0 left-0 bottom-0 right-0 bg-[#0000003c] z-50">
            <div @click.stop class="p-2 max-w-[400px] w-full h-screen bg-prim-50">
                <UIcon @click="isMobileSliderVisible = false" name="i-material-symbols:close"
                    class="w-6 h-6 absolute right-2 cursor-pointer" />
                <div class="h-full flex flex-col justify-center items-center gap-6">
                    <nuxt-link class="mb-8" to="/">
                        <img class="w-[100px]" src="@/assets/images/logo/logo.png" alt="LOGO - Helena Spa">
                    </nuxt-link>
                    <nuxt-link to="/about-us">What is Helena</nuxt-link>
                    <nuxt-link to="/menu-list">Menu List</nuxt-link>
                    <nuxt-link to="/price-list">Price List</nuxt-link>
                    <nuxt-link to="/contact-us">Contact Us</nuxt-link>
                    <nuxt-link to="/">Products</nuxt-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const route = useRoute();

const isNavigationVisible = ref(true);
let lastScrollTop = ref(0);
const isMobileSliderVisible = ref(false);

const isHomePage = computed(() => route.path === '/');

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop.value) {
        if (st > (isHomePage.value ? 1000 : 100)) {
            isNavigationVisible.value = false;
        }
    } else {
        isNavigationVisible.value = true;
    }
    lastScrollTop.value = st <= 0 ? 0 : st;
};

</script>

<style scoped>
.nav-transition-enter-from,
.nav-transition-leave-to {
    top: -100px;
    opacity: 0;
}

.nav-transition-enter-active,
.nav-transition-leave-active {
    transition: all .3s ease;
}

.slider-transition-enter-from,
.slider-transition-leave-to {
    right: -100%;
    opacity: 0;
}

.slider-transition-enter-active,
.slider-transition-leave-active {
    transition: all .3s ease;
}
</style>