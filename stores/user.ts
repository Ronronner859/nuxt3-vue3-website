import {ref} from "vue/dist/vue";

// @ts-ignore
export const useUserPinia = defineStore('user', {
    state: () => ({
        token: undefined,
        /**
         * 常量 星级：5
         */
        rating_five: 5,
        /**
         * 是否显示抽屉 ，默认false
         */
        drawer:false,
    }),
    getters: {
        getToken: state => state.token,
    },
    actions: {
        setToken(value: any) {
            this.token = value
        },
    },
    persist: [
        {
            paths: [],
            storage: persistedState.localStorage,
        },
        {
            paths: ['token', 'nanoid'],
            storage: persistedState.cookiesWithOptions({maxAge: 99}),
        },
    ],
})
