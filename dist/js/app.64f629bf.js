(function(t){function e(e){for(var a,c,s=e[0],o=e[1],l=e[2],d=0,m=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2583:function(t,e,n){"use strict";n("4c7d")},"345b":function(t,e,n){},"4c7d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=(n("b0c0"),{class:"wrapper"}),r={class:"content container"},c={class:"content__column"},s=Object(a["m"])("h1",null,"Калькулятор ипотеки",-1),o={class:"content-inputs"},l={class:"input-slider-group"},u={class:"range-info"},d=Object(a["m"])("div",{class:"range-label"},"Стоимость недвижимости",-1),m={class:"input-slider-group"},b={class:"range-info"},f=Object(a["m"])("div",{class:"range-label"},"Первоначальный взнос",-1),p={class:"input-slider-group"},v=Object(a["m"])("div",{class:"range-info"},[Object(a["m"])("div",{class:"range-label"},"Срок кредита")],-1),h={class:"content__bank-selection select-bank"},O=Object(a["m"])("h2",{class:"select-bank__title"},"Выбрать банк",-1),j={class:"content__column"},k={class:"show-items"},y={class:"show-item"},w=Object(a["m"])("div",{class:"show-item__label"},"Сумма кредита",-1),_={class:"show-item__result"},M={class:"show-item"},A=Object(a["m"])("div",{class:"show-item__label"},"Ежемесячный платеж",-1),g={class:"show-item__result"},C={class:"show-item"},I=Object(a["m"])("div",{class:"show-item__label"},"Рекомендуемый доход",-1),V={class:"show-item__result"};function P(t,e,n,P,x,F){var B=Object(a["M"])("el-slider"),S=Object(a["M"])("app-select-bank-item");return Object(a["D"])(),Object(a["i"])("div",i,[Object(a["m"])("div",r,[Object(a["m"])("div",c,[s,Object(a["m"])("div",o,[Object(a["m"])("div",l,[Object(a["m"])("div",u,[d,Object(a["bb"])(Object(a["m"])("input",{class:"range-input",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return x.totalCost=t})},null,512),[[a["W"],x.totalCost,void 0,{number:!0}]])]),Object(a["m"])(B,{modelValue:x.totalCost,"onUpdate:modelValue":e[2]||(e[2]=function(t){return x.totalCost=t}),max:3e6,step:500,"show-tooltip":!1,label:"Стоимость недвижимости"},null,8,["modelValue"])]),Object(a["m"])("div",m,[Object(a["m"])("div",b,[f,Object(a["bb"])(Object(a["m"])("input",{class:"range-input",type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return x.initialFee=t})},null,512),[[a["W"],x.initialFee,void 0,{number:!0}]])]),Object(a["m"])(B,{modelValue:x.initialFee,"onUpdate:modelValue":e[4]||(e[4]=function(t){return x.initialFee=t}),modelModifiers:{number:!0},max:2e6,step:500,"show-tooltip":!1,label:"Первоначальный взнос"},null,8,["modelValue"])]),Object(a["m"])("div",p,[v,Object(a["m"])(B,{modelValue:x.creditTerm,"onUpdate:modelValue":e[5]||(e[5]=function(t){return x.creditTerm=t}),max:228,min:12,step:12,"show-tooltip":!1,label:"Срок кредита",marks:x.dataMarks.marks,class:[{"el-slider-marks-mobile":F.handlerResize}],id:"el-slider-marks"},null,8,["modelValue","marks","class"])])]),Object(a["m"])("div",h,[O,(Object(a["D"])(!0),Object(a["i"])(a["b"],null,Object(a["K"])(x.selectBanks,(function(t){return Object(a["D"])(),Object(a["i"])(S,{rate:t.rate,key:t.name,class:{active:t.isActive},onActiveBank:function(e){return F.isActiveBank(t)}},{default:Object(a["ab"])((function(){return[Object(a["l"])(Object(a["Q"])(t.name),1)]})),_:2},1032,["rate","class","onActiveBank"])})),128))])]),Object(a["m"])("div",j,[Object(a["m"])("div",k,[Object(a["m"])("div",y,[w,Object(a["m"])("div",_,Object(a["Q"])(x.currency(x.totalAmountOfCredit)),1)]),Object(a["m"])("div",M,[A,Object(a["m"])("div",g,Object(a["Q"])(x.currency(x.totalMounthlyPayment)),1)]),Object(a["m"])("div",C,[I,Object(a["m"])("div",V,Object(a["Q"])(x.currency(x.totalRecommendedIncome)),1)])])])])])}var x=n("2909"),F=(n("7db0"),n("d81d"),n("07ac"),n("159b"),Object(a["eb"])("data-v-6226d69a"));Object(a["G"])("data-v-6226d69a");var B={class:"select-bank__name"},S={class:"select-bank__value"};Object(a["E"])();var T=F((function(t,e,n,i,r,c){return Object(a["D"])(),Object(a["i"])("div",{class:"select-bank__item",onClick:e[1]||(e[1]=function(e){return t.$emit("active-bank")})},[Object(a["m"])("div",B,[Object(a["L"])(t.$slots,"default")]),Object(a["m"])("div",S,Object(a["Q"])(n.rate)+"%",1)])})),U=(n("a9e3"),{emits:["active-bank"],data:function(){return{isActive:!1}},props:{rate:{type:Number,required:!0}}});n("2583");U.render=T,U.__scopeId="data-v-6226d69a";var W=U,Q=n("3fd4"),R=new Intl.NumberFormat("ua-UA",{currency:"UAH",style:"currency"});function D(t){return R.format(t)}var E={data:function(){return{totalCost:0,initialFee:0,creditTerm:12,percent:7,totalAmountOfCredit:0,totalMounthlyPayment:0,totalRecommendedIncome:0,dataMarks:{marks:{12:"12",24:"24",36:"36",48:"48",60:"60",72:"72",84:"84",96:"96",108:"108",120:"120",132:"132",144:"144",156:"156",168:"168",180:"180",192:"192",204:"204",216:"216",228:"228"},arrMarksItems:[],dataMarksInfo:[]},selectBanks:[{name:"Приватбанк",rate:7,isActive:!0},{name:"Альфа-банк",rate:7.5,isActive:!1},{name:"Мегабанк",rate:5.7,isActive:!1},{name:"ОТП банк",rate:8.1,isActive:!1},{name:"Ощадбанк",rate:7.3,isActive:!1}],currency:D,windowWidth:window.innerWidth}},methods:{isActiveBank:function(t){if(!t.isActive){var e=this.selectBanks.find((function(t){return t.isActive}));e.isActive=!1,t.isActive=!0,this.percent=t.rate}}},computed:{handlerResize:function(){return this.windowWidth<550}},mounted:function(){var t,e=this;(t=this.dataMarks.arrMarksItems).push.apply(t,Object(x["a"])(document.querySelectorAll(".el-slider__marks-stop"))),this.dataMarks.dataMarksInfo=this.dataMarks.arrMarksItems.map((function(t){return{item:t}}));var n=Object.values(this.dataMarks.marks).map((function(t){return+t}));this.dataMarks.dataMarksInfo.forEach((function(t,e){return t.marksValue=n[e]})),window.onresize=function(t){return e.windowWidth=window.innerWidth}},watch:{creditTerm:function(t){this.dataMarks.dataMarksInfo.forEach((function(e){return t>=e.marksValue?e.item.classList.add("done"):e.item.classList.remove("done")}))}},updated:function(){this.totalAmountOfCredit=this.totalCost-this.initialFee,this.totalMounthlyPayment=Math.round((this.totalAmountOfCredit+this.totalAmountOfCredit/100*this.percent/12*this.creditTerm)/this.creditTerm),this.totalRecommendedIncome=this.totalMounthlyPayment+this.totalMounthlyPayment/100*35,this.totalCost<this.initialFee&&(this.initialFee=this.totalCost)},name:"App",components:{ElSlider:Q["a"],AppSelectBankItem:W}};n("7ff2");E.render=P;var z=E,L=Object(a["h"])(z);L.mount("#app")},"7ff2":function(t,e,n){"use strict";n("345b")}});
//# sourceMappingURL=app.64f629bf.js.map