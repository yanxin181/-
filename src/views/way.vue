<template>
    
    <div>
        <!-- <baidu-map class="map" id="map" @ready="initMap"></baidu-map> -->
        路径监测
    </div>
    


</template>

<script>
    export default {
    name: "way",
    data() {
        
    },
    methods(){
        initMap({ BMap, map }) ;
        {
            this.map = map;
            map.setMapStyle({ style: 'midnight' });
            let point = new BMap.Point(116.889963, 36.665999); //设置城市经纬度坐标
            map.centerAndZoom(point, 14); //
            map.setCurrentCity('济南'); // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true); //鼠标滚动缩放
        }

    }
    
}
</script> 

<style scoped>
    

</style>
