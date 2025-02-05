<template>
    <div class="min-h-screen nav-size-box flex items-center bg-prim-100">
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="hidden md:block rounded-br-[200px] overflow-hidden relative">
                <div class="grid place-items-center absolute top-0 right-0 bottom-0 left-0 bg-[#00000080]">
                    <Title label="Enter Your Details" size="md" :align="'center'" color="white" />
                </div>
                <img class="w-full h-full object-cover" src="/assets/appointment/bg.webp" alt="">
            </div>
            <div class="container py-0">
                <Title label="Enter Your Details" size="md" :align="'left'" color="black" />
                <Input label="Name" :error="errors.name" @update:value="inpName" />
                <Input label="Email" :error="errors.email" @update:value="inpEmail" type="email" />
                <Input label="Phone" :error="errors.phone" @update:value="inpPhone" />
                <Select label="Service" :error="errors.service" :options="services" placeholder="Select Service" @update:value="inpService" />
                <div class="ml-0 sm:ml-[138px] mb-5 grid grid-cols-2 gap-5">
                    <input type="date" v-model="formState.date" class="w-full h-10 pl-3 mb-1 rounded-md outline-none border border-gray-300" />
                    <input type="time" v-model="formState.time" class="w-full h-10 pl-3 mb-1 rounded-md outline-none border border-gray-300" />
                </div>
                <Button @click="submitContactForm()" class="ml-0 sm:ml-[140px]" label="Get Appointment" type="square" :full-width="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';
import Input from '@/components/uiKit/input.vue';
import Select from '@/components/uiKit/select.vue';
import Button from '@/components/uiKit/button.vue';

const formState = reactive({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
});

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
    formState.service = value;
};

</script>