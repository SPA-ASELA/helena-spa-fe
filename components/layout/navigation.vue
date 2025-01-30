<template>
    <transition name="nav-transition">
        <div class="drop-shadow-md z-50" :class="[isHomePage ? 'bg-white sticky top-0' : 'bg-prim-50 fixed left-0 top-0 right-0']">
            <div class="container py-5 flex justify-between items-center gap-5">
                <nuxt-link to="/">
                    <img class="w-[100px]" src="@/assets/images/logo/logo.png" alt="LOGO - Helena Spa">
                </nuxt-link>
                <div class="flex gap-10">
                    <nuxt-link to="/">
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
                    <nuxt-link to="/">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-prim-950">Price List</p>
                            <p class="text-[10px] text-prim-700">price list</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/">
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
            </div>
        </div>
    </transition>
</template>

<script setup>
const route = useRoute();

const isNavigationVisible = ref(true);
let lastScrollTop = ref(0);

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
</style>