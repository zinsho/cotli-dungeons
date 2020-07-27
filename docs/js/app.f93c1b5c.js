(function(t){function n(n){for(var r,a,u=n[0],i=n[1],c=n[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(n);while(d.length)d.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],r=!0,u=1;u<e.length;u++){var i=e[u];0!==o[i]&&(r=!1)}r&&(s.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={app:0},s=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/cotli-dungeons/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var p=i;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),o=e.n(r);o.a},"07cc":function(t,n,e){"use strict";var r=e("dc02"),o=e.n(r);o.a},"23ff":function(t,n,e){"use strict";var r=e("87e0"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("4de4"),e("6b93"),e("d3b7"),e("25f0"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("CotLI Dungeons")])],1),e("router-view")],1)},s=[],a=(e("034f"),e("2877")),u={},i=Object(a["a"])(u,o,s,!1,null,null,null),c=i.exports,p=e("8c4f"),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cotli-dungeons"},[e("dungeonInputs"),e("dungeonOutputs")],1)},d=[],f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DungeonInputs"},[e("label",{attrs:{for:"dpsCap"}},[t._v("DPS Cap Exponent (max DPS): ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.dpsCap,expression:"dpsCap",modifiers:{number:!0}}],attrs:{type:"number",id:"dpsCap"},domProps:{value:t.dpsCap},on:{input:function(n){n.target.composing||(t.dpsCap=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("br"),e("label",{attrs:{for:"totalIdols"}},[t._v("Total Idols ("+t._s(t._f("asSci")(t.totalIdols))+"): ")]),e("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.totalIdols,expression:"totalIdols",modifiers:{number:!0,lazy:!0}}],attrs:{type:"number"},domProps:{value:t.totalIdols},on:{change:function(n){t.totalIdols=t._n(n.target.value)},blur:function(n){return t.$forceUpdate()}}}),t._v(" "),e("br"),e("label",{attrs:{for:"sprintCap"}},[t._v("Sprint Cap: ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sprintCap,expression:"sprintCap",modifiers:{number:!0}}],attrs:{id:"sprintCap",type:"number",min:"0",max:"3500",step:"25"},domProps:{value:t.sprintCap},on:{input:function(n){n.target.composing||(t.sprintCap=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("br"),e("label",{attrs:{for:"t2s"}},[t._v("T2 11ths completed: ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.t2s,expression:"t2s",modifiers:{number:!0}}],attrs:{id:"t2s",type:"number",min:"0",max:"9"},domProps:{value:t.t2s},on:{input:function(n){n.target.composing||(t.t2s=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("br")])},h=[],v={name:"DungeonInputs",computed:{dpsCap:{get:function(){return this.$store.getters.getCurrent("dpsCap")},set:function(t){this.$store.commit("updateCurrent",{key:"dpsCap",value:t})}},totalIdols:{get:function(){return this.$store.getters.getCurrent("TotalIdols")},set:function(t){this.$store.commit("updateCurrent",{key:"TotalIdols",value:BigInt(t).toString()})}},sprintCap:{get:function(){return this.$store.getters.getCurrent("SprintCap")},set:function(t){this.$store.commit("updateCurrent",{key:"SprintCap",value:t})}},t2s:{get:function(){return this.$store.getters.getCurrent("t2s")},set:function(t){this.$store.commit("updateCurrent",{key:"t2s",value:t})}}}},g=v,m=(e("23ff"),Object(a["a"])(g,f,h,!1,null,"1b78e712",null)),I=m.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DungeonOutputs"},[e("h3",[t._v("General")]),e("p",[t._v("Level Cap: "+t._s(t.levelCap))]),e("p",[t._v("Sprint FP Bonus increase: "+t._s(t._f("asPct")(t.sprintIncrease)))]),e("h3",[t._v("Free Play Gains")]),e("p",[t._v("Average BI Gains + Post-Ad Bonus: "+t._s(t._f("asSci")(t.avgBI)))]),e("p",[t._v("BI Gains from FP Increase from Sprint: "+t._s(t._f("asSci")(t.sprintBIIncrease)))]),e("h3",[t._v("Dungeon Gains")]),e("p",[t._v("Sprint Dungeon Idol %: "+t._s(t._f("asPct")(t.sprintDungeonPct)))]),e("p",[t._v("Sprint Dungeon Idol Gain: "+t._s(t._f("asSci")(t.sprintDungeonIdolGain)))]),e("p",[t._v("Deep Dungeon Cap: "+t._s(t.deepDungeonCap))]),e("p",[t._v("Deep Dungeon Idol %: "+t._s(t._f("asPct")(t.deepDungeonPct)))]),e("p",[t._v("Deep Dungeon Idol Gain: "+t._s(t._f("asSci")(t.deepDungeonIdolGain)))]),e("h3",[t._v("Comparison")]),e("label",{attrs:{for:"detailed"}},[t._v("Show all comparisons")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.showDetailed,expression:"showDetailed"}],attrs:{type:"checkbox",id:"detailed"},domProps:{checked:Array.isArray(t.showDetailed)?t._i(t.showDetailed,null)>-1:t.showDetailed},on:{change:function(n){var e=t.showDetailed,r=n.target,o=!!r.checked;if(Array.isArray(e)){var s=null,a=t._i(e,s);r.checked?a<0&&(t.showDetailed=e.concat([s])):a>-1&&(t.showDetailed=e.slice(0,a).concat(e.slice(a+1)))}else t.showDetailed=o}}}),t.showDetailed||t.sprintDungeonIdolGain<t.sprintBIIncrease?e("p",[t._v("Total Idols for dungeon to match FP Bonus: "+t._s(t._f("asSci")(t.matchFP)))]):t._e(),e("p",[t._v("Average BI to match Dungeon Sprint: "+t._s(t._f("asSci")(t.matchDungeon)))]),e("p",[t._v("DPS Cap to match Dungeon Sprint: "+t._s(t.newDPSCap))])])},_=[],C=e("5530"),D=e("2f62"),B={name:"DungeonOutputs",methods:{biLevel:function(t){return this.$store.getters.BIbyLevel(t)}},data:function(){return{showDetailed:!0}},computed:Object(C["a"])(Object(C["a"])(Object(C["a"])({},Object(D["b"])({current:function(t){return t.current}})),Object(D["b"])({constants:function(t){return t.constants}})),{},{capGrowth:function(){return this.constants.fpMax/this.constants.dpsCap},levelCap:function(){return Math.min(this.constants.fpMax,Math.floor(this.current.dpsCap*this.capGrowth))},sprintIncrease:function(){return this.current.SprintCap/this.constants.fpSprintLevels*this.constants.fpStarBonus},avgBI:function(){if(0===this.current.t2s)return"Bonus Idols not unlocked";var t=this.$store.getters.BIatLevelCap(this.levelCap).TotalBIAvg,n=t*BigInt(100*this.constants.postAdBonus)/100n,e=n*BigInt(1+.25*(this.current.t2s-1));return e},sprintBIIncrease:function(){return 0===this.current.t2s?"Bonus Idols not unlocked":this.avgBI*BigInt(Math.floor(100*this.sprintIncrease))/100n},sprintDungeonPct:function(){return this.$store.getters.dungeonPct(this.current.SprintCap)},sprintDungeonIdolGain:function(){return this.current.TotalIdols*this.sprintDungeonPct},deepDungeonCap:function(){return Math.floor(this.current.dpsCap*this.capGrowth)},deepDungeonPct:function(){return this.$store.getters.dungeonPct(this.levelCap)},deepDungeonIdolGain:function(){return this.current.TotalIdols*this.deepDungeonPct},matchFP:function(){return 0===this.current.t2s?"Bonus Idols not unlocked":this.sprintBIIncrease/BigInt(Math.floor(1e4*this.sprintDungeonPct))/10000n},matchDungeon:function(){return 0===this.current.t2s?"Bonus Idols not unlocked":this.sprintDungeonIdolGain/this.constants.postAdBonus/this.sprintIncrease},newDPSCap:function(){if(0===this.current.t2s)return"Bonus Idols not unlocked";if(this.current.dpsCap>this.constants.dpsCap)return"Impossible";var t=this.$store.getters.BIatAvgDrop(this.matchDungeon).DPSCap;return console.log(t),void 0==t?"Current DPS cap of "+this.constants.dpsCap+" cannot match Dungeons":t-t%10+10}})},S=B,P=(e("07cc"),Object(a["a"])(S,b,_,!1,null,"b68881ec",null)),w=P.exports,y={name:"cotli-dungeons",components:{dungeonInputs:I,dungeonOutputs:w}},x=y,O=Object(a["a"])(x,l,d,!1,null,null,null),M=O.exports;r["a"].use(p["a"]);var T=[{path:"/",name:"Dungeon Calculator",component:M}],$=new p["a"]({mode:"history",base:"/cotli-dungeons/",routes:T}),j=$,k=(e("7db0"),e("0e44"));r["a"].use(D["a"]);var G=new D["a"].Store({plugins:[Object(k["a"])({paths:["current"]})],state:{constants:{dpsCap:1100,fpMax:5685,fpStarBonus:.02,postAdBonus:1.25,fpSprintLevels:250,dungeonSprintLevels:500,dungeonPct:.0015,switchToSci:Math.pow(10,6)},BITable:[],current:{dpsCap:308,TotalIdols:0,SprintCap:0,t2s:9}},getters:{BIbyLevel:function(t){return function(n){return t.BITable.find((function(t){return t.Level==n}))}},BIatLevelCap:function(t){return function(n){return t.BITable.filter((function(t){return t.Level<=n})).pop()}},BIatAvgDrop:function(t){return function(n){var e=BigInt(Math.floor(n)),r=e*BigInt(1+25*(t.current.t2s-1)/100),o=t.BITable.find((function(t){return t.TotalBIAvg>r}));return void 0!=o?o:"Cannot match with current DPS Cap"}},getCurrent:function(t){return function(n){return t.current[n]}},dungeonPct:function(t){return function(n){return Math.floor(n/t.constants.dungeonSprintLevels)*t.constants.dungeonPct}}},mutations:{setupBITable:function(t){for(var n=[],e=0n,r=100;r<=t.constants.fpMax;r+=5){var o=r-95,s=r/(t.constants.fpMax/t.constants.dpsCap),a=BigInt(Math.floor(10*Math.pow(1.01,.4*o))),u=e+a;e=u,n.push({Level:r,DPSCap:s,BIGain:a,TotalBIMax:u,TotalBIAvg:4n*u/10n})}t.BITable=n},updateCurrent:function(t,n){t.current[n.key]=n.value}},actions:{},modules:{}});r["a"].config.productionTip=!1,r["a"].filter("asSci",(function(t){if(!t)return"";if(Math.log10(t.toString())>=6){var n=t.toString(),e=Math.log10(n),r=n.substring(0,1),o=n.substring(1,3);return r+"."+o+"e+"+Math.floor(e)}return t>=1e6?t.toExponential(2):t})),r["a"].filter("asPct",(function(t){return t?Math.floor(1e4*t)/100+"%":""})),new r["a"]({router:j,store:G,render:function(t){return t(c)},created:function(){G.commit("setupBITable")}}).$mount("#app")},"85ec":function(t,n,e){},"87e0":function(t,n,e){},dc02:function(t,n,e){}});
//# sourceMappingURL=app.f93c1b5c.js.map