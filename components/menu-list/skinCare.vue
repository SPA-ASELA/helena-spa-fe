<template>
    <div>
        <BaseTemp :image="mainImg" :title="title" :types="types" />
    </div>
</template>

<script setup>
import BaseTemp from '@/components/menu-list/base.vue';

const mainImg = ref('skin_care/main.webp');
const title = ref('Skin & Body Care');
const types = reactive([
    { 
        title: 'Full Body Scrub', 
        image: 'skin_care/Full Body Scrub.webp', 
        details: [
            { title: 'Full Body Scrub', duration: '60 Mins', price: 'Rs. 7,000' },
        ], 
        description: '<p>Rejuvenate your skin with our Full Body Scrub, a refreshing exfoliation treatment using Ayurvedic herbal blends. This therapy removes dead skin cells, promotes cell renewal, and leaves your skin soft, smooth, and radiant. Perfect for enhancing circulation and detoxifying, this treatment gives your body a natural glow and a silky finish.</p>' 
    },
    {
        title: 'Foot Scrub & Herbal Foot Pack',
        image: 'skin_care/Foot Scrub & Herbal Foot Pack.webp',
        details: [
            { title: 'Foot Scrub & Herbal Foot Pack', duration: '60 Mins', price: 'Rs. 7,000' },
        ],
        description: '<p>Pamper your feet with our Foot Scrub & Herbal Foot Pack, combining gentle exfoliation with the healing benefits of Ayurvedic herbs. The scrub removes dry skin and improves circulation, followed by a nourishing herbal pack that soothes and hydrates. Perfect for tired or cracked feet, this treatment leaves your feet feeling soft, refreshed, and revitalized.</p>'
    },
    {
        title: 'Facial',
        image: 'skin_care/Facial.webp',
        details: [
            { title: 'Facial', duration: '60 Mins', price: 'Rs. 6,000' },
        ],
        description: '<p>Experience a revitalizing Facial using Ayurvedic-inspired skincare products tailored to your skin type. This treatment cleanses, exfoliates, and nourishes the skin, promoting hydration and elasticity. Ideal for reducing fine lines, improving texture, and achieving a youthful glow, our facial combines relaxation with visible results.</p>'
    },
    {
        title: 'Face Massage',
        image: 'skin_care/Face Massage.webp',
        details: [
            { title: 'Face Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ],
        description: '<p>Relax and rejuvenate with our Face Massage, a soothing treatment that improves circulation and enhances your skin’s natural radiance. Using gentle, upward strokes with Ayurvedic oils or creams, this therapy reduces puffiness, relieves tension, and promotes lymphatic drainage. Perfect for a refreshed, toned, and glowing complexion.</p>'
    },
])

</script>