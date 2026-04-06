<template>
    <el-aside>
        <!-- :default-openeds="['1', '3']"设则默认导航栏开合 -->
        <el-menu >
            <h3>外勤人员监测系统</h3>
            <router-link to="/people">
                <el-menu-item index="1">
                    <i class="el-icon-user"></i>
                    人员信息
                </el-menu-item>
            </router-link>

            <router-link to="/way">
                <el-menu-item index="2">
                    <i class="el-icon-discover"></i>
                    路径监测
                </el-menu-item>
            </router-link>

            <router-link to="/sign">
                <el-menu-item index="3">
                    <i class="el-icon-s-release"></i>
                    体征监测
                </el-menu-item>
            </router-link>

            <router-link to="/environment" @click="Color">
                <el-menu-item index="4">
                    <i class="el-icon-s-data"></i>
                    环境监测
                </el-menu-item>
            </router-link>

            <router-link to="equipment">
                <el-menu-item index="5">
                    <i class="el-icon-s-ticket"></i>
                    设备信息
                </el-menu-item>
            </router-link>

            <router-link to="warning">
                <el-menu-item index="6">
                    <i class="el-icon-document-delete"></i>
                    预警信息
                </el-menu-item>
            </router-link>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>
    .el-menu{
        background-color: #a3a3a300;
        color: #fff;
    }
    .el-menu h3{
        color: #fff;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 28px;
    }
    .el-menu-item{
        text-align: center;
        line-height: 60px;
        height: 60px;
        border-bottom: 1px solid #c6e2ff;
        margin: 0px 30px 20px 20px;
        padding-left: -3px;
        text-indent: 0px;
        font-size: 20px;
        color: #fff;
    }
    .el-menu-item.is-active{
        color: #409EFF;
    }
    .el-menu-item:last-child{
        /* border: 0; */
        margin-bottom: 0;
    }
    .el-header {
        background-color: #a3a3a300;
        color: rgb(255, 255, 255);
        line-height: 60px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, .2), 0 0 6px rgba(0, 0, 0, .04);
    }

    /* 侧边栏容器 */
    .el-aside {
        width: 300px;
        color: #333;
        background-color: #1a26307c;
    }
</style>
