import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    count: 0,
    num: 5,
    vuexList: [{
        id: '1',
        title: '一致性 Consistency',
        name: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
        explain: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    }, {
        id: '2',
        title: '反馈 Feedback',
        name: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；',
        explain: '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。'
    }]
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
