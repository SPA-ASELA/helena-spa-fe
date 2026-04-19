<template>
    <div class="py-20 md:py-32 bg-prim-50">
        <div class="container">
            <Title label="Our Blog" :size="'xl'" color="prim-dark" :align="'center'" class="mb-10" />
            <p class="text-center text-gray-700 max-w-2xl mx-auto mb-16">
                Discover the latest wellness tips, spa trends, and rejuvenating treatments from our experts at Helena Spa.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="post in sortedBlogPosts" :key="post.id" class="bg-white rounded overflow-hidden shadow">
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

import { blogPosts } from '@/utils/blogData';

const sortedBlogPosts = computed(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

useHead({
  title: 'Blog | Helena Spa',
  meta: [
    { name: 'description', content: 'Read the latest wellness and spa tips from Helena Spa.' }
  ]
})

</script>
