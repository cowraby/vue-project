<template>
    <el-row>
        <el-col :span=24 class="my-header">
            <el-row>
                <el-col :span=12>
                    <el-row class="head-tool" type="flex" justify="start">
                        {{this.$store.state.header_title}}
                    </el-row>
                </el-col>
                <el-col :span=12>
                    <el-row class="head-tool" type="flex" justify="end">
                        <i class="iconfont icon-icon_shezhi"></i>
                        <i class="iconfont icon-guangbo"></i>
                        <el-dropdown trigger="click" placement="bottom-end" @command="handleDropdown">
                            <span class="el-dropdown-link">
                                <div class="my-avatar"><i class="iconfont icon-icon_zhanghao"></i></div>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item :command="settings">我的设置</el-dropdown-item>
                                <el-dropdown-item :command="logOut" style="color:red">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<style>
    .my-header {
        background: #7474BF;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 40vh;
		color: #ffffff;
    }

    .head-tool{
        height:10vh;
        font-size: 30px;
        line-height:10vh;
        padding:0px 30px
    }

    .head-tool>i{
        cursor: pointer;
        font-size: 3.5vh;
        margin-right: 30px;
    }
        
    .my-avatar{
        cursor: pointer;
        width: 4vh;
        text-align: center;
        font-size: 2vh;
        height: 4vh;
        line-height: 4vh;
        border:1px solid #ffffff;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 3vh;
        background-color: #cccccc;
        color: white;
    }

    .my-avatar i{
        font-size: 2vh;
    }
</style>

<script>
    export default {
        name: 'Header',
        data () {
            return {
            }
        },
        methods:{
            handleDropdown(index){
                index();
            },
            settings(){
                
            },
            logOut(){
                sessionStorage.removeItem('accessToken');
                this.$router.push('/login');
            }
        }
    }
</script>

