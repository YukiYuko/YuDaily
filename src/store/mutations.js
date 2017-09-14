import { TOGGLE_SHOW ,SET_COMMENTS} from './mutation-types.js';
export default {
    [TOGGLE_SHOW] (state) {
        state.menuShow = !state.menuShow;
    },
    [SET_COMMENTS] (state,num) {
        state.comments = num;
    }
}