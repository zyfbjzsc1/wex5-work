window.__justep.__ResourceEngine.loadCss([{url: '/v_5dac48f2c13e4d788d651aa2211562b0l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_218dfd16f9a9432bbb89513c1d5bd1f1l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_3328d16fe0844964890a05b5b33ff075l_zh_CNs_d_m/system/components/comp2.min.js','/v_d3710b73a0d2400ca2f79f5022a3f0cdl_zh_CNs_d_m/system/core.min.js','/v_051a648d66df4eba881b3b562359bfa0l_zh_CNs_d_m/system/common.min.js','/v_1d33277ddc2a473bb160497b3d9ee14al_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/form/form');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/work/reg/changePasswordActivity.m'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciAB3Av';
	this._flag_='68825dec102146974a883bd1ef14e5d4';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"SPOSITIONS":{"define":"SPOSITIONS","label":"SPOSITIONS","name":"SPOSITIONS","relation":"SPOSITIONS","type":"String"},"SSCHOOL":{"define":"SSCHOOL","label":"SSCHOOL","name":"SSCHOOL","relation":"SSCHOOL","type":"String"},"SSTUDY":{"define":"SSTUDY","label":"SSTUDY","name":"SSTUDY","relation":"SSTUDY","type":"String"},"sBirthday":{"define":"sBirthday","label":"sBirthday","name":"sBirthday","relation":"sBirthday","rules":{"datetime":true},"type":"DateTime"},"sCardKind":{"define":"sCardKind","label":"sCardKind","name":"sCardKind","relation":"sCardKind","type":"String"},"sCardNO":{"define":"sCardNO","label":"sCardNO","name":"sCardNO","relation":"sCardNO","type":"String"},"sCity":{"define":"sCity","label":"sCity","name":"sCity","relation":"sCity","type":"String"},"sCode":{"define":"sCode","label":"sCode","name":"sCode","relation":"sCode","type":"String"},"sCountry":{"define":"sCountry","label":"sCountry","name":"sCountry","relation":"sCountry","type":"String"},"sDegree":{"define":"sDegree","label":"sDegree","name":"sDegree","relation":"sDegree","type":"String"},"sDescription":{"define":"sDescription","label":"sDescription","name":"sDescription","relation":"sDescription","type":"String"},"sEnglishName":{"define":"sEnglishName","label":"sEnglishName","name":"sEnglishName","relation":"sEnglishName","type":"String"},"sFamilyAddress":{"define":"sFamilyAddress","label":"sFamilyAddress","name":"sFamilyAddress","relation":"sFamilyAddress","type":"String"},"sFamilyPhone":{"define":"sFamilyPhone","label":"sFamilyPhone","name":"sFamilyPhone","relation":"sFamilyPhone","type":"String"},"sGraduateSchool":{"define":"sGraduateSchool","label":"sGraduateSchool","name":"sGraduateSchool","relation":"sGraduateSchool","type":"String"},"sHomePlace":{"define":"sHomePlace","label":"sHomePlace","name":"sHomePlace","relation":"sHomePlace","type":"String"},"sID":{"define":"sID","label":"sID","name":"sID","relation":"sID","type":"String"},"sIDCard":{"define":"sIDCard","label":"sIDCard","name":"sIDCard","relation":"sIDCard","type":"String"},"sJoinDate":{"define":"sJoinDate","label":"sJoinDate","name":"sJoinDate","relation":"sJoinDate","rules":{"datetime":true},"type":"DateTime"},"sLoginName":{"define":"sLoginName","label":"sLoginName","name":"sLoginName","relation":"sLoginName","type":"String"},"sMail":{"define":"sMail","label":"sMail","name":"sMail","relation":"sMail","type":"String"},"sMainOrgID":{"define":"sMainOrgID","label":"sMainOrgID","name":"sMainOrgID","relation":"sMainOrgID","type":"String"},"sMarriage":{"define":"sMarriage","label":"sMarriage","name":"sMarriage","relation":"sMarriage","type":"String"},"sMobilePhone":{"define":"sMobilePhone","label":"sMobilePhone","name":"sMobilePhone","relation":"sMobilePhone","type":"String"},"sMsn":{"define":"sMsn","label":"sMsn","name":"sMsn","relation":"sMsn","type":"String"},"sName":{"define":"sName","label":"sName","name":"sName","relation":"sName","type":"String"},"sNumb":{"define":"sNumb","label":"sNumb","name":"sNumb","relation":"sNumb","rules":{"integer":true},"type":"Integer"},"sOfficePhone":{"define":"sOfficePhone","label":"sOfficePhone","name":"sOfficePhone","relation":"sOfficePhone","type":"String"},"sPassword":{"define":"sPassword","label":"sPassword","name":"sPassword","relation":"sPassword","type":"String"},"sPasswordModifyTime":{"define":"sPasswordModifyTime","label":"sPasswordModifyTime","name":"sPasswordModifyTime","relation":"sPasswordModifyTime","rules":{"datetime":true},"type":"DateTime"},"sPasswordTimeLimit":{"define":"sPasswordTimeLimit","label":"sPasswordTimeLimit","name":"sPasswordTimeLimit","relation":"sPasswordTimeLimit","rules":{"integer":true},"type":"Integer"},"sPhotoLastModified":{"define":"sPhotoLastModified","label":"sPhotoLastModified","name":"sPhotoLastModified","relation":"sPhotoLastModified","rules":{"datetime":true},"type":"DateTime"},"sProvince":{"define":"sProvince","label":"sProvince","name":"sProvince","relation":"sProvince","type":"String"},"sQQ":{"define":"sQQ","label":"sQQ","name":"sQQ","relation":"sQQ","type":"String"},"sSafeLevelID":{"define":"sSafeLevelID","label":"sSafeLevelID","name":"sSafeLevelID","relation":"sSafeLevelID","type":"String"},"sSchoolLength":{"define":"sSchoolLength","label":"sSchoolLength","name":"sSchoolLength","relation":"sSchoolLength","type":"String"},"sSequence":{"define":"sSequence","label":"sSequence","name":"sSequence","relation":"sSequence","rules":{"integer":true},"type":"Integer"},"sSex":{"define":"sSex","label":"sSex","name":"sSex","relation":"sSex","type":"String"},"sSpeciality":{"define":"sSpeciality","label":"sSpeciality","name":"sSpeciality","relation":"sSpeciality","type":"String"},"sTitle":{"define":"sTitle","label":"sTitle","name":"sTitle","relation":"sTitle","type":"String"},"sValidState":{"define":"sValidState","label":"sValidState","name":"sValidState","relation":"sValidState","rules":{"integer":true},"type":"Integer"},"sZip":{"define":"sZip","label":"sZip","name":"sZip","relation":"sZip","type":"String"},"version":{"define":"version","label":"version","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"sID","limit":-1,"queryAction":"querySa_opperson","saveAction":"saveSa_opperson","tableName":"sa_opperson","url":"/work/org","xid":"changePasswordData"});
}}); 
return __result;});
