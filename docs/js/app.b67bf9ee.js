(function(e){function a(a){for(var o,l,p=a[0],i=a[1],s=a[2],m=0,c=[];m<p.length;m++)l=p[m],Object.prototype.hasOwnProperty.call(t,l)&&t[l]&&c.push(t[l][0]),t[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);g&&g(a);while(c.length)c.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,p=1;p<n.length;p++){var i=n[p];0!==t[i]&&(o=!1)}o&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},t={app:0},r=[];function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],i=p.push.bind(p);p.push=a,p=p.slice();for(var s=0;s<p.length;s++)a(p[s]);var g=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"547c":function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);var o=n("2b0e"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-app",{attrs:{id:"app"}},[n("v-app-bar",{attrs:{app:"",height:"64"}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[e._v("Looty Boi")]),n("span",{staticClass:"font-weight-light"},[e._v(" - Pathfinder 2e Treasure Generator")])])],1),n("v-content",{staticClass:"content"},[n("v-switch",{staticClass:"dt",attrs:{inset:"",color:"primary",label:"Dark Theme"},on:{change:e.edgy},model:{value:e.darkness,callback:function(a){e.darkness=a},expression:"darkness"}}),n("v-slider",{attrs:{label:"Party Level",step:"1","thumb-label":"always",max:"20",ticks:""},model:{value:e.level,callback:function(a){e.level=a},expression:"level"}}),n("v-slider",{attrs:{label:"Party Size",step:"1","thumb-label":"always",max:"20",ticks:""},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}}),n("v-slider",{attrs:{color:e.color,label:"XP Budget",step:"20","thumb-label":"always",max:"160",ticks:""},model:{value:e.xp,callback:function(a){e.xp=a},expression:"xp"}}),n("v-slider",{attrs:{color:e.color,label:"Bonus XP Budget",step:"10","thumb-label":"always",max:"500"},model:{value:e.xpbonus,callback:function(a){e.xpbonus=a},expression:"xpbonus"}}),n("v-btn",{staticClass:"btn",attrs:{color:"primary"},on:{click:e.genloot}},[e._v("Generate")]),n("v-btn",{staticClass:"btn",attrs:{color:"secondary"},on:{click:e.clear}},[e._v("Clear")]),n("div",{staticClass:"loots"},e._l(e.lootItems,(function(e){return n("div",[n("Loot",{attrs:{loot:e}})],1)})),0)],1)],1)},r=[],l=[{consumables:[],permanent:[]},{consumables:[{name:"Tindertwig Tool",gp:.2,page:"554"},{name:"Snake oil Tool",gp:2,page:"554"},{name:"Shining ammunition Ammunition",gp:3,page:"560"},{name:"Acid flask, lesser Bomb",gp:3,page:"544"},{name:"Alchemist’s fire, lesser Bomb",gp:3,page:"545"},{name:"Bottled lightning, lesser Bomb",gp:3,page:"545"},{name:"Frost vial, lesser Bomb",gp:3,page:"545"},{name:"Tanglefoot bag, lesser Bomb",gp:3,page:"545"},{name:"Thunderstone, lesser Bomb",gp:3,page:"545"},{name:"Feather token, ladder Consumable",gp:3,page:"570"},{name:"Holy water Consumable",gp:3,page:"571"},{name:"Runestone Consumable",gp:3,page:"571"},{name:"Unholy water Consumable",gp:3,page:"571"},{name:"Antidote, lesser Elixir",gp:3,page:"546"},{name:"Antiplague, lesser Elixir",gp:3,page:"546"},{name:"Cheetah’s elixir, lesser Elixir",gp:3,page:"547"},{name:"Elixir of life, minor Elixir",gp:3,page:"548"},{name:"Leaper’s elixir, lesser Elixir",gp:3,page:"549"},{name:"Nectar of purification Oil",gp:3,page:"561"},{name:"Arsenic Poison",gp:3,page:"550"},{name:"Alarm snare Snare",gp:3,page:"589"},{name:"Caltrop snare Snare",gp:3,page:"590"},{name:"Hampering snare Snare",gp:3,page:"590"},{name:"Marking snare Snare",gp:3,page:"590"},{name:"Signaling snare Snare",gp:3,page:"591"},{name:"Spike snare Snare",gp:3,page:"591"},{name:"Owlbear claw Talisman",gp:3,page:"569"},{name:"Smokestick, lesser Tool",gp:3,page:"554"},{name:"Sunrod Tool",gp:3,page:"554"},{name:"Bestial mutagen, lesser Elixir",gp:4,page:"546"},{name:"Cognitive mutagen, lesser Elixir",gp:4,page:"547"},{name:"Eagle-eye elixir, lesser Elixir",gp:4,page:"548"},{name:"Juggernaut mutagen, lesser Elixir",gp:4,page:"548"},{name:"Quicksilver mutagen, lesser Elixir",gp:4,page:"549"},{name:"Serene mutagen, lesser Elixir",gp:4,page:"549"},{name:"Silvertongue mutagen, lesser Elixir",gp:4,page:"550"},{name:"Giant centipede venom Poison",gp:4,page:"551"},{name:"Healing potion, minor Potion",gp:4,page:"563"},{name:"Scroll of 1st-level spell Scroll",gp:4,page:"565"},{name:"Potency crystal Talisman",gp:4,page:"569"},{name:"Wolf fang Talisman",gp:4,page:"570"}],permanent:[{name:"Aeon stone, dull gray U Worn",gp:9,page:"604"},{name:"Splint mail Armor",gp:13,page:"276"},{name:"Everburning torch Held",gp:15,page:"573"},{name:"Half plate Armor",gp:18,page:"276"}]},{consumables:[{name:"Belladonna Poison",gp:5,page:"551"},{name:"Feather token, holly bush Consumable",gp:6,page:"570"},{name:"Darkvision elixir, lesser Elixir",gp:6,page:"547"},{name:"Infiltrator’s elixir Elixir",gp:6,page:"548"},{name:"Oil of weightlessness Oil",gp:6,page:"562"},{name:"Black adder venom Poison",gp:6,page:"551"},{name:"Hunter’s bane Talisman",gp:6,page:"567"},{name:"Jade cat Talisman",gp:6,page:"568"},{name:"Monkey pin Talisman",gp:6,page:"568"},{name:"Silversheen Tool",gp:6,page:"554"},{name:"Bravo’s brew, lesser Elixir",gp:7,page:"547"},{name:"Cat’s eye elixir Elixir",gp:7,page:"547"},{name:"Comprehension elixir, lesser Elixir",gp:7,page:"547"},{name:"Oil of potency Oil",gp:7,page:"562"},{name:"Lethargy poison U Poison",gp:7,page:"552"},{name:"Bronze bull pendant Talisman",gp:7,page:"566"},{name:"Crying angel pendant Talisman",gp:7,page:"566"},{name:"Effervescent ampoule Talisman",gp:7,page:"566"},{name:"Mesmerizing opal Talisman",gp:7,page:"568"},{name:"Onyx panther Talisman",gp:7,page:"569"},{name:"Savior spike Talisman",gp:7,page:"569"}],permanent:[{name:"Wayfinder U Worn",gp:28,page:"617"},{name:"Full plate Armor",gp:30,page:"276"},{name:"Cold iron buckler, low-grade Shield",gp:30,page:"586"},{name:"Silver buckler, low-grade Shield",gp:30,page:"587"},{name:"Brooch of shielding U Worn",gp:30,page:"607"},{name:"Hand of the mage Worn",gp:30,page:"611"},{name:"Hat of disguise Worn",gp:30,page:"611"},{name:"Wondrous figurine, onyx dog Held",gp:34,page:"576"},{name:"Cold iron shield, low-grade Shield",gp:34,page:"586"},{name:"Silver shield, low-grade Shield",gp:34,page:"587"},{name:"+1 weapon potency Rune",gp:35,page:"581"},{name:"+1 weapon Weapon",gp:35,page:"599"},{name:"+1 handwraps of mighty blows Worn",gp:35,page:"611"},{name:"Cold iron weapon, low-grade Weapon",gp:44,page:"599"},{name:"Silver weapon, low-grade Weapon",gp:44,page:"599"}]},{consumables:[{name:"Feather token, bird Consumable",gp:8,page:"570"},{name:"Feather step stone Talisman",gp:8,page:"567"},{name:"Oil of mending Oil",gp:9,page:"561"},{name:"Beacon shot Ammunition",gp:10,page:"559"},{name:"Vine arrow Ammunition",gp:10,page:"560"},{name:"Acid flask, moderate Bomb",gp:10,page:"544"},{name:"Alchemist’s fire, moderate Bomb",gp:10,page:"545"},{name:"Bottled lightning, moderate Bomb",gp:10,page:"545"},{name:"Frost vial, moderate Bomb",gp:10,page:"545"},{name:"Tanglefoot bag, moderate Bomb",gp:10,page:"545"},{name:"Thunderstone, moderate Bomb",gp:10,page:"545"},{name:"Feather token, chest Consumable",gp:10,page:"570"},{name:"Cytillesh oil Poison",gp:10,page:"551"},{name:"Graveroot Poison",gp:10,page:"552"},{name:"Sleep arrow Ammunition",gp:11,page:"560"},{name:"Potion of water breathing Potion",gp:11,page:"564"},{name:"Spellstrike ammunition",gp:12,page:"560"},{name:"Bestial mutagen, moderate Elixir",gp:12,page:"546"},{name:"Cognitive mutagen, moderate Elixir",gp:12,page:"547"},{name:"Juggernaut mutagen, moderate Elixir",gp:12,page:"548"},{name:"Quicksilver mutagen, moderate Elixir",gp:12,page:"549"},{name:"Serene mutagen, moderate Elixir",gp:12,page:"549"},{name:"Silvertongue mutagen, moderate Elixir",gp:12,page:"550"},{name:"Healing potion, lesser Potion",gp:12,page:"563"},{name:"Scroll of",gp:12,page:"565"}],permanent:[{name:"Slick Rune",gp:45,page:"583"},{name:"Fighter’s fork Weapon",gp:50,page:"600"},{name:"Doubling rings Worn",gp:50,page:"609"},{name:"Hat of the magi Worn",gp:50,page:"611"},{name:"Persona mask Worn",gp:50,page:"613"},{name:"Bracers of missile deflection Worn",gp:52,page:"607"},{name:"Thurible of revelation, lesser Held",gp:55,page:"575"},{name:"Returning Rune",gp:55,page:"584"},{name:"Shadow Rune",gp:55,page:"583"},{name:"Channel protection amulet U Worn",gp:56,page:"608"},{name:"Bracelet of dashing Worn",gp:58,page:"607"},{name:"Maestro’s instrument, lesser Held",gp:60,page:"574"},{name:"Staff of fire Staff",gp:60,page:"594"},{name:"Wand of",gp:60,page:"597"},{name:"Retribution axe Weapon",gp:60,page:"602"},{name:"Coyote cloak Worn",gp:60,page:"609"},{name:"Crafter’s eyepiece Worn",gp:60,page:"609"},{name:"Dancing scarf Worn",gp:60,page:"609"},{name:"Pendant of the occult Worn",gp:60,page:"613"},{name:"Tracker’s goggles Worn",gp:60,page:"616"},{name:"Ventriloquist’s ring Worn",gp:60,page:"617"}]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]},{consumables:[],permanent:[]}],p=l,i={getLoots:function(e,a,n){console.log();var o,t=e/100/10,r=[{},{total:175,adder:10},{total:300,adder:18}],l=r[a].total*t+(n-4)*r[a].adder;console.log(e,a,n,t,l);var p={items:{}};do{o=this.pickRandomLoot(a,l),o&&(p.items[o.name]?p.items[o.name].qty=p.items[o.name].qty+1:p.items[o.name]={qty:1,gp:o.gp,page:o.page},l-=o.gp)}while(o);return p.gold=Math.floor(l),l=10*(l-Math.floor(l)),p.silver=Math.floor(l),l=10*(l-Math.floor(l)),p.copper=Math.floor(l),p.total=(r[a].total*t+(n-4)*r[a].adder).toFixed(2),p},pickRandomLoot:function(e,a){var n=p[e].consumables[0].gp,o=p[e].permanent[0].gp,t=(p[e].consumables[p[e].consumables.length-1].gp,p[e].permanent[p[e].permanent.length-1].gp,p[e+1].consumables[0].gp),r=p[e+1].permanent[0].gp,l=(p[e+1].consumables[p[e+1].consumables.length-1].gp,p[e+1].permanent[p[e+1].permanent.length-1].gp,!0);return n>a&&t>a?null:(l=!(o>a&&r>a)&&!!Math.round(Math.random()),l?i(r>a?e:e+1,"permanent",a):i(t>a?e:e+1,"consumables",a));function i(e,a,n){var o;do{o=p[e][a][Math.round(Math.random()*(p[e][a].length-1))]}while(n<o.gp);return o}}},s=i,g=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-card",{staticClass:"loot"},[n("v-card-title",{staticClass:"v-title"},[e._v("Lvl "+e._s(e.loot.level)+" Loot ["+e._s(e.loot.xp)+" xp, "+e._s(e.loot.size)+" Players]")]),n("v-card-text",[e.loot.gold||e.loot.silver||e.loot.copper?n("v-card",{staticClass:"item"},[n("b",[e._v("Money")]),n("v-divider"),n("div",[n("span",[n("b",[e._v(e._s(e.loot.gold)+" "),n("v-icon",{staticStyle:{color:"gold"}},[e._v("mdi-coin-outline")])],1),e._v(", "),n("b",[e._v(e._s(e.loot.silver)+" "),n("v-icon",{staticStyle:{color:"silver"}},[e._v("mdi-coin-outline")])],1),e._v(", "),n("b",[e._v(e._s(e.loot.copper)+" "),n("v-icon",{staticStyle:{color:"sandybrown"}},[e._v("mdi-coin-outline")])],1)])])],1):e._e(),e._l(e.loot.items,(function(a,o){return n("div",[n("v-card",{staticClass:"item"},[n("v-badge",{scopedSlots:e._u([{key:"badge",fn:function(){return[e._v(" x"+e._s(a.qty)+" ")]},proxy:!0}],null,!0)},[n("span",{staticClass:"inner"},[n("b",[e._v(e._s(o))]),n("v-divider"),n("div",[n("span",[e._v("Total Worth: "+e._s((a.gp*a.qty).toFixed(1))+" gp, ")]),n("span",[e._v("Page: "+e._s(a.page))])])],1)])],1)],1)}))],2),n("div",[e._v("Loot Worth")]),e._v(" "),n("div",[n("b",[e._v(" "+e._s(e.loot.total)),n("v-icon",{staticStyle:{color:"gold"}},[e._v("mdi-coin-outline")])],1)])],1)},m=[],c={name:"Loot",props:{loot:Object}},u=c,d=(n("66e4"),n("2877")),v=n("6544"),b=n.n(v),f=n("4ca6"),h=n("b0af"),x=n("99d9"),y=n("ce7e"),k=n("132d"),S=Object(d["a"])(u,g,m,!1,null,"a55a2174",null),w=S.exports;b()(S,{VBadge:f["a"],VCard:h["a"],VCardText:x["a"],VCardTitle:x["b"],VDivider:y["a"],VIcon:k["a"]});var _={name:"app",data(){return{lootItems:[],xp:80,xpbonus:0,level:1,size:4,darkness:!0}},created(){this.$vuetify.theme.dark=this.darkness;var e=localStorage.getItem("Loot");e&&(this.lootItems=JSON.parse(e))},components:{Loot:w},computed:{color(){return this.xp<=40?"pink":this.xp<80?"teal":this.xp<120?"green":this.xp<160?"orange":"red"}},methods:{genloot:function(){var e=s.getLoots(this.xp+this.xpbonus,this.level,this.size);e.level=this.level,e.xp=this.xp,e.size=this.size,console.log(e),this.lootItems.unshift(e),localStorage.setItem("Loot",JSON.stringify(this.lootItems))},clear(){this.lootItems=[],localStorage.setItem("Loot",this.lootItems)},edgy(){return this.$vuetify.theme.dark=this.darkness}}},C=_,T=(n("7c55"),n("7496")),B=n("40dc"),E=n("8336"),W=n("a75b"),P=n("ba0d"),O=n("b73d"),A=n("2a7f"),M=Object(d["a"])(C,t,r,!1,null,null,null),L=M.exports;b()(M,{VApp:T["a"],VAppBar:B["a"],VBtn:E["a"],VContent:W["a"],VSlider:P["a"],VSwitch:O["a"],VToolbarTitle:A["a"]});var V=n("9483");Object(V["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var j=n("f309");o["a"].use(j["a"]);var F=new j["a"]({icons:{iconfont:"mdi"}});o["a"].config.productionTip=!1,new o["a"]({vuetify:F,render:function(e){return e(L)}}).$mount("#app")},"57c3":function(e,a,n){},"66e4":function(e,a,n){"use strict";var o=n("547c"),t=n.n(o);t.a},"7c55":function(e,a,n){"use strict";var o=n("57c3"),t=n.n(o);t.a}});
//# sourceMappingURL=app.b67bf9ee.js.map