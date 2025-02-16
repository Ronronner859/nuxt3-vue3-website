<script setup lang="ts">
const categories = [
    { icon: "⭐", title: "Presidents' Day" },
    { icon: "✂️", title: "Craft & Hobby" },
    { icon: "🏠", title: "House & Home" },
    { icon: "🐾", title: "Pet Supplies" },
    { icon: "👕", title: "Apparel" },
    { icon: "💪", title: "Diet & Fitness" },
    { icon: "💍", title: "Jewelry" },
    { icon: "📚", title: "School Supplies" },
    { icon: "🚗", title: "Automotive" },
    { icon: "💰", title: "Financial" },
    { icon: "🎬", title: "Movies, Music & Events" },
    { icon: "⚽", title: "Sporting Goods" },
    { icon: "👶", title: "Babies & Kids" },
    { icon: "🍽️", title: "Food & Restaurant" },
    { icon: "🔧", title: "Office Supplies" },
    { icon: "🛠️", title: "Tools & Hardware" },
    { icon: "📚", title: "Books & Magazines" },
    { icon: "🎁", title: "Gifts & Flowers" },
    { icon: "🏕️", title: "Outdoors" },
    { icon: "🎮", title: "Toys & Games" },
    { icon: "💻", title: "Computers & Electronics" },
    { icon: "💄", title: "Health & Beauty" },
    { icon: "🎈", title: "Party Supplies" },
    { icon: "🧳", title: "Travel & Luggage" }
]

const stores = [
    { name: "Office Depot", logo: "https://logo.clearbit.com/officedepot.com" },
    { name: "Finish Line", logo: "https://logo.clearbit.com/finishline.com" },
    { name: "American Eagle", logo: "https://logo.clearbit.com/ae.com" },
    { name: "Zappos", logo: "https://logo.clearbit.com/zappos.com" },
    { name: "Southwest", logo: "https://logo.clearbit.com/southwest.com" },
    { name: "Sephora", logo: "https://logo.clearbit.com/sephora.com" },
    { name: "Overstock", logo: "https://logo.clearbit.com/overstock.com" },
    { name: "FedEx Office", logo: "https://logo.clearbit.com/fedex.com" },
    { name: "Foot Locker", logo: "https://logo.clearbit.com/footlocker.com" },
    { name: "Vistaprint", logo: "https://logo.clearbit.com/vistaprint.com" },
    { name: "The Children's Place", logo: "https://logo.clearbit.com/childrensplace.com" },
    { name: "H&M", logo: "https://logo.clearbit.com/hm.com" },
    { name: "Famous Footwear", logo: "https://logo.clearbit.com/famousfootwear.com" },
    { name: "Advance Auto Parts", logo: "https://logo.clearbit.com/advanceautoparts.com" }
]

// Split categories into 4 columns
const categoriesPerColumn = Math.ceil(categories.length / 4)
const categoryColumns = Array.from({ length: 4 }, (_, i) => categories.slice(i * categoriesPerColumn, (i + 1) * categoriesPerColumn))

const activeTab = ref(0)
const tabs = [
    { title: "Today's Top Offers", active: true },
    { title: "Just Added", active: false },
    { title: "Ending Soon", active: false }
]

const offers = [
    {
        title: "Get 20% Off $80+ Orders!",
        logo: "https://logo.clearbit.com/ediblearrangements.com",
        store: "Edible Arrangements",
        code: "SAVE20",
        moreLink: "More Edible Arrangements offers"
    },
    {
        title: "$80 off Print Orders of $250 or More.",
        logo: "https://logo.clearbit.com/staples.com",
        store: "Staples",
        code: "PRINT80",
        moreLink: "More Staples offers"
    },
    {
        title: "Extra 15% Off Your Order",
        logo: "https://logo.clearbit.com/kohls.com",
        store: "Kohls",
        code: "EXTRA15",
        moreLink: "More Kohls offers"
    },
    {
        title: "Get $10 Off $20+ on First Order! (exclusions may apply) Valid - Posted on Website!",
        logo: "https://logo.clearbit.com/hsn.com",
        store: "HSN",
        code: "HSN25",
        moreLink: "More Home Shopping Network offers"
    },
    {
        title: "Get 20% Off Sitewide!",
        logo: "https://logo.clearbit.com/ugreen.com",
        store: "UGREEN",
        code: "GREEN20",
        moreLink: "More UGREEN offers"
    },
    {
        title: "Get 20% Off Sitewide!! (excludes battery services)",
        logo: "https://logo.clearbit.com/valvoline.com",
        store: "Valvoline",
        code: "VAL20",
        moreLink: "More Valvoline.com offers"
    }
]
</script>

<template>
    <v-app>
        <!-- Hero Section -->
        <div class="bg-[#00BFB3] text-white mt-16">
            <div class="max-w-7xl mx-auto px-4 py-12">
                <div class="text-center mb-12">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover great coupons</h1>
                    <p class="text-xl opacity-90">Browse 118,090 offers from 53,241 stores</p>
                </div>

                <!-- Categories using Flex Layout -->
                <div class="flex flex-wrap md:flex-nowrap justify-center gap-8 max-w-6xl mx-auto">
                    <div v-for="(column, columnIndex) in categoryColumns" :key="columnIndex" class="flex-1 min-w-[200px]">
                        <div class="flex flex-col gap-4">
                            <a v-for="category in column" :key="category.title" href="#" class="flex items-center gap-3 hover:bg-white/10 rounded-lg p-2 transition-colors group">
                                <span class="text-2xl group-hover:scale-110 transition-transform w-8 text-center">
                                    {{ category.icon }}
                                </span>
                                <span class="text-sm whitespace-nowrap">
                                    {{ category.title }}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Popular Stores Section -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold text-gray-900">Browse Popular Stores</h2>
                <a href="#" class="text-[#00BFB3] hover:underline"> View more stores </a>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <a v-for="store in stores" :key="store.name" href="#" class="aspect-[4/3] p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white flex items-center justify-center group">
                    <img :src="store.logo" :alt="store.name" class="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
                </a>
            </div>
        </div>

        <!-- Offers Section with Tabs -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <!-- Tab Navigation -->
            <div class="flex border-b mb-8">
                <button v-for="(tab, index) in tabs" :key="tab.title" @click="activeTab = index" class="px-8 py-4 text-lg relative transition-colors" :class="activeTab === index ? 'text-gray-900 font-medium' : 'text-gray-400'">
                    {{ tab.title }}
                    <div v-if="activeTab === index" class="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b37]"></div>
                </button>
            </div>

            <!-- Offers Grid -->
            <div class="grid md:grid-cols-2 gap-6">
                <div v-for="offer in offers" :key="offer.title" class="bg-white rounded-lg shadow-sm p-6">
                    <div class="flex justify-between items-start gap-4">
                        <div class="flex-1">
                            <h3 class="text-xl mb-4 font-normal">{{ offer.title }}</h3>
                            <div class="flex items-center justify-between">
                                <button class="bg-[#00BFB3] text-white px-6 py-3 rounded hover:bg-[#00a69b] transition-colors relative group">
                                    GET PROMO CODE
                                    <div class="absolute right-0 top-0 bottom-0 w-8 bg-[#00a69b] flex items-center justify-center rounded-r">
                                        {{ offer.code }}
                                    </div>
                                </button>
                            </div>
                        </div>
                        <img :src="offer.logo" :alt="offer.store" class="w-16 h-16 object-contain" />
                    </div>
                    <div class="mt-4 text-right">
                        <a href="#" class="text-[#00BFB3] hover:underline text-sm">
                            {{ offer.moreLink }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
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

.shadow-sm {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
    .px-8 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
