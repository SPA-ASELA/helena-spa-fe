<template>
    <div class="py-20 md:py-32 bg-prim-50">
        <div class="container bg-white p-8 md:p-14 rounded shadow">
            <Title label="Terms & Conditions" :size="'xl'" color="prim-dark" :align="'center'" class="mb-10" />
            <div class="prose max-w-none text-gray-700">
                <p>Welcome to Helena Spa. These terms and conditions outline the rules and regulations for the use of Helena Spa's Website and Services.</p>

                <h3 class="text-xl font-bold mt-6 mb-2">1. Booking & Cancellation</h3>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Helena Spa if you do not agree to take all of the terms and conditions stated on this page.</p>
                <p>Cancellations must be made at least 24 hours in advance. Failure to do so may result in a cancellation fee.</p>

                <h3 class="text-xl font-bold mt-6 mb-2">2. Health and Medical Conditions</h3>
                <p>Please advise us of any health conditions, allergies, or injuries that could affect your service when making your reservation.</p>

                <h3 class="text-xl font-bold mt-6 mb-2">3. License</h3>
                <p>Unless otherwise stated, Helena Spa and/or its licensors own the intellectual property rights for all material on Helena Spa. All intellectual property rights are reserved. You may access this from Helena Spa for your own personal use subjected to restrictions set in these terms and conditions.</p>

                <h3 class="text-xl font-bold mt-6 mb-2">4. User Comments</h3>
                <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Helena Spa does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Helena Spa, its agents and/or affiliates.</p>

                <h3 class="text-xl font-bold mt-6 mb-2">5. Disclaimer</h3>
                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                <ul class="list-disc pl-5 mt-2">
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2">6. Contact Us</h3>
                <p>If you have any queries regarding any of our terms, please contact us.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';

useHead({
  title: 'Terms & Conditions | Helena Spa',
  meta: [
    { name: 'description', content: 'Terms and Conditions of Helena Spa.' }
  ]
})
</script>
