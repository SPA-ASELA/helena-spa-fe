<template>
    <div>
        <UNotifications />
        <NavigationBar v-if="!isHomePage" />
        <div>
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import NavigationBar from '@/components/global/navigation.vue';
import Footer from '@/components/global/footer.vue';

const route = useRoute();

const isHomePage = computed(() => route.path === '/');

</script>