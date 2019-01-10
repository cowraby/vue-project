<template>
    <el-aside height="100%" v-bind:width="sideWidth">
        <el-menu 
            background-color="#ffffff"
            text-color="#666"
            active-text-color="#7474BF"
            :router=true 
            default-active="/home/console" 
            @select="handleSelect"
            class="el-menu-vertical-demo" 
        >
            <el-menu-item index="/home/console">
                <i class="iconfont icon-yunyingzhongxin"></i>
                <span slot="title">控制台</span>
            </el-menu-item>
            <el-menu-item index="/home/task">
                <i class="iconfont icon-icon_renwujincheng"></i>
                <span slot="title">任务列表</span>
            </el-menu-item>
            <el-menu-item index="/home/plan">
                <i class="iconfont icon-shebeiguanli"></i>
                <span slot="title">订单</span>
            </el-menu-item>
            <el-menu-item index="/home/shebei">
                <i class="iconfont icon-qiche"></i>
                <span slot="title">设备</span>
            </el-menu-item>
            <el-menu-item index="/home/summary">
                <i class="iconfont icon-shujukanban"></i>
                <span slot="title">总结</span>
            </el-menu-item>
            <!-- <div id="menu_collapse" v-on:click="collapse">
                {{test}}
            </div> -->
        </el-menu>
    </el-aside>
</template>

<style>
	.el-aside {
		color: #333;
    }
    .el-menu{
        position: relative;
		height:100%;
        border-right: none !important;
    }
    .el-menu-item.is-active{
        border-left:5px solid #7474BF !important;
        background-color: rgb(234, 234, 255) !important
    }
	#menu_collapse{
		height:50px;
		line-height: 50px;
		position: absolute;
		bottom: 0px;
		cursor: pointer;
		text-align: center;
		width:100%;
		color: #333;
		border-top: 1px solid #eeeeee;
    }
</style>

<script>
    const KEY2TITLE ={
        '/home/console':'控制台',
        '/home/task':'任务列表',
        '/home/plan':'计划',
        '/home/shebei':'设备',
        '/home/summary':'总结'
    }
    export default {
        name: 'MyMenu',
        data(){
            return ({
                test:"收起",
                isCollapse: false,
                sideWidth:"150px",
            })
        },
        methods:{
            handleSelect(index){
                this.$store.commit('resetHeaderTitle',KEY2TITLE[index]); 
            }
        }
    }
</script>

