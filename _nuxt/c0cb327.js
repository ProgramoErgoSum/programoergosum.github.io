(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{910:function(t,e,o){"use strict";o.r(e);o(189);var r={name:"Item",components:{},props:{blog:{type:Object,required:!0}},computed:{absoluteUrlImage:function(){return"".concat(this.$store.state.blogs.repo_raw,"/").concat(this.blog.alias,"/").concat(this.blog.image)}}},n=o(15),l=o(20),c=o.n(l),m=o(171),d=o(75),h=o(573),v=o(574),f=o(575),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{to:"/blog/"+t.blog.alias,flat:"",tile:"",nuxt:""}},[o("v-container",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4"}},[o("VImageLazy",{attrs:{src:t.absoluteUrlImage,title:t.blog.title,height:185}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"8",lg:"8"}},[o("v-card-title",{attrs:{"primary-title":""}},[o("h3",{staticClass:"mb-4 title"},[t._v("\n            "+t._s(t.blog.title)+"\n          ")]),t._v(" "),o("div",{staticClass:"mb-6 body-1 font-weight-light"},[t._v("\n            "+t._s(t.blog.description)+"\n          ")])]),t._v(" "),o("v-card-text",[o("Posted",{attrs:{cdate:t.blog.date.cdate,mdate:t.blog.date.mdate}})],1)],1)],1)],1)],1)}),[],!1,null,"6f523c31",null),w=component.exports;c()(component,{VCard:m.a,VCardText:d.b,VCardTitle:d.c,VCol:h.a,VContainer:v.a,VRow:f.a});var _={components:{Item:w},asyncData:function(t){var e=t.store;return{metas:e.state.metas.blog,blogs:e.state.blogs.list}},data:function(){return{search:"",maxItems:0,pagItems:5}},computed:{filter:function(){var t=this.blogs;if(""!==this.search&&this.search.length>2){var e=this.search.toLowerCase();t=t.filter((function(t){var title=t.title.toLowerCase(),o=t.description.toLowerCase();return-1!==title.search(e)||-1!==o.search(e)}))}return t}},created:function(){this.maxItems=this.blogs.length},head:function(){var title=this.metas.title,t=this.metas.description,image="".concat("https://www.programoergosum.es").concat(this.metas.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},x=o(109),I=o(576),C=o(924),V=Object(n.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Title",{attrs:{title:t.metas.title,description:t.metas.description,image:t.metas.image}}),t._v(" "),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{messages:t.filter.length+" artículos en el blog",label:"Buscar",outlined:"",rounded:"","append-icon":"mdi-magnify","validate-on-blur":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t._l(t.filter.slice(0,t.pagItems),(function(e){return[o("v-col",{key:e.alias,attrs:{cols:"12"}},[o("Item",{attrs:{blog:e}}),t._v(" "),o("v-divider",{staticClass:"mt-6"})],1)]})),t._v(" "),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.pagItems<t.maxItems,expression:"pagItems < maxItems"}],attrs:{depressed:"",small:""},on:{click:function(e){t.pagItems+=5}}},[t._v("\n          Mostrar más\n        ")])],1)],2)],1)],1)}),[],!1,null,"dd304d30",null);e.default=V.exports;c()(V,{VBtn:x.a,VCol:h.a,VContainer:v.a,VDivider:I.a,VRow:f.a,VTextField:C.a})}}]);