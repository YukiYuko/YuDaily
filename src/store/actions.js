import * as types from './mutation-types.js';
import router from "../router";

export default {
    //显示隐藏菜单
    toggleShow:({commit,state})=>{
        commit(types.TOGGLE_SHOW);
    },
    goBack:()=>router.go(-1)
}