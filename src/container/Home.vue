<template>
	<el-container>
		<el-aside height="100%" v-bind:width="sideWidth">
			<el-menu 
				:router=true 
				default-active="group" 
				class="el-menu-vertical-demo" 
				@open="handleOpen" 
				@close="handleClose"
				:collapse="isCollapse"
			>
				<el-menu-item index="/home/group">
					<i class="el-icon-location"></i>
					<span slot="title">工作组</span>
				</el-menu-item>
				<el-menu-item index="/home/plan">
					<i class="el-icon-menu"></i>
					<span slot="title">计划</span>
				</el-menu-item>
				<el-menu-item index="/home/task">
					<i class="el-icon-document"></i>
					<span slot="title">任务</span>
				</el-menu-item>
				<el-menu-item index="/home/summary">
					<i class="el-icon-setting"></i>
					<span slot="title">总结</span>
				</el-menu-item>
				<!-- <div id="menu_collapse" v-on:click="collapse">
					{{test}}
				</div> -->
			</el-menu>
		</el-aside>
		<el-container>
			<el-header></el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>



<style>
	.el-container{
		width:100%;
		height: 100vh;
	}
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
	.el-menu{
		position: relative;
		height:100%
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
	export default {
		name:"Home",
		data(){
			return ({
				test:"收起",
				isCollapse: false,
				sideWidth:"200px",
			})
		},
		methods:{
			handleOpen(key,keyPath){
				console.log(key);
				message = "收起"
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
				message = "打开"
			},
			collapse(){
				if(this.isCollapse){
					this.test = "关闭";
					this.sideWidth = "200px";
				}else{
					this.test = "展开";
					this.sideWidth = "65px";
				}
				this.isCollapse = !this.isCollapse;
			}
		}
	}
</script>