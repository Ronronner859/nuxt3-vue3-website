<script setup lang="ts">
const categories = [
    ["Apparel", "Diet & Fitness", "Jewelry", "School Supplies"],
    ["Automotive", "Financial", "Movies, Music & Events", "Sporting Goods"],
    ["Babies & Kids", "Food & Restaurant", "Office Supplies", "Tools & Hardware"],
    ["Books & Magazines", "Gifts & Flowers", "Outdoors", "Toys & Games"],
    ["Computers & Electronics", "Health & Beauty", "Party Supplies", "Travel & Luggage"],
    ["Craft & Hobby", "House & Home", "Pet Supplies"]
]

const navLinks = [
    { text: "Home", href: "/" },
    { text: "Pays-2-Share", href: "/pays-2-share" },
    { text: "Stores", href: "/stores" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
    { text: "FAQ", href: "/faq" },
    { text: "Help", href: "/help" },
    { text: "Advertise", href: "/advertise" },
    { text: "Accessibility", href: "/accessibility" }
]
</script>

<template>
    <footer class="bg-white  pb-6">
        <div class="max-w-[1200px] mx-auto px-4">
            <!-- Happy Hunting Section -->
            <div class="mb-12">
                <h2 class="text-3xl font-bold text-[#333] mb-4">Happy Hunting!</h2>
                <p class="text-[#666] mb-4">
                    The best place to start hunting for any coupons you need is the search box above. But if you're not clear on where exactly you want to purchase your items, you can
                    <a href="/browse" class="text-[#00A7B3] hover:underline">browse coupon codes and deals by category</a>, or by going directly to one the categories below.
                </p>

                <!-- Categories Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                    <template v-for="(column, colIndex) in categories" :key="colIndex">
                        <div v-for="category in column" :key="category">
                            <a :href="`/category/${category.toLowerCase().replace(/\s+/g, '-')}`" class="text-[#00A7B3] hover:underline text-sm">
                                {{ category }}
                            </a>
                        </div>
                    </template>
                </div>
            </div>

            <!-- What are Coupon Codes Section -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-[#333] mb-4">What are Coupon Codes?</h2>
                <p class="text-[#666] mb-4">
                    Coupon codes, sometimes referred to as discount or promo codes, are a small string of letters and / or numbers used to help save you money for online purchases. Like the coupons we're all familiar with for grocery shopping, online coupons typically offer a much larger discount to
                    the total order value. In fact, our users typically save over $20 in just a few minutes browsing CouponChief.
                </p>
            </div>

            <!-- Why we're the best Section -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-[#333] mb-6">Why we're the best:</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="font-bold mb-2">Pays-2-Share:</h3>
                        <p class="text-[#666]">
                            We are the only coupon site that pays you for submitting the coupons you find. This program, along with a coupon-finding staff of over 20 people, ensures that our site is the most comprehensive resource for saving money you'll find online.
                            <a href="/signup" class="text-[#00A7B3] hover:underline">Sign up here</a>.
                        </p>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">Exclusive Coupons:</h3>
                        <p class="text-[#666]">We partner with thousands of retailers to offer you exclusive coupon codes for your next order. You can find these offers labeled with an "exclusive" flag throughout the site, so happy hunting!</p>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">Printable Coupons:</h3>
                        <p class="text-[#666]">
                            We've expanded our offering over the last few years to include printable coupons to the stores you love. The same huge discounts found online can now be had at your local shopping centers and malls. If you don't want to wait for that item to be delivered, take these
                            printed or mobile coupons right to the store.
                        </p>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">Our blog:</h3>
                        <p class="text-[#666]">
                            From timely articles about saving money for an upcoming holiday purchase, to the latest money saving or budgeting techniques, or organizing tips for extreme couponing, our blog brings you the latest how to articles for maximizing savings everywhere you go.
                        </p>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">Deal Alerts:</h3>
                        <p class="text-[#666]">Didn't quite find what your were looking for? Sign up for a deal alert to your favorite store, and as soon as we do find a great offer, we'll email you the details!</p>
                    </div>
                </div>
            </div>

            <p class="text-[#666] mb-12">We hope you end up saving as much money as we have over the years using this site, and if you have any feedback, let us know!</p>
            <p class="text-[#666] mb-12">-The CouponChief.com Team</p>

            <!-- Bottom Footer -->
            <div class="border-t pt-6">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <!-- Navigation Links -->
                    <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <a v-for="link in navLinks" :key="link.text" :href="link.href" class="text-[#666] hover:text-[#333] text-sm">
                            {{ link.text }}
                        </a>
                    </nav>

                    <!-- Social Media Icons -->
                    <div class="flex gap-4">
                        <a href="#" class="text-[#666] hover:text-[#333]">
                            <v-icon icon="mdi-facebook"></v-icon>
                        </a>
                        <a href="#" class="text-[#666] hover:text-[#333]">
                            <v-icon icon="mdi-twitter"></v-icon>
                        </a>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="mt-6 text-center text-sm text-[#666]">
                    <p class="mb-2">
                        © 2025 CouponChief.com LLC. See our
                        <a href="/terms" class="text-[#00A7B3] hover:underline">Terms of Use</a> and <a href="/privacy" class="text-[#00A7B3] hover:underline">Privacy Statement</a>.
                    </p>
                    <p>
                        CouponChief may receive a commission on purchases made through links on the website.
                        <a href="/learn-more" class="text-[#00A7B3] hover:underline">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Ensure consistent link colors */
a {
    transition: all 0.2s;
}

/* Responsive typography */
@media (max-width: 640px) {
    h2 {
        font-size: 1.5rem;
    }

    .text-sm {
        font-size: 0.8125rem;
    }
}

/* Ensure proper spacing in grid items */
.grid > div {
    padding: 0.25rem 0;
}
</style>
