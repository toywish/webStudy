arcgis javascript API地址：
Js：http://192.168.137.113/arcgis_js_api/library/4.18/init.js
Css：http://192.168.137.113/arcgis_js_api/library/4.18/esri/themes/light/main.css
 
地形图图层地址：
http://192.168.137.113/server/rest/services/20210129二维矢量地图/MapServer
AP点位图层：
http://192.168.137.113/server/rest/services/20200917AP点位/MapServer/0
 
实现功能：
1、在MapView中，使用MapImageLayer加载地形图，FeatureLayer加载AP点位图层
2、设置地图初始范围
3、使用图标渲染AP图层要素（symbol）
4、地形图中的建筑物图层、AP图层可点击响应，在弹出框中显示自定义内容（popuptemplate）

*****************************************************************************************************
1、客户端生成FeatureLayer、GraphicsLayer
2、根据AP图层的LC（楼层）属性，显示不同楼层的AP点位；通过下拉框选择楼层
LC属性取值包含：1~12，字符串类型
3、根据PointGUID属性，查询对应的AP，并进行跳转。
查询：使用QueryTask进行服务器端查询
跳转：使用goTo()
4、要素图层的编辑（添加、修改、删除）
可编辑AP图层地址：
https://192.168.137.113/server/rest/services/Hosted/20201123%E7%A9%BA%E7%99%BDAP%E5%9B%BE%E5%B1%82%E5%A7%9A%E5%88%9A%E7%94%A8/FeatureServer
编辑：使用FeatureLayer中的applyEdits()方法
