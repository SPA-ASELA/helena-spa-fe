<template>
    <div class="min-h-screen nav-size-box pb-10 flex items-center bg-prim-100">
        <Spinner :is-loading="isLoading" />
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="hidden md:block rounded-br-[200px] overflow-hidden relative">
                <div class="grid place-items-center absolute top-0 right-0 bottom-0 left-0 bg-[#00000080]">
                    <Title label="Enter Your Details" size="md" :align="'center'" color="white" />
                </div>
                <img class="w-full h-full object-cover" src="/assets/appointment/bg.webp" alt="">
            </div>
            <div class="container py-0">
                <Title label="Enter Your Details" size="md" :align="'left'" color="black" />
                <Input :value="formState.name" label="Name" :error="errors.name" @update:value="inpName" />
                <Input :value="formState.email" label="Email" :error="errors.email" @update:value="inpEmail" />
                <Input :value="formState.phone" label="Phone" :error="errors.phone" @update:value="inpPhone" />
                <Select :value="formState.service" label="Service" :error="errors.service" :options="services"
                    placeholder="Select Service" @update:value="inpService" />
                <div class="ml-0 sm:ml-[133px] mb-5 grid grid-cols-2 gap-5">
                    <div>
                        <input type="date" v-model="formState.date"
                            class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                            :class="errors.date ? 'border-red-500' : 'border-white'" />
                        <p v-if="errors.date" class="text-sm text-red-500">{{ errors.date }}</p>
                    </div>
                    <div>
                        <input type="time" v-model="formState.time"
                            class="w-full h-10 pl-3 mb-1 rounded-md outline-none border"
                            :class="errors.time ? 'border-red-500' : 'border-white'" />
                        <p v-if="errors.time" class="text-sm text-red-500">{{ errors.time }}</p>
                    </div>
                </div>
                <Button @click="submitAppointment()" class="ml-0 sm:ml-[140px]" label="Get Appointment" type="square"
                    :full-width="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';
import Input from '@/components/uiKit/input.vue';
import Select from '@/components/uiKit/select.vue';
import Button from '@/components/uiKit/button.vue';
import Spinner from '@/components/uiKit/spinner.vue';
import { apiService } from '../../services/apiService';
import { API_ENDPOINTS } from '@/utils/constants/api';
import Swal from 'sweetalert2';

const formState = reactive({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
});
const isLoading = ref(false);
const errors = reactive({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
});

const services = reactive([
    { label: 'Head, Neck & Shoulder Massage', value: 'Head, Neck & Shoulder Massage' },
    { label: 'Neck & Shoulder Massage', value: 'Neck & Shoulder Massage' },
    { label: 'Back Massage', value: 'Back Massage' },
    { label: 'Foot Massage', value: 'Foot Massage' },
    { label: 'Serenity Awaits', value: 'Serenity Awaits' },
    { label: 'Leg Massage', value: 'Leg Massage' },
    { label: 'Shirodhara', value: 'Shirodhara' },
    { label: 'Full Body Massage 60 Mins', value: 'Full Body Massage 60 Mins' },
    { label: 'Full Body Massage 90 Mins', value: 'Full Body Massage 90 Mins' },
    { label: 'Pindasweda', value: 'Pindasweda' },
    { label: 'Shirodhara & Full Body Massage', value: 'Shirodhara & Full Body Massage' },
    { label: 'Full Body Massage & Shirodhara Steam Bath', value: 'Full Body Massage & Shirodhara Steam Bath' },
    { label: 'Back Massage & Foot/Leg Massage', value: 'Back Massage & Foot/Leg Massage' },
    { label: 'Neck, Shoulder & Back Massage', value: 'Neck, Shoulder & Back Massage' },
    { label: 'Warm Hospitality', value: 'Warm Hospitality' },
    { label: 'Head, Neck, Shoulder & Back Massage', value: 'Head, Neck, Shoulder & Back Massage' },
    { label: 'Foot & Leg Massage', value: 'Foot & Leg Massage' },
    { label: 'Pedicure', value: 'Pedicure' },
    { label: 'Manicure', value: 'Manicure' },
    { label: 'Face Massage', value: 'Face Massage' },
    { label: 'Facial', value: 'Facial' },
    { label: 'Full Body Scrub', value: 'Full Body Scrub' },
    { label: 'Foot Scrub & Herbal Foot Pack', value: 'Foot Scrub & Herbal Foot Pack' },
    { label: 'Steam Bath', value: 'Steam Bath' },
    { label: 'Full Body Massage & Steam Bath', value: 'Full Body Massage & Steam Bath' },
    { label: 'A Sanctuary of Calm', value: 'A Sanctuary of Calm' },
]);

const inpName = (value) => {
    formState.name = value;
};

const inpEmail = (value) => {
    formState.email = value;
};

const inpPhone = (value) => {
    formState.phone = value;
};

const inpService = (value) => {
    console.log(value);
    
    formState.service = value;
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
    } else if (formState.phone.length < 10) {
        errors.phone = 'Please enter valid phone';
    } else {
        errors.phone = '';
    }

    if (formState.service === '') {
        errors.service = 'Please select the service you want to book';
    } else {
        errors.service = '';
    }

    if (formState.date === '') {
        errors.date = 'Please enter date';
    } else {
        errors.date = '';
    }

    if (formState.time === '') {
        errors.time = 'Please enter time';
    } else {
        errors.time = '';
    }
};

const submitAppointment = async () => {
    formValidation();
    if (errors.name === '' && errors.email === '' && errors.phone === '' && errors.service === '' && errors.date === '' && errors.time === '') {
        isLoading.value = true;
        try {
            await apiService.request(API_ENDPOINTS.BOOKING.SUBMIT, formState);
            formState.name = '';
            formState.email = '';
            formState.phone = '';
            formState.service = '';
            formState.date = '';
            formState.time = '';
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

<style scoped>
input {
    box-sizing: border-box;
    outline: 0;
    padding: .75rem;
    position: relative;
}

input::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
}</style>