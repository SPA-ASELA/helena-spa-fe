<template>
    <div class="bg-prim-50">
        <TopBanner image="price_list/bg.webp" title="Price List" />
        <div class="container bg-[url('/assets/price_list/bg-1.webp')] bg-no-repeat bg-cover grid grid-cols-4 gap-5">
            <div v-for="(item, index) in photoGallery" :key="index" class="w-full relative pt-[80%] rounded-lg overflow-hidden">
                <img class="w-full h-full absolute top-0 left-0 object-cover" :src="'/assets/price_list/' + item" alt="">
            </div>
        </div>
        <div v-for="(item, index) in priceData" :key="index">
            <div v-if="!item.isBgDivider" class="container flex flex-col sm:flex-row gap-x-10 gap-y-5">
                <Title class="block sm:hidden" label="item.title" :size="'md'" :align="'left'" :margin-bottom="false" />
                <div class="w-full sm:w-[250px] relative pt-[60%] sm:pt-0 sm:h-[160px] flex-shrink-0 rounded-lg">
                    <img class="w-full h-full absolute top-0 left-0 object-cover" :src="'/assets/price_list/' + item.image" alt="">
                </div>
                <div class="w-full">
                    <Title class="hidden sm:block" :label="item.title" :size="'md'" :align="'left'" />
                    <p class="text-lg font-bold"><span v-if="item.duration">Duration: {{ item.duration }} | </span> Price: <span class="text-red-500">Rs. {{ item.price }}</span></p>
                    <UDivider class="mb-3" />
                    <p>{{ item.desc }}</p>
                </div>
            </div>
            <div v-else class="container py-20 bg-no-repeat bg-cover bg-center relative" :style="{ backgroundImage: `url('/assets/price_list/${item.image}')` }">
                <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#00000080]"></div>
                <div class="relative z-10">
                    <Title class="hidden sm:block" :label="item.title" :size="'md'" :align="'center'" color="white" />
                    <p class="text-center text-white">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopBanner from '@/components/uiKit/banner-top.vue';
import Title from '@/components/uiKit/titles/title.vue';

const photoGallery = reactive(['1-1.webp', '1-2.webp', '1-3.webp', '1-4.webp']);
const priceData = reactive([
    { isBgDivider: false, title: 'Head, Neck & Shoulder Massage', duration: '30 mins', price: '3,500', image: '2-1.webp', desc: 'Relieve tension and stress with this focused massage, targeting key pressure points in the head, neck, and shoulders. Ideal for those who experience stiffness from stress or prolonged sitting.' },
    { isBgDivider: false, title: 'Neck & Shoulder Massage', duration: '30 mins', price: '3,500', image: '2-2.webp', desc: 'This 30-minute session helps reduce stiffness and discomfort in the neck and shoulders, providing quick relief from muscle tension and improving overall mobility.'},
    { isBgDivider: false, title: 'Back Massage', duration: '30 mins', price: '3,500', image: '2-3.webp', desc: 'A revitalizing treatment designed to relieve deep-seated muscle tension and discomfort in the back, perfect for alleviating stress and improving posture.'},
    { isBgDivider: false, title: 'Foot Massage', duration: '30 mins', price: '3,500', image: '2-4.webp', desc: 'Soothe your feet with this relaxing massage, using pressure points to relieve tension and improve circulation, leaving your feet feeling light and rejuvenated.'},
    { isBgDivider: true, title: 'Serenity Awaits', image: 'bg-2.webp', desc: '“Relax in our beautifully designed treatment rooms, featuring comfortable beds and a tranquil atmosphere, designed to enhance your spa experience.”' },
    { isBgDivider: false, title: 'Leg Massage', duration: '30 mins', price: '3,500', image: '3-1.webp', desc: 'This focused massage targets the legs to alleviate soreness, improve circulation, and relieve fatigue, perfect for those who stand or walk a lot.'},
    { isBgDivider: false, title: 'Shirodhara', duration: '60 mins', price: '6,000', image: '3-2.webp', desc: 'An ancient Ayurvedic therapy where warm herbal oil is gently poured over the forehead, calming the mind and promoting deep relaxation. Ideal for relieving stress and enhancing mental clarity.'},
    { isBgDivider: false, title: 'Full Body Massage', duration: '60 mins', price: '6,500', image: '3-3.webp', desc: 'A therapeutic full-body massage designed to ease tension, improve circulation, and promote overall well-being, leaving you feeling balanced and rejuvenated.'},
    { isBgDivider: false, title: 'Full Body Massage', duration: '90 mins', price: '9,000', image: '3-4.webp', desc: 'Indulge in this extended full-body massage for deeper relaxation and muscle relief. Perfect for those looking to fully unwind and restore both body and mind.'},
    { isBgDivider: false, title: 'Pindasweda', duration: '90 mins', price: '9,000', image: '3-5.webp', desc: 'A traditional Ayurvedic therapy using warm herbal pouches to soothe aching muscles and promote detoxification. This treatment helps reduce inflammation and leaves your body feeling revitalized.'},
    { isBgDivider: false, title: 'Shirodhara & Full Body Massage', duration: '120 mins', price: '12,000', image: '3-6.webp', desc: 'A luxurious combination of Shirodhara and full-body massage, this two-hour treatment calms the mind and rejuvenates the body, offering the ultimate relaxation experience.'},
    { isBgDivider: false, title: 'Full Body Massage & Shirodhara Steam Bath', duration: '', price: '15,000', image: '3-7.webp', desc: 'Enjoy a deeply relaxing full-body massage followed by a Shirodhara steam bath to detoxify your skin, soothe your muscles, and achieve a balanced state of relaxation.'},
    { isBgDivider: false, title: 'Back Massage & Foot/Leg Massage', duration: '60 mins', price: '7,000', image: '3-8.webp', desc: 'A combination of back, foot, and leg massage designed to ease tension and improve circulation, offering a complete relaxation experience for the body.'},
    { isBgDivider: false, title: 'Neck, Shoulder & Back Massage', duration: '60 mins', price: '6,500', image: '3-9.webp', desc: 'A targeted massage that focuses on the neck, shoulders, and back to relieve muscle tension, improve posture, and restore flexibility.'},
    { isBgDivider: true, title: 'Warm Hospitality', image: 'bg-3.webp', desc: '"Experience the warmth of our dedicated team, committed to providing personalized care and ensuring your comfort throughout your visit."'},
    { isBgDivider: false, title: 'Head, Neck, Shoulder & Back Massage', duration: '60 mins', price: '6,500', image: '4-1.webp', desc: 'A comprehensive massage focusing on key areas of tension in the head, neck, shoulders, and back, helping to reduce stress and promote overall relaxation.'},
    { isBgDivider: false, title: 'Foot & Leg Massage', duration: '60 mins', price: '6,500', image: '4-2.webp', desc: 'Treat your feet and legs to a soothing massage that improves circulation, eases muscle pain, and leaves you feeling rejuvenated from the ground up.'},
    { isBgDivider: false, title: 'Pedicure', duration: '60 mins', price: '6,000', image: '4-3.webp', desc: 'Pamper your feet with a luxurious pedicure that includes exfoliation, nail shaping, and moisturizing to leave your feet soft, smooth, and revitalized.'},
    { isBgDivider: false, title: 'Manicure', duration: '60 mins', price: '6,000', image: '4-4.webp', desc: 'This indulgent manicure treatment includes cuticle care, nail shaping, and a nourishing hand massage, leaving your hands looking and feeling their best.'},
    { isBgDivider: false, title: 'Face Massage', duration: '30 mins', price: '3,500', image: '4-5.webp', desc: 'A relaxing face massage that stimulates circulation, relieves tension, and refreshes the skin, providing a youthful glow.'},
    { isBgDivider: false, title: 'Facial', duration: '60 mins', price: '6,000', image: '4-6.webp', desc: 'A rejuvenating facial treatment tailored to your skin type, designed to cleanse, exfoliate, and hydrate your skin, leaving it soft and radiant.'},
    { isBgDivider: false, title: 'Full Body Scrub', duration: '60 mins', price: '7,000', image: '4-7.webp', desc: 'Exfoliate your skin with a full-body scrub that removes dead cells and promotes smooth, glowing skin. Ideal for skin renewal and hydration.'},
    { isBgDivider: false, title: 'Foot Scrub & Herbal Foot Pack', duration: '60 mins', price: '7,000', image: '4-8.webp', desc: 'This treatment includes a thorough foot scrub to remove dead skin, followed by a nourishing herbal foot pack to soften and rejuvenate your feet.'},
    { isBgDivider: false, title: 'Steam Bath', duration: '30 mins', price: '3,500', image: '4-9.webp', desc: 'Relax in a detoxifying steam bath that opens your pores, improves circulation, and soothes your muscles, leaving you feeling refreshed and invigorated.'},
    { isBgDivider: false, title: 'Full Body Massage & Steam Bath', duration: '', price: '10,000', image: '4-10.webp', desc: 'A combination of a relaxing full-body massage followed by a detoxifying steam bath. This treatment rejuvenates your entire body, leaving you feeling renewed and re-energized.'},
    { isBgDivider: true, title: 'A Sanctuary of Calm', image: 'bg-4.webp', desc: '"Step into a serene environment where every detail, from the soothing sounds to the calming aromas, is designed to transport you into a world of relaxation and peace."'},
]);

</script>