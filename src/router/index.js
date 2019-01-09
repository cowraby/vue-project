import Vue from 'vue'
import Router from 'vue-router'
import Home from '../container/Home'
import HelloWorld from '@/components/HelloWorld'
import GroupContainer from '../container/GroupContainer'
import Login from '../container/Login'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      	name: 'Home',
        component: Home,
        children:[
          {
            path: '',
            name: 'GroupContainer',
            component: GroupContainer,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          },
          {
              path: 'group',
              name: 'GroupContainer',
              component: GroupContainer,
              meta:{            
                requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
              },
          },{
            path: 'plan',
            name: 'HelloWorld',
            component: HelloWorld,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          },{
            path: 'task',
            name: 'HelloWorld',
            component: HelloWorld,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          },{
            path: 'summary',
            name: 'HelloWorld',
            component: HelloWorld,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          }
        ],
        meta:{            
          requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
        },
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    }
  ]
})
