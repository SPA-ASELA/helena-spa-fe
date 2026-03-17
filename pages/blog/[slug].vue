<template>
    <div class="py-20 md:py-32 bg-prim-50 min-h-screen">
        <div class="container max-w-4xl bg-white p-6 md:p-12 rounded shadow" v-if="post">
            <nuxt-link to="/blog" class="text-sm font-bold text-prim-600 hover:text-prim-800 mb-8 inline-block">&larr; Back to Blog</nuxt-link>
            
            <img :src="post.image" :alt="post.title" class="w-full h-64 md:h-[500px] object-cover rounded mb-8">
            
            <p class="text-sm text-prim-500 font-bold mb-3">{{ post.date }}</p>
            <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{{ post.title }}</h1>
            
            <div class="prose max-w-none text-gray-700" v-html="post.content"></div>
        </div>
        <div class="container text-center py-32" v-else>
            <h2 class="text-2xl font-bold text-gray-900">Post not found</h2>
            <nuxt-link to="/blog" class="mt-4 text-prim-600 underline">Return to Blog</nuxt-link>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const allPosts = [
    {
        slug: 'benefits-of-regular-massage-therapy',
        title: '7 Amazing Benefits of Regular Massage Therapy',
        date: 'October 12, 2024',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: `
            <p class="mb-4">Massage is no longer available only through luxury spas and upscale health clubs. Today, massage therapy is offered in businesses, clinics, hospitals and even airports. If you've never tried massage, learn about its possible health benefits and what to expect during a massage therapy session.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">1. It reduces stress and anxiety</h3>
            <p class="mb-4">The calming effect of massage therapy is well-documented. Studies have shown that massage can lower cortisol levels (the stress hormone) and increase levels of serotonin and dopamine, neurotransmitters that help stabilize your mood.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">2. Enhances sleep quality</h3>
            <p class="mb-4">If you're tossing and turning at night, massage might be the solution. It promotes relaxation and helps those who struggle with restful sleep. It also helps those who can't comfortably rest.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">3. Eases muscle pain</h3>
            <p class="mb-4">Got sore muscles? Massage therapy increases and improves circulation. Just like rubbing your elbow when you knock it on a table helps to relieve the pain.</p>
            <p class="mb-4 font-bold">Book your session with Helena Spa today and start experiencing these benefits for yourself!</p>
        `
    },
    {
        slug: 'ultimate-skincare-routine-for-glowing-skin',
        title: 'The Ultimate Skincare Routine for glowing skin and beauty secrets',
        date: 'November 5, 2024',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: `
            <p class="mb-4">Achieving a glowing, radiant complexion is a common skincare goal, but it requires consistency and the right routine. Here is our recommended daily skincare routine.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">Step 1: Cleanse</h3>
            <p class="mb-4">A good cleanser will remove dirt, oil, and makeup without stripping your skin of its natural moisture. Wash your face twice a day, morning and night.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">Step 2: Exfoliate (1-2 times a week)</h3>
            <p class="mb-4">Exfoliation removes dead skin cells that can make your skin look dull. Choose a gentle physical or chemical exfoliator depending on your skin type.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">Step 3: Tone</h3>
            <p class="mb-4">Toners help to balance your skin's pH and prepare it for the following steps. Look for hydrating ingredients like glycerin or hyaluronic acid.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">Step 4: Moisturize and Protect</h3>
            <p class="mb-4">Always end with a moisturizer to lock in hydration, and during the day, never forget a broad-spectrum sunscreen.</p>
        `
    },
    {
        slug: 'how-to-create-spa-experience-at-home',
        title: 'How to Create a Relaxing Spa Experience at Home',
        date: 'December 20, 2024',
        image: 'https://allurebathfashions.co.uk/cdn/shop/articles/Home_Spa_Blog_22dd0f49-3c28-4b89-860b-ce1f68bdf60e.jpg?v=1770716489',
        content: `
            <p class="mb-4">We all need a little pampering sometimes, but making it to the spa isn't always possible. Creating a spa-like atmosphere in your own home is easier than you think.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">Set the Mood</h3>
            <p class="mb-4">Lighting is crucial. Turn off the bright overhead lights and opt for soft lighting or candles. Put on some calming, instrumental music or nature sounds.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">Upgrade Your Bath</h3>
            <p class="mb-4">Add Epsom salts, essential oils like lavender or chamomile, or a luxurious bath bomb to warm water. The steam and scents will instantly relax you.</p>
            <h3 class="text-xl font-bold mt-6 mb-2">DIY Facials</h3>
            <p class="mb-4">Use masks with ingredients from your kitchen like honey and yogurt, or invest in premium sheet masks. Take the time to gently massage the product into your skin.</p>
            <p class="mb-4 font-bold">Remember, the goal is relaxation. Disconnect from your phone and let your mind unwind.</p>
        `
    }
];

const post = computed(() => {
    return allPosts.find(p => p.slug === slug);
});

if (post.value) {
    useHead({
        title: `${post.value.title} | Helena Spa`,
        meta: [
            { name: 'description', content: post.value.title }
        ]
    })
}
</script>
