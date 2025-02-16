<script setup lang="ts">
import { ref } from "vue"

// Store logos data - replace URLs with actual logo URLs later
const storeLogos = [
    // Row 1
    { name: "Kohl's", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2185_sq_3.jpg" },
    { name: "Michaels", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/13162_sq_3.jpg" },
    { name: "JCPenney", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2041_sq_3.jpg" },
    { name: "Target", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2041_sq_3.jpg" },
    { name: "Macy's", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2485_sq_2.jpg" },
    { name: "JOANN", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2660_sq_2.jpg" },
    { name: "Bath & Body Works", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/1964_sq_1.jpg" },
    // Row 2
    { name: "Victoria's Secret", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/3723_sq_2.jpg" },
    { name: "Old Navy", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/3441_sq_3.jpg" },
    { name: "Lowe's", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2588_sq_1.jpg" },
    { name: "Staples", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/4287_sq_5.jpg" },
    { name: "Amazon", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2638_sq_5.jpg" },
    { name: "Home Depot", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2673_sq_3.jpg" },
    { name: "Walgreens", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/1894_sq_9.jpg" },
    // Row 3
    { name: "Walmart", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/3941_sq_1.jpg" },
    { name: "ULTA", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2511_sq_1.jpg" },
    { name: "Mint", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/1972_sq.jpg" },
    { name: "Dick's", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2611_sq_2.jpg" },
    { name: "Shutterfly", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2619_sq_3.jpg" },
    { name: "Enterprise", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2078_sq_4.jpg" },
    { name: "Best Buy", logo: "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/130/2536_sq_1.jpg" }
]

const searchQuery = ref("")
</script>

<template>
    <div class="bg-white min-h-screen mt-16">
        <!-- Hero Section -->
        <div class="max-w-[1200px] mx-auto px-4 pt-6 md:pt-8 pb-8 md:pb-12">
            <!-- Main Heading -->
            <div class="text-center mb-8 md:mb-12">
                <p class="deal text-[32px] md:text-[42px] font-bold text-[#333] mb-3 md:mb-4 leading-tight">We have a deal for you!</p>
                <!-- <p class="stores text-[#666] text-base md:text-lg px-2 md:px-0">
                        With <span class="text-[#FF6B35] font-bold">118,771 offers</span> from <span class="text-[#FF6B35] font-bold">53,224 stores</span>, we have a coupon to save you an average of <span class="text-[#FF6B35] font-bold">$21</span> on your next purchase
                    </p> -->
            </div>

            <div class="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
                <p class="stores text-[#666] text-base md:text-lg px-2 md:px-0">
                    With <span class="text-[#FF6B35] font-bold">118,771 offers</span> from <span class="text-[#FF6B35] font-bold">53,224 stores</span>, we have a coupon to save you an average of <span class="text-[#FF6B35] font-bold">$21</span> on your next purchase
                </p>
            </div>

            <!-- Search Section -->
            <div class="bg-[#00A7B3] rounded-lg overflow-hidden mb-6 md:mb-8">
                <!-- Desktop Version -->
                <div class="hidden md:flex p-6 items-center gap-4">
                    <div class="text-white text-xl font-medium whitespace-nowrap">
                        Find your store<br />
                        and start saving!
                    </div>

                    <div class="flex-grow max-w-3xl">
                        <div class="relative">
                            <v-text-field v-model="searchQuery" placeholder="Search stores" variant="outlined" bg-color="white" hide-details density="comfortable" class="search-field">
                                <template v-slot:append>
                                    <v-btn color="grey-darken-1" icon="mdi-magnify" size="large"></v-btn>
                                </template>
                            </v-text-field>
                        </div>
                        <div class="text-white/80 text-sm mt-2">e.g. Party City, Barnes and Noble, Payless Shoes, Forever 21, Edible Arrangements, etc.</div>
                    </div>

                    <div class="text-white text-center whitespace-nowrap">
                        Over 4,000 coupons<br />
                        added daily!
                    </div>
                </div>

                <!-- Mobile Version -->
                <div class="md:hidden p-4">
                    <v-text-field v-model="searchQuery" placeholder="Search stores" variant="outlined" bg-color="white" hide-details density="comfortable" class="mobile-search-field">
                        <template v-slot:append>
                            <v-btn color="grey-darken-1" icon="mdi-magnify" size="large"></v-btn>
                        </template>
                    </v-text-field>
                </div>
            </div>

            <!-- Store Logos Grid -->
            <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
                <div v-for="store in storeLogos" :key="store.name" class="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-100">
                    <div class="aspect-square md:aspect-[3/2] flex items-center justify-center p-2 md:p-0">
                        <v-img :src="store.logo" :alt="store.name" contain class="max-h-[60px] md:max-h-[45px]"></v-img>
                    </div>
                </div>
            </div>
            <div class="max-w-[1200px] mx-auto px-4 py-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Get Paid Card -->
                    <div class="bg-[#3D7B80] text-white p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-4">Got deals? Get paid!</h2>
                        <p class="mb-4">Join our <span class="underline">Pays-2-Share</span> program, upload offers and earn 2% of the sales from your coupons. We've already paid over $1,300,000 to our members - join up!</p>
                        <button class="w-full bg-[#00A7B3] text-white py-3 rounded-md hover:bg-[#008C96] transition-colors">LEARN MORE & JOIN FREE</button>
                    </div>

                    <!-- Email Signup Card -->
                    <div class="bg-[#2B6846] text-white p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-4">Get top deals in your inbox</h2>
                        <p class="mb-4">Get our most popular coupons <span class="underline">no more than once a week</span> and no spam.</p>
                        <input type="email" placeholder="Email address" class="w-full px-4 py-3 mb-4 rounded-md text-gray-800" />
                        <button class="w-full bg-[#2B8546] text-white py-3 rounded-md hover:bg-[#236D3A] transition-colors">SIGN ME UP!</button>
                    </div>

                    <!-- Valentine's Day Card -->
                    <div class="relative bg-gradient-to-r from-red-700 to-red-800 text-white p-6 rounded-lg flex flex-col items-center justify-center min-h-[200px] shop-home" style="background-image: url('path-to-valentine-bg.jpg'); background-size: cover">
                        <h2 class="text-3xl font-bold mb-4 text-center">VALENTINE'S DAY DEALS</h2>
                        <button class="bg-[#00A7B3] text-white px-8 py-3 rounded-md hover:bg-[#008C96] transition-colors">SHOP NOW</button>
                    </div>
                </div>
            </div>

            <!-- Popular Offers Section -->
            <div class="max-w-[1200px] mx-auto px-4">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Today's Popular Offers</h2>
                    <a href="#" class="text-[#00A7B3] hover:underline">More popular coupons</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Offer Card 1 -->
                    <div class="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold mb-2">$80 off Print Orders of $250 or More.</h3>
                            <div class="flex justify-between items-center">
                                <button class="bg-[#00A7B3] text-white px-4 py-2 rounded-md hover:bg-[#008C96] transition-colors flex items-center">
                                    GET PROMO CODE
                                    <span class="ml-2 bg-white text-[#00A7B3] px-2 rounded">0</span>
                                </button>
                                <!-- <img src="/placeholder-staples-logo.png" alt="Staples" class="h-8"> -->
                            </div>
                            <a href="#" class="text-[#00A7B3] text-sm hover:underline mt-2 block">More Staples offers</a>
                        </div>
                    </div>

                    <!-- Offer Card 2 -->
                    <div class="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold mb-2">Valentines Day Sale - save up to 25% + FREE delivery</h3>
                            <div class="flex justify-between items-center">
                                <button class="bg-[#00A7B3] text-white px-4 py-2 rounded-md hover:bg-[#008C96] transition-colors flex items-center">
                                    GET PROMO CODE
                                    <span class="ml-2 bg-white text-[#00A7B3] px-2 rounded">5</span>
                                </button>
                                <!-- <img src="/placeholder-edible-logo.png" alt="Edible Arrangements" class="h-8"> -->
                            </div>
                            <a href="#" class="text-[#00A7B3] text-sm hover:underline mt-2 block">More Edible Arrangements offers</a>
                        </div>
                    </div>

                    <!-- Offer Card 2 -->
                    <div class="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold mb-2">Valentines Day Sale - save up to 25% + FREE delivery</h3>
                            <div class="flex justify-between items-center">
                                <button class="bg-[#00A7B3] text-white px-4 py-2 rounded-md hover:bg-[#008C96] transition-colors flex items-center">
                                    GET PROMO CODE
                                    <span class="ml-2 bg-white text-[#00A7B3] px-2 rounded">5</span>
                                </button>
                                <!-- <img src="/placeholder-edible-logo.png" alt="Edible Arrangements" class="h-8"> -->
                            </div>
                            <a href="#" class="text-[#00A7B3] text-sm hover:underline mt-2 block">More Edible Arrangements offers</a>
                        </div>
                    </div>

                    <!-- Offer Card 2 -->
                    <div class="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold mb-2">Valentines Day Sale - save up to 25% + FREE delivery</h3>
                            <div class="flex justify-between items-center">
                                <button class="bg-[#00A7B3] text-white px-4 py-2 rounded-md hover:bg-[#008C96] transition-colors flex items-center">
                                    GET PROMO CODE
                                    <span class="ml-2 bg-white text-[#00A7B3] px-2 rounded">5</span>
                                </button>
                                <!-- <img src="/placeholder-edible-logo.png" alt="Edible Arrangements" class="h-8"> -->
                            </div>
                            <a href="#" class="text-[#00A7B3] text-sm hover:underline mt-2 block">More Edible Arrangements offers</a>
                        </div>
                    </div>

                    <!-- Offer Card 2 -->
                    <div class="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold mb-2">Valentines Day Sale - save up to 25% + FREE delivery</h3>
                            <div class="flex justify-between items-center">
                                <button class="bg-[#00A7B3] text-white px-4 py-2 rounded-md hover:bg-[#008C96] transition-colors flex items-center">
                                    GET PROMO CODE
                                    <span class="ml-2 bg-white text-[#00A7B3] px-2 rounded">5</span>
                                </button>
                                <!-- <img src="/placeholder-edible-logo.png" alt="Edible Arrangements" class="h-8"> -->
                            </div>
                            <a href="#" class="text-[#00A7B3] text-sm hover:underline mt-2 block">More Edible Arrangements offers</a>
                        </div>
                    </div>

                    <!-- Offer Card 2 -->
                    <div class="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold mb-2">Valentines Day Sale - save up to 25% + FREE delivery</h3>
                            <div class="flex justify-between items-center">
                                <button class="bg-[#00A7B3] text-white px-4 py-2 rounded-md hover:bg-[#008C96] transition-colors flex items-center">
                                    GET PROMO CODE
                                    <span class="ml-2 bg-white text-[#00A7B3] px-2 rounded">5</span>
                                </button>
                                <!-- <img src="/placeholder-edible-logo.png" alt="Edible Arrangements" class="h-8"> -->
                            </div>
                            <a href="#" class="text-[#00A7B3] text-sm hover:underline mt-2 block">More Edible Arrangements offers</a>
                        </div>
                    </div>

                    <!-- Additional offer cards follow the same pattern -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:deep(.v-field__input) {
    padding: 12px !important;
    font-size: 16px !important;
}

:deep(.search-field) {
    .v-field__input {
        @media (max-width: 768px) {
            height: 48px !important;
        }
    }
}

:deep(.search-button) {
    @media (max-width: 768px) {
        width: 48px !important;
        height: 48px !important;
        margin-right: -8px;
    }
}

:deep(.v-text-field) {
    border-radius: 8px;
    overflow: hidden;
}

/* Mobile-specific adjustments */
@media (max-width: 768px) {
    .grid {
        gap: 12px;
    }

    .promotional-cards {
        margin-bottom: 1.5rem;
    }

    .offer-card {
        padding: 1rem;
    }
    .deal {
        font-size: 28px;
    }
    .stores {
        font-size: 14px;
    }
    .store-logo-container {
        margin-bottom: 0.5rem;
    }

    .store-logo {
        height: 48px;
    }

    .offer-card h3 {
        font-size: 16px;
    }

    .offer-card button {
        font-size: 14px;
        padding: 0.5rem 1rem;
    }

    .offer-card .store-logo-container {
        margin-bottom: 0.5rem;
    }

    .offer-card .store-logo {
        height: 32px;
    }
}
/* >768px */
@media (min-width: 768px) and (max-width: 1600px) {
    .deal {
        font-size: 72px;
    }
    .stores {
        font-size: 26px;
        color: #5c5d66;
        line-height: 34px;
    }
}

/* Ensure proper spacing and sizing */
.store-logo-container {
    transition: all 0.2s ease;
}

.store-logo-container:hover {
    transform: translateY(-2px);
}

/* Improved button styles */
button {
    font-weight: 500;
    transition: all 0.2s;
    height: 44px;

    @media (max-width: 768px) {
        height: 48px;
    }
}

/* Custom shadow effects */
.shadow-sm {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
}

.shop-home {
    background-image: url("https://43ee169c0acf5ae8f01c-5d485ab1e4501e3434113…f2.rackcdn.com/presidents-day-coupons-deals-h.jpg");
}
</style>
