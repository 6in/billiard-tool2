(function(t){function e(e){for(var o,c,i=e[0],s=e[1],l=e[2],h=0,u=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);b&&b(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},n={app:0},a=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var b=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},2277:function(t,e,r){},"354b":function(t,e,r){},4513:function(t,e,r){"use strict";r("5cc3")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("159b"),r("b64b");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("main-vue")],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("flex-box",{attrs:{direction:"column"}},[r("flex-item",{staticClass:"toggle-buttons"},[r("flex-box",{attrs:{"align-items":"center",wrap:"wrap"}},[r("flex-item",[t._v(" ボールサイズ:"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],staticStyle:{width:"100px"},attrs:{type:"range",min:"8.0",max:"12",step:"0.1"},domProps:{value:t.r},on:{__r:function(e){t.r=e.target.value}}})]),r("flex-item",[t._v(" タップ:"+t._s(t.tapSize)+"mm"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tapSize,expression:"tapSize"}],staticStyle:{width:"100px"},attrs:{type:"range",min:"12",max:"20",step:"0.1"},domProps:{value:t.tapSize},on:{__r:function(e){t.tapSize=e.target.value}}})]),r("flex-item",[t._v(" 見下ろし角度:"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phi,expression:"phi"}],staticStyle:{width:"100px"},attrs:{type:"range",min:"0.1",max:"1.5",step:"0.01"},domProps:{value:t.phi},on:{__r:function(e){t.phi=e.target.value}}})]),r("flex-item",[r("toggle-button",{attrs:{labels:{checked:"ズームON",unchecked:"ズームOFF"},width:100},model:{value:t.zoom,callback:function(e){t.zoom=e},expression:"zoom"}})],1),r("flex-item",[r("toggle-button",{attrs:{labels:{checked:"GB表示",unchecked:"GB非表示"},width:100},model:{value:t.showGB,callback:function(e){t.showGB=e},expression:"showGB"}})],1),r("flex-item",[r("toggle-button",{attrs:{labels:{checked:"GB中心",unchecked:"的球中心"},width:100},model:{value:t.lookAtGb,callback:function(e){t.lookAtGb=e},expression:"lookAtGb"}})],1),r("flex-item",[r("toggle-button",{attrs:{labels:{checked:"Train On",unchecked:"Train Off"},width:100},model:{value:t.trainBalls,callback:function(e){t.trainBalls=e},expression:"trainBalls"}})],1),r("flex-item",[r("toggle-button",{attrs:{labels:{checked:"Guide On",unchecked:"Guide Off"},width:100},model:{value:t.betweenLine,callback:function(e){t.betweenLine=e},expression:"betweenLine"}})],1),r("flex-item",[r("toggle-button",{attrs:{labels:{checked:"Scroll Lock",unchecked:"Scroll Unlock"},width:100},model:{value:t.scrollLock,callback:function(e){t.scrollLock=e},expression:"scrollLock"}})],1)],1)],1),r("flex-item",[t.isSmartPhone?t._e():r("flex-box",[r("flex-item",[r("pool",{ref:"pool",attrs:{cb:t.cb,ob:t.ob,pk:t.pk,radius:t.r,na:t.naturalAngle},on:{moveBall:t.onMoveBall,degreeGB2CB:t.onDegreeGB2CB,selectPocket:t.onSelectPocket,setGB:t.onSetGB,moveEnd:t.onMoveEnd}})],1),r("flex-item",[r("flex-box",{attrs:{direction:"column"}},[r("flex-item",{staticStyle:{width:"800px"}},[r("flex-box",[r("flex-item",[r("thick-ball",{attrs:{degree:t.gb2cbDegree,"tap-size":t.tapSize},on:{thickPercent:t.onThickPercent}})],1),r("flex-item",[r("contact-point",{attrs:{degree:t.gb2cbDegree,dispDegree:t.getDegree()}})],1)],1)],1),r("flex-item",{staticStyle:{width:"800px"}},[r("gl-panel",{ref:"gl_panel",attrs:{radius:t.r,cb:t.cb,gb:t.gb,ob:t.ob,pk:t.pk,degree:t.gb2cbDegree,lookAtGb:t.lookAtGb,"is-zoom":t.zoom,showGB:t.showGB,phi:t.phi,trainBalls:t.trainBalls,betweenLine:t.betweenLine}})],1)],1)],1)],1),t.isSmartPhone?r("flex-box",{attrs:{direction:"column"}},[r("flex-item",[r("flex-box",[r("flex-item",[r("pool",{ref:"pool",attrs:{cb:t.cb,ob:t.ob,pk:t.pk,radius:t.r,na:t.naturalAngle},on:{moveBall:t.onMoveBall,degreeGB2CB:t.onDegreeGB2CB,selectPocket:t.onSelectPocket,setGB:t.onSetGB,moveEnd:t.onMoveEnd}})],1),r("flex-item",[r("flex-box",{attrs:{direction:"row"}},[r("flex-item",[r("flex-box",{attrs:{direction:"column"}},[r("flex-item",{staticClass:"ball-view"},[r("thick-ball",{attrs:{degree:t.gb2cbDegree,"tap-size":t.tapSize},on:{thickPercent:t.onThickPercent}})],1),r("flex-item",{staticClass:"ball-view"},[r("contact-point",{attrs:{degree:t.gb2cbDegree,dispDegree:t.getDegree()}})],1)],1)],1)],1)],1)],1)],1),r("flex-item",{staticStyle:{width:"800px"}},[r("gl-panel",{ref:"gl_panel",attrs:{radius:t.r,cb:t.cb,gb:t.gb,ob:t.ob,pk:t.pk,degree:t.gb2cbDegree,lookAtGb:t.lookAtGb,"is-zoom":t.zoom,showGB:t.showGB,phi:t.phi,trainBalls:t.trainBalls,betweenLine:t.betweenLine}})],1)],1):t._e()],1)],1)],1)},i=[],s=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("svg",{ref:"svg",attrs:{width:"400",height:"800"}},[r("g",[r("g",t._l(4,(function(e){return r("line",{key:e,attrs:{x1:-t.block/2+t.block*e,y1:0,x2:-t.block/2+t.block*e,y2:800,stroke:"lightgray","stroke-width":"1","stroke-dasharray":"2 2"}})})),0),r("g",t._l(8,(function(e){return r("line",{key:e,attrs:{x1:0,y1:-t.block/2+t.block*e,x2:400,y2:-t.block/2+t.block*e,stroke:"lightgray","stroke-width":"1","stroke-dasharray":"2 2"}})})),0),r("g",t._l(3,(function(e){return r("line",{key:e,attrs:{x1:t.block*e,y1:0,x2:t.block*e,y2:800,stroke:"lightgray","stroke-width":"1"}})})),0),r("g",t._l(7,(function(e){return r("line",{key:e,attrs:{x1:0,y1:t.block*e,x2:400,y2:t.block*e,stroke:"lightgray","stroke-width":"1"}})})),0),r("g",t._l(t.pockets,(function(e,o){return r("circle",{key:o,ref:"pocket",refInFor:!0,attrs:{cx:e.x,cy:e.y,r:(t.block-t.r)/2,fill:"rgba(0,0,255,0.2)"}})})),0)]),r("circle",{ref:"cb2",attrs:{id:"cb",cx:t.cb.cx,cy:t.cb.cy,r:4*t.r,fill:"rgba(0,0,0,0)"}}),r("circle",{ref:"cb",staticStyle:{fill:"white"},attrs:{id:"cb",cx:t.cb.cx,cy:t.cb.cy,r:t.r}}),r("circle",{ref:"ob2",attrs:{id:"ob",cx:t.ob.cx,cy:t.ob.cy,r:4*t.r,fill:"rgba(0,0,0,0)"}}),r("circle",{ref:"ob",attrs:{id:"ob",cx:t.ob.cx,cy:t.ob.cy,r:t.r,fill:"yellow"}}),r("circle",{ref:"gb",attrs:{id:"gb",cx:t.gb.cx,cy:t.gb.cy,r:t.r,fill:"gray",stroke:"black"}}),r("line",{attrs:{x1:t.pk.cx,y1:t.pk.cy,x2:t.ob.cx,y2:t.ob.cy,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{x1:t.gb.cx,y1:t.gb.cy,x2:t.cb.cx,y2:t.cb.cy,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{x1:t.ob.cx,y1:t.ob.cy,x2:t.gb.cx,y2:t.gb.cy,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{x1:t.gb.cx,y1:t.gb.cy,x2:t.gb2.cx,y2:t.gb2.cy,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{x1:t.tan.x1,y1:t.tan.y1,x2:t.tan.x2,y2:t.tan.y2,stroke:"white","stroke-width":"1","stroke-dasharray":"4 4"}}),r("line",{attrs:{x1:t.gb.cx,y1:t.gb.cy,x2:t.na.cx,y2:t.na.cy,stroke:"black","stroke-width":"1","stroke-dasharray":"8 8"}}),t.ob2cb_disp?r("g",[r("line",{attrs:{x1:t.ob.cx,y1:t.ob.cy,x2:t.cb.cx,y2:t.cb.cy,stroke:"blue","stroke-width":"1"}})]):t._e(),null!=t.drag.obj&&"cb"==t.drag.obj.id?r("g",[r("line",{attrs:{x1:t.cb.cx,y1:0,x2:t.cb.cx,y2:800,stroke:"pink","stroke-width":"1","stroke-dasharray":"8 8"}}),r("line",{attrs:{x1:0,y1:t.cb.cy,x2:400,y2:t.cb.cy,stroke:"pink","stroke-width":"1","stroke-dasharray":"8 8"}})]):t._e(),null!=t.drag.obj&&"ob"==t.drag.obj.id?r("g",[r("line",{attrs:{x1:t.ob.cx,y1:0,x2:t.ob.cx,y2:800,stroke:"pink","stroke-width":"1","stroke-dasharray":"8 8"}}),r("line",{attrs:{x1:0,y1:t.ob.cy,x2:400,y2:t.ob.cy,stroke:"pink","stroke-width":"1","stroke-dasharray":"8 8"}})]):t._e()])])}),l=[],b={name:"pool",data:function(){return{title:"this is pool",drag:{obj:null,offsetX:0,offsetY:0},ob2cb_disp:!0,block:100}},props:{radius:{type:String,default:"9.0"},pk:{type:Object},cb:{type:Object},ob:{type:Object},na:{type:Object}},computed:{r:function(){return Number(this.radius)},gb:function(){var t=this,e=t.getRadianOb(t.ob,t.pk)+Math.PI,r=t.ob.cx+2*t.r*Math.cos(e),o=t.ob.cy+2*t.r*Math.sin(e),n=t.getRadian(t.cb.cx,t.cb.cy,r,o)+Math.PI,a=t.toDegree(e),c=t.toDegree(n),i=a-c;return t.$emit("degreeGB2CB",Math.floor(i)),t.$emit("setGB",{cx:r,cy:o}),{cx:r,cy:o}},gb2:function(){var t=this,e=t.getRadianOb(t.ob,t.pk)+Math.PI,r=t.getDistance(t.ob,t.cb),o=t.ob.cx+r*Math.cos(e),n=t.ob.cy+r*Math.sin(e);return{cx:o,cy:n}},tan:function(){var t=this,e=t.getRadianOb(t.ob,t.pk)+Math.PI,r=t.ob.cx+2*t.r*Math.cos(e),o=t.ob.cy+2*t.r*Math.sin(e);e-=Math.PI/2;var n=r+20*t.r*Math.cos(e),a=o+20*t.r*Math.sin(e);e+=Math.PI;var c=r+20*t.r*Math.cos(e),i=o+20*t.r*Math.sin(e);return{x1:n,y1:a,x2:c,y2:i}},pockets:function(){for(var t=this,e=[],r=0;r<3;r++){var o=0;switch(r){case 0:o=t.r;break;case 1:o=0;break;case 2:o=-t.r}for(var n=0;n<2;n++){var a=t.r-n*t.r*2;e.push({x:400*n+a,y:400*r+o})}}return e}},mounted:function(){var t=this,e=t.$refs,r=e.svg,o=e.cb,n=e.ob,a=e.cb2,c=e.ob2;r.addEventListener("mousemove",(function(e){return t.mouseMove(e)}),!1),r.addEventListener("touchmove",(function(e){return t.mouseMove(e)}),!1),r.addEventListener("mouseup",(function(e){return t.mouseUp(e)}),!1),r.addEventListener("touchend",(function(e){return t.mouseUp(e)}),!1),t.moveable(o),t.moveable(n),t.moveable(a),t.moveable(c),t.$refs.pocket.forEach((function(e){e.addEventListener("mousedown",(function(e){return t.onSelectPocket(e)})),e.addEventListener("touchstart",(function(e){return t.onSelectPocket(e)}))}))},methods:{moveable:function(t){var e=this;t.addEventListener("mousedown",(function(t){return e.mouseDown(t)}),!1),t.addEventListener("touchstart",(function(t){return e.mouseDown(t)}),!1),t.addEventListener("mousemove",(function(t){return e.mouseMove(t)}),!1),t.addEventListener("touchmove",(function(t){return e.mouseMove(t)}),!1),t.addEventListener("mouseup",(function(t){return e.mouseUp(t)}),!1),t.addEventListener("touchend",(function(t){return e.mouseUp(t)}),!1)},getRadianOb:function(t,e){return Math.atan2(e.cy-t.cy,e.cx-t.cx)},getRadian:function(t,e,r,o){return Math.atan2(o-e,r-t)},toDegree:function(t){return 180*t/Math.PI},screenPointToSVGPoint:function(t,e,r,o){var n=t.createSVGPoint();n.x=r,n.y=o;var a=e.getScreenCTM();return n.matrixTransform(a.inverse())},mousePointToSVGPoint:function(t){return this.screenPointToSVGPoint(this.$refs.svg,this.drag.obj,t.clientX,t.clientY)},mouseDown:function(t){var e=this,r="mousedown"===t.type?t:t.changedTouches[0],o=r.target;"circle"===o.tagName&&(e.drag={obj:o,offsetX:Number(o.getAttribute("cx")),offsetY:Number(o.getAttribute("cy"))}),r.preventDefault()},mouseUp:function(){this.drag.obj=null,this.$emit("moveEnd")},mouseMove:function(t){var e=this;if(e.drag.obj){var r="mousemove"===t.type?t:t.changedTouches[0],o=e.mousePointToSVGPoint(r);e.$emit("moveBall",{target:e.drag.obj.id,cx:o.x,cy:o.y}),r.preventDefault()}},onSelectPocket:function(t){var e="mousedown"===t.type?t:t.changedTouches[0],r=e.target,o=this;o.$emit("selectPocket",{x:r.getAttribute("cx"),y:r.getAttribute("cy")})},getDistance:function(t,e){return Math.sqrt(Math.pow(t.cx-e.cx,2)+Math.pow(t.cy-e.cy,2))}}},h=b,u=(r("782f"),r("2877")),g=Object(u["a"])(h,s,l,!1,null,"11a15864",null),d=g.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view-ball"},[r("svg",{attrs:{width:"400",height:"400"}},[r("circle",{attrs:{cx:t.ob.cx,cy:t.ob.cy,r:t.r,fill:"yellow"}}),r("circle",{attrs:{cx:t.cx,cy:t.cy,r:t.r,fill:"white"}}),r("line",{attrs:{x1:t.cx,y1:400,x2:t.cx,y2:0,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{x1:t.cx,y1:t.cy,x2:t.ob.cx,y2:t.ob.cy,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{id:"ob_center",x1:t.ob.cx,y1:t.ob.cy-t.r,x2:t.ob.cx,y2:t.ob.cy+t.r,stroke:"black","stroke-width":"1"}}),t._l(t.halfLine,(function(e,o){return r("g",{key:o},[r("line",{attrs:{id:"ob_lhs",x1:t.ob.cx-e.x,y1:t.ob.cy-e.y,x2:t.ob.cx-e.x,y2:t.ob.cy+e.y,stroke:"black","stroke-width":"1","stroke-dasharray":"2 2"}}),r("line",{attrs:{id:"ob_lhs",x1:t.ob.cx+e.x,y1:t.ob.cy-e.y,x2:t.ob.cx+e.x,y2:t.ob.cy+e.y,stroke:"black","stroke-width":"1","stroke-dasharray":"2 2"}}),r("line",{attrs:{id:"gb_lhs",x1:t.cx-e.x,y1:t.cy-e.y,x2:t.cx-e.x,y2:t.cy+e.y,stroke:"black","stroke-width":"1","stroke-dasharray":"2 2"}}),r("line",{attrs:{id:"gb_rhs",x1:t.cx+e.x,y1:t.cy-e.y,x2:t.cx+e.x,y2:t.cy+e.y,stroke:"black","stroke-width":"1","stroke-dasharray":"2 2"}})])})),r("circle",{attrs:{cx:t.cp.cx,cy:t.cp.cy,r:4,fill:"black"}}),r("text",{attrs:{x:"100",y:"30","font-size":"30",fill:"#ffffff"}},[t._v("角度: "+t._s(t.dispDegree)+" 度")])],2)])},y=[],x={name:"ContactPoint",data:function(){return{r:80,cx:200,cy:300}},props:{degree:{type:Number,default:0},dispDegree:{type:Number,default:0}},computed:{ob:function(){var t=this,e=90-t.degree,r=e*Math.PI/180,o=t.cx+2*t.r*Math.cos(r),n=t.cy-2*t.r*Math.sin(r);return{cx:o,cy:n}},cp:function(){var t=this,e=90-t.degree,r=e*Math.PI/180,o=t.cx+t.r*Math.cos(r),n=t.cy-t.r*Math.sin(r);return{cx:o,cy:n}},halfLine:function(){var t=this,e=t.r/2,r=t.r/4,o=Math.sqrt(Math.abs(t.r*t.r-e*e)),n=Math.sqrt(Math.abs(t.r*t.r-r*r)),a=Math.sqrt(Math.abs(t.r*t.r-(r+e)*(r+e)));return[{x:t.r/2,y:o},{x:-r,y:n},{x:t.r/2+r,y:a}]}}},m=x,p=(r("8c7a"),Object(u["a"])(m,f,y,!1,null,"189b740f",null)),v=p.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flexbox",style:{"align-content":t.alignContent,"align-items":t.alignItems,"flex-direction":t.direction,"flex-wrap":t.wrap,"justify-content":t.justifyContent}},[t._t("default",(function(){return[r("div",[t._v("content 1")]),r("div",[t._v("content 2")]),r("div",[t._v("content 3")])]}))],2)},w=[],_={name:"flex-box",props:{alignContent:{type:String,default:"stretch"},alignItems:{type:String,default:"stretch"},direction:{type:String,default:"row"},wrap:{type:String,default:"nowrap"},justifyContent:{type:String,default:"flex-start"}}},M=_,B=(r("e017"),Object(u["a"])(M,k,w,!1,null,"e2b775a2",null)),P=B.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flexitem",style:{"align-self":t.alignSelf,"flex-basis":t.basis,"flex-grow":t.grow,"flex-shrink":t.shrink,"margin-left":!!t.alignRight&&"auto","margin-top":t.marginTop?t.marginTop:!!t.alignBottom&&"auto",order:t.order}},[t._t("default")],2)},G=[],j={name:"flex-item",props:{alignSelf:{type:String,default:"auto"},alignRight:{type:Boolean,default:!1},alignBottom:{type:Boolean,default:!1},marginTop:{type:String,default:void 0},basis:{type:String,default:"auto"},grow:{type:Number,default:0},order:{type:Number,default:0},shrink:{type:Number,default:1}}},O=j,L=(r("b1a1"),Object(u["a"])(O,S,G,!1,null,"68c32d35",null)),D=L.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view-ball"},[r("svg",{attrs:{width:"400",height:"400"}},[r("circle",{attrs:{cx:t.cx,cy:t.cy,r:t.r,fill:"rgba(255,255,255,0.5)"}}),r("circle",{attrs:{cx:t.ob.cx,cy:t.cy,r:t.r,fill:"rgba(255,255,0,0.5)"}}),t.isShowRight?r("line",{attrs:{id:"cb_left_edge",x1:t.cx-t.r,y1:0,x2:t.cx-t.r,y2:400,stroke:"black","stroke-width":"1","stroke-dasharray":"8 8"}}):t._e(),r("line",{attrs:{id:"cb_center",x1:t.cx,y1:0,x2:t.cx,y2:400,stroke:"black","stroke-width":"1"}}),r("line",{attrs:{id:"ob_center",x1:t.ob.cx,y1:200-t.r,x2:t.ob.cx,y2:200+t.r,stroke:"black","stroke-width":"1"}}),t.isShowRight?t._e():r("line",{attrs:{id:"cb_right_edge",x1:t.cx+t.r,y1:0,x2:t.cx+t.r,y2:400,stroke:"black","stroke-width":"1","stroke-dasharray":"8 8"}}),t.isShowRight?r("line",{attrs:{id:"ob_right_edge",x1:t.ob.cx+t.r,y1:0,x2:t.ob.cx+t.r,y2:400,stroke:"black","stroke-width":"1","stroke-dasharray":"8 8"}}):t._e(),t.isShowRight?t._e():r("line",{attrs:{id:"ob_left_edge",x1:t.ob.cx-t.r,y1:0,x2:t.ob.cx-t.r,y2:400,stroke:"black","stroke-width":"1","stroke-dasharray":"8 8"}}),r("circle",{attrs:{id:"cp",cx:t.cp.cx,cy:200,r:4,fill:"black"}}),r("rect",{attrs:{x:t.tap.x,y:300,width:t.tap.w,height:100,fill:"white"}}),t._l(t.halfLine,(function(e,o){return r("g",{key:o},[r("line",{attrs:{id:"ob_lhs",x1:t.ob.cx-e.x,y1:200-e.y,x2:t.ob.cx-e.x,y2:200+e.y,stroke:"black","stroke-width":"1","stroke-dasharray":"2 2"}}),r("line",{attrs:{id:"ob_lhs",x1:t.ob.cx+e.x,y1:200-e.y,x2:t.ob.cx+e.x,y2:200+e.y,stroke:"black","stroke-width":"1","stroke-dasharray":"2 2"}})])})),r("text",{attrs:{x:"100",y:"30","font-size":"30",fill:"#ffffff"}},[t._v("厚み: "+t._s(t.thickPercent)+" %")])],2)])},C=[],A={name:"ThickBall",data:function(){return{r:80,cx:200,cy:200,thickPercent:0}},props:{degree:{type:Number,default:0},tapSize:{type:String,default:"12"}},computed:{ob:function(){var t=this,e=90-t.degree,r=e*Math.PI/180,o=t.cx+2*t.r*Math.cos(r),n=t.cy-2*t.r*Math.sin(r);return t.emitThickPercent({cx:o,cy:n}),{cx:o,cy:n}},cp:function(){var t=this,e=90-t.degree,r=e*Math.PI/180,o=t.cx+t.r*Math.cos(r),n=t.cy-t.r*Math.sin(r);return{cx:o,cy:n}},isShowRight:function(){var t=this;return t.ob.cx<t.cx},tap:function(){var t=this,e=Number(t.tapSize)*(2*t.r)/57;return{x:200-e/2,w:e}},halfLine:function(){var t=this,e=t.r/2,r=t.r/4,o=Math.sqrt(Math.abs(t.r*t.r-e*e)),n=Math.sqrt(Math.abs(t.r*t.r-r*r)),a=Math.sqrt(Math.abs(t.r*t.r-(r+e)*(r+e)));return[{x:t.r/2,y:o},{x:-r,y:n},{x:t.r/2+r,y:a}]}},methods:{emitThickPercent:function(t){var e=this,r=0,o=0;t.cx<e.cx&&(o=t.cx+e.r,r=e.cx-e.r),e.cx<t.cx&&(o=e.cx+e.r,r=t.cx-e.r);var n=Math.floor((o-r)/(2*e.r)*100);e.thickPercent=n,e.$emit("thickPercent",n)}}},T=A,z=(r("5ab8"),Object(u["a"])(T,E,C,!1,null,"5d487ea2",null)),I=z.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"gldiv",staticClass:"hello"},[r("vgl-renderer",{staticStyle:{height:"400px"},attrs:{antialias:"","shadow-map-enabled":!0,"disable-depth":!1}},[r("vgl-scene",[r("vgl-box-geometry",{attrs:{name:"box",width:400,height:1,depth:800}}),r("vgl-box-geometry",{attrs:{name:"wall_vertical",width:1,height:10,depth:340}}),r("vgl-box-geometry",{attrs:{name:"wall_horizon",width:340,height:10,depth:1}}),r("vgl-box-geometry",{attrs:{name:"long_line",width:1,height:1,depth:800}}),r("vgl-box-geometry",{attrs:{name:"short_line",width:400,height:1,depth:1}}),r("vgl-geometry",{attrs:{name:"grid_line","position-attribute":"-100,1,-400,-100,1,400, 0,1,400, 0,1,-400, 100,1,-400, 200,1,-400, 200,1, -300, -200,1,300 "}}),r("vgl-mesh-standard-material",{attrs:{name:"ob",color:"#ffff00"}}),r("vgl-mesh-standard-material",{attrs:{name:"cb",color:"#ffffff"}}),r("vgl-mesh-lambert-material",{attrs:{name:"green",color:"#009900"}}),r("vgl-mesh-lambert-material",{attrs:{name:"green2",color:"#005500"}}),r("vgl-mesh-lambert-material",{attrs:{name:"gray",color:"#000000"}}),r("vgl-mesh-lambert-material",{attrs:{name:"ltgray",color:"#ffffff"}}),r("vgl-line-basic-material",{attrs:{name:"line_g",linewidth:2,color:"#ffffff"}}),t.showBalls?r("vgl-group",[r("vgl-sphere-geometry",{attrs:{name:"sphere",radius:t.r,"width-segments":t.widthSegments,"height-segments":t.heightSegments}}),r("vgl-mesh",{attrs:{geometry:"sphere",material:"ob",color:"#ff0000",position:t.ob3d,"cast-shadow":"","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"sphere",material:"cb",position:t.cb3d,"cast-shadow":"","receive-shadow":""}}),t.showGB?r("vgl-mesh",{attrs:{geometry:"sphere",material:"cb",position:t.gb3d,"cast-shadow":"","receive-shadow":""}}):t._e(),t.trainBalls?r("vgl-group",[r("vgl-group",t._l(t.trainBallsCb2Gb,(function(t,e){return r("vgl-mesh",{key:e,attrs:{geometry:"sphere",material:"cb",position:t,"cast-shadow":"","receive-shadow":""}})})),1),r("vgl-group",t._l(t.trainBallsOb2Pk,(function(t,e){return r("vgl-mesh",{key:e,attrs:{geometry:"sphere",material:"ob",position:t,"cast-shadow":"","receive-shadow":""}})})),1)],1):t._e()],1):t._e(),r("vgl-mesh",{attrs:{geometry:"long_line",material:"cb",position:"-100 0.1 0"}}),r("vgl-mesh",{attrs:{geometry:"long_line",material:"cb",position:"   0 0.1 0"}}),r("vgl-mesh",{attrs:{geometry:"long_line",material:"cb",position:" 100 0.1 0"}}),r("vgl-group",t._l(7,(function(t){return r("vgl-group",{key:t},[r("vgl-mesh",{key:t,attrs:{geometry:"short_line",material:"cb",position:"   0 0.1 "+(100*(t-1)-300)}})],1)})),1),r("vgl-mesh",{attrs:{geometry:"box",material:"green",position:"0 0 0","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"wall_vertical",material:"green2",position:"200 0 200","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"wall_vertical",material:"green2",position:"200 0 -200","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"wall_vertical",material:"green2",position:"-200 0 200","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"wall_vertical",material:"green2",position:"-200 0 -200","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"wall_horizon",material:"green2",position:"0 0 -400","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"wall_horizon",material:"green2",position:"0 0  400","receive-shadow":""}}),r("vgl-mesh",{attrs:{geometry:"box2",material:"ob",position:t.gb3d,translate:"  ",rotation:"0 0.5 0"}}),t.betweenLine?r("vgl-group",[r("vgl-geometry",{attrs:{name:"line_g","position-attribute":t.gb2cbline}}),r("vgl-geometry",{attrs:{name:"line_pk2ob","position-attribute":t.pk2obline}}),r("vgl-geometry",{attrs:{name:"line_gb2ob","position-attribute":t.gb2obline}}),r("vgl-line",{attrs:{geometry:"line_g",material:"line_g"}}),r("vgl-line",{attrs:{geometry:"line_pk2ob",material:"line_g"}}),r("vgl-line",{attrs:{geometry:"line_gb2ob",material:"line_g"}})],1):t._e(),r("vgl-line",{attrs:{geometry:"test",material:"line_g"}}),r("vgl-ambient-light",{attrs:{color:"#888888"}}),r("vgl-directional-light",{attrs:{position:"100 100 100","cast-shadow":""}})],1),r("vgl-perspective-camera",{attrs:{"orbit-position":t.cameraPos,"orbit-target":t.lookAt}})],1)],1)},N=[],R=(r("99af"),r("a15b"),r("d81d"),{name:"gl-panel",computed:{r:function(){return Number(this.radius)},cameraPos:function(){var t=this,e=t.gb;t.lookAtGb||(e=t.ob);var r=-t.getRadian(e.cx,e.cy,t.cb.cx,t.cb.cy),o=Math.PI/2+r,n=t.getDistance(e.cx,e.cy,t.cb.cx,t.cb.cy)+20*t.r;return t.isZoom&&(n=10*t.r),"".concat(n," ").concat(t.phi," ").concat(o)},ob3d:function(){var t=this,e=this.ob.cx-200,r=this.ob.cy-400;return"".concat(e," ").concat(t.r," ").concat(r)},cb3d:function(){var t=this,e=this.cb.cx-200,r=this.cb.cy-400;return"".concat(e," ").concat(t.r," ").concat(r)},gb3d:function(){var t=this,e=this.gb.cx-200,r=this.gb.cy-400;return"".concat(e," ").concat(t.r," ").concat(r)},pk3d:function(){var t=this,e=this.pk.cx-200,r=this.pk.cy-400;return"".concat(e," ").concat(t.r," ").concat(r)},gb2cbline:function(){var t=this,e=t.gb;t.lookAtGb||(e=t.ob);var r=[e.cx-200,t.r,e.cy-400,this.cb.cx-200,t.r,this.cb.cy-400].join(",");return r},pk2obline:function(){var t=this,e=[this.pk.cx-200,t.r,this.pk.cy-400,this.ob.cx-200,t.r,this.ob.cy-400].join(",");return e},gb2obline:function(){var t=this,e=[this.gb.cx-200,t.r,this.gb.cy-400,this.ob.cx-200,t.r,this.ob.cy-400].join(",");return e},lookAt:function(){return this.lookAtGb?this.gb3d:this.ob3d},trainBallsOb2Pk:function(){for(var t=this,e=t.getDistance(t.ob.cx,t.ob.cy,t.pk.cx,t.pk.cy),r=Math.floor(e/(2*t.r))+1,o=Math.PI-t.getRadian(t.pk.cx,t.pk.cy,t.ob.cx,t.ob.cy),n=[],a=-5;a<r;a++){var c=a*t.r*2;n.push({cx:t.ob.cx+c*Math.cos(o),cy:t.ob.cy-c*Math.sin(o)})}return n.map((function(e){return"".concat(e.cx-200," ").concat(t.r," ").concat(e.cy-400)}))},trainBallsCb2Gb:function(){for(var t=this,e=t.getDistance(t.cb.cx,t.cb.cy,t.gb.cx,t.gb.cy),r=Math.floor(e/(2*t.r))+1,o=Math.PI-t.getRadian(t.gb.cx,t.gb.cy,t.cb.cx,t.cb.cy),n=[],a=0;a<r;a++){var c=a*t.r*2;n.push({cx:t.cb.cx+c*Math.cos(o),cy:t.cb.cy-c*Math.sin(o)})}return n.map((function(e){return"".concat(e.cx-200," ").concat(t.r," ").concat(e.cy-400)}))}},props:{radius:{type:String,default:"9"},ob:{type:Object},gb:{type:Object},cb:{type:Object},pk:{type:Object},degree:{type:Number},isZoom:{type:Boolean},lookAtGb:{type:Boolean,default:!1},phi:{type:String,default:"0.1"},showGB:{type:Boolean},trainBalls:{type:Boolean,default:!1},betweenLine:{type:Boolean,default:!0}},data:function(){return{widthSegments:50,heightSegments:50,cameraSpherical:{radius:800,phi:Math.PI/180*80,theta:1},showBalls:!0}},mounted:function(){var t=this,e=t.$refs.gldiv;t.dragging=!1,e.addEventListener("mousedown",(function(){t.dragging=!0})),e.addEventListener("mousemove",(function(){t.dragging})),e.addEventListener("mouseup",(function(){t.dragging=!1}))},methods:{getR:function(){return Number(this.radius)},getRadian:function(t,e,r,o){return Math.atan2(o-e,r-t)},toDegree:function(t){return 180*t/Math.PI},getDistance:function(t,e,r,o){return Math.sqrt((r-t)*(r-t)+(o-e)*(o-e))},refreshBalls:function(){var t=this;t.showBalls=!1,console.log("r=".concat(t.r,",").concat(t.r)),setTimeout((function(){t.showBalls=!0}),10)}}}),q=R,U=(r("4513"),Object(u["a"])(q,$,N,!1,null,"056f69a2",null)),V=U.exports,F=r("0347"),X=Object(F["a"])(window.navigator);function Y(t){t.preventDefault()}function J(t){return t*(Math.PI/180)}function Z(t){return t*(180/Math.PI)}var H={0:0,1:9.112000001,2:10.91400001,3:12.39866667,4:13.69066666,5:14.83533334,6:15.91766666,7:16.8048148,8:17.64033333,9:18.462,10:19.18733333,11:19.91266667,12:20.58133333,13:21.267,14:21.90733334,15:22.53444446,16:23.12566667,17:23.74900001,18:24.33833333,19:24.91066666,20:25.449,21:26.03266667,22:26.52,23:27.0174074,24:27.472,25:27.948,26:28.407,27:28.85466666,28:29.26266667,29:29.69333333,30:30.05851852,31:30.37899999,32:30.753,33:31.07033334,34:31.39899999,35:31.69933335,36:31.97133332,37:32.24900001,38:32.46370369,39:32.69100002,40:32.91766665,41:33.10466668,42:33.24066669,43:33.45033331,44:33.541,45:33.70533336,46:33.7166667,47:33.90933332,48:34,49:34,50:34,51:34,52:34,53:34,54:34,55:34,56:33.91499999,57:33.72233336,58:33.71100003,59:33.52966667,60:33.43333331,61:33.24444446,62:33.10466668,63:32.87799998,64:32.63433335,65:32.38499998,66:32.10166668,67:31.78433333,68:31.44999999,69:31.08481482,70:30.719,71:30.28266667,72:29.82933333,73:29.308,74:28.798,75:28.20866666,76:27.61555556,77:26.99033334,78:26.367,79:25.57366666,80:24.72933333,81:23.86233334,82:22.93866666,83:21.97533334,84:21.01074076,85:20.03166666,86:19.00033333,87:17.986,88:16.94333333,89:15.844,90:14.705,91:13.55466666,92:12.45407409,93:11.27099999,94:10.03566667,95:8.760666667,96:7.389333333,97:6.035,98:4.612666667,99:2.594074073,100:0},K={name:"MainVue",components:{ContactPoint:v,FlexBox:P,FlexItem:D,Pool:d,ThickBall:I,GlPanel:V},props:{msg:String},data:function(){return{pk:{cx:9,cy:9},ob:{cx:100,cy:100},cb:{cx:200,cy:500},gb:{cx:200,cy:500},naturalAngle:{cx:0,cy:0},isSmartPhone:X.phone,r:"8.0",gb2cbDegree:0,thick:0,tapSize:"12.4",zoom:!1,lookAtGb:!0,showGB:!0,phi:""+Math.PI/180*80,trainBalls:!1,betweenLine:!0,scrollLock:!1}},mounted:function(){this.scroll(this.scrollLock)},watch:{scrollLock:function(t){this.scroll(t)}},methods:{scroll:function(t){t?document.addEventListener("touchmove",Y,{passive:!1}):document.removeEventListener("touchmove",Y,{passive:!1})},onMoveBall:function(t){var e=t.target,r=t.cx,o=t.cy,n=this,a=Number(n.r);r<=a&&(r=a),400-a<=r&&(r=400-a),o<=a&&(o=a),800-a<=o&&(o=800-a),n[e].cx=r,n[e].cy=o},onDegreeGB2CB:function(t){var e=this;e.gb2cbDegree=t},onThickPercent:function(t){this.thick=t,this.calcNaturalAngle()},getDegree:function(){var t=this,e=0;return e=t.gb2cbDegree<-270?360+t.gb2cbDegree:Math.abs(t.gb2cbDegree),e>90&&(e=360-e),e},onSelectPocket:function(t){var e=t.x,r=t.y;this.pk.cx=e,this.pk.cy=r},onSetGB:function(t){this.gb=t},onClickUpdate:function(){this.$refs.gl_panel.$forceUpdate()},onMoveEnd:function(){var t=this;t.betweenLine=!1,window.setTimeout((function(){t.betweenLine=!0}),0)},onClickRefresh:function(){this.$refs.gl_panel.refreshBalls()},calcNaturalAngle:function(){var t=this.cb.cx-this.pk.cx,e=-1*(this.cb.cy-this.pk.cy),r=Math.atan2(e,t),o=Z(r);o<0&&(o=360+o);var n=J(o-90),a=(this.cb.cx-this.gb.cx)*Math.cos(n)-(this.cb.cy-this.gb.cy)*Math.sin(n),c=this.gb.cx-this.cb.cx,i=-1*(this.gb.cy-this.cb.cy),s=Math.atan2(i,c),l=J(H[this.thick]);a>0?l=s-l:a<0?l=s+l:(console.log("CB is same line"),l=s),this.naturalAngle.cx=this.gb.cx+1e3*Math.cos(l),this.naturalAngle.cy=this.gb.cy-1e3*Math.sin(l)}}},Q=K,W=(r("e33a"),Object(u["a"])(Q,c,i,!1,null,"30c54b5c",null)),tt=W.exports,et={name:"App",components:{MainVue:tt}},rt=et,ot=(r("034f"),Object(u["a"])(rt,n,a,!1,null,null,null)),nt=ot.exports,at=r("f206"),ct=r.n(at),it=r("f4b7");Object.keys(it).forEach((function(t){o["a"].component(t,it[t])})),o["a"].use(ct.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(nt)}}).$mount("#app")},"5ab8":function(t,e,r){"use strict";r("a3e7")},"5cc3":function(t,e,r){},"782f":function(t,e,r){"use strict";r("7ba6")},"7ba6":function(t,e,r){},"85ec":function(t,e,r){},"8c7a":function(t,e,r){"use strict";r("8e60")},"8e60":function(t,e,r){},a3e7:function(t,e,r){},b1a1:function(t,e,r){"use strict";r("354b")},cddf:function(t,e,r){},e017:function(t,e,r){"use strict";r("2277")},e33a:function(t,e,r){"use strict";r("cddf")}});
//# sourceMappingURL=app.21d445d4.js.map