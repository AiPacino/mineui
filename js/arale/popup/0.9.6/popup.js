define("arale/popup/0.9.6/popup",["gallery/jquery/1.7.2/jquery","arale/overlay/0.9.8/overlay","arale/position/0.9.2/position","arale/iframe-shim/0.9.3/iframe-shim","arale/widget/0.9.16/widget","arale/base/0.9.16/base","arale/class/0.9.2/class","arale/events/0.9.1/events","arale/base/0.9.16/aspect","arale/base/0.9.16/attribute","arale/widget/0.9.16/daparser","arale/widget/0.9.16/auto-render"],function(e,t,n){var r=e("gallery/jquery/1.7.2/jquery"),i=e("arale/overlay/0.9.8/overlay"),s=i.extend({attrs:{trigger:{value:null,getter:function(e){return r(e)}},triggerType:"hover",delay:100},setup:function(){s.superclass.setup.call(this),this._bindTrigger()},toggle:function(){this[this.get("visible")?"hide":"show"]()},_bindTrigger:function(){function o(){clearTimeout(r),s.get("visible")&&(i=setTimeout(function(){s.hide()},n))}var e=this.get("trigger"),t=this.get("triggerType"),n=this.get("delay"),r,i,s=this;t==="click"?e.on(t,function(e){e.preventDefault(),s.toggle()}):t==="focus"?e.on("focus blur",function(){s.toggle()}):(e.hover(function(){clearTimeout(i),s.get("visible")||(r=setTimeout(function(){s.show()},n))},o),this.element.hover(function(){clearTimeout(i)},o))}});n.exports=s});