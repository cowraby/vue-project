<template>
    <div>
        <el-row>
            <el-col :span=12 style="height:60px;line-height:60px;">
                <span style="font-size:60px;font-weight:bold">{{weekNum}}</span>
                <span style="font-size:18px;color:#666">周  </span>
                <span style="font-size:16px;color:#666">{{startDay}} - {{endDay}}</span>
            </el-col>
            <el-col :span=12>
                <el-row justify="end">
                    <el-date-picker style="float:right;margin:10px 0px" v-model="value3" v-on:change="changeDate" type="week" format="yyyy 第 WW 周" placeholder="选择周">
                    </el-date-picker>
                </el-row>
            </el-col>
        </el-row>
        <el-row v-bind:class="rowClassName">
            <el-col :span=8 :xs=12>
                <div class="calendar-container"></div>
            </el-col>
            <el-col :span=8 :xs=12>
                <div class="calendar-container"></div>
            </el-col>
            <el-col :span=8 :xs=12>
                <div class="calendar-container"></div>
            </el-col>
            <el-col :span=8 :xs=12>
                <div class="calendar-container"></div>
            </el-col>
            <el-col :span=8 :xs=12>
                <div class="calendar-container"></div>
            </el-col>
            <el-col :span=8 :xs=12>
                <div class="calendar-container"></div>
            </el-col>
            <el-col :span=24>
                <div class="calendar-container"></div>
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .calendar-row{
        margin-top: 10px;
        color: #666;
    }

    .pink-calendar{
        border-top:5px solid #fe456c;
    }

    .yellow-calendar{
        border-top:5px solid #fecd45;
    }

    .green-calendar{
        border-top:5px solid #45fea8;
    }

    .calendar-container{
        width:100%;
        height:200px;
        border:1px solid #eeeeee;
    }
    .pink-calendar .current-container{
        background-color: #fe456d33
    }

    .yellow-calendar .current-container{
        background-color: #fecd4533
    }

    .green-calendar .current-container{
        background-color: #45fea833
    }
</style>

<script>
    import moment from 'moment'
    export default {
        name: "GroupContainer",
        data() {
            return ({
                weekNum: "01",
                value3: "",
                rowClassName:"calendar-row pink-calendar",
                startDay: moment().day(1).format('YY/MM/DD'),
                endDay: moment().day(7).format('YY/MM/DD')
            })
        },
        methods: {
            changeDate(value) {
                this.startDay = moment(value).day(1).format('YY/MM/DD');
                this.endDay = moment(value).day(7).format('YY/MM/DD');
                switch(moment(value).week()%3){
                    case 0:
                        this.rowClassName = "calendar-row yellow-calendar";
                        break;
                    case 1:
                        this.rowClassName = "calendar-row pink-calendar";
                        break;
                    case 2:
                        this.rowClassName = "calendar-row green-calendar";
                        break;
                }
            }
        }
    }
</script>