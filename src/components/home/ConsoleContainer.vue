<template>
    <el-row>
        <el-col :span=16></el-col>
        <el-col :span=8>
            <el-row>
                <RobotCard />
            </el-row>
        </el-col>
    </el-row>
</template>


<script>
    import RobotCard from './ConsoleContainer/RobotCard'
    export default {
        name: 'ConsoleContainer',
        components:{
            RobotCard
        },
        data () {
            return {
            }
        }
    }
</script>

