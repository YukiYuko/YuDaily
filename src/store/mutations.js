import { TOGGLE_SHOW ,SET_COMMENTS,SET_LIST,GET_NEXT_NEWS,SET_IDS} from './mutation-types.js';
export default {
    [TOGGLE_SHOW] (state) {
        state.menuShow = !state.menuShow;
    },
    [SET_COMMENTS] (state,num) {
        state.comments = num;
    },
    [SET_LIST] (state,list) {
        state.editors = [...state.editors,...list];
    },
    [SET_IDS] (state,list) {
        state.ids = [...state.ids,...list];
    },
    [GET_NEXT_NEWS] (state,id) {
        let index = state.ids.indexOf(id);
        state.next = state.ids[++index];
    }
}