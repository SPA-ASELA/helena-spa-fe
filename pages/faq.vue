<template>
    <div class="min-h-screen bg-prim-50">
        <TopBanner image="contact_us/bg.webp" title="Frequently Asked Questions" />
        <div class="container py-20">
            <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <Title label="Frequently Asked Questions" size="lg" :align="'center'" color="prim-dark" tag="h1" class="mb-10" />
                <UAccordion :items="accordionItems" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TopBanner from '@/components/uiKit/banner-top.vue';
import Title from '@/components/uiKit/titles/title.vue';

const faqs = [
    { question: "What is an Ayurvedic massage?", answer: "Ayurvedic massage is a traditional holistic treatment from India that uses warm herbal oils and specific strokes to balance the body's doshas, improve circulation, and promote deep relaxation and healing." },
    { question: "How early should I arrive for my appointment?", answer: "We recommend arriving at least 15 minutes before your scheduled appointment to allow time for check-in, changing, and a brief consultation." },
    { question: "What should I wear to my spa appointment?", answer: "Comfortable clothing is best. We will provide a robe, slippers, and disposable undergarments for use during your treatments." },
    { question: "Can I choose my massage therapist?", answer: "Yes, you can request a specific therapist when booking. We will do our best to accommodate your preference based on availability." },
    { question: "What is Shirodhara?", answer: "Shirodhara is a therapeutic Ayurvedic treatment where warm herbal oil is continuously poured over the forehead (third eye). It is deeply relaxing and helps relieve stress, anxiety, and insomnia." },
    { question: "Do you offer couples massages?", answer: "Yes, we offer couples massages where you and your partner can enjoy your treatments in the same room. Please mention this preference when booking." },
    { question: "Is it safe to get a massage while pregnant?", answer: "We offer prenatal massages for expecting mothers past their first trimester. Please inform us of your pregnancy when booking so we can tailor the treatment safely." },
    { question: "What are your operating hours?", answer: "We are open from Monday to Sunday, 9:00 AM to 9:00 PM." },
    { question: "What payment methods do you accept?", answer: "We accept cash, major credit/debit cards (Visa, MasterCard), and local bank transfers." },
    { question: "Do I need to make a reservation?", answer: "While we accept walk-ins based on availability, we highly recommend making a reservation in advance to guarantee your preferred time and treatment." },
    { question: "What is your cancellation policy?", answer: "We require a minimum of 24 hours' notice for cancellations. Cancellations made with less notice may incur a fee." },
    { question: "Do you have shower facilities?", answer: "Yes, we provide clean and private shower facilities for you to use before or after your treatments, complete with complimentary toiletries." },
    { question: "Are your oils and products natural?", answer: "Absolutely. We strictly use high-quality, organic Ayurvedic oils and herbal products in all our treatments." },
    { question: "Can I bring my children?", answer: "To maintain a tranquil environment for all guests, we recommend not bringing young children unless they are receiving a specific treatment." },
    { question: "What is Pindasweda?", answer: "Pindasweda is a rejuvenating therapy using warm herbal pouches applied to the body. It helps relieve muscle stiffness, joint pain, and reduces inflammation." },
    { question: "How long do the treatments usually last?", answer: "Our treatments range from 30 minutes for targeted massages to 120 minutes for combination therapies." },
    { question: "Do I have to undress completely for a massage?", answer: "You only need to undress to your comfort level. You will be draped with a towel or sheet throughout the service, and only the area being worked on will be exposed." },
    { question: "Is it okay to eat before a massage?", answer: "We recommend eating a light meal at least an hour before your massage. A heavy meal immediately before may cause discomfort." },
    { question: "What is a Shirodhara steam bath?", answer: "It is a combination treatment involving a full body massage followed by a relaxing steam bath to detoxify the skin and soothe muscles." },
    { question: "Do you offer gift cards?", answer: "Yes, gift cards are available and make excellent gifts for birthdays, anniversaries, or special occasions." },
    { question: "Can the massage pressure be adjusted?", answer: "Certainly. Our therapists will ask for your preference, and you should always feel free to request lighter or deeper pressure during your session." },
    { question: "Are there any health conditions that prevent getting a massage?", answer: "Certain conditions like recent surgeries, severe skin infections, or specific cardiovascular issues might require a doctor's clearance. Please inform us of any medical history." },
    { question: "Do you offer facials?", answer: "Yes, we offer rejuvenating facials using natural herbal packs tailored to cleanse, exfoliate, and hydrate your skin type." },
    { question: "Is there parking available?", answer: "Yes, we have a dedicated parking area for our guests right outside the spa." },
    { question: "What is included in a Full Body Scrub?", answer: "A full body scrub involves gently exfoliating the skin to remove dead cells, followed by hydration to leave your skin smooth and glowing." },
    { question: "Can I use my mobile phone inside the spa?", answer: "To respect the relaxation of all guests, we ask that you keep your mobile phones on silent mode or turned off while in the spa area." },
    { question: "Do you provide customized spa packages?", answer: "Yes, we can customize a spa package combining different treatments to suit your specific needs and duration." },
    { question: "Is it beneficial to get a massage after a hike?", answer: "Yes! A massage after a long hike in Ella helps relieve muscle soreness, prevents stiffness, and speeds up recovery." },
    { question: "How often should I get a massage?", answer: "This depends on your goals. For general relaxation, once a month is great. For chronic pain or stress, weekly or bi-weekly sessions may be more beneficial." },
    { question: "Do your therapists speak English?", answer: "Yes, our therapists and reception staff speak English to ensure clear communication regarding your treatments and preferences." }
];

const accordionItems = faqs.map(faq => ({
    label: faq.question,
    content: faq.answer
}));

useSeoMeta({
    title: 'Frequently Asked Questions | Helena Spa Ella',
    description: 'Find answers to common questions about our Ayurvedic spa treatments, booking policies, facilities, and massages at Helena Spa in Ella, Sri Lanka.',
    ogTitle: 'Frequently Asked Questions | Helena Spa Ella',
    ogDescription: 'Find answers to common questions about our Ayurvedic spa treatments, booking policies, facilities, and massages at Helena Spa in Ella, Sri Lanka.',
    ogImage: 'https://helenaspa.lk/assets/logo.png',
});

// Generate FAQ Schema dynamically
const faqSchemaElements = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
    }
}));

useSchemaOrg([
    defineWebPage({
        name: 'Frequently Asked Questions - Helena Spa',
        description: 'Find answers to common questions about our Ayurvedic spa treatments and massages at Helena Spa.',
    }),
    {
        "@type": "FAQPage",
        "mainEntity": faqSchemaElements
    }
]);

</script>
