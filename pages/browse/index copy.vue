<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)
const tabs = [
  { title: 'Today\'s Top Offers', active: true },
  { title: 'Just Added', active: false },
  { title: 'Ending Soon', active: false }
]

const categories = [
  { icon: '⭐', title: 'Presidents\' Day' },
  { icon: '✂️', title: 'Craft & Hobby' },
  { icon: '🏠', title: 'House & Home' },
  { icon: '🐾', title: 'Pet Supplies' },
  { icon: '👕', title: 'Apparel' },
  { icon: '💪', title: 'Diet & Fitness' },
  { icon: '💍', title: 'Jewelry' },
  { icon: '📚', title: 'School Supplies' },
  { icon: '🚗', title: 'Automotive' },
  { icon: '💰', title: 'Financial' },
  { icon: '🎬', title: 'Movies, Music & Events' },
  { icon: '⚽', title: 'Sporting Goods' },
  // Add remaining categories...
]

const stores = [
  { name: 'Office Depot', logo: '/placeholder.svg' },
  { name: 'Finish Line', logo: '/placeholder.svg' },
  { name: 'American Eagle', logo: '/placeholder.svg' },
  { name: 'Zappos', logo: '/placeholder.svg' },
  { name: 'Southwest', logo: '/placeholder.svg' },
  { name: 'Sephora', logo: '/placeholder.svg' },
  { name: 'Overstock', logo: '/placeholder.svg' },
  // Add remaining stores...
]

const offers = [
  {
    title: 'Get 20% Off $80+ Orders!',
    store: 'Edible Arrangements',
    logo: '/placeholder.svg',
    code: 'SAVE20'
  },
  {
    title: '$80 off Print Orders of $250 or More.',
    store: 'Staples',
    logo: '/placeholder.svg',
    code: 'PRINT80'
  },
  // Add remaining offers...
]

const emailAddress = ref('')
</script>

<template>
  <v-app>
    <!-- Hero Section -->
    <div class="bg-[#00BFB3] text-white py-12 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover great coupons</h1>
        <p class="text-xl mb-12">Browse 118,090 offers from 53,241 stores</p>
        
        <!-- Categories Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center max-w-6xl mx-auto">
          <a 
            v-for="category in categories" 
            :key="category.title"
            href="#"
            class="flex flex-col items-center gap-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <span class="text-2xl">{{ category.icon }}</span>
            <span class="text-sm">{{ category.title }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Popular Stores Section -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold">Browse Popular Stores</h2>
        <a href="#" class="text-[#00BFB3]">View more stores</a>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <a 
          v-for="store in stores" 
          :key="store.name"
          href="#"
          class="p-4 border rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center"
        >
          <img :src="store.logo" :alt="store.name" class="h-12 object-contain" />
        </a>
      </div>
    </div>

    <!-- Offers Section -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Tabs -->
      <div class="flex border-b mb-8">
        <button 
          v-for="(tab, index) in tabs" 
          :key="tab.title"
          @click="activeTab = index"
          class="px-6 py-4 relative"
          :class="activeTab === index ? 'text-gray-900' : 'text-gray-500'"
        >
          {{ tab.title }}
          <div 
            v-if="activeTab === index" 
            class="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b37]"
          ></div>
        </button>
      </div>

      <!-- Offers Grid -->
      <div class="grid md:grid-cols-2 gap-4">
        <div 
          v-for="offer in offers" 
          :key="offer.title"
          class="bg-white rounded-lg shadow-sm p-6"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl mb-4">{{ offer.title }}</h3>
              <button class="bg-[#00BFB3] text-white px-6 py-2 rounded hover:bg-[#00a69b] transition-colors">
                GET PROMO CODE
              </button>
            </div>
            <img :src="offer.logo" :alt="offer.store" class="w-16 h-16 object-contain" />
          </div>
          <div class="mt-4 text-right">
            <a :href="`#${offer.store}`" class="text-[#00BFB3] text-sm">
              More {{ offer.store }} offers
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <button class="bg-[#00BFB3] text-white px-8 py-3 rounded hover:bg-[#00a69b] transition-colors">
          SHOW MORE OFFERS
        </button>
      </div>
    </div>

    <!-- Promotional Cards -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Get Paid Card -->
        <div class="bg-[#407165] text-white p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Got deals? Get paid!</h3>
          <p class="mb-6">
            Join our Pays-2-Share program, upload offers and earn 2% of the sales from your coupons. 
            We've already paid over $1,300,000 to our members - join up!
          </p>
          <button class="w-full bg-[#00BFB3] text-white py-3 rounded hover:bg-[#00a69b] transition-colors">
            LEARN MORE & JOIN FREE
          </button>
        </div>

        <!-- Email Signup Card -->
        <div class="bg-[#407165] text-white p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Get top deals in your inbox</h3>
          <p class="mb-6">
            Get our most popular coupons no more than once a week and no spam.
          </p>
          <input 
            v-model="emailAddress"
            type="email"
            placeholder="Email address"
            class="w-full mb-4 px-4 py-3 rounded text-gray-800"
          />
          <button class="w-full bg-[#00BFB3] text-white py-3 rounded hover:bg-[#00a69b] transition-colors">
            SIGN ME UP!
          </button>
        </div>

        <!-- Presidents Day Card -->
        <div class="relative rounded-lg overflow-hidden">
          <img 
            alt="Presidents Day Deals"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
            <h3 class="text-4xl font-bold text-center mb-6">
              PRESIDENTS' DAY<br>DEALS
            </h3>
            <button class="bg-[#00BFB3] text-white px-8 py-3 rounded hover:bg-[#00a69b] transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="max-w-7xl mx-auto px-4 py-12">
      <div class="flex flex-wrap justify-between items-center gap-4">
        <nav class="flex flex-wrap gap-6">
          <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Pays-2-Share</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Stores</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">FAQ</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Help</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Advertise</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Accessibility</a>
        </nav>
        
        <div class="flex gap-4">
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <v-icon>mdi-twitter</v-icon>
          </a>
        </div>
      </div>

      <div class="mt-8 text-sm text-gray-500">
        <p>© 2025 CouponChief.com LLC. See our Terms of Use and Privacy Statement.</p>
        <p>CouponChief may receive a commission on purchases made through links on the website. 
          <a href="#" class="text-[#00BFB3]">Learn more</a>
        </p>
      </div>
    </footer>
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: #f8f9fa !important;
}

@media (max-width: 768px) {
  .v-application {
    padding: 0;
  }
}
</style>