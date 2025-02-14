<template>
    <div class="min-h-screen bg-prim-50">
        <Spinner :is-loading="isLoading" />
        <TopBanner image="contact_us/bg.webp" title="Contact Us" />
        <div class="container">
            <div class="container max-w-[800px] w-full mx-auto rounded-xl bg-prim-100">
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
</template>

<script setup>
import TopBanner from '@/components/uiKit/banner-top.vue';
import Input from '@/components/uiKit/input.vue';
import TextArea from '@/components/uiKit/text-area.vue';
import Button from '@/components/uiKit/button.vue';
import Spinner from '@/components/uiKit/spinner.vue';
import { apiService } from '../../services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';
import Swal from 'sweetalert2';

useHead({
    title: 'Contact Helena Spa – Book Your Wellness Experience Today',
    meta: [
        { name: 'description', content: 'Reach out to Helena Spa in Ella, Sri Lanka. Call us or visit our serene spa to book your Ayurvedic massage, beauty treatments, or wellness therapy.'},
        { charset: 'utf-8' },
        { property: 'og:title', content: 'Contact Helena Spa – Book Your Wellness Experience Today' },
        { property: 'og:description', content: 'Reach out to Helena Spa in Ella, Sri Lanka. Call us or visit our serene spa to book your Ayurvedic massage, beauty treatments, or wellness therapy.' },
        { property: 'og:image', content: 'https://helenaspa.lk/_nuxt/logo.CtJ0T2KF.png' },
    ]
});

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