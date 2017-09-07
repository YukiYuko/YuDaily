import Vue from 'vue'
import router from '../router'
export const go =({name,params,query})=> {
    console.log(name);
    router.push({
        name,
        params,
        query
    })
}