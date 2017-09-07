import Vue from 'vue'
import router from '../router'
export const go =({name,params,query})=> router.push({
    name,
    params,
    query
})