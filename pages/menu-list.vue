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
                <div class="w-full ml-0 lg:ml-1">
                    <Massages v-if="list.find(item => item.isActive).name === 'Massages'" />
                    <Therapies v-if="list.find(item => item.isActive).name === 'Therapies'" />
                    <SkinCare v-if="list.find(item => item.isActive).name === 'Skin Care'" />
                    <handFoot v-if="list.find(item => item.isActive).name === 'Hand & Foot'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopBanner from '@/components/uiKit/banner-top.vue';
import Massages from '@/components/menu-list/massages.vue';
import Therapies from '@/components/menu-list/therapies.vue';
import SkinCare from '@/components/menu-list/skinCare.vue';
import handFoot from '@/components/menu-list/handFoot.vue';

useHead({
    title: 'Spa & Massage Services at Helena Spa – Ella, Sri Lanka',
    meta: [
        { name: 'description', content: 'Indulge in a range of spa services, including full-body massages, Shirodhara, steam baths, pedicures, facials, and herbal treatments at Helena Spa in Ella.'},
        { charset: 'utf-8' },
        { property: 'og:title', content: 'Spa & Massage Services at Helena Spa – Ella, Sri Lanka' },
        { property: 'og:description', content: 'Indulge in a range of spa services, including full-body massages, Shirodhara, steam baths, pedicures, facials, and herbal treatments at Helena Spa in Ella.' },
        { property: 'og:image', content: 'https://helenaspa.lk/_nuxt/logo.CtJ0T2KF.png' },
    ]
});

const route = useRoute();

onMounted(() => {
    if (route.query.type && list.find(item => item.name === route.query.type)) {
        const index = list.findIndex(item => item.name === route.query.type);
        selectList(index);
    } else {
        selectList(0);
    }
});

const list = reactive([
    { name: 'Massages', isActive: true },
    { name: 'Therapies', isActive: false },
    { name: 'Skin Care', isActive: false },
    { name: 'Hand & Foot', isActive: false },
]);

const selectList = (index) => {
    list.forEach(item => {
        item.isActive = false;
    });
    list[index].isActive = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>