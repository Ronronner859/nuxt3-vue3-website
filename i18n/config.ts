import en from "assets/lang/en_us.json";
import zh from "assets/lang/zh_cn.json";
export default defineI18nConfig(() => ({
    legacy: false,  // 是否兼容之前
    fallbackLocale: 'en',  // 区配不到的语言就用en
    messages: {
        en,
        zh
    }
}))
