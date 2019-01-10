<template>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="card-header">
            <span>robot列表</span>
            <el-button @click="show = !show;filterStr=''" icon="el-icon-search" circle></el-button>
            <transition name="el-zoom-in-center">   
                <el-input v-model="filterStr" style="width:40%;float:right" v-show="show"></el-input>
            </transition>
            
        </div>
        <el-row class="card-body">
            <div :key="robot.id" class="robot-container" v-for="robot in robotFilter(robots)">
                <el-row>
                    <el-col :span=4>
                        <div v-if="robot.state=='故障'" class="robot-state text-red">{{robot.battery}}%</div>
                        <div v-if="robot.state == '充电'" class="robot-state text-yellow">{{robot.battery}}%</div>
                        <div v-if="robot.state=='运行'" class="robot-state text-green">{{robot.battery}}%</div>
                    </el-col>
                    <el-col :span=6>
                        <el-row class="robot-name">{{robot.name}}</el-row>
                        <el-row class="robot-modal">{{robot.modal}}</el-row>
                    </el-col>
                    <el-col :span=10>
                        <div class="robot-area">{{robot.area}}</div>
                        <div class="robot-action">{{robot.start}}<i class="iconfont icon-xiayibu"></i>{{robot.end}}</div>
                    </el-col>
                    <!-- <div v-if="robot.battery<10" class="robot-battery"><img src="@/assets/low-battery.png" alt=""><span>{{robot.battery}}%</span></div>
                    <div v-if="robot.battery >= 10 && robot.battery<30" class="robot-battery middlw-battery"><img src="@/assets/middle-battery.png" alt=""><span>{{robot.battery}}%</span></div>
                    <div v-if="robot.battery>=30" class="robot-battery high-battery"><img src="@/assets/high-battery.png" alt=""><span>{{robot.battery}}%</span></div> -->
                    <el-dropdown style="margin-top:15px;float:right" trigger="click" placement="bottom">
                        <span class="el-dropdown-link">
                            操作
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>前去充电</el-dropdown-item>
                            <el-dropdown-item>停止接单</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-row>
            </div>
        </el-row>
        <el-row v-if="more" style="border-top:1px solid #eeeeee;height:40px;line-height:40px;text-align:center;color:#409EFF"><span @click="$router.push('/home/shebei')" style="cursor:pointer"><i class="iconfont icon-zhunbeiliangchan"></i>查看全部设备</span></el-row>
    </el-card>
</template>

<style>
    .card-header{
        padding: 0px 10px;
        height:50px;
        line-height: 50px;
        color: #666666;
        border-bottom: 1px solid #eeeeee;
    }
    
    .card-body{
        padding: 0px 10px;
        height: 284px;
        overflow: scroll;
    }
    .card-header>button{
        margin-top: 5px;
        float: right;
    }
    .card-header input{
        border-radius: 30px !important;
    }
    .robot-container{
        padding: 10px;
        border-bottom: 1px solid whitesmoke;
    }
    .robot-state{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        color: white;
        font-size: 15px;
    }

    .robot-state.text-red{
        background-color: #db2d43;
        box-shadow: #db2d43 0px 0px 10px;
    }

    .robot-state.text-yellow{
        background-color: #f7aa00;
        box-shadow: #f7aa00 0px 0px 10px;
    }
    .robot-state.text-green{
        background-color: #12af66;
        box-shadow: #12af66 0px 0px 10px;
    }

    .robot-name{
        height: 30px;
        line-height: 30px;
        color: #666666;
        font-size: 16px;
    }

    .robot-modal{
        height:20px;
        line-height: 20px;
        color: #999999;
        font-size: 12px;
    }
    .el-dropdown-link{
        color: #409EFF;
        cursor: pointer;
    }

    .robot-area{
        height: 30px;
        line-height: 30px;
        color: #999999;
        font-size: 16px;
    }
    .robot-action{
        height: 20px;
        line-height: 20px;
        color: #999999;
        font-size: 12px;
    }
    .robot-battery{
        position: relative;
        height: 30px;
        line-height: 30px;
        color: #333333;
        font-size: 14px;
    }

    .robot-battery>img{
        position: absolute;
        height: 20px;
        line-height: 20px;
        top:5px;
        left: 0px
    }
    .robot-battery>span{
        position: absolute;
        top:0px;
        left: 8px
    }

</style>


<script>
    export default {
        name: 'RobotCard',
        
        data () {
            return {
                show:false,
                more:true,
                filterStr:"",
                robots:[
                    {
                        id:1,
                        name:"机器人1",
                        battery:5,
                        state:"故障",
                        area:"工区1",
                        start:"GQ1-1A",
                        end:"GQ1-3B",
                        modal:"iAgv-3000"
                    },
                    {
                        id:2,
                        name:"机器人2",
                        state:"运行",
                        battery:88,
                        area:"工区2",
                        start:"GQ2-4F",
                        end:"GQ2-3C",
                        modal:"iAgv-3000"
                    },{
                        id:3,
                        name:"机器人3",
                        state:"充电",
                        battery:35,
                        area:"仓库一区",
                        start:"CK1-CDZ2",
                        end:"CK1-CDZ2",
                        modal:"iAgv-3000"
                    },{
                        id:4,
                        name:"机器人4",
                        state:"运行",
                        battery:88,
                        area:"物料二区",
                        start:"CK2-1A",
                        end:"CK2-3B",
                        modal:"iAgv-2000"
                    },
                ]
            }
        },
        methods: {
            robotFilter: function (robots) {
                //因为this的有效函数域，所以使用self只想this
                let self = this;
                return robots.filter(function (robot) {
                    return robot.name.indexOf(self.filterStr) >= 0
                })
            }
        }
    }
</script>

