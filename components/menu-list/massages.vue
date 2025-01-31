<template>
    <div>
        <BaseTemp :image="mainImg" :title="title" :types="types" />
    </div>
</template>

<script setup>
import BaseTemp from '@/components/menu-list/base.vue';

const mainImg = ref('massages/main.webp');
const title = ref('Massages');
const types = reactive([
    { 
        title: 'Head, Neck & Shoulder Massage', 
        image: 'massages/Head, Neck & Shoulder Massage.webp', 
        details: [
            { title: 'Head, Neck & Shoulder Massage', duration: '30 Mins', price: 'Rs. 3,500' },
            { title: 'Neck & Shoulder Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ], 
        description: '<p class=mb-3>Experience ultimate relaxation with our Head, Neck & Shoulder Massage, where gentle and rhythmic strokes using warm Ayurvedic oils melt away tension in the upper body. This treatment enhances blood circulation to the scalp, alleviates headaches, and reduces neck stiffness. A perfect remedy for stress relief, it also promotes clarity and balance by aligning the body’s energy centers. Ideal for unwinding after a long day.</p><p>Relieve tension with our Neck & Shoulder Massage, focusing on strained muscles caused by poor posture or daily stress. Using circular motions and kneading techniques with herbal-infused Ayurvedic oils, this massage soothes tightness and improves mobility in the upper body. Feel your stress melt away while enhancing flexibility and posture alignment.</p>' 
    },
    {
        title: 'Back Massage',
        image: 'massages/Back Massage.webp',
        details: [
            { title: 'Back Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ],
        description: '<p>Our Back Massage combines Ayurvedic herbal oils with deep pressure techniques to release tension in the back and improve spinal health. Perfect for alleviating lower back pain and tightness, this treatment stimulates blood flow and promotes deep relaxation. It is especially beneficial for those with sedentary lifestyles or stress-related stiffness.</p>'
    },
    {
        title: 'Foot Massage',
        image: 'massages/Foot Massage.webp',
        details: [
            { title: 'Foot Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ],
        description: '<p>Indulge in Padabhyanga, our signature Foot Massage, which uses warm Ayurvedic oils to target vital pressure points on your feet. This ancient practice enhances overall well-being by improving circulation, detoxifying the body, and relieving fatigue. Let the stress melt away as your feet are pampered, leaving you grounded, energized, and balanced.</p>'
    },
    {
        title: 'Leg Massage',
        image: 'massages/Leg Massage.webp',
        details: [
            { title: 'Leg Massage', duration: '30 Mins', price: 'Rs. 3,500' },
        ],
        description: '<p>Soothe tired legs with our Leg Massage, designed to alleviate muscle fatigue and swelling. Using long, firm strokes with Ayurvedic oils, this treatment enhances blood flow and eases stiffness. Ideal for athletes or anyone on their feet all day, it rejuvenates tired muscles while promoting lymphatic drainage for a light and refreshed feeling.</p>'
    },
    {
        title: 'Full Body Massage',
        image: 'massages/Full Body Massage.webp',
        details: [
            { title: 'Full Body Massage', duration: '60 Mins', price: 'Rs. 6,500' },
            { title: 'Full Body Massage', duration: '90 Mins', price: 'Rs. 9,000' },
        ],
        description: '<p>Rejuvenate from head to toe with our Full Body Massage, a signature Ayurvedic experience that balances your body’s energy. Warm herbal oils tailored to your dosha are applied with rhythmic strokes to release tension, detoxify, and hydrate the skin. This treatment enhances circulation, relieves stress, and restores inner harmony, leaving you refreshed and renewed.</p>'
    },
    {
        title: 'Neck, Shoulder & Back Massage',
        image: 'massages/Neck, Shoulder & Back Massage.webp',
        details: [
            { title: 'Neck, Shoulder & Back Massage', duration: '60 Mins', price: 'Rs. 6,500' },
        ],
        description: '<p>Combining three areas of tension, our Neck, Shoulder & Back Massage uses targeted strokes with warm Ayurvedic oils to relieve muscle tightness and improve mobility. Ideal for relieving aches from prolonged sitting or physical stress, this treatment helps restore flexibility and balance to your upper body.</p>'
    },
    {
        title: 'Head, Neck, Shoulder & Back Massage',
        image: 'massages/Head, Neck, Shoulder & Back Massage.webp',
        details: [
            { title: 'Head, Neck, Shoulder & Back Massage', duration: '60 Mins', price: 'Rs. 6,500' },
        ],
        description: '<p>For a holistic upper-body experience, our Head, Neck, Shoulder & Back Massage soothes every stressed muscle. Infused with Ayurvedic herbal oils, this massage focuses on reducing stress, easing tension headaches, and improving spinal alignment. A perfect choice for complete relaxation and posture correction.</p>'
    },
    {
        title: 'Back Massage & Foot/Leg Massage',
        image: 'massages/Back Massage & Foot-Leg Massage.webp',
        details: [
            { title: 'Back Massage & Foot/Leg Massage', duration: '60 Mins', price: 'Rs. 7,000' },
        ],
        description: '<p>Enjoy the ultimate relief with our Back Massage & Foot/Leg Massage combination. This treatment blends deep strokes on the back with gentle kneading on the feet and legs, using herbal oils to detoxify and improve circulation. It’s ideal for releasing tension in the lower back and legs, leaving your body light and revitalized.</p>'
    },
    {
        title: 'Foot & Leg Massage',
        image: 'massages/Foot Massage.webp',
        details: [
            { title: 'Foot & Leg Massage', duration: '60 Mins', price: 'Rs. 6,500' },
        ],
        description: 'Pamper your lower body with our Foot & Leg Massage, a combination of Ayurvedic techniques to relieve tension and improve mobility. Herbal oils are applied with upward strokes and gentle pressure to enhance circulation and reduce fatigue. This massage is perfect for those seeking relaxation and grounding after long hours of activity.'
    }
])

</script>