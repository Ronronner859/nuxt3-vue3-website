<script setup lang="ts">
const {locale, setLocale, tm} = useI18n()
const seo_title = computed(() => {
  return tm("shop.seo.title");
})
const seo_ogTitle = computed(() => {
  return tm("shop.seo.ogTitle");
})
const seo_description = computed(() => {
  return tm("shop.seo.description");
})
const seo_ogDescription = computed(() => {
  return tm("shop.seo.ogDescription");
})

useSeoMeta({
  title: seo_title,
  ogTitle: seo_ogTitle,
  description: seo_description,
  ogDescription: seo_ogDescription,
  ogImage: 'https://oss-cdn.tearful.cn/shop/banner/AP_memorial_day_sale_BANNERSv2-01_2048x2048.webp'
})

</script>
<template>
  <v-app>
    <!--导航栏-->
    <app-header/>

    <!--主页面-->
    <NuxtPage/>

    <!--尾部-->
    <app-footer/>
  </v-app>
</template>

<style scoped>

</style>