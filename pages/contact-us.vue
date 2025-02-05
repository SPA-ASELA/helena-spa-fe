<template>
    <div class="min-h-screen bg-prim-50">
        <TopBanner image="contact_us/bg.webp" title="Contact Us" />
        <div class="container">
            <div class="container max-w-[800px] w-full mx-auto rounded-xl bg-prim-100">
                <Input label="Name" :error="errors.name" @update:value="inpName" />
                <Input label="E-Mail" type="email" :error="errors.email" @update:value="inpEmail" />
                <Input label="Phone" :error="errors.phone" @update:value="inpPhone" />
                <TextArea label="Comment" :error="errors.comment" @update:value="inpComment" />
                <div>
                    <Button @click="submitContactForm()" class="ml-0 sm:ml-[140px]" label="Shop Now" type="square" :full-width="true" />
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

const formState = reactive({
    name: '',
    email: '',
    phone: '',
    comment: ''
});

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
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.email)) {
        errors.email = 'Please enter valid email';
    } else {
        errors.email = '';
    }

    if (formState.phone === '') {
        errors.phone = 'Please enter phone';
    } else if(formState.phone.length < 10) {
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
        console.log(formState);
    }
};

</script>