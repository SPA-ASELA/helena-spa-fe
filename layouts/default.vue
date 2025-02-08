<template>
    <div>
        <NavigationBar v-if="!isHomePage" />
        <div>
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import NavigationBar from '@/components/layout/navigation.vue';
import Footer from '@/components/layout/footer.vue';

const route = useRoute();

const isHomePage = computed(() => route.path === '/');

</script>