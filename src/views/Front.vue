<template>
    <div class="front">
        <!-- 快捷导航栏 -->
        <section class="shortcut">
            <div class="fl">
                <h1>
                    月桐出品
                </h1>
                <ul>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">产品</a></li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li><span></span></li>
                    <li><a href="#" class="china">中国站</a></li>
                    <li><a href="#">文档</a></li>
                    <li><a href="#">备案</a></li>
                    <li><a href="#">控制台</a></li>
                    <li><a >注册</a></li>
                    <li><a>
                        <router-link to="/login">
                            <button>一键登录</button>
                        </router-link>
                    </a></li>
                </ul>
            </div>
        </section>

        <!-- 标题签 -->
        <div class="midd_title">
            <h1>疫情防控下外勤人员监测系统设计</h1>
        </div>
    </div>
    

        
</template>

<script>
export default {
    name: "Front",
    
}
</script>

<style scoped>
@import url(../assets/css/front.css);

</style>
