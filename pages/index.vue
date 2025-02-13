<template>
    <div>
        <Banner />
        <NavigationBar />
        <div class="py-10 bg-prim-100">
            <div class="container grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5">
                <div v-for="(item, index) in sec_1" :key="index" class="flex flex-col gap-5 text-center text-prim-950">
                    <div class="w-full relative pt-[65%]">
                        <img :src="'/assets/home/sec_1/' + item.image"
                            class="w-full h-full absolute top-0 left-0 object-cover" />
                    </div>
                    <Title :label="item.title" :size="'md'" :align="'center'" :color="'prim-dark'" :margin-bottom="false" />
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
        <div class="bg-[url('/assets/home/sec_2/bg.webp')] bg-no-repeat bg-cover">
            <div class="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-14">
                <div v-for="(item, index) in sec_2" :key="index" class="flex gap-5">
                    <div class="w-[100px] h-[100px] flex-shrink-0 rounded-full grid place-items-center bg-prim-100">
                        <img class="w-[60px]" :src="'/assets/home/sec_2/' + item.image" alt="">
                    </div>
                    <div class="text-white">
                        <p class="mb-4 font-bold">{{ item.title }}</p>
                        <p class="text-sm">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 relative bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-[url('/assets/home/sec_3/bg.webp')] bg-no-repeat bg-cover blur-md"></div>
            <div class="relative container">
                <ImgTitle label="Menu List" />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div v-for="(item, index) in sec_3" :key="index"
                        class="w-full bg-white rounded-bl-md rounded-br-md flex flex-col justify-between">
                        <div class="w-full h-[200px]">
                            <img class="w-full h-full object-cover" :src="'/assets/home/sec_3/' + item.image" alt="">
                        </div>
                        <div class="p-3">
                            <Title :label="item.title" :size="'md'" :align="'center'" />
                            <div v-for="(li, index) in item.list" :key="index" class="mb-1 flex items-center gap-2">
                                <div
                                    class="w-7 h-7 flex-shrink-0 mb-1 border border-black rounded-md grid place-items-center">
                                    <UIcon name="i-ic:sharp-arrow-forward-ios" class="w-3 h-3" />
                                </div>
                                <p>{{ li }}</p>
                            </div>
                        </div>
                        <div class="p-3 flex justify-end items-center text-blue-500">
                            <div @click="router.push(`/menu-list?type=${encodeURIComponent(item.title)}`)" class="flex items-center gap-1 cursor-pointer">
                                <span>See More</span>
                                <div
                                    class="w-5 h-5 flex-shrink-0 mb-1 border border-blue-500 rounded-md grid place-items-center">
                                    <UIcon name="i-ic:sharp-arrow-forward-ios" class="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 bg-prim-50">
            <div class="container">
                <ImgTitle class="mb-10" label="Health Benefits" />
                <div class="flex flex-col md:flex-row justify-center items-center">
                    <div class="w-full flex flex-col justify-between items-end gap-y-5 md:gap-y-20">
                        <div class="flex items-center gap-5">
                            <span class="text-right">It reduces <br> stress</span>
                            <span class="w-8 h-8 flex-shrink-0 rounded-full border-8 border-prim-100 bg-prim-500"></span>
                        </div>
                        <div class="mr-10 flex items-center gap-5">
                            <span class="text-right">It improves <br> circulation</span>
                            <span class="w-8 h-8 flex-shrink-0 rounded-full border-8 border-prim-100 bg-prim-500"></span>
                        </div>
                        <div class="mr-20 md:mr-0 flex items-center gap-5">
                            <span class="text-right">It detoxifies <br> the body</span>
                            <span class="w-8 h-8 flex-shrink-0 rounded-full border-8 border-prim-100 bg-prim-500"></span>
                        </div>
                    </div>
                    <img class="w-[300px] lg:w-[400px]" src="/assets/home/health-benefits.webp" alt="">
                    <div class="w-full flex flex-col justify-between items-start gap-5 md:gap-y-20">
                        <div class="ml-20 md:ml-0 flex items-center gap-5">
                            <span class="w-8 h-8 flex-shrink-0 rounded-full border-8 border-prim-100 bg-prim-500"></span>
                            <span class="text-left">It relieves <br> pain</span>
                        </div>
                        <div class="ml-10 flex items-center gap-5">
                            <span class="w-8 h-8 flex-shrink-0 rounded-full border-8 border-prim-100 bg-prim-500"></span>
                            <span class="text-left">It enhances <br> sleep quality</span>
                        </div>
                        <div class="flex items-center gap-5">
                            <span class="w-8 h-8 flex-shrink-0 rounded-full border-8 border-prim-100 bg-prim-500"></span>
                            <span class="text-left">It rejuvenates <br> the skin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-[20vh] bg-[url('/assets/home/bg-shop.webp')] bg-no-repeat bg-cover relative">
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#00000080]"></div>
            <div class="container flex flex-col items-center gap-8 relative">
                <Title label="Rejuvenate with Nature's Best" size="lg" :align="'center'" color="white" />
                <p class="text-center text-white">Explore Our Exclusive Range of Organic & Spa Products</p>
                <Button @click="shopNow()" label="Shop Now" />
            </div>
        </div>
        <div class="py-10 bg-prim-100">
            <div class="container grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div v-for="(item, index) in sec_4" :key="index" class="p-3 flex flex-col sm:flex-row items-center gap-3 bg-prim-500">
                    <Title class="block sm:hidden" :label="item.title" :size="'md'" :align="'center'" :marginBottom="false" />
                    <div class="w-full sm:w-[200px] sm:h-[200px] pt-[60%] sm:pt-0 flex-shrink-0 bg-red-50 relative">
                        <img class="w-full h-full absolute sm:relative top-0 left-0 object-cover" :src="'/assets/home/sec_3/' + item.image" alt="">
                    </div>
                    <div>
                        <Title class="hidden sm:block" :label="item.title" :size="'md'" :align="'left'" />
                        <p class="text-center sm:text-left">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Reviews />
    </div>
</template>
  
<script setup>
import Banner from '@/components/home/banner.vue';
import NavigationBar from '@/components/layout/navigation.vue';
import Title from '@/components/uiKit/titles/title.vue';
import ImgTitle from '@/components/uiKit/titles/img-title-1.vue';
import Button from '@/components/uiKit/button.vue';
import Reviews from '@/components/home/reviews.vue';
import Swal from 'sweetalert2';

const router = useRouter();

const sec_1 = reactive([
    { image: '1.webp', title: 'Pindasweda', description: 'Revitalize your body with warm herbal poultices, gently applied to soothe muscles, ease tension, and restore balance, leaving you feeling refreshed and rejuvenated.' },
    { image: '2.webp', title: 'Massage Therapy', description: 'Relieve stress, ease tension, and promote relaxation with our expert massage techniques, tailored to restore balance and well-being.' },
    { image: '3.webp', title: 'Shirodhara', description: 'Experience the ancient Ayurvedic practice of Shirodhara, where warm, herbal-infused oils flow gently over your forehead, promoting deep relaxation and restoring balance to your mind, body, and spirit.' }
]);
const sec_2 = reactive([
    { image: 'swedish.webp', title: 'Swedish Massage', description: 'is the most common form of massage and is a light massage the mainly relaxes the muscles.' },
    { image: 'therapeutic.webp', title: 'Therapeutic Massage', description: 'Commonly known as deep tissue is used for chronic muscle tension and is a deeper invigorating massage' },
    { image: 'shirodhara.webp', title: 'Shirodhara Massage', description: 'An ancient Ayurvedic treatment where warm, herbal oils flow gently over the forehead, calming the mind and promoting profound relaxation.' },
    { image: 'herbal.webp', title: 'Herbal Steam Bath', description: 'A rejuvenating experience that envelops you in herbal-infused steam, helping to detoxify the body and soothe the mind for ltimate relaxation.' },
    { image: 'foot.webp', title: 'Foot and Leg Massage', description: 'Focused on relieving stress and tension in the feet and legs, this massage promotes relaxation and improves circulation for total comfort.' },
    { image: 'facial.webp', title: 'Facial & Herbal Pack', description: 'Refresh your skin with a cleansing facial and nourishing herbal pack, designed to hydrate and enhance your natural glow.' },
]);
const sec_3 = reactive([
    { image: '1.webp', title: 'Massages', list: ['Head, Neck & Shoulder Massage', 'Neck & Shoulder Massage', 'Back Massage'] },
    { image: '2.webp', title: 'Therapies', list: ['Shirodhara', 'Shirodhara & Full Body Massage', 'Pindasweda'] },
    { image: '3.webp', title: 'Skin Care', list: ['Full Body Scrub', 'Foot Scrub & Herbal Foot Pack', 'Face Massage'] },
    { image: '4.webp', title: 'Hand & Foot', list: ['Pedicure', 'Manicure'] },
]);

const sec_4 = reactive([
    { image: '1.webp', title: 'Relaxation & Stress Relief', description: 'Spa treatments like massages and aromatherapy help relax your body and mind, reducing stress levels.' },
    { image: '2.webp', title: 'Improved Circulation', description: 'Massages and steam baths stimulate blood flow, promoting better circulation and oxygenation of tissues.' },
    { image: '3.webp', title: 'Skin Rejuvenation', description: 'Facials and scrubs exfoliate and hydrate your skin, leaving it glowing and healthy.' },
    {
        image: '4.webp', title: 'Pain Relief ', description: 'Targeted therapies like back and neck massages alleviate muscle tension and chronic pain.'
    },
]);

const shopNow = () => {
    Swal.fire({
        title: 'Shop Now',
        text: 'This feature is under development',
        icon: 'info',
        confirmButtonText: 'OK'
    });
};

</script>