(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{592:function(n,e,r){var content=r(594);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(14).default)("7f32a972",content,!0,{sourceMap:!1})},593:function(n,e,r){"use strict";r(592)},594:function(n,e,r){(e=r(13)(!1)).push([n.i,'.DynamicMarkdown{font-size:20px}.DynamicMarkdown h1{padding-top:10px;font-size:1.2em;font-weight:600}.DynamicMarkdown h1,.DynamicMarkdown h2{margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid #f0f0f0}.DynamicMarkdown h2{margin-top:10px;font-size:1.7rem;font-weight:700}.DynamicMarkdown h3{margin-top:40px;margin-bottom:20px;font-size:1.5rem;font-weight:600}.DynamicMarkdown h4{margin-top:30px;margin-bottom:20px;font-size:1.2rem;font-weight:500}.DynamicMarkdown br{margin:20px 0}.DynamicMarkdown a{text-decoration:none;border-bottom:1px dotted #000;color:#333}.DynamicMarkdown a:hover{color:#ae4119}.DynamicMarkdown p{margin:0 0 30px}.DynamicMarkdown p strong{font-weight:600}.DynamicMarkdown p em{font-style:italic}.DynamicMarkdown ul{display:block;margin:0 0 30px 30px;padding:0}.DynamicMarkdown ul li{display:block;margin-bottom:10px;list-style:none}.DynamicMarkdown ul li:before{padding:0 15px 0 0;content:"•"}.DynamicMarkdown blockquote{margin:0 0 30px;padding:10px 10px 10px 20px;border-left:3px solid #999;background:#f0f0f0;color:#1e2125;font-style:italic;font-size:1.1rem}.DynamicMarkdown blockquote p{margin:0}.DynamicMarkdown blockquote p code{padding:0 5px;line-height:1rem}.DynamicMarkdown .twitter-tweet{margin:0 auto}.DynamicMarkdown code{padding:1px 3px;background:#f0f0f0;color:#1e2125;font-weight:400;border-radius:5px;font-family:"Courier New",Courier,monospace;border-radius:3px}.DynamicMarkdown pre{display:block;margin:0 0 30px;font-size:18px;white-space:pre-wrap;word-wrap:pre-wrap}.DynamicMarkdown pre code{display:block;position:relative;padding:20px;border-radius:2px 2px 0 0}.DynamicMarkdown pre code.language-sh{border:3px solid #555;border-top:30px solid #555;background:#1e2125;color:#fff}.DynamicMarkdown pre code.language-sh:before{top:-18px;left:15px;width:7px;height:7px;background:#777;border-radius:50%;box-shadow:0 0 0 3px #777,24px 0 0 3px #777,48px 0 0 3px #777}.DynamicMarkdown pre code.language-python{border:3px solid #daaa00;border-top:30px solid #daaa00}.DynamicMarkdown pre code.language-python:before{content:"Python";color:#f0f0f0}.DynamicMarkdown pre code.language-arduino{border:3px solid #00979d;border-top:30px solid #00979d}.DynamicMarkdown pre code.language-arduino:before{content:"Arduino";color:#f0f0f0}.DynamicMarkdown pre code.language-html{border:3px solid #616161;border-top:30px solid #616161}.DynamicMarkdown pre code.language-html:before{content:"HTML";color:#f0f0f0}.DynamicMarkdown pre code:before{display:block;position:absolute;top:-25px;left:15px;content:""}.DynamicMarkdown pre code:after{content:none}.DynamicMarkdown table{margin:0 0 30px;font-size:1rem;line-height:1.5rem}.DynamicMarkdown table td,.DynamicMarkdown table th,.DynamicMarkdown table tr{padding:10px;border:1px solid #f0f0f0}.DynamicMarkdown table th{background:#f0f0f0}.DynamicMarkdown figure{margin:20px auto 50px;text-align:center}.DynamicMarkdown figure img{max-width:100%}.DynamicMarkdown figure figcaption{text-align:center;font-size:14px;font-weight:300}.DynamicMarkdown hr{display:block;margin:60px 0;border:1px solid #f0f0f0}.DynamicMarkdown .iframe{overflow:hidden;padding-top:56.25%;position:relative;margin:20px auto 50px;border:20px solid #333;border-radius:20px}.DynamicMarkdown .iframe iframe{position:absolute;left:0;top:0;height:100%;width:100%;margin:0;border:0}@media only screen and (max-width:960px){.DynamicMarkdown ul{margin:0 0 30px}}@media only screen and (max-width:600px){.DynamicMarkdown{font-size:16px}.DynamicMarkdown ul{margin:0 0 30px}.DynamicMarkdown h1{font-size:1.6em}.DynamicMarkdown h2{font-size:1.5rem}.DynamicMarkdown h3{font-size:1.4rem}.DynamicMarkdown h4{font-size:1.2rem}}',""]),n.exports=e},595:function(n,e,r){"use strict";r(51),r(30),r(32);var o=r(596),t=r.n(o),c=r(597),d=r.n(c),l=r(600),m=r.n(l),f=(r(601),{name:"Content",components:{},props:{raw:{type:String,required:!0},cdn:{type:String,default:""}},computed:{renderer:function(){var n=this.cdn,e=t()("commonmark",{html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight:function(n,e){if(e&&m.a.getLanguage(e))try{return m.a.highlight(e,n).value}catch(n){}return""}}).enable(["table"]);return e.use(d.a,{anchorLink:!1}),e.renderer.rules.image=function(e,r,o,t,c){var d=e[r],l="",m="";return d.attrs=d.attrs.map((function(e){return"src"===e[0]&&("http"!==e[1].substring(0,4)&&(e[1]="".concat(n).concat(e[1])),l=e[1]),"title"===e[0]&&""!==e[1]&&(m=e[1]),e})),'<figure><img class="lazy" src="'.concat("/lazy.png",'" data-src="').concat(l,'" alt="').concat(m,'"><figcaption>').concat(m,"</figcaption></figure>")},e.renderer.rules.html_block=function(n,e,r,o,t){var content=n[e].content;if(content.includes("youtube.com/embed")){var c=content.split("youtube.com/embed/")[1].split('"');return'<a href="https://youtube.com/embed/'.concat(c[0],'" target="_blank">Ver vídeo en YouTube</a>')}return n[e].content},e.renderer.rules.link_open=function(n,e,r,o,t){return'<a target="_blank" rel="nofollow noopener noreferrer"'+t.renderAttrs(n[e])+">"},e.renderer.rules.link_close=function(){return'<i aria-hidden="true" class="v-icon notranslate pl-1 mdi mdi-open-in-new" style="font-size:12px;"></i></a>'},e.render(this.raw)}},mounted:function(){var n=[].slice.call(document.querySelectorAll(".DynamicMarkdown img.lazy"));if("IntersectionObserver"in window){var e=new IntersectionObserver((function(n,r){n.forEach((function(n){if(n.isIntersecting){var r=n.target;r.src=r.dataset.src,r.classList.remove("lazy"),e.unobserve(r)}}))}));n.forEach((function(n){e.observe(n)}))}}}),w=(r(593),r(15)),component=Object(w.a)(f,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"DynamicMarkdown",domProps:{innerHTML:this._s(this.renderer)}})}),[],!1,null,null,null);e.a=component.exports},896:function(n,e,r){var map={"./asociacion/README.md":[901,2],"./legal/coc/README.md":[902,27],"./legal/cookies/README.md":[903,28]};function o(n){if(!r.o(map,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[n],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=896,n.exports=o},921:function(n,e,r){"use strict";r.r(e);r(82);var o=r(25),t={components:{Content:r(595).a},validate:function(n){return void 0!==n.params.alias},asyncData:function(n){return Object(o.a)(regeneratorRuntime.mark((function e(){var o,path,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.params,path="legal/".concat(o.alias),e.next=4,r(896)("./".concat(path,"/README.md"));case 4:return t=e.sent,e.abrupt("return",{raw:t.body});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Información",meta:[{hid:"robots",name:"robots",content:"noindex, noarchive, nofollow"}]}}},c=r(15),d=r(20),l=r.n(d),m=r(573),f=r(574),w=r(575),component=Object(c.a)(t,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("Content",{attrs:{raw:this.raw}})],1)],1)],1)],1)}),[],!1,null,"72dda9bc",null);e.default=component.exports;l()(component,{VCol:m.a,VContainer:f.a,VRow:w.a})}}]);