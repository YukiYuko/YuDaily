import { TOGGLE_SHOW } from './mutation-types.js';
export default {
    [TOGGLE_SHOW] (state) {
        state.menuShow = !state.menuShow;
    }
}