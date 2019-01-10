// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'Vuex'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import './assets/icon/iconfont.css'

Vue.use(ElementUI);
Vue.use(Vuex);

const LOGIN_CODE = 'my_verify_code';	//自行设置的登录验证

// 访问路由前的钩子
router.beforeEach((to, from, next) => {
  //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
  if (to.path === '/login') {
    next()
  } // 如果即将进入登录路由，则直接放行
  if (to.path == '/') {
    if (sessionStorage.getItem('accessToken') != LOGIN_CODE) {
      next({
        path: '/login'
      })
    } else {
      next({
        path: "/home"
      })
    }

  } else { //进入的不是登录路由
    if (to.meta.requiresAuth && sessionStorage.getItem('accessToken') != LOGIN_CODE) {
      next({
        path: '/login'
      })
    }
    //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
    else {
      next()
    }
  }
});

//VUEX 全局变量存储
const store = new Vuex.Store({
	state: {
	  header_title:'控制台'
	},
	mutations: {
		resetHeaderTitle:function(state,name){
			state.header_title = name;
		}
	}
})

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
