<template>
    <div class="min-h-screen bg-prim-50">
        <Spinner :is-loading="isLoading" />
        <TopBanner image="contact_us/bg.webp" title="Contact Us" />
        <div class="container pb-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- NAP Details & Map -->
                <div>
                    <h2 class="text-2xl font-bold mb-5 text-prim-950">Get in Touch</h2>
                    <div class="flex flex-col gap-3 mb-8">
                        <p><strong>Address:</strong> Ella - Passara Rd, Ella 90090, Sri Lanka</p>
                        <p><strong>Phone:</strong> +94 77 669 9488</p>
                        <p><strong>Email:</strong> dilanwijesundara1989@gmail.com</p>
                        <p><strong>Opening Hours:</strong> Mon-Sun, 9:00 AM - 9:00 PM</p>
                    </div>
                    <div class="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.834789552882!2d81.04273895!3d6.871587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465955bc09a25%3A0xbdfdf9b4009bb333!2sElla!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div class="w-full rounded-xl bg-prim-100 p-8 shadow-md">
                    <h2 class="text-2xl font-bold mb-5 text-prim-950 text-center">Send Us a Message</h2>
                <Input :value="formState.name" label="Name" :error="errors.name" @update:value="inpName" />
                <Input :value="formState.email" label="E-Mail" type="email" :error="errors.email"
                    @update:value="inpEmail" />
                <Input :value="formState.phone" label="Phone" :error="errors.phone" @update:value="inpPhone" />
                <TextArea :value="formState.comment" label="Comment" :error="errors.comment" @update:value="inpComment" />
                <div>
                    <Button @click="submitContactForm()" class="ml-0 sm:ml-[140px]" label="Shop Now" type="square"
                        :full-width="true" />
                </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import TopBanner from '@/components/uiKit/banner-top.vue';
import Input from '@/components/uiKit/input.vue';
import TextArea from '@/components/uiKit/text-area.vue';
import Button from '@/components/uiKit/button.vue';
import Spinner from '@/components/uiKit/spinner.vue';
import { apiService } from '@/services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';
import Swal from 'sweetalert2';

useSeoMeta({
    title: 'Contact Helena Spa – Book Your Wellness Experience Today',
    description: 'Reach out to Helena Spa in Ella, Sri Lanka. Call us or visit our serene spa to book your Ayurvedic massage, beauty treatments, or wellness therapy.',
    ogTitle: 'Contact Helena Spa – Book Your Wellness Experience Today',
    ogDescription: 'Reach out to Helena Spa in Ella, Sri Lanka. Call us or visit our serene spa to book your Ayurvedic massage, beauty treatments, or wellness therapy.',
    ogImage: 'https://helenaspa.lk/assets/logo.png',
});

useSchemaOrg([
    defineWebPage({
        name: 'Contact Helena Spa',
        description: 'Reach out to Helena Spa in Ella, Sri Lanka.',
    })
]);

const formState = reactive({
    name: '',
    email: '',
    phone: '',
    comment: ''
});
const isLoading = ref(false);
const errors = reactive({
    name: '',
    email: '',
    phone: '',
    comment: ''
});

const inpName = (val) => {
    formState.name = val;
};

const inpEmail = (val) => {
    formState.email = val;
};

const inpPhone = (val) => {
    formState.phone = val;
};

const inpComment = (val) => {
    formState.comment = val;
};

const formValidation = () => {
    if (formState.name === '') {
        errors.name = 'Please enter name';
    } else {
        errors.name = '';
    }

    if (formState.email === '') {
        errors.email = 'Please enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.email)) {
        errors.email = 'Please enter valid email';
    } else {
        errors.email = '';
    }

    if (formState.phone === '') {
        errors.phone = 'Please enter phone';
    } else if (formState.phone.length < 9) {
        errors.phone = 'Please enter valid phone';
    } else {
        errors.phone = '';
    }

    if (formState.comment === '') {
        errors.comment = 'Please enter comment';
    } else {
        errors.comment = '';
    }
};

const submitContactForm = async () => {
    formValidation();
    if (errors.name === '' && errors.email === '' && errors.phone === '' && errors.comment === '') {
        isLoading.value = true;
        try {
            await apiService.request(API_ENDPOINTS.CONTACT_US.SUBMIT, formState);
            formState.name = '';
            formState.email = '';
            formState.phone = '';
            formState.comment = '';
            Swal.fire({
                title: 'Success!',
                text: 'Thank you for contacting us. We will get back to you soon.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        isLoading.value = false;
    }
};

</script>