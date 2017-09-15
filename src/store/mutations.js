import { TOGGLE_SHOW ,SET_COMMENTS,SET_LIST} from './mutation-types.js';
export default {
    [TOGGLE_SHOW] (state) {
        state.menuShow = !state.menuShow;
    },
    [SET_COMMENTS] (state,num) {
        state.comments = num;
    },
    [SET_LIST] (state,list) {
        state.editors = [...state.editors,...list];
    }
}