<template>
    <div class="container">
        <ImgTitle class="mb-10" label="Reviews" />
        <Swiper :modules="modules" :slides-per-view="3" :space-between="20"
            :autoplay="{ delay: 2500, disableOnInteraction: false }" :pagination="{ clickable: true }" :navigation="true"
            :loop="true" :breakpoints="breakpoints">
            <SwiperSlide v-for="(item, index) in reviews" :key="index" class="swiper-slide bg-prim-100">
                <div class="p-2 h-full flex flex-col justify-between">
                    <div>
                        <UIcon name="ic:baseline-format-quote" class="w-20 h-20" />
                        <p class="px-10 mb-4 text-center text-lg font-bold">{{ item.title }}</p>
                        <p class="px-10">{{ item.desc }}</p>
                        <div class="flex justify-end">
                            <UIcon name="ic:baseline-format-quote" class="w-20 h-20" />
                        </div>
                    </div>
                    <div class="p-5 flex items-center gap-3">
                        <div class="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-white">
                            <img class="w-full h-full object-cover" :src="item.image" alt="">
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
        <div class="flex justify-center">
            <a href="https://www.tripadvisor.com/UserReviewEdit-g616035-d16869648-Helena_Spa_Organic_Gifts-Ella_Uva_Province.html" target="_blank" rel="noopener noreferrer">
                <Button class="mt-5 mx-auto" label="Add a Review" type="square" />
            </a>
        </div>
    </div>
</template>
  
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ImgTitle from '@/components/uiKit/titles/img-title-1.vue';
import Button from '@/components/uiKit/button.vue';

const modules = [Pagination, Autoplay];

const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

const reviews = reactive([
    { firstName: 'WeezeX', lastName: 'Christina', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/0a/62/03/weezenmd.jpg?w=300&h=-1&s=1', rating: '5.0', title: 'Perfect body massage', desc: 'Absolutely perfect! A treated myself to a 90 minute massage & was absolute bliss. I wanted a mix of relaxing but also working through knots/tension & the masseuse was incredible. Came out feeling so relaxed & a lot less tense from days of travel! Thank you.' },
    { firstName: 'Sammy', lastName: 'C', image: 'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ef/9c/default-avatar-2020-14.jpg', rating: '5.0', title: 'Traveling', desc: 'Very good massage, muscle relaxing , they take their time and even gave our 6y old daughter a 5min leg massage for fun. My wife and I had multiple message on multiple days and everything was more than ok.' },
    { firstName: 'Madiha', lastName: 'M', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/1f/default-avatar-2020-46.jpg?w=100&h=-1&s=1', rating: '4.0', title: 'A good massage', desc: 'The place was comfortable and the host was friendly. We had two body massages. Our massage therapists were nice and very accommodating. Once in Srilanka do get an ayurvedic massage. They did a good job here. They served us green tea afterwards that was very wonderful of them.' },
    { firstName: 'Alana', lastName: 'G', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/6a/default-avatar-2020-47.jpg?w=100&h=-1&s=1', rating: '5.0', title: 'Wonderful massage treatment!', desc: 'My mother and I both enjoyed a massage at Helena Spa today. Both our massage therapists were fantastic and attentive to what we were looking for, we said we would both return! Very smiley and kind people. Thank you!' },
    { firstName: 'Kelly', lastName: 'C', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/df/99/default-avatar-2020-40.jpg?w=100&h=-1&s=1', rating: '5.0', title: 'Amazing massages', desc: 'Amazing massages, we take the full body one with my sister, only 7000rps. They were really kind and they listen all our demands. My sister\'s back was hurting and the Lady was really smooth with her. I recommand this place to everyone!' },
    { firstName: 'Urszula', lastName: 'T', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e7/3d/default-avatar-2020-55.jpg?w=100&h=-1&s=1', rating: '5.0', title: 'Professional and satysfying', desc: 'It was very relaxing experience. My massage made Nipuni. She was very attentive and sensitive. I felt listened and got even more than I expected. Thank you:)' }
]);

</script>
  
<style scoped>
.swiper-slide {
    height: auto;
}
</style>