export default defineNuxtPlugin(() => {
    if (process.client) {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        
        // Load gtag.js script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-67E8EY2K9T';
        document.head.appendChild(script1);
        
        // Initialize gtag configuration
        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-67E8EY2K9T');
        `;
        document.head.appendChild(script2);
        
        // Make gtag available globally
        window.gtag = function() {
            dataLayer.push(arguments);
        };
    }
});

