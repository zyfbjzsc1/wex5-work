window.__justep.__ResourceEngine.loadCss([{url: '/v_2848d3f06c3244c8a11db117581e3939l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_e94db7444e9d46139621beb52d7fc814l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_a63ac2006e7f462d875cfd4abffa83c2l_zh_CNs_d_m/system/core.min.js','/v_0e7af84b51574a54a94f04b3d8cdd3bfl_zh_CNs_d_m/system/common.min.js','/v_f3a665e331ac4fac998a32280a615629l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/chat/wex5/funcsDialog/funcsDialog');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/work/workHome/process/workHome/mainActivity.m'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNZbUju';
	this._flag_='e2bb72a0f306c608feadecb41541e29e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fActivity":{"define":"fActivity","label":"环节","name":"fActivity","relation":"fActivity","type":"String"},"fColor":{"define":"fColor","label":"颜色","name":"fColor","relation":"fColor","type":"String"},"fDevice":{"define":"fDevice","label":"设备","name":"fDevice","relation":"fDevice","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fIcon":{"define":"fIcon","label":"图片样式","name":"fIcon","relation":"fIcon","type":"String"},"fLabel":{"define":"fLabel","label":"标签","name":"fLabel","relation":"fLabel","type":"String"},"fUrl":{"define":"fUrl","label":"路径","name":"fUrl","relation":"fUrl","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fLabel\":\"工作日志\",\"fDevice\":\"m\",\"fIcon\":\"icon-document-text\",\"fColor\":\"#00B987\",\"fUrl\":\"$UI/work/workLog/process/logDetail/logDetail.m.w\",\"fActivity\":\"mainActivity\"},{\"fID\":\"2\",\"fLabel\":\"工作任务\",\"fDevice\":\"m\",\"fIcon\":\"icon-calendar\",\"fColor\":\"#FC3FA8\",\"fUrl\":\"$UI/work/workTask/process/workTask/workTaskListActivity.w\",\"fActivity\":\"workTaskListActivity\"},{\"fID\":\"3\",\"fLabel\":\"签到\",\"fDevice\":\"m\",\"fIcon\":\"icon-android-location\",\"fColor\":\"#00FFFF\",\"fUrl\":\"$UI/work/sign/process/sign/mainActivity.m.w\",\"fActivity\":\"mainActivity\"},{\"fID\":\"4\",\"fLabel\":\"考勤打卡\",\"fDevice\":\"m\",\"fIcon\":\"icon-compose\",\"fColor\":\"#3F9EFC\",\"fUrl\":\"$UI/work/attendance/process/attendance/attendanceActivity.m.w\",\"fActivity\":\"attendanceActivity\"}]","limit":20,"xid":"regularData"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"fActitvty":{"define":"fActitvty","label":"环节","name":"fActitvty","relation":"fActitvty","type":"String"},"fColor":{"define":"fColor","label":"图标颜色","name":"fColor","relation":"fColor","type":"String"},"fDevicesType":{"define":"fDevicesType","label":"设备类型","name":"fDevicesType","relation":"fDevicesType","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fIcon":{"define":"fIcon","label":"图标","name":"fIcon","relation":"fIcon","type":"String"},"fLabel":{"define":"fLabel","label":"名称","name":"fLabel","relation":"fLabel","type":"String"},"fPresonID":{"define":"fPresonID","label":"人员ID","name":"fPresonID","relation":"fPresonID","type":"String"},"fProcess":{"define":"fProcess","label":"流程","name":"fProcess","relation":"fProcess","type":"String"},"fUrl":{"define":"fUrl","label":"地址","name":"fUrl","relation":"fUrl","type":"String"},"version":{"define":"version","label":"版本","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":true,"events":{"onBeforeRefresh":"applyBizDataBeforeRefresh"},"idColumn":"fID","limit":20,"orderBys":[{"relation":"fLabel","type":1}],"queryAction":"queryOa_workfavorite","saveAction":"saveOa_workfavorite","tableName":"oa_workfavorite","url":"/work/workHome","xid":"applyBizData"});
}}); 
return __result;});
