<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import logo from "@/assets/images/logo-2x.png"
const userStore = useUserPinia()
const { drawer } = storeToRefs(userStore)
const { locale, setLocale } = useI18n()
</script>

<template>
    <!-- 确定版心 -->
    <div class="header-container">
        <v-app-bar color="white" height="64" elevation="1">
            <div class="w-full d-flex justify-space-between align-center px-4 max-w-[1200px] mx-auto">
                <!-- Left: Logo -->
                <div class="logo-container">
                    <NuxtLink to="/" class="text-decoration-none">
                        <v-img class="w-[200px]" height="28" :src="logo"></v-img>
                    </NuxtLink>
                </div>

                <!-- Right: Navigation & Actions -->
                <div class="d-none d-md-flex align-center gap-4">
                    <!-- <v-btn 
            color="teal-lighten-2"
            variant="flat"
            class="rounded-pill text-capitalize px-4"
            height="36"
          >
            Valentine's Day
          </v-btn> -->

                    <div class="d-flex align-center gap-6 mx-4">
                        <v-btn variant="text" class="text-capitalize font-weight-regular browse">Browse</v-btn>
                        <!-- <v-btn variant="text" class="text-capitalize font-weight-regular">Submit</v-btn> -->
                        <!-- <v-btn variant="text" class="text-capitalize font-weight-regular">Resources</v-btn> -->
                    </div>

                    <div class="d-flex align-center gap-3">
                        <!-- <v-btn variant="text" class="text-capitalize font-weight-regular">Log in</v-btn> -->
                        <!-- <v-btn
              color="deep-orange"
              variant="flat"
              class="text-capitalize rounded-pill px-4"
              height="36"
            >
              Join Up
            </v-btn> -->
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <v-btn class="d-md-none" icon="mdi-menu" variant="text" @click.stop="drawer = !drawer"></v-btn>
            </div>
        </v-app-bar>

        <!-- Mobile Navigation Drawer -->
        <navigation-drawer v-if="drawer" />
    </div>
</template>

<style scoped>
.header-container {
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
}

:deep(.v-btn) {
    text-transform: none;
    letter-spacing: 0;
    font-size: 0.9rem;
}

:deep(.v-btn--variant-text) {
    color: #4a4a4a;
}

:deep(.v-btn--variant-flat) {
    font-weight: 500;
}
.browse {
    color: #333640;
    font-size: 15px;
    font-family: robotomedium, ​Arial, ​sans-serif;
    padding: 0 10px;
    text-align: center;
    line-height: 28px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
}
</style>
