<template>
    <div>
        <BannerStoryTop image="about_us/story-treatment.webp" title="Treatments" />
        <div>
            <div class="container pt-0">
                <div class="mb-8 flex flex-col items-center">
                    <span class="text-center text-2xl text-prim-950">Beauty comes from a healthy body</span>
                    <img class="w-[250px] mt-1" src="/assets/about_us/treatments/img-title-bottom.webp" alt="">
                </div>
                <p class="text-2xl text-center text-prim-900">At Helena, we are dedicated to providing a sanctuary of
                    relaxation and rejuvenation through our carefully curated range of treatments inspired by Ayurvedic
                    traditions and modern spa techniques. Located in a serene setting, our spa offers a tranquil escape
                    where you can restore balance and harmony in body, mind, and spirit.</p>
            </div>
            <div v-for="(item, index) in list" :key="index"
                class="container border-t border-prim-900 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white"
                :class="index === list.length - 1 ? 'border-b' : ''">
                <div class="w-full hidden sm:block relative pt-[45%]" :class="index % 2 === 0 ? 'sm:order-1' : 'sm:order-2'">
                    <img class="w-full h-full absolute top-0 left-0 object-cover"
                        :src="'/assets/about_us/treatments/' + item.image" alt="">
                </div>
                <div class="w-full flex flex-col text-center" :class="index % 2 === 0 ? 'sm:order-2' : 'sm:order-1'">
                    <p class="mb-5 text-2xl font-bold">Treatments</p>
                    <div class="w-full mb-3 block sm:hidden relative pt-[45%]">
                        <img class="w-full h-full absolute top-0 left-0 object-cover"
                            :src="'/assets/about_us/treatments/' + item.image" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis aliquam eius!
                        Praesentium ipsum nam officia incidunt fugit rem quasi distinctio voluptatibus nobis, neque sit
                        facere! Laudantium vero omnis quos?</p>
                </div>
            </div>
            <div class="container">
                <div class="mb-8 flex flex-col items-center">
                    <span class="text-center text-2xl text-prim-950">Why Choose Us?</span>
                    <img class="w-[250px] mt-1" src="/assets/about_us/treatments/img-title-bottom.webp" alt="">
                </div>
                <p class="text-center">Our treatments are tailored to your unique needs, combining the therapeutic touch of
                    skilled therapists with the healing power of natural ingredients. Whether you seek relaxation, pain
                    relief, or enhanced well-being, we ensure every visit leaves you feeling refreshed and rejuvenated.
                    Discover the art of self-care and holistic healing at Helena, where wellness meets luxury.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import BannerStoryTop from '@/components/uiKit/banner-story-top.vue';

const list = reactive([
    { title: 'Ayurvedic Therapies', image: 'Ayurvedic Therapies.webp', description: 'Experience ancient wisdom through treatments like Shirodhara, Pindasweda, and herbal-infused steam baths. These therapies are designed to detoxify, energize, and bring holistic balance.' },
    { title: 'Massage Treatments', image: 'Massage Treatments.webp', description: 'Reconnect with your inner calm through our specialized massages, including Full Body Massage, Back Massage, and Neck & Shoulder Massage. Each session uses warm herbal oils to release tension, improve circulation, and rejuvenate muscles.' },
    { title: 'Skin & Body Care', image: 'Skin & Body Care.webp', description: 'Revitalize your skin with our luxurious Full Body Scrub, soothing Facials, and nourishing Foot Scrub & Herbal Foot Pack treatments. These therapies cleanse, exfoliate, and leave your skin glowing.' },
    { title: 'Hand & Foot Care', image: 'Hand & Foot Care.webp', description: 'Pamper yourself with our Manicure and Pedicure, featuring Ayurvedic herbal products for perfectly groomed hands and feet.' },
]);

</script>