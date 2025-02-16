/**
 *
 * 改变标题样式状态
 * @param path
 */
export const changeState = (path: string) => {

    const appBarStyle = useAppBarStyle();
    appBarStyle.value.shop = 'app-bar-div';
    appBarStyle.value.videos = 'app-bar-div';
    appBarStyle.value.ourStory = 'app-bar-div';
    appBarStyle.value.faq = 'app-bar-div';
    appBarStyle.value.contactUs = 'app-bar-div';
    // 进入对应的路由，对应的标题样式起作用
    switch (path) {
        case '/':
            appBarStyle.value.shop = 'app-bar-div-select';
            break;
        case '/videos':
            appBarStyle.value.videos = 'app-bar-div-select';
            break;
        case '/our-story':
            appBarStyle.value.ourStory = 'app-bar-div-select';
            break;
        case '/faq':
            appBarStyle.value.faq = 'app-bar-div-select';
            break;
        case '/contact-us':
            appBarStyle.value.contactUs = 'app-bar-div-select';
            break;
    }
}

/**
 * 顶部栏标题样式（默认）
 */
export const useAppBarStyle = () => useState<appBarStyle>('AppBarStyle', () => ({
    shop: 'app-bar-div',
    videos: 'app-bar-div',
    ourStory: 'app-bar-div',
    faq: 'app-bar-div',
    contactUs: 'app-bar-div'
}))

/**
 * 标题样式类
 * 标题样式1：app-bar-div
 * 标题样式2：app-bar-div-select     选中状态会固定不变
 */
interface appBarStyle {
    /**
     * shop标题
     */
    shop: string,
    /**
     * videos标题
     */
    videos: string,
    /**
     * ourStory标题
     */
    ourStory: string,
    /**
     * faq标题
     */
    faq: string,
    /**
     * contactUs标题
     */
    contactUs: string
}