// 体征监测
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
        border
        style="width: 100%;"
        class="table">
        <el-table-column
        prop="index"
        label="序号"
        width="50">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名">
        </el-table-column>
        <el-table-column
        prop="tep"
        label="体温">
        </el-table-column>
        <el-table-column
        prop="rate"
        label="心率">
        </el-table-column>
        <el-table-column
        prop="oxy"
        label="血氧">
        </el-table-column>
        <el-table-column
        prop="fall"
        label="是否跌倒">
        </el-table-column>
        <el-table-column
        prop="warning"
        label="是否发起预警">
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
            <el-form-item label="体温" >
                <el-input v-model="form.tep" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="心率" >
                <el-input v-model="form.rate" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="血氧" >
                <el-input v-model="form.oxy" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否跌倒" >
                <el-input v-model="form.fall" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否发起预警" >
                <el-input v-model="form.warning" autocomplete="off"></el-input>
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
        name:"sign",
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
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                },{
                    index:'1',
                    name: '王小虎',
                    tep:'37.2℃',
                    rate:'正常',
                    oxy:'正常',
                    fall:'否',
                    warning:'否'
                }, ],
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
            load(){
                this.request.get("/user/page" ,{
                    params:{
                        pageNum : this.pageNum,
                        pageSize :this.pageSize,
                        username :this.username
                    }
                }).then(res =>{
                    console.log(res)
                    this.tableData = res.records
                    this.total =res.total
                })//请求数据
                /*    fetch("http://localhost:801/user/page?pageNum=" + this.pageNum + "&pageSize=" + this.pageSize+"&username="+this.username).then(res => res.json()).then(res => {
                      console.log(res)
                      this.tableData = res.data;
                      this.total = res.total;
                    })*/
            },
            reset(){
                this.username="";
                this.load();
            },
            save:function(){
                this.request.post("/sign",this.form).then(res =>{
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
