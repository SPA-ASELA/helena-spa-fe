<template>
    <Swiper :modules="modules" :autoplay="{ delay: 2500, disableOnInteraction: false }" :pagination="{ clickable: true }"
        :navigation="true" loop>
        <SwiperSlide v-for="(banner, index) in banners" :key="index">
            <div class="w-full h-screen relative">
                <img :src="'/assets/home/banners/' + banner.image" class="w-full h-full object-cover" />
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full text-center text-white">
                    <div class="h-full flex flex-col justify-center items-center">
                        <Title class="max-w-[900px] mb-[40px]" :label="banner.title" :size="'lg'" :align="'center'" :color="'white'" />
                        <p class="max-w-[900px] mb-[40px]">{{ banner.description }}</p>
                        <Button @click="btnClick(banner)" :label="banner.buttonType === 'shop' ? 'Shop Now' : 'Book Now'" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>
  
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Button from '@/components/uiKit/button.vue';
import Title from '@/components/uiKit/titles/title.vue';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

// Define the modules you want to use
const modules = [Navigation, Pagination, Autoplay];

const router = useRouter();

const banners = reactive([
    { image: '1.webp', title: 'Find Your Inner Peace Through Relaxation and Healing', description: 'Let our expert therapists lead you to total relaxation and renewal with personalized spa treatments designed to refresh both body and mind', buttonType: 'book' },
    { image: '2.webp', title: 'Rejuvenate with nature\'s best', description: 'explore out exclusive range of organic and spa productions', buttonType: 'shop' },
    { image: '3.webp', title: 'Discover Serenity and Wellness In Every Moment of Tranquility', description: 'Experience personalized spa treatments designed to revitalize your body, mind, and spirit with natural, soothing care.', buttonType: 'book' },
]);

const btnClick = (banner) => {
    if(banner.buttonType === 'book') {
        router.push('/appointment')
    }
}

</script>