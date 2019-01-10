import Vue from 'vue'
import Router from 'vue-router'
import Home from '../container/Home'
import HelloWorld from '@/components/home/HelloWorld'
import PlanContainer from '@/components/home/PlanContainer'
import TaskContainer from '@/components/home/TaskContainer'
import ShebeiContainer from '@/components/home/ShebeiContainer'
import ConsoleContainer from '@/components/home/ConsoleContainer'
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
            name: 'ConsoleContainer',
            component: ConsoleContainer,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          },
          {
            path: 'console',
            name: 'ConsoleContainer',
            component: ConsoleContainer,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          },
          {
              path: 'shebei',
              name: 'ShebeiContainer',
              component: ShebeiContainer,
              meta:{            
                requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
              },
          },{
            path: 'plan',
            name: 'PlanContainer',
            component: PlanContainer,
            meta:{            
              requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的        
            },
          },{
            path: 'task',
            name: 'TaskContainer',
            component: TaskContainer,
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
