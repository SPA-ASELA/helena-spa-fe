<template>
    <div class="py-20 md:py-32 bg-prim-50">
        <div class="container">
            <Title label="Our Blog" :size="'xl'" color="prim-dark" :align="'center'" class="mb-10" />
            <p class="text-center text-gray-700 max-w-2xl mx-auto mb-16">
                Discover the latest wellness tips, spa trends, and rejuvenating treatments from our experts at Helena Spa.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="post in blogPosts" :key="post.id" class="bg-white rounded overflow-hidden shadow">
                    <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
                    <div class="p-6 flex flex-col justify-between h-[250px]">
                        <div>
                            <p class="text-sm text-prim-500 font-bold mb-2">{{ post.date }}</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{{ post.title }}</h3>
                            <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
                        </div>
                        <nuxt-link :to="`/blog/${post.slug}`" class="text-prim-600 font-bold hover:text-prim-800 transition-colors">
                            Read More &rarr;
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';

useHead({
  title: 'Blog | Helena Spa',
  meta: [
    { name: 'description', content: 'Read the latest wellness and spa tips from Helena Spa.' }
  ]
})

const blogPosts = reactive([
    {
        id: 1,
        slug: 'benefits-of-regular-massage-therapy',
        title: '7 Amazing Benefits of Regular Massage Therapy',
        excerpt: 'Discover how making massage a regular part of your wellness routine can transform your physical and mental well-being.',
        date: 'October 12, 2024',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        slug: 'ultimate-skincare-routine-for-glowing-skin',
        title: 'The Ultimate Skincare Routine for glowing skin and beauty secrets',
        excerpt: 'Learn the essential steps and top ingredients our estheticians recommend for achieving that perfect, radiant glow.',
        date: 'November 5, 2024',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        slug: 'how-to-create-spa-experience-at-home',
        title: 'How to Create a Relaxing Spa Experience at Home',
        excerpt: 'Can\'t make it to the spa? Here are some simple ways to recreate our signature relaxing atmosphere in your own bathroom.',
        date: 'December 20, 2024',
        image: 'https://allurebathfashions.co.uk/cdn/shop/articles/Home_Spa_Blog_22dd0f49-3c28-4b89-860b-ce1f68bdf60e.jpg?v=1770716489'
    }
]);
</script>
