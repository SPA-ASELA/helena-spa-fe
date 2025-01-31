<template>
    <div>
        <BaseTemp :image="mainImg" :title="title" :types="types" />
    </div>
</template>

<script setup>
import BaseTemp from '@/components/menu-list/base.vue';

const mainImg = ref('therapies/main.webp');
const title = ref('Therapies');
const types = reactive([
    { 
        title: 'Shirodhara', 
        image: 'therapies/Shirodhara.webp', 
        details: [
            { title: 'Shirodhara', duration: '60 Mins', price: 'Rs. 6,000' },
            { title: 'Neck & Shoulder Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ], 
        description: '<p>A hallmark of Ayurvedic therapy, Shirodhara involves a continuous stream of warm herbal oil gently poured onto the forehead (third eye). This deeply relaxing treatment calms the nervous system, reduces stress, and enhances mental clarity. It is highly effective for insomnia, anxiety, and migraines, leaving you feeling refreshed and centered.</p>' 
    },
    {
        title: 'Shirodhara & Full Body Massage',
        image: 'therapies/Shirodhara & Full Body Massage.webp',
        details: [
            { title: 'Shirodhara & Full Body Massage', duration: '120 Mins', price: 'Rs. 12,000' },
        ],
        description: '<p>This combination treatment begins with a rejuvenating Full Body Massage using Ayurvedic oils to release tension and improve circulation. It is followed by Shirodhara, where warm herbal oil flows over the forehead to calm the mind and restore balance. Together, these therapies offer profound relaxation, detoxification, and holistic rejuvenation.</p>'
    },
    {
        title: 'Full Body Massage & Shirodhara Steam Bath',
        image: 'therapies/Full Body Massage & Shirodhara Steam Bath.webp',
        details: [
            { title: 'Full Body Massage & Shirodhara Steam Bath', duration: '-', price: 'Rs. 15,000' },
        ],
        description: '<p>A luxurious Ayurvedic experience that starts with a Full Body Massage, relaxing the muscles and improving energy flow. Next, enjoy a Shirodhara session for mental clarity, followed by a therapeutic Steam Bath infused with herbal essences to detoxify the body and leave you glowing from the inside out.</p>'
    },
    {
        title: 'Full Body Massage & Steam Bath',
        image: 'therapies/Full Body Massage & Steam Bath.webp',
        details: [
            { title: 'Full Body Massage & Steam Bath', duration: '-', price: 'Rs. 10,000' },
        ],
        description: '<p>Indulge in the ultimate Ayurvedic rejuvenation with our Full Body Massage & Steam Bath. This treatment begins with a relaxing Full Body Massage using warm herbal oils tailored to your dosha. Gentle, rhythmic strokes release tension, improve circulation, and detoxify the body. The experience continues with a therapeutic Steam Bath, infused with Ayurvedic herbs to open pores, eliminate toxins, and enhance overall well-being. This combination not only relaxes the body and mind but also nourishes the skin, leaving you feeling refreshed, light, and radiant. Perfect for a holistic detox and deep relaxation.</p>'
    },
    {
        title: 'Pindasweda',
        image: 'therapies/Pindasweda.webp',
        details: [
            { title: 'Pindasweda', duration: '90 Mins', price: 'Rs. 9,000' },
        ],
        description: '<p>Pindasweda is a traditional Ayurvedic therapy using heated herbal poultices. These are gently massaged over the body to relieve muscle pain, improve circulation, and detoxify. The warm herbal compresses, combined with aromatic oils, rejuvenate tired muscles and promote overall well-being, making it perfect for chronic pain relief.</p>'
    },
    {
        title: 'Steam Bath',
        image: 'therapies/Steam Bath.webp',
        details: [
            { title: 'Full Body Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ],
        description: '<p>An Ayurvedic Steam Bath offers the ultimate detox experience. Infused with medicinal herbs, the steam opens pores, promotes sweating, and eliminates toxins from the body. This treatment enhances skin health, improves circulation, and leaves you feeling refreshed, rejuvenated, and light.</p>'
    },
])

</script>