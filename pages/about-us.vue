<template>
    <div class="min-h-screen">
        <TopBanner image="about_us/bg.webp" title="About Helena" />
        <div class="bg-prim-50">
            <div
                class="w-full flex items-center lg:hidden sticky top-[78px] drop-shadow-md overflow-x-auto bg-prim-100 z-10">
                <div v-for="(item, index) in list" :key="index" class="w-full flex items-center">
                    <div @click="selectList(index)"
                        class="min-w-[180px] w-full h-[50px] text-center grid place-items-center cursor-pointer"
                        :class="[item.isActive ? 'bg-prim-700' : 'bg-prim-100']">{{ item.name }}</div>
                    <div v-if="index !== list.length - 1" class="w-[1px] h-[40px] flex-shrink-0 bg-white"></div>
                </div>
            </div>
            <div class="container flex flex-col lg:flex-row">
                <div class="w-[200px] flex-shrink-0 pr-0 lg:pr-1 hidden lg:flex flex-col gap-2 border-r-none lg:border-r-2">
                    <button v-for="(item, index) in list" :key="index" @click="selectList(index)"
                        class="w-full h-[50px] px-4 text-left" :class="item.isActive ? 'bg-prim-700' : 'bg-prim-100'">{{
                            item.name }}</button>
                </div>
                <div class="w-full ml-0 lg:ml-1">
                    <OurStory v-if="list.find(item => item.isActive).name === 'Our Story'" />
                    <Treatments v-if="list.find(item => item.isActive).name === 'Treatments'" />
                    <Location v-if="list.find(item => item.isActive).name === 'Location'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopBanner from '@/components/uiKit/banner-top.vue';
import OurStory from '@/components/about-us/our-story.vue';
import Treatments from '@/components/about-us/treatments.vue';
import Location from '@/components/about-us/location.vue';

useHead({
    title: 'About Helena Spa – Authentic Ayurvedic Wellness in Ella',
    meta: [
        { name: 'description', content: 'Discover Helena Spa, a serene retreat in Ella, Sri Lanka, offering authentic Ayurvedic treatments, professional therapists, and a tranquil ambiance for your well-being.'},
        { charset: 'utf-8' },
        { property: 'og:title', content: 'About Helena Spa – Authentic Ayurvedic Wellness in Ella' },
        { property: 'og:description', content: 'Discover Helena Spa, a serene retreat in Ella, Sri Lanka, offering authentic Ayurvedic treatments, professional therapists, and a tranquil ambiance for your well-being.' },
        { property: 'og:image', content: 'https://helenaspa.lk/_nuxt/logo.CtJ0T2KF.png' },
    ]
});

const list = reactive([
    { name: 'Our Story', isActive: true },
    { name: 'Treatments', isActive: false },
    { name: 'Location', isActive: false },
]);

const selectList = (index) => {
    list.forEach(item => {
        item.isActive = false;
    });
    list[index].isActive = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>