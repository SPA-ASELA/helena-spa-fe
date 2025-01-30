<template>
    <div class="container">
        <ImgTitle class="mb-10" label="Reviews" />
        <Swiper :modules="modules" :slides-per-view="3" :space-between="20"
            :autoplay="{ delay: 2500, disableOnInteraction: false }" :pagination="{ clickable: true }" :navigation="true"
            :loop="true" :breakpoints="breakpoints">
            <SwiperSlide v-for="(item, index) in reviews" :key="index">
                <div class="p-2 bg-prim-100">
                    <UIcon name="ic:baseline-format-quote" class="w-20 h-20" />
                    <p class="px-10">{{ item.desc }}</p>
                    <div class="flex justify-end">
                        <UIcon name="ic:baseline-format-quote" class="w-20 h-20" />
                    </div>
                    <div class="p-5 flex items-center gap-3">
                        <div class="w-20 h-20 flex-shrink-0 rounded-full bg-white">
                            <img src="" alt="">
                        </div>
                        <div class="w-full">
                            <p>{{ item.firstName }}</p>
                            <p>{{ item.lastName }}</p>
                            <p class="text-right">{{ item.rating }}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
  
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
import ImgTitle from '@/components/uiKit/titles/img-title-1.vue';

// Define Swiper modules
const modules = [Pagination, Autoplay];

// Define responsive breakpoints
const breakpoints = {
    // When window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    // When window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    // When window width is >= 1024px
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

const reviews = reactive([
    { firstName: 'Pathum', lastName: 'Madusanka', image: '', rating: '4.0', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, id nemo? Quia impedit nisi officia, quibusdam ab libero eos vero dicta? Tempore autem quos qui eos, rerum asperiores a eum?' },
    { firstName: 'Pathum', lastName: 'Madusanka', image: '', rating: '4.0', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, id nemo? Quia impedit nisi officia, quibusdam ab libero eos vero dicta? Tempore autem quos qui eos, rerum asperiores a eum?' },
    { firstName: 'Pathum', lastName: 'Madusanka', image: '', rating: '4.0', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, id nemo? Quia impedit nisi officia, quibusdam ab libero eos vero dicta? Tempore autem quos qui eos, rerum asperiores a eum?' },
    { firstName: 'Pathum', lastName: 'Madusanka', image: '', rating: '4.0', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, id nemo? Quia impedit nisi officia, quibusdam ab libero eos vero dicta? Tempore autem quos qui eos, rerum asperiores a eum?' },
    { firstName: 'Pathum', lastName: 'Madusanka', image: '', rating: '4.0', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, id nemo? Quia impedit nisi officia, quibusdam ab libero eos vero dicta? Tempore autem quos qui eos, rerum asperiores a eum?' },
    { firstName: 'Pathum', lastName: 'Madusanka', image: '', rating: '4.0', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, id nemo? Quia impedit nisi officia, quibusdam ab libero eos vero dicta? Tempore autem quos qui eos, rerum asperiores a eum?' },
]);
</script>
  
<style scoped>
.slide-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 8px;
    font-size: 1.5rem;
    color: #333;
}
</style>