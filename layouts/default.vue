<template>
    <div class="min-h-screen bg-[#f5f5f5]">
        <NavigationBar v-if="!isHomePage" />
        <div>
            <!-- <UNotifications /> -->
            <!-- <Confirmation /> -->
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import NavigationBar from '@/components/layout/navigation.vue';
import Footer from '@/components/layout/footer.vue';
// import Confirmation from '@/components/popups/notifications/confirmation.vue';

const route = useRoute();

const isHomePage = computed(() => route.path === '/');

</script>