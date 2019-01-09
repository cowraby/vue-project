<template>
    <div class="my-container">
        <div id="form_container" @mouseenter="focuse" @mouseleave="blur">
            <el-row class="title">
                登录
            </el-row>
            <el-row>
                <div class="sub-title">用户名</div>
                <el-input v-model="username"></el-input>
            </el-row>
            <el-row>
                <div class="sub-title">密码</div>
                <el-input v-model="password" type="password"></el-input>
            </el-row>
            <el-row>
                <el-button @click="login" style="width:60%;margin-top:20px" round>登录<i class="iconfont icon-icon_fabu"></i></el-button>
            </el-row>
        </div>
        <div class="circle" id="red_circle"></div>
        <div class="circle" id="purple_circle"></div>
        <div class="circle" id="green_circle"></div>
        <div class="circle" id="yellow_circle"></div>
    </div>
</template>

<style>
@keyframes red1 {
    0% {top:40px;left:100px}
    100% {top:20px;left:400px}
}

@keyframes red2 {
    from {top:20px;left:400px}
    to {top:40px;left:100px}
}

@keyframes green1 {
    0% {top:400px;left:600px}
    100% {top:500px;left:300px}
}

@keyframes green2 {
    from {top:500px;left:300px}
    to {top:400px;left:600px}
}

@keyframes yellow1 {
    0% {top:40px;left:400px}
    100% {top:60px;left:100px}
}

@keyframes yellow2 {
    from {top:60px;left:100px}
    to {top:40px;left:400px}
}

@keyframes purple1 {
    0% {top:300px;left:900px;width:80vh;height: 80vh}
    100% {top:0px;left:1000px;width:120vh;height: 120vh}
}

@keyframes purple2 {
    from {top:0px;left:1000px;width:120vh;height: 120vh}
    to {top:300px;left:900px;width:80vh;height: 80vh}
}

.do-red1{
    animation: red1 1s;
}

.do-red2{
    animation: red2 1s;
}

.do-green1{
    animation: green1 1s;
}

.do-green2{
    animation: green2 1s;
}
.do-yellow1{
    animation: yellow1 1s;
}

.do-yellow2{
    animation: yellow2 1s;
}

.do-purple1{
    animation: purple1 1s;
}

.do-purple2{
    animation: purple2 1s;
}

.my-container{
    background-color: #eeeeee;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.title{
    font-size: 40px;
    color: #666;
    margin-bottom: 20px;
}
.sub-title{
    color: #999;
}
.el-row{
    width: 100%;
}
.el-input__inner{
    font-size: 20px;
    color: #666;
    width: 60%;
    padding: 0px;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 20px;
}

#form_container{
    position: absolute;
    top: 20vh;
    left:25vw;
    background-color: white;
    padding: 5vh 5vw;
    border-radius: 10px;
    height: 40vh;
    width: 40vw;
    z-index: 2;
    box-shadow: 0px 0px 200px #a8a8a8;
}

.circle{
    position: absolute;
    border-radius: 50%;
    animation-fill-mode:forwards;
    z-index: 1;
}
#red_circle{
    width: 40vh;
    height: 40vh;
    background-image: linear-gradient(to bottom, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    top: 40px;
    left: 100px;
}

#yellow_circle{
    width: 20vh;
    height: 20vh;
    background-image: linear-gradient(to top, #f87800 0%, #f9d423 100%);
    top: 40px;
    left: 400px;
}

#green_circle{
    width: 40vh;
    height: 40vh;
    background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);
    top: 400px;
    left: 600px;
}

#purple_circle{
    width: 80vh;
    height: 80vh;
    background-image: linear-gradient(to bottom, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
    top: 300px;
    left: 900px;
}

</style>

<script>

export default {
    name:"Login",
    data(){
        return({
            username:"",
            password:"",
            isAnimation:false
        })
    },
    
    methods:{
        test(e){
            // console.log(e);
        },
        focuse(key){
            if(this.isAnimation){
                return
            }
            this.isAnimation = true;
            document.getElementById('red_circle').className="circle do-red1";
            document.getElementById('green_circle').className="circle do-green1";
            document.getElementById('yellow_circle').className="circle do-yellow1";
            document.getElementById('purple_circle').className="circle do-purple1";
        },
        blur(){
            this.isAnimation = false;
            document.getElementById('red_circle').className="circle do-red2";
            document.getElementById('green_circle').className="circle do-green2";
            document.getElementById('yellow_circle').className="circle do-yellow2";
            document.getElementById('purple_circle').className="circle do-purple2";
        },
        login(){
            if(this.username == 'admin' && this.password == 'admin'){
                sessionStorage.setItem('accessToken','my_verify_code');
                this.$router.push({path:"/home"});
            }else{
                this.$message.error('用户名或密码错误');
                this.username = '';
                this.password = '';
            }
        }
    }
}
</script>

