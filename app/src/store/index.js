//仓库
import Vuex from 'vuex';
import Vue from 'vue';
//安装插件
Vue.use(Vuex);

//引入小仓库
import home from './home';
import search from './search';
import detail from './detail/index';
import user from './user';
import shopcart from './shopCart'
import trade from './trade';


//对外暴露仓库

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        user,
        shopcart,
        trade
    }
})