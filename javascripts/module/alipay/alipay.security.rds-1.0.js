(function(b){b.rds=light.deriveFrom(b.base,{ready:!0,render:function(a){light.isFunction(a)&&this._readyList.push(a);for(a=this._readyList;a.length;)a.shift().apply(this)},getValue:function(){return{rdsUaValue:window.json_ua?window.json_ua:"",rdsTokenValue:window.form_tk?window.form_tk:""}}},{Name:"rds"})})(alipay.security);