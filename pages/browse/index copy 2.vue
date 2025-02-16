<script setup lang="ts">
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
  { icon: '👶', title: 'Babies & Kids' },
  { icon: '🍽️', title: 'Food & Restaurant' },
  { icon: '🔧', title: 'Office Supplies' },
  { icon: '🛠️', title: 'Tools & Hardware' },
  { icon: '📚', title: 'Books & Magazines' },
  { icon: '🎁', title: 'Gifts & Flowers' },
  { icon: '🏕️', title: 'Outdoors' },
  { icon: '🎮', title: 'Toys & Games' },
  { icon: '💻', title: 'Computers & Electronics' },
  { icon: '💄', title: 'Health & Beauty' },
  { icon: '🎈', title: 'Party Supplies' },
  { icon: '🧳', title: 'Travel & Luggage' }
]

const stores = [
  { name: 'Office Depot', logo: 'https://logo.clearbit.com/officedepot.com' },
  { name: 'Finish Line', logo: 'https://logo.clearbit.com/finishline.com' },
  { name: 'American Eagle', logo: 'https://logo.clearbit.com/ae.com' },
  { name: 'Zappos', logo: 'https://logo.clearbit.com/zappos.com' },
  { name: 'Southwest', logo: 'https://logo.clearbit.com/southwest.com' },
  { name: 'Sephora', logo: 'https://logo.clearbit.com/sephora.com' },
  { name: 'Overstock', logo: 'https://logo.clearbit.com/overstock.com' },
  { name: 'FedEx Office', logo: 'https://logo.clearbit.com/fedex.com' },
  { name: 'Foot Locker', logo: 'https://logo.clearbit.com/footlocker.com' },
  { name: 'Vistaprint', logo: 'https://logo.clearbit.com/vistaprint.com' },
  { name: 'The Children\'s Place', logo: 'https://logo.clearbit.com/childrensplace.com' },
  { name: 'H&M', logo: 'https://logo.clearbit.com/hm.com' },
  { name: 'Famous Footwear', logo: 'https://logo.clearbit.com/famousfootwear.com' },
  { name: 'Advance Auto Parts', logo: 'https://logo.clearbit.com/advanceautoparts.com' }
]
</script>

<template>
  <v-app>
    <!-- Hero Section -->
    <div class="bg-[#00BFB3] text-white">
      <div class="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Discover great coupons
          </h1>
          <p class="text-xl opacity-90">
            Browse 118,090 offers from 53,241 stores
          </p>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
          <a 
            v-for="category in categories" 
            :key="category.title"
            href="#"
            class="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-colors group"
          >
            <span class="text-2xl group-hover:scale-110 transition-transform">
              {{ category.icon }}
            </span>
            <span class="text-sm text-center whitespace-nowrap">
              {{ category.title }}
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- Popular Stores Section -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-gray-900">
          Browse Popular Stores
        </h2>
        <a 
          href="#" 
          class="text-[#00BFB3] hover:underline"
        >
          View more stores
        </a>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <a 
          v-for="store in stores" 
          :key="store.name"
          href="#"
          class="aspect-[4/3] p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white flex items-center justify-center group"
        >
          <img 
            :src="store.logo" 
            :alt="store.name"
            class="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: #f8f9fa !important;
}

@media (max-width: 640px) {
  .v-application {
    padding: 0;
  }
}
</style>