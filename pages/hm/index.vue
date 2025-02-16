<script setup lang="ts">
import { ref, computed } from "vue"

const showModal = ref(false)
const currentDeal = ref({
    title: "",
    expiry: ""
})

interface Deal {
    discount: string
    title: string
    expiry: string
    type: "offer" | "code" | "promotion" | "printable"
}

const allDeals: Deal[] = [
    {
        discount: "80%",
        title: "Score Up to 80% Discount on Women's Tops",
        expiry: "Exp 2/17",
        type: "offer"
    },
    {
        discount: "75%",
        title: "Save Up to 75% on Women's Sale Section",
        expiry: "Exp 2/17",
        type: "code"
    },
    {
        discount: "75%",
        title: "Save Up to 75% on Select Women's Dresses",
        expiry: "Exp 2/17",
        type: "promotion"
    }
]

const activeTab = ref(0)
const tabs = [
    { title: "All Offers", count: "44", type: "all" },
    { title: "Coupon Codes", count: "14", type: "code" },
    { title: "Promotions", count: "8", type: "promotion" },
    { title: "Printables", count: "0", type: "printable" }
]

const filteredDeals = computed(() => {
    if (activeTab.value === 0) return allDeals
    return allDeals.filter(deal => deal.type === tabs[activeTab.value].type)
})

const openDealModal = (deal: Deal) => {
    currentDeal.value = deal
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}
</script>

<template>
    <v-app>
        <v-main class="bg-gray-50 w-[1200px] mx-auto mt-[70px]">
            <!-- 主容器 -->
            <div class="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-6">
                <!-- 头部区域 -->
                <div class="flex flex-col md:flex-row items-start justify-between gap-6">
                    <!-- 左侧Logo和标题 -->
                    <div class="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
                        <img src="https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/260/12404_sq_2.jpg" alt="H&M Logo" class="w-24 h-24 md:w-32 md:h-32 object-contain" />
                        <div class="flex-1">
                            <h1 class="text-2xl md:text-3xl font-bold mb-2">H&M Coupons | February 2025</h1>
                            <div class="flex gap-4 mb-2">
                                <span class="text-[#00BFB3]"><strong>44</strong> Coupons</span>
                                <span class="text-[#00BFB3]"><strong>$9</strong> Average savings</span>
                            </div>
                            <p class="text-gray-600 max-w-2xl text-sm md:text-base">
                                Hennes & Mauritz is one of the largest clothing retailer on the planet, and for good reason. For one, the company is all about sustainable fashion...
                                <a href="#" class="text-[#00BFB3]">more</a>
                            </p>
                        </div>
                    </div>

                    <!-- 右侧按钮组 -->
                    <div class="flex flex-col items-end gap-4 w-full md:w-auto">
                        <a href="https://hm.com" target="_blank" class="w-full md:w-auto text-center border border-gray-300 rounded px-6 py-2 hover:border-gray-400 transition-colors"> Shop HM.com </a>
                        <div class="flex gap-2">
                            <button class="w-10 h-10 rounded-full bg-[#00BFB3] text-white flex items-center justify-center">
                                <v-icon>mdi-facebook</v-icon>
                            </button>
                            <button class="w-10 h-10 rounded-full bg-[#00BFB3] text-white flex items-center justify-center">
                                <v-icon>mdi-twitter</v-icon>
                            </button>
                            <button class="w-10 h-10 rounded-full bg-[#00BFB3] text-white flex items-center justify-center">
                                <v-icon>mdi-pinterest</v-icon>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 主要内容区 -->
                <div class="mt-8">
                    <!-- Tabs导航 -->
                    <div class="flex overflow-x-auto hide-scrollbar border-b mb-6">
                        <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" class="whitespace-nowrap px-4 md:px-6 py-3 md:py-4 relative text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base" :class="activeTab === index ? 'text-[#00BFB3]' : ''">
                            {{ tab.title }}
                            <span class="ml-1 text-gray-400">{{ tab.count }}</span>
                            <div v-if="activeTab === index" class="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b37]"></div>
                        </button>
                    </div>

                    <!-- 内容区域 -->
                    <div class="grid md:grid-cols-12 gap-6">
                        <!-- 左侧优惠券列表 -->
                        <div class="md:col-span-8">
                            <div class="space-y-4">
                                <div v-for="(deal, index) in filteredDeals" :key="index" class="bg-white rounded-lg shadow-sm p-4 md:p-6">
                                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
                                            <div class="text-[#ff6b37] text-center md:text-left">
                                                <div class="text-sm">UP TO</div>
                                                <div class="text-3xl md:text-4xl font-bold">{{ deal.discount }}</div>
                                                <div class="text-lg md:text-xl">OFF</div>
                                            </div>
                                            <div>
                                                <h3 class="text-lg md:text-xl mb-2">{{ deal.title }}</h3>
                                                <button class="text-[#00BFB3] text-sm flex items-center gap-1">More details <v-icon small>mdi-chevron-down</v-icon></button>
                                            </div>
                                        </div>
                                        <div class="flex flex-col items-stretch md:items-end gap-2">
                                            <button @click="openDealModal(deal)" class="bg-[#00BFB3] text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-[#00a69b] transition-colors w-full md:w-auto text-sm md:text-base">GET DEAL</button>
                                            <button class="text-gray-500 text-xs md:text-sm flex items-center justify-center md:justify-end gap-1">
                                                <v-icon small>mdi-email-outline</v-icon>
                                                Send to my email
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 右侧固定内容 -->
                        <div class="md:col-span-4 space-y-6">
                            <!-- 提交优惠券区域 -->
                            <div class="bg-[#407165] text-white p-6 rounded-lg">
                                <h2 class="text-lg md:text-xl font-semibold mb-4">Have a great HM coupon code we are missing? Share it with your fellow Bargain Hunters!</h2>
                                <button class="w-full bg-[#00BFB3] text-white py-2 md:py-3 rounded hover:bg-[#00a69b] transition-colors text-sm md:text-base">SUBMIT A COUPON</button>
                            </div>

                            <!-- 评分区域 -->
                            <div class="bg-white p-6 rounded-lg text-center">
                                <h2 class="text-lg md:text-xl font-semibold mb-4">What would you rate HM.com?</h2>
                                <div class="flex justify-center gap-1 mb-2">
                                    <v-icon v-for="i in 5" :key="i" color="amber" size="large"> mdi-star </v-icon>
                                </div>
                                <p class="text-gray-500 text-sm">from 2 users</p>
                            </div>

                            <!-- 相关商店 -->
                            <div class="bg-white p-6 rounded-lg">
                                <h2 class="text-lg md:text-xl font-semibold mb-4">Save at Related Stores</h2>
                                <div class="flex items-center justify-between py-2 border-b">
                                    <span class="text-sm md:text-base">Target</span>
                                    <span class="text-gray-500 text-sm">15 Coupons</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Only showing the updated modal section -->

            <v-dialog v-model="showModal" max-width="700px" class="mx-4">
                <div class="bg-white p-6">
                    <!-- Modal Header -->
                    <div class="flex justify-between items-start mb-8">
                        <div class="flex items-start gap-4">
                            <img src="https://th.couponchief.net/images/logos/12404_sq_2/HM-Promo-Codes.jpg" alt="H&M Logo" class="w-16 h-16 object-contain rounded" />
                            <div class="pt-1">
                                <div class="flex items-center gap-2">
                                    <h2 class="text-xl font-bold">{{ currentDeal.title }}</h2>
                                    <span class="text-gray-400 text-sm">{{ currentDeal.expiry }}</span>
                                </div>
                            </div>
                        </div>
                        <button @click="closeModal" class="text-gray-400 hover:text-gray-600 p-1">
                            <v-icon>mdi-close</v-icon>
                        </button>
                    </div>

                    <!-- Modal Content -->
                    <div class="text-center mb-8">
                        <h3 class="text-2xl mb-8 font-normal">No coupon code required</h3>
                        <a href="https://hm.com" target="_blank" class="bg-[#00BFB3] text-white px-8 py-3 rounded inline-block hover:bg-[#00a69b] transition-colors text-base font-normal"> Shop HM.com </a>
                    </div>

                    <!-- Feedback Section -->
                    <div class="text-center text-gray-600 mb-8">
                        and let us know if
                        <button class="text-[#00BFB3] hover:underline mx-1">it worked <span class="text-xl">☺</span></button>
                        or
                        <button class="text-[#00BFB3] hover:underline mx-1">didn't work <span class="text-xl">☹</span></button>
                    </div>

                    <!-- Newsletter Signup Section -->
                    <div class="bg-[#4CAF50] -mx-6 -mb-6 p-8 rounded-b-lg text-white text-center">
                        <h3 class="text-2xl font-normal mb-4">Receive awesome deals like these in your inbox, free!</h3>
                        <p class="mb-6">
                            Get our most popular coupons
                            <span class="underline">no more than once a week</span>
                            and no spam.
                        </p>
                        <div class="flex gap-3">
                            <input type="email" placeholder="Email address" class="flex-1 px-4 py-3 border-0 focus:ring-2 focus:ring-[#00BFB3]" />
                            <button class="bg-[#2E7D32] text-white px-6 py-3 rounded hover:bg-[#1B5E20] transition-colors whitespace-nowrap">SIGN ME UP!</button>
                        </div>
                    </div>
                </div>
            </v-dialog>
        </v-main>
    </v-app>
</template>

<style scoped>
.v-application {
    background-color: #f8f9fa !important;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

@media (max-width: 768px) {
    .v-dialog {
        margin: 16px !important;
    }
}
</style>
