import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/components/Hello'],resolve) 

// 顶部导航
const Recommend = resolve => require(['@/components/recommend/recommend'],resolve)
const Singer = resolve => require(['@/components/singer/singer'],resolve)
const Rank = resolve => require(['@/components/rank/rank'],resolve)
const Search = resolve => require(['@/components/search/search'],resolve)

const SingerDetail = resolve => require(['@/components/singer-detail/singer-detail'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/recommend'
  	},
    {
    	path:'/recommend',
    	component:Recommend
    },
    {
    	path:'/singer',
    	component:Singer,
      children:[
        {
          path:":id",
          component:SingerDetail
        }
      ],
    },
    {
    	path:'/rank',
    	component:Rank
    },
    {
    	path:'/search',
    	component:Search
    }
  ]
})
