<template>
  <div class="google-ad-container my-4">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-format="autorelaxed"
         data-ad-client="ca-pub-5075378095924370"
         data-ad-slot="9296499185"></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  try {
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  } catch (e) {
    console.error('AdSense push error:', e);
  }
});
</script>

<style scoped>
.google-ad-container {
  min-height: 100px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
