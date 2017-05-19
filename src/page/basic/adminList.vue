<template>
    <div class="fillcontain">
    	<head-top></head-top>
		<el-row style="margin-top: 20px;">
            <el-col :span="20" :offset="2">
            	<header class="top">我们测试下Vuex</header>
				<div style="margin-bottom: 20px;">
                    <el-button type="primary" @click="increase">计数增加</el-button>
                    <el-button type="primary" @click="decrease">计数减少</el-button>
                    <el-button type="primary" @click="clickData">加载数据</el-button>
                    <el-button type="primary" @click="clearData">清空数据</el-button>
                </div>
                <div style="margin-bottom: 20px;">当前数值：{{count}}</div>
                <el-collapse @change="handleChange" v-for="(item, index) in vuexList" :key="item.id">
				  <el-collapse-item :title="item.title" :name="item.id">
				    <div>{{item.name}}</div>
				    <div>{{item.explain}}</div>
				  </el-collapse-item>
				</el-collapse>    
            </el-col>
        </el-row>
    </div>
</template>

<script>

	import { mapState, mapMutations, mapActions } from 'vuex'
	import headTop from '../../components/headTop'

    export default {
    	data() {
    		return {
    			
    		}
    	},
    	components: {
    		headTop
    	},
    	mounted() {

    	},
        computed: mapState([
            'vuexList', 'count'
        ]),
    	methods: {
            increase() {
                this.$store.commit('INCREASE_NUM');
            },
            decrease() {
                this.$store.commit('DECREASE_NUM');
            },
    		clickData() {
    			this.$store.dispatch('getVuexList');
    		},
            clearData() {
                this.$store.commit('CLEAR_DATA');
            },
    		handleChange() {

    		}
    	}
    }

</script>

<style lang="less">
	@import '../../style/mixin';
	.top {
	    text-align: center;
	    margin-bottom: 10px;
	}
  	.group {
      	margin-bottom: 10px;
  	}	
</style>
