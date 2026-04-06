<template>
    <div class="box">
        <div class="back_box">
            <a href="main">
                <img src="../assets/imgs/left.png" alt="">
                <span>返回首页</span>
            </a>
            
        </div>
        <div class="box-content">
            <div class="bl">
                <h2>疫情防控外勤人员监测系统</h2>
                <p>全民动员<br>
                    坚决打赢疫情防控阻击战，一起向未<span>来</span></p>
                <img src="../assets/imgs/loginimg2.png" alt="">
            </div>
            <div class="">
                <el-form ref="form" :model="form" :rules="rules" class="br">
                    <h3 class="br_header">LOGIN</h3>
                    <el-form-item label="账号" prop="name" class="form_input">
                        <el-input
                            type="text"
                            placeholder="请输入用户名"
                            v-model="form.name"
                            ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" class="form_input">
                        <el-input
                            type="text"
                            placeholder="请输入密码"
                            v-model="form.password"
                            ></el-input>
                    </el-form-item>
                    <div class="wangji">
                        <a href="#">忘记密码</a>
                    </div>
                    <el-form-item class="btn">
                        <el-button type="primary" @click="submitForm('form')" class="but">登录</el-button>
                    </el-form-item>
                    <div class="creat">
                        <span>还没有账户，赶快</span>
                        <a href="#">注册</a>
                    </div>
                </el-form>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                form:{
                    name:'',
                    password:'',
                },
                rules:{
                    name:[{
                        required:true,
                        message:'请输入用户名',
                        trigger:'blur'
                    }],
                    password:[{
                        required:true,
                        message:'请输入密码',
                        trigger:'blur'
                    }]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$router.push({name:'Main',params:{name:this.form.name}});
                } else {
                    this.$message({
                        message: '请输入用户名或密码',
                        type: 'warning'
                    });
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
