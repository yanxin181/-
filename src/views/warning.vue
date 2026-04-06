<template>
    <!-- 搜索栏 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" >
        <div>
            <!-- 下拉框 -->
            <el-form-item  class="sel_input">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- 输入框 -->
            <el-form-item >
                <el-input v-model="formInline.user" placeholder="请输入姓名等进行搜索" class="sea_input"></el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="sea_btn">搜索</el-button>
            </el-form-item>
        </div>



        <el-table
            :data="tableData"
            height="520"
            style="width: 100%;"
            class="table"
            align="center">
            <el-table-column
                prop="index"
                label="序号"
                width="50"
                align="center">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                align="center">
            </el-table-column>
            <el-table-column
                prop="num"
                label="联系方式"
                width="200"
                align="center">
            </el-table-column>
            <el-table-column
                prop="equipNum"
                label="设备序列号"
                width=""
                align="center">
            </el-table-column>
            <el-table-column
                prop="sign"
                label="体征状态"
                align="center">
            </el-table-column>
            <el-table-column
                prop="location"
                label="位置状态"
                align="center">
            </el-table-column>
            <el-table-column
                prop="evm"
                label="外界环境状态"
                align="center">
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" @click="handleEdit(scope.row)"> </el-button>
                    <el-popconfirm
                        confirm-button-text='确定'
                        cancel-button-text='我再想想'
                        icon="el-icon-info"
                        icon-color="red"
                        title="您确定删除吗？"
                        @confirm="del(scope.row.id)"
                    >
                        <el-button type="danger" icon="el-icon-delete" slot="reference" style="margin-left: 5px"></el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>

        </el-table>
        <pagination :page="page" :queryOperate="tableQuery"></pagination>
        <el-dialog title="修改" :visible.sync="dialogFormVisible" width="30%" >
            <el-form label-width="90px" size="mini">
                <el-form-item label="姓名" >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" >
                    <el-input v-model="form.num" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="设备序列号" >
                    <el-input v-model="form.equipNum" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="体征状态" >
                    <el-input v-model="form.sign" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="位置状态" >
                    <el-input v-model="form.location" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="外界环境状态" >
                    <el-input v-model="form.evm" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>

    </el-form>

</template>

<script>
    export default {
        name: "warning",
        data() {
            return {
                formInline: {
                    user: '',
                    region: '',
                    name:null,
                },
                total: 0,
                pageNum: 1,
                pageSize: 5,
                username: "",
                dialogFormVisible :false,
                form:{
                    name:null
                },
                tableData: [{
                    index:'1',
                    name: '王月',
                    num:'18546987251',
                    equipNum:'2323',
                    equipment:'是',
                    sign:'正常',
                    location: '正常',
                    evm:'氧气浓度偏高'
                } ],
                //分页
                page: {
                    total: 0,
                    currentPage: 1,
                    pageSize: 10
                },
                options: [{
                    value: '选项1',
                    label: '序号'
                }, {
                    value: '选项2',
                    label: '姓名'
                }, {
                    value: '选项3',
                    label: '联系方式'
                }, {
                    value: '选项4',
                    label: '设备序列号'
                }
                ],
                value: ''
            }
        },

        methods: {
            onSubmit() {
                console.log('submit!');
            },
            reset(){
                this.dename="";
                this.load();
            },
            save(){
                this.request.post("/device",this.form).then(res =>{
                    if(res){
                        this.$message.success("保存成功")
                        this.dialogFormVisible=false
                        this.load()
                    }else{
                        this.$message.error("保存失败")
                    }
                })
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                }
                return '';
            },
            handleAdd(){
                this.dialogFormVisible = true
                this.form = {}
            },
            handleEdit(row){
                this.form=JSON.parse(JSON.stringify(row))
                this.dialogFormVisible=true
            },
            del(id){
                this.request.delete("/device/"+id).then(res =>{
                    if(res){
                        this.$message.success("删除成功")
                        this.load()
                    }else{
                        this.$message.error("删除失败")
                    }
                })
            },
        }
    }
</script>

<style scoped>
    @import url(../assets/css/people.css);
</style>
