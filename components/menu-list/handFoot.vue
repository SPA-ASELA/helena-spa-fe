<template>
    <div>
        <BaseTemp :image="mainImg" :title="title" :types="types" />
    </div>
</template>

<script setup>
import BaseTemp from '@/components/menu-list/base.vue';

const mainImg = ref('hand&foot/main.webp');
const title = ref('Hand & Foot');
const types = reactive([
    {
        title: 'Pedicure',
        image: 'hand&foot/Pedicure.webp',
        details: [
            { title: 'Full Body Scrub', duration: '60 Mins', price: 'Rs. 6,000' },
        ],
        description: '<p>Pamper your feet with our luxurious Pedicure, a complete foot care treatment that combines cleansing, exfoliation, and hydration. Using Ayurvedic herbal scrubs and nourishing creams, this therapy softens rough skin, trims and shapes nails, and soothes tired feet. A relaxing foot massage is included, leaving your feet rejuvenated and refreshed with a polished finish.</p>'
    },
    {
        title: 'Manicure',
        image: 'hand&foot/Manicure.webp',
        details: [
            { title: 'Foot Scrub & Herbal Foot Pack', duration: '60 Mins', price: 'Rs. 6,000' },
        ],
        description: '<p>Give your hands the care they deserve with our Manicure, a soothing treatment that includes cleansing, exfoliating, and nourishing the skin. Using herbal-infused products, this service also focuses on shaping nails, cuticle care, and hydration. Enjoy a relaxing hand massage, leaving your hands soft, radiant, and perfectly groomed.</p>'
    },
])

</script>