//引入相应的路由组件
import home from '@/pages/Home/index.vue';
import Search from '@/pages/Search/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
import Detail from '@/pages/Detail/index.vue';
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'
import Trade from '@/pages/Trade/index.vue';
import Pay from '@/pages/Pay/index.vue'
import PaySuccess from '@/pages/PaySuccess/index.vue';
import Center from '@/pages/Center/index.vue'

//个人中心的二级路由组件
import MyOrder from '@/pages/Center/MyOrder';
import TeamOrder from '@/pages/Center/teamOrder'
export default [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: { show: true },
    }
    ,
    {
        //命名路由,给路由起一个名字
        name: 'search',
        //在注册路由的时候,如果这里占位，切记务必要传递params
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
    }
    ,
    {
        path: '/login',
        component: Login,
        meta: { show: false },
    }
    ,
    {
        path: '/register',
        component: Register,
        meta: { show: false },
    }
    ,
    //重定向到首页
    {
        path: '/',
        redirect: '/home'
    }
    ,
    {
        path: '/detail/:skuId?',
        component: Detail,
        //路由元信息,控制当前路由是否需要Footer组件
        meta: { show: true },
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        //路由元信息,控制当前路由是否需要Footer组件
        meta: { show: true },
    }
    ,
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/trade',
        component: Trade,
        meta: { show: true }
    },
    {
        path: '/pay',
        component: Pay,
        meta: { show: true }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    }
    ,
    {
        path: '/center',
        component: Center,
        meta: { show: true },
        //二级路由配置的地方
        children: [
            //我的订单
            {
                path: 'myorder',
                component: MyOrder
            }
            ,
            {
                path: 'teamorder',
                component: TeamOrder
            }
            ,
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },

]