<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const submitEmail = () => {
  console.log('Email submitted:', email.value)
}
</script>

<template>
  <v-app>
    <v-main class="bg-[#f8f9fa] text-[#212529]">
      <!-- Error Section -->
      <div class="w-full px-6 pt-[15vh]">
        <div class="max-w-6xl mx-auto flex items-start gap-6 pb-16 display-flex justify-center items-center">
          <img 
            :src="'https://www.couponchief.com/images/page-not-found.png'" 
            alt="Surprised face icon"
            class="w-[140px] h-[140px] object-contain"
          />
          <div class="pt-2">
            <h1 class="text-[#00BFB3] text-[52px] font-bold leading-tight">D'oh!</h1>
            <h2 class="text-[#6c757d] text-[32px] font-normal mb-2">Error 404 – Page not found</h2>
            <p class="text-[#343a40] text-xl">
              Please use search and navigation above to find great deals!
            </p>
          </div>
        </div>
      </div>

      <!-- Cards Section -->
      <div class="px-6 pb-16 display-flex justify-center items-center">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Got Deals Card -->
          <div class="bg-[#497a7a]  p-8 text-white">
            <h3 class="text-[28px] font-bold mb-4">Got deals? Get paid!</h3>
            <p class="mb-6">
              Join our <a href="#" class="underline hover:text-[#00BFB3] transition-colors">Pays-2-Share</a> program, upload offers and earn 2% of the sales from your coupons. We've already paid over $1,300,000 to our members - join up!
            </p>
            <button class="w-full bg-[#00BFB3] hover:bg-[#00a69b] transition-colors text-white py-3 px-6 rounded font-medium">
              LEARN MORE & JOIN FREE
            </button>
          </div>

          <!-- Email Signup Card -->
          <div class="bg-[#407165]  p-8 text-white">
            <h3 class="text-[28px] font-bold mb-4">Get top deals in your inbox</h3>
            <p class="mb-6">
              Get our most popular coupons <span class="underline">no more than once a week</span> and no spam.
            </p>
            <input 
              v-model="email"
              type="email"
              placeholder="Email address"
              class="w-full mb-4 px-4 py-3 rounded text-gray-800 border-0"
            />
            <button 
              @click="submitEmail"
              class="w-full bg-[#00BFB3] hover:bg-[#00a69b] transition-colors text-white py-3 px-6 rounded font-medium"
            >
              SIGN ME UP!
            </button>
          </div>

          <!-- Presidents Day Card -->
          <div class="relative  overflow-hidden h-[300px]">
            <div class="absolute inset-0 bg-black/40"></div>
            <img 
              alt="Presidents Day"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <h3 class="text-white text-[40px] font-bold text-center leading-tight mb-6">
                PRESIDENTS' DAY<br>DEALS
              </h3>
              <button class="bg-[#00BFB3] hover:bg-[#00a69b] transition-colors text-white py-3 px-12 rounded font-medium">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: #f8f9fa !important;
}

input::placeholder {
  color: #6c757d;
}

input:focus {
  outline: 2px solid #00BFB3;
  outline-offset: -2px;
}
</style>