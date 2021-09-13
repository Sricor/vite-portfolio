<script setup>
// 数据传递
/*import { ref } from 'vue'
defineProps({
  msg: String
})
<HelloWorld msg="Hello Vue 3 + Vite" />
*/

import { useRouter } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'chota' //css
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'



const router = useRouter()

// 进度条设置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

// 路由钩子
router.beforeEach((to, from, next) => {
  NProgress.start()  // 每次切换页面时，调用进度条
  next()  // 页面跳转
})
router.afterEach(() => {
  window.scrollTo(0,0)  // 回到顶部
  NProgress.done()  // 在即将进入新的页面组件前，关闭掉进度条
})

</script>

<template lang="pug">
Navbar
router-view
Footer
</template>


<style>
:root {
  --primary-color: #28a386;
  --font-family: sans-serif, system-ui
}

body {
  color: #333;
  background-color: #fff;
  letter-spacing: -.1px;
  font-weight: 400;
  font-kerning: normal;
  -moz-font-feature-settings: "kern"1;
  -webkit-font-feature-settings: "kern"1;
  font-feature-settings: "kern"1
}

/*   Scrollbar */
body::-webkit-scrollbar{
      width:10px;
      height:10px;
    }
body::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
body::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
body::-webkit-scrollbar-thumb:hover{
  background: #333;
}
body::-webkit-scrollbar-corner{
  background: #179a16;
}


#nprogress .bar {
  background-color: var(--color-primary);
}

.container {
  width: 90%
}

a {
  transition: color .2s ease;
  cursor: pointer;
}

a.no-hover-effect:hover {
  opacity: 1
}

hr {
  width: 100px;
  margin: 10px auto;
  display: block
}

</style>
