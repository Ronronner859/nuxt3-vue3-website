<!--侧边抽屉栏 独立路由，修改标题路由时候需要单独修改-->
<script setup lang="ts">
const {locale, setLocale, tm} = useI18n()
import {storeToRefs} from "pinia";

const userStore = useUserPinia()
const {drawer} = storeToRefs(userStore);
/**
 * 路由跳转
 * @param link 路由
 */
const toPage = async (link: String) => {
  await navigateTo(link)
}

/**
 * 响应式i18n
 */
const items = computed(() => {
  return tm("shop.appBar.title");
})

</script>
<template>
  <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary>
    <!--标题-->
    <v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click=toPage(item.link)
      >
        <v-list-item-title class="text-[#333333]" v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>