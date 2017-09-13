import * as types from './mutation-types.js';

export default {
    //显示隐藏菜单
    toggleShow:({commit,state})=>{
        commit(types.TOGGLE_SHOW);
    }
}