import * as types from './mutation-types.js';
import router from "../router";

export default {
    //显示隐藏菜单
    toggleShow:({commit,state})=>{
        commit(types.TOGGLE_SHOW);
    },
    // 路由跳转
    go:({commit},{name,params,query})=> router.push({
        name,
        params,
        query
    }),
    goBack:()=>router.go(-1),
    set_comments:({commit,state},num)=>{
        commit(types.SET_COMMENTS,num); 
    },
    //设置editors
    set_editors:({commit,state},list)=>{
        commit(types.SET_LIST,list)
    },
    //设置所有文章的ID
    set_ids:({commit,state},list)=>{
        commit(types.SET_IDS,list)
    },
    //获取下一篇文章
    get_next_news:({commit,state},id)=>{
        commit(types.GET_NEXT_NEWS,id)
    }
}