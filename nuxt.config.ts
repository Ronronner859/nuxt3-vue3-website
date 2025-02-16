import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    //是否构建ssr
    ssr: true,
    build: {
        transpile: ['vuetify'],
    },
    css: [
        '~/assets/css/global.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        //...
    ],
    i18n: {
        strategy: 'no_prefix', // 添加路由前缀的方式
        locales: ["en", "zh"], //配置语种
        defaultLocale: 'zh', // 默认语种
        vueI18n: './i18n/config.ts', // 通过vueI18n配置
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            }
            ,
        }
        ,
    }
    ,
})
