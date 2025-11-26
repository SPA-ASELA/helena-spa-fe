export default defineNuxtPlugin(() => {
    useHead({
        script: [
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-67E8EY2K9T',
                async: true
            },
            {
                innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-67E8EY2K9T');
                `,
                type: 'text/javascript'
            }
        ]
    });
});

