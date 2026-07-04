<template>
    <div class="py-20 md:py-32 bg-prim-50">
        <div class="container bg-white p-8 md:p-14 rounded shadow">
            <Title label="Privacy Policy" :size="'xl'" color="prim-dark" :align="'center'" class="mb-10" tag="h1" />
            <div class="prose max-w-none text-gray-700">
                <p>Welcome to Helena Spa. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2">1. Information We Collect</h3>
                <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.</p>
                <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.</p>

                <h3 class="text-xl font-bold mt-6 mb-2">2. How We Use Your Information</h3>
                <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                <ul class="list-disc pl-5 mt-2">
                    <li>To facilitate account creation and logon process.</li>
                    <li>To send administrative information to you.</li>
                    <li>To fulfill and manage your orders and bookings.</li>
                    <li>To post testimonials.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2">3. Will Your Information Be Shared With Anyone?</h3>
                <p>We only share and disclose your information in the following situations:</p>
                <ul class="list-disc pl-5 mt-2">
                    <li>Compliance with Laws: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                    <li>Vital Interests and Legal Rights: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2">4. How Long Do We Keep Your Information?</h3>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>

                <h3 class="text-xl font-bold mt-6 mb-2">5. Contact Us</h3>
                <p>If you have questions or comments about this notice, you may email us at dilanwijesundara1989@gmail.com or by post to:</p>
                <p class="mt-2 text-sm italic">
                    Helena Spa<br>
                    No.55/1, Bandarawela road<br>
                    Ella town, Ella
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '@/components/uiKit/titles/title.vue';

useSeoMeta({
    title: 'Privacy Policy | Helena Spa Ella',
    description: 'Privacy Policy of Helena Spa. Learn how we collect, use, and protect your information.',
    ogTitle: 'Privacy Policy | Helena Spa Ella',
    ogDescription: 'Privacy Policy of Helena Spa. Learn how we collect, use, and protect your information.',
    ogImage: 'https://helenaspa.lk/assets/logo.png',
});

useSchemaOrg([
    defineWebPage({
        name: 'Privacy Policy - Helena Spa',
        description: 'Privacy Policy of Helena Spa. Learn how we collect, use, and protect your information.',
    })
]);
</script>
