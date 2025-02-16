// 本文件用于部署服务器时的启动文件，在本地开发环境可以删除
module.exports = {
    apps: [
        {
            name: 'shop_nuxt3',  //名称可以自定义
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './.output/server/index.mjs',
            port: '3000',
        }
    ]
}