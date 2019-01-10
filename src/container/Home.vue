<template>
	<el-container>
		<MyMenu/>
        <el-main>
            <Header/>
            <el-row class="my-body">
                <router-view></router-view>
            </el-row>
        </el-main>
	</el-container>
</template>

<style>
	.el-container{
		width:100%;
		height: 100vh;
    }
    .el-main{
        background-color: #f3f9fb;
        box-shadow: inset 0px 0px 10px #eeeeee;
        padding: 0px;
        position: relative;
    }
	
    .my-body{
        width: 96%;
        padding: 20px;
        position: absolute;
        top: 10vh;
        bottom: 0vh;
        overflow-y: scroll;
        overflow-x: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #ffffff;
        margin: 0px 2%;
    }
</style>

<script>
    import Header from '@/components/layout/Header'
    import MyMenu from '@/components/layout/MyMenu'
	export default {
        name:"Home",
        components:{
            Header,
            MyMenu
        }
	}
</script>