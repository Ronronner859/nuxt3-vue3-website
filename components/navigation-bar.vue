<!--侧边栏标题-->
<script setup lang="ts">
const appBarStyle = useAppBarStyle();

</script>
<!--导航栏-->
<template>
  <div class="">
    <NuxtLink to="/">
      <div :class="appBarStyle.shop" class="mx-3">
        <v-btn flat elevation="0" height="45" rounded="0" class="font-buttershine-serif text-[#413e3a] app-bar-btn px-1 ">{{
            $t('shop.appBar.title[0].name')
          }}
        </v-btn>
      </div>
    </NuxtLink>

    <NuxtLink to="/videos">
      <div :class="appBarStyle.videos" class="mx-3">
        <v-btn flat height="45" rounded="0" class="font-buttershine-serif text-[#413e3a] app-bar-btn px-1">{{
            $t('shop.appBar.title[1].name')
          }}
        </v-btn>
      </div>
    </NuxtLink>
    <NuxtLink to="/our-story">
      <div :class="appBarStyle.ourStory" class="mx-3">
        <v-btn flat height="45" rounded="0" class="font-buttershine-serif text-[#413e3a] app-bar-btn px-1">{{
            $t('shop.appBar.title[2].name')
          }}
        </v-btn>
      </div>
    </NuxtLink>
    <NuxtLink to="/faq">
      <div :class="appBarStyle.faq" class="mx-3">
        <v-btn flat height="45" rounded="0" class="font-buttershine-serif text-[#413e3a] app-bar-btn px-1">{{
            $t('shop.appBar.title[3].name')
          }}
        </v-btn>
      </div>
    </NuxtLink>
    <NuxtLink to="/contact-us">
      <div :class="appBarStyle.contactUs" class="mx-3">
        <v-btn flat height="45" rounded="0" class="font-buttershine-serif text-[#413e3a] app-bar-btn px-1">{{
            $t('shop.appBar.title[4].name')
          }}
        </v-btn>
      </div>
    </NuxtLink>
  </div>

</template>

<style scoped>
/**
  * 指定页面时候，标题按钮固定颜色不变
  * 由default.global.ts全局路由守卫控制这两个样式
 */
.app-bar-div-select {
  @apply border-b-4 border-b-transparent border-b-[#786554];
}

/**
  * 正常效果
  * 由default.global.ts全局路由守卫控制这两个样式
 */
.app-bar-div {
  @apply border-b-4 border-b-transparent hover:border-b-[#786554] ;
}

.app-bar-btn {
  @apply text-base  text-[#413E3A]
}

.radio-input input {
  display: none;
}

</style>