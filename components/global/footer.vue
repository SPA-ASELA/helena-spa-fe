<template>
    <div>
        <div v-if="isAppointmentBtnVisible" class="bg-prim-100">
            <div class="container flex flex-col items-center">
                <Title label="Click here for Appointments" :size="'lg'" color="prim-dark" :align="'center'" />
                <Button @click="$router.push('/appointment')" class="max-w-[600px] w-full" label="Get Appointment"
                    type="square" :full-width="true" />
            </div>
        </div>
        <div class="bg-prim-500">
            <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3">
                <div class="text-center md:text-right">
                    <p class="mb-3 text-2xl text-center md:text-right font-bold">Address</p>
                    <p>Wellawaya-Ella-Kumbalwela</p>
                    <p>Hwy,</p>
                    <p>Ella 90090</p>
                </div>
                <div class="flex justify-center">
                    <nuxt-link to="/">
                        <img class="w-[180px]" src="@/assets/images/logo/logo.png" alt="LOGO - Helena Spa">
                    </nuxt-link>
                </div>
                <div class="text-center md:text-left">
                    <p class="mb-3 text-2xl text-center md:text-left font-bold">Contact Us</p>
                    <a href="mailto:helena@gmail.com">helena@gmail.com</a> <br>
                    <a href="tel:+94776999488">+94 77 699 9488</a>
                </div>
            </div>
        </div>
        <div class="bg-prim-700">
            <div class="container">
                <p class="text-center text-white">&copy; 2024 Helena Spa, All Rights Reserved.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';
import Button from '@/components/uiKit/button.vue';

const route = useRoute();
const router = useRouter();

const isAppointmentBtnVisible = computed(() =>
    route.path !== '/' &&
    route.path !== '/appointment' &&
    route.path !== '/shop' &&
    !route.path.startsWith('/shop/')
);

</script>