<script setup>
import Footer from '~/components/global/Footer.vue';
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { property: 'og:title', content: `Inmei` },
    { name: 'description', content: 'Inmei is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
    { property: 'og:description', content: 'Inmei is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
    { property: 'og:url', content: 'https://Inmei-ke.vercel.app/' },
    { name: 'twitter:title', content: 'Inmei' },
    { name: 'twitter:description', content: 'Inmei is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
    { name: 'twitter:site', content: 'https://Inmei-ke.vercel.app/' }
  ],
  title: `Inmei`,
})
</script>

<template>
  <main class="max-w-8xl">
    <slot/>
    <Footer />
  </main>
</template>
