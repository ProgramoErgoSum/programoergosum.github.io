(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{584:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return v}));var o=r(586),n=r(1),c=Object(n.g)("v-card__actions"),l=Object(n.g)("v-card__subtitle"),d=Object(n.g)("v-card__text"),v=Object(n.g)("v-card__title");o.a},586:function(t,e,r){"use strict";r(14),r(9),r(8),r(6),r(10);var o=r(3),n=(r(18),r(587),r(172)),c=r(589),l=r(41),d=r(7);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},587:function(t,e,r){var content=r(588);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e23b7040",content,!0,{sourceMap:!1})},588:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},599:function(t,e,r){"use strict";var o={name:"Extra",props:{extra:{type:Object,required:!0}}},n=r(15),c=r(19),l=r.n(c),d=r(160),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body-2 font-weight-regular"},[t.extra.level?r("div",{staticClass:"d-inline-flex ma-2"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[t._v("mdi-school-outline")]),t._v("\n    "+t._s(t.extra.level)+"\n  ")],1):t._e(),t._v(" "),t.extra.duration?r("div",{staticClass:"d-inline-flex ma-2"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[t._v("mdi-clock-outline")]),t._v("\n    "+t._s(t.extra.duration)+"\n  ")],1):t._e(),t._v(" "),t.extra.videos?r("div",{staticClass:"d-inline-flex ma-2"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[t._v("mdi-video-outline")]),t._v("\n    "+t._s(t.extra.videos)+"\n  ")],1):t._e()])}),[],!1,null,"e306f206",null),v=component.exports;l()(component,{VIcon:d.a});var h={name:"Item",components:{Extra:v},props:{tutorial:{type:Object,required:!0}},computed:{absoluteUrlImage:function(){return"".concat(this.$store.state.tutoriales.repo_raw,"/").concat(this.tutorial.alias,"/").concat(this.tutorial.image)}}},m=r(586),_=r(584),f=Object(n.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{to:"/tutoriales/"+t.tutorial.alias,outlined:"",nuxt:""}},[r("VImageLazy",{attrs:{src:t.absoluteUrlImage,title:t.tutorial.title,height:220}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("h3",{staticClass:"mb-4 font-weight-medium body-1"},[t._v(t._s(t.tutorial.title))]),t._v(" "),r("div",{staticClass:"mb-2 body-2"},[t._v(t._s(t.tutorial.description))])]),t._v(" "),r("v-card-text",{staticClass:"text-center"},[r("Extra",{attrs:{extra:t.tutorial.extra}})],1)],1)}),[],!1,null,"a58be622",null);e.a=f.exports;l()(f,{VCard:m.a,VCardText:_.a,VCardTitle:_.b})},600:function(t,e,r){"use strict";var o={name:"Categories",components:{},props:{tags:{type:Array,required:!0}}},n=r(15),c=r(19),l=r.n(c),d=r(586),v=r(584),h=r(549),m=r(160),_=r(161),f=r(105),x=r(60),y=r(164),C=r(86),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",color:"transparent"}},[r("v-card-title",{staticClass:"px-1"},[r("span",{staticClass:"subtitle-1 font-weight-light"},[t._v("Tecnología")])]),t._v(" "),r("v-card-text",{staticClass:"px-1"},[r("v-list",{staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.tags.filter((function(t){return"technology"===t.category&&t.visible})),(function(e){return[r("v-list-item",{key:e.alias,staticClass:"pa-0",attrs:{to:"/tutoriales/tags/"+e.alias}},[r("v-list-item-icon",{staticClass:"ml-1 mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.name)}})],1)],1)]}))],2)],1)],1),t._v(" "),r("v-divider",{staticClass:"my-1"}),t._v(" "),r("v-card-title",{staticClass:"px-1"},[r("span",{staticClass:"subtitle-1 font-weight-light"},[t._v("Programación")])]),t._v(" "),r("v-card-text",{staticClass:"px-1"},[r("v-list",{staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.tags.filter((function(t){return"software"===t.category&&t.visible})),(function(e){return[r("v-list-item",{key:e.alias,staticClass:"pa-0",attrs:{to:"/tutoriales/tags/"+e.alias}},[r("v-list-item-icon",{staticClass:"ml-1 mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.name)}})],1)],1)]}))],2)],1)],1),t._v(" "),r("v-divider",{staticClass:"my-1"}),t._v(" "),r("v-card-title",{staticClass:"px-1"},[r("span",{staticClass:"subtitle-1 font-weight-light"},[t._v("Robótica")])]),t._v(" "),r("v-card-text",{staticClass:"px-1"},[r("v-list",{staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.tags.filter((function(t){return"hardware"===t.category&&t.visible})),(function(e){return[r("v-list-item",{key:e.alias,staticClass:"pa-0",attrs:{to:"/tutoriales/tags/"+e.alias}},[r("v-list-item-icon",{staticClass:"ml-1 mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.name)}})],1)],1)]}))],2)],1)],1)],1)}),[],!1,null,"048a08f0",null);e.a=component.exports;l()(component,{VCard:d.a,VCardText:v.a,VCardTitle:v.b,VDivider:h.a,VIcon:m.a,VList:_.a,VListItem:f.a,VListItemContent:x.a,VListItemGroup:y.a,VListItemIcon:C.a,VListItemTitle:x.c})},917:function(t,e,r){"use strict";r.r(e);r(33),r(36),r(175),r(173),r(29),r(112);var o=r(600),n=r(599),c={components:{Categories:o.a,Item:n.a},asyncData:function(t){var e=t.store,r=t.params,o=e.state.tutoriales.tags.find((function(t){return t.alias===r.alias}));return{tag:o,tags:e.state.tutoriales.tags,tutoriales:e.state.tutoriales.list,breadcrumbs:[{text:"Tutoriales",disabled:!1,to:"/tutoriales"},{text:o.name,disabled:!0,to:""}]}},data:function(){return{search:"",pagItems:24,tutorialesByTag:[]}},computed:{filter:function(){var t=this,e=this.tutorialesByTag;return""!==this.search&&this.search.length>3&&(e=e.filter((function(e){return-1!==e.title.search(new RegExp(t.search,"i"))||-1!==e.description.search(new RegExp(t.search,"i"))}))),e}},validate:function(t){var e=t.store,r=t.params;return e.state.tutoriales.tags.find((function(t){return t.alias===r.alias}))},created:function(){var t=this,e=this.$store.state.tutoriales.tags.find((function(e){return e.alias===t.tag.alias})).name;this.tutorialesByTag=this.tutoriales.filter((function(t){if(t.tags.technology.concat(t.tags.hardware).concat(t.tags.software).concat(t.tags.level).concat(t.tags.others).includes(e))return t}))},head:function(){var title=this.tag.title,t=this.tag.description,image="".concat("https://www.programoergosum.es").concat(this.tag.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},l=r(15),d=r(19),v=r.n(d),h=r(351),m=r(545),_=r(546),f=r(547),x=r(922),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Title",{attrs:{title:t.tag.title,description:t.tag.description,image:t.tag.image,breadcrumbs:t.breadcrumbs}}),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"2",xl:"2"}},[r("div",{staticClass:"sticky-top-disabled"},[r("v-text-field",{attrs:{messages:t.filter.length+" tutoriales",label:"Buscar",outlined:"","append-icon":"mdi-magnify","validate-on-blur":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("categories",{staticClass:"hidden-md-and-down",attrs:{tags:t.tags}})],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"10",xl:"10"}},[r("v-row",[t._l(t.filter.slice(0,t.pagItems),(function(t){return r("v-col",{key:t.alias,staticClass:"pa-0 px-1 pb-2",attrs:{xs:"12",sm:"6",md:"4",lg:"4",xl:"3"}},[r("Item",{attrs:{tutorial:t}})],1)})),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t.filter.length>t.pagItems?r("v-btn",{attrs:{depressed:"",small:""},on:{click:function(e){t.pagItems+=24}}},[t._v("\n              Mostrar más\n            ")]):t._e()],1)],2)],1)],1)],1)],1)}),[],!1,null,"3e903f09",null);e.default=component.exports;v()(component,{VBtn:h.a,VCol:m.a,VContainer:_.a,VRow:f.a,VTextField:x.a})}}]);