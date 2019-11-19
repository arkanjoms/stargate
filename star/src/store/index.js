import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const constants = {
    LAYOUT_DRAWER_MENU: 'LAYOUT_DRAWER_MENU'
}

export default new Vuex.Store({
    state: {
        drawer: true
    },
    mutations: {
        [constants.LAYOUT_DRAWER_MENU]: (state, payload) => state.drawer = payload,
    },
    actions: {
        [constants.LAYOUT_DRAWER_MENU]: ({commit}, drawer) => commit(constants.LAYOUT_DRAWER_MENU, drawer),
    },
    getters: {
        isDrawer: state => state.drawer
    }
})
