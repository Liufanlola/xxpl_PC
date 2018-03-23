import Vue from 'vue'
import Router from 'vue-router'
import introduce from '@/components/introduce'
import zzxx from '@/components/zzxx'
import cooperation from '@/components/cooperation'
import hgxx from '@/components/Hgxx'
import yysj from '@/components/yysj'
import contact from '@/components/contact'
import zzxxGsxx from '@/components/zzxx_gsxx'
import zzxxGdxx from '@/components/zzxx_gdxx'
import zzxxZzjg from '@/components/zzxx_zzjg'
import zzxxTdcy from '@/components/zzxx_tdcy'
import zzxxFzjg from '@/components/zzxx_fzjg'
import yysjSssj from '@/components/yysj_sssj'
import yysjYybg from '@/components/yysj_yybg'
import yysjSfbz from '@/components/yysj_sfbz'
import report2106 from '@/components/report_2016'
import report2107 from '@/components/report_2017'
import report2108 from '@/components/report_2018'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/zzxx',
      name: 'zzxx',
      component: zzxx,
      children:[
        {
          path:"/",
          component:zzxxGsxx
        },
        {
          path:"gdxx",
          component:zzxxGdxx
        },
        {
          path:"zzjg",
          component:zzxxZzjg
        },
        {
          path:"tdcy",
          component:zzxxTdcy
        },
        {
          path:"fzjg",
          component:zzxxFzjg
        }
      ]
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    },
    {
      path: '/hgxx',
      name: 'hgxx',
      component: hgxx
    },
    {
      path: '/yysj',
      name: 'yysj',
      component: yysj,
      children:[
        {
          path:"/",
          component:yysjSssj
        },
        {
          path:"yybg",
          component:yysjYybg,
          children:[
            {
              path:"/",
              component:report2108
            },
            {
              path:"2017",
              component:report2107
            },
            {
              path:"2016",
              component:report2106
            }
          ]
        },
        {
          path:"sfbz",
          component:yysjSfbz
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
