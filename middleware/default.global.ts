// default.global.ts
// 全局路由守卫

export default function defineNuxtRouterMiddleware(to: any, from: any) {
    changeState(to.path);
    // console.log("==全局路由守卫====要去往的路径:" + to.path);
}