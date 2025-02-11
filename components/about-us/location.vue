<template>
    <div>
        <BannerStoryTop image="about_us/location/main.webp" title="Location" />
        <div class="container flex flex-col gap-5 bg-white text-prim-900">
            <div v-for="(item, index) in list" :key="index" class="w-full">
                <div class="mb-5" v-html="item.desc"></div>
                <div class="w-full mb-3 relative pt-[45%] bg-red-50">
                    <img class="w-full h-full absolute top-0 left-0 object-cover"
                        :src="'/assets/about_us/location/' + item.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BannerStoryTop from '@/components/uiKit/banner-story-top.vue';

const list = reactive([
    { image: '1.webp', desc: '<p>At Helena Spa, we take pride in offering not only exceptional treatments but also a relaxing and comfortable environment. Our spa is designed with your ultimate comfort in mind, featuring cozy, high-quality beds that provide the perfect support during treatments. Draped in soft linens and surrounded by calming aromas, our beds ensure you feel relaxed and cared for throughout your experience.</p>' },
    { image: '2.webp', desc: '<p>The spa’s interiors reflect the serene beauty of Ella, with natural elements, soothing colors, and gentle lighting that create a tranquil atmosphere. Each treatment room is thoughtfully designed to offer privacy, peace, and a connection to the lush surroundings of the Sri Lankan highlands.</p>' },
    { image: '3.webp', desc: '<p class="mb-3">Whether you’re indulging in a rejuvenating massage, a cleansing facial, or a luxurious steam bath, the combination of our inviting ambiance and expert care ensures a holistic wellness journey like no other.</p><p>Relax, unwind, and let the soothing comfort of Helena Spa transport you to a world of pure serenity.</p>' }
]);

</script>