<template>
<div>
    <el-container style="height: 100%; border: 1px solid #409EFF">
        <!-- 侧边导航栏 -->
        <el-aside>
            <Aside></Aside>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</div>
    
</template>

<script>
    import Aside from "../components/Aside";
    export default {
        name: "Main",
        components: {Aside},
        data() {
            const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
            
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
