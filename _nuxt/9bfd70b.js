(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{907:function(t,e,r){"use strict";r.r(e);var c={name:"Item",props:{actividad:{type:Object,required:!0}},computed:{absoluteUrlImage:function(){return"".concat(this.$store.state.actividades.repo_raw,"/").concat(this.actividad.alias,"/").concat(this.actividad.image)}}},n=r(15),d=r(20),o=r.n(d),v=r(171),l=r(75),m=r(576),h=r(170),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{to:"/actividades/"+t.actividad.alias,nuxt:""}},[r("VImageLazy",{attrs:{src:t.absoluteUrlImage,title:t.actividad.title,height:300}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("h3",{staticClass:"mb-4 title"},[t._v(t._s(t.actividad.title))]),t._v(" "),r("div",{staticClass:"mb-2 subtitle-1"},[t._v(t._s(t.actividad.description))])]),t._v(" "),r("v-divider",{staticClass:"mx-3"}),t._v(" "),t.actividad.extra?r("v-card-text",[r("p",[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-map")]),t._v("\n      "+t._s(t.actividad.extra.address)+"\n    ")],1),t._v(" "),r("p",[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-calendar")]),t._v("\n      "+t._s(t.actividad.extra.calendar.day)+"\n    ")],1),t._v(" "),r("p",[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-clock")]),t._v("\n      "+t._s(t.actividad.extra.calendar.hour)+"\n    ")],1)]):t._e()],1)}),[],!1,null,"624b99ed",null),_=component.exports;o()(component,{VCard:v.a,VCardText:l.b,VCardTitle:l.c,VDivider:m.a,VIcon:h.a});var w={components:{Item:_},asyncData:function(t){var e=t.store;return{metas:e.state.metas.actividades,actividades:e.state.actividades.list}},computed:{background:function(){return this.$vuetify.theme.isDark?"grey darken-3":"grey lighten-3"}},head:function(){var title=this.metas.title,t=this.metas.description,image="".concat("https://www.programoergosum.es").concat(this.metas.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},f=r(573),y=r(574),x=r(575),C=Object(n.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Title",{attrs:{title:this.metas.title,description:this.metas.description,image:this.metas.image}}),this._v(" "),e("v-container",{attrs:{fluid:""}},[e("v-row",this._l(this.actividades,(function(t){return e("v-col",{key:t.alias,attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"4"}},[e("Item",{attrs:{actividad:t}})],1)})),1)],1)],1)}),[],!1,null,"450c44ba",null);e.default=C.exports;o()(C,{VCol:f.a,VContainer:y.a,VRow:x.a})}}]);