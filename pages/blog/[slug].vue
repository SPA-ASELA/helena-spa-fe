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
import { blogPosts } from '@/utils/blogData';

const route = useRoute();
const slug = route.params.slug;

const post = computed(() => {
    return blogPosts.find(p => p.slug === slug);
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
