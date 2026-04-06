import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import people from '../views/people'
import environment from '../views/environment'
import equipment from '../views/equipment'
import sign from '../views/sign'
import way from '../views/way'
import warning from '../views/warning'
import Login from '../views/Login'
import Front from '../views/Front'
import pagination from '../assets/vue/pagination'
import BaiduMap from 'vue-baidu-map'





Vue.use(Router);
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'ztu4kVBu2FhG1F2xRmcdilimgVlNiSo9'
  })

export default new Router({
    routes: [{
        // 首页
        path: '/main',
        name: 'Main',
        component: Main,
        children: [
            {
                // 人员信息页
                path: '/people',
                name: 'people',
                component:people
            },
            {
                // 路径监测页
                path: '/way',
                name: 'way',
                component:way
            },
            {
                // 体征监测页
                path: '/sign',
                name: 'sign',
                component:sign
            },
            {
                // 环境监测页
                path: '/environment',
                name: 'environment',
                component:environment
            },
            {
                // 设备信息页
                path: '/equipment',
                name: 'equipment',
                component:equipment
            },
            {
                // 预警信息页
                path: '/warning',
                name: 'warning',
                component:warning
            },
            {
                path: '/pagination',
                name: 'pagination',
                component:pagination
            },

        ]
    }, {
        // 登录界面
        path: '/login',
        name: 'Main',
        component:Login,
    }, {
        //首页
        path: '/front',
        name: 'Front',
        component:Front,
    }
    ]
})
