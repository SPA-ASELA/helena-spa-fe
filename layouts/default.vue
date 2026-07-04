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

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Helena Spa',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineOrganization({
    name: 'Helena Spa',
    logo: 'https://helenaspa.lk/logo.png', // Replace with actual logo URL
    url: 'https://helenaspa.lk',
  }),
  defineLocalBusiness({
    name: 'Helena Spa',
    address: {
      streetAddress: 'Ella - Passara Rd',
      addressLocality: 'Ella',
      addressRegion: 'Uva Province',
      postalCode: '90090',
      addressCountry: 'LK',
    },
    telephone: '+94 77 669 9488', // Replace with actual number
    image: 'https://helenaspa.lk/logo.png', // Replace with actual image
  })
])

</script>