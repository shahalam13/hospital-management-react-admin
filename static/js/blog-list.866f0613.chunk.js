(this["webpackJsonpdulton-react"]=this["webpackJsonpdulton-react"]||[]).push([[29],{100:function(e,a,t){"use strict";var s=t(11),n=t(15),l=t(6),i=t.n(l),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.body,c=e.inverse,o=e.outline,u=e.tag,p=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(m()(a,"card",!!c&&"text-white",!!r&&"card-body",!!l&&(o?"border":"bg")+"-"+l),t);return i.a.createElement(u,Object(s.a)({},g,{className:b,ref:p}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},101:function(e,a,t){"use strict";var s=t(11),n=t(15),l=t(6),i=t.n(l),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(m()(a,"card-body"),t);return i.a.createElement(r,Object(s.a)({},c,{className:o,ref:l}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},1023:function(e,a,t){"use strict";t.r(a);var s=t(6),n=t.n(s),l=t(231),i=t(100),r=t(150),c=t(101),o=t(315),m=t(313),d=t(314),u=t(768),p=t.n(u),g=t(769),b=t.n(g),f=t(91),y=t(93),h=t(92),v=t(532),E=b()()(p.a);a.default=function(e){var a=e.match;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement(h.a,{xxs:"12"},n.a.createElement(y.a,{heading:"menu.blog-list",match:a}),n.a.createElement(h.b,{className:"mb-5"})),v.b.map((function(e,a){return n.a.createElement(h.a,{xxs:"12",lg:"6",className:"mb-5",key:"blogItem_".concat(a)},n.a.createElement(i.a,{className:"flex-row listing-card-container"},n.a.createElement("div",{className:"w-40 position-relative"},n.a.createElement(f.b,{to:"blog-detail"},n.a.createElement("img",{className:"card-img-left",src:e.thumb,alt:"Card cap"}),e.badge&&n.a.createElement(r.a,{color:"primary",pill:!0,className:"position-absolute badge-top-left"},e.badge))),n.a.createElement("div",{className:"w-60 d-flex align-items-center"},n.a.createElement(c.a,null,n.a.createElement(f.b,{to:"blog-detail"},n.a.createElement(E,{className:"mb-3 listing-heading",text:e.title,maxLine:"2",trimRight:!0,basedOn:"words",component:"h5"})),n.a.createElement(E,{className:"listing-desc text-muted",text:e.description,maxLine:"3",trimRight:!0,basedOn:"words",component:"p"})))))}))),n.a.createElement(l.a,null,n.a.createElement(h.a,{xxs:"12"},n.a.createElement(o.a,{listClassName:"justify-content-center"},n.a.createElement(m.a,null,n.a.createElement(d.a,{className:"prev",href:"#"},n.a.createElement("i",{className:"simple-icon-arrow-left"}))),n.a.createElement(m.a,{active:!0},n.a.createElement(d.a,{href:"#"},"1")),n.a.createElement(m.a,null,n.a.createElement(d.a,{href:"#"},"2")),n.a.createElement(m.a,null,n.a.createElement(d.a,{href:"#"},"3")),n.a.createElement(m.a,null,n.a.createElement(d.a,{className:"next",href:"#"},n.a.createElement("i",{className:"simple-icon-arrow-right"})))))))}},150:function(e,a,t){"use strict";var s=t(11),n=t(15),l=t(6),i=t.n(l),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={color:c.a.string,pill:c.a.bool,tag:d.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.innerRef,c=e.pill,o=e.tag,u=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.mapToCssModules)(m()(a,"badge","badge-"+l,!!c&&"badge-pill"),t);return u.href&&"span"===o&&(o="a"),i.a.createElement(o,Object(s.a)({},u,{className:p,ref:r}))};p.propTypes=u,p.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=p},313:function(e,a,t){"use strict";var s=t(11),n=t(15),l=t(6),i=t.n(l),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:d.tagPropType},p=function(e){var a=e.active,t=e.className,l=e.cssModule,r=e.disabled,c=e.tag,o=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),u=Object(d.mapToCssModules)(m()(t,"page-item",{active:a,disabled:r}),l);return i.a.createElement(c,Object(s.a)({},o,{className:u}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p},314:function(e,a,t){"use strict";var s=t(11),n=t(15),l=t(6),i=t.n(l),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:d.tagPropType},p=function(e){var a,t=e.className,l=e.cssModule,r=e.next,c=e.previous,o=e.first,u=e.last,p=e.tag,g=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(d.mapToCssModules)(m()(t,"page-link"),l);c?a="Previous":r?a="Next":o?a="First":u&&(a="Last");var f,y=e["aria-label"]||a;c?f="\u2039":r?f="\u203a":o?f="\xab":u&&(f="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),g.href||"a"!==p||(p="button"),(c||r||o||u)&&(h=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||f),i.a.createElement("span",{className:"sr-only",key:"sr"},y)]),i.a.createElement(p,Object(s.a)({},g,{className:b,"aria-label":y}),h)};p.propTypes=u,p.defaultProps={tag:"a"},a.a=p},315:function(e,a,t){"use strict";var s=t(11),n=t(15),l=t(6),i=t.n(l),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:d.tagPropType,listTag:d.tagPropType,"aria-label":c.a.string},p=function(e){var a,t=e.className,l=e.listClassName,r=e.cssModule,c=e.size,o=e.tag,u=e.listTag,p=e["aria-label"],g=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(d.mapToCssModules)(m()(t),r),f=Object(d.mapToCssModules)(m()(l,"pagination",((a={})["pagination-"+c]=!!c,a)),r);return i.a.createElement(o,{className:b,"aria-label":p},i.a.createElement(u,Object(s.a)({},g,{className:f})))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},532:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return n}));var s=[{title:"Distinctively Exploit Optimal Alignments with Mentality Networks",description:"Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate via plug-and-play networks.",thumb:"/assets/img/detail-small-5.jpg",badge:"NEW",type:"image"},{title:"Progressively Maintain Extensive Infomediaries",description:"Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.",thumb:"/assets/img/detail-small-2.jpg",badge:"UPDATE",type:"video"},{title:"Assertively Iterate Resource Maximizing",description:"Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",thumb:"/assets/img/detail-small-3.jpg",type:"image"},{title:"Podcasting Operational Change Management Inside of Workflows",description:"Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.",thumb:"/assets/img/detail-small-7.jpg",badge:"TRENDING",type:"image"},{title:"Objectively Innovate Empowered Manufactured Products",description:"Completely synergize resource taxing relationships via premier niche markets.",thumb:"/assets/img/detail-small-1.jpg",type:"image"},{title:"Completely Pursue Scalable Customer Service",description:"Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.",thumb:"/assets/img/detail-small-6.jpg",type:"image"},{title:"Dynamically Procrastinate B2C Users After Installed Base Benefits",description:"Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.",thumb:"/assets/img/detail-small-7.jpg",type:"image"},{title:"Progressively Maintain Extensive Infomediaries",description:"Dramatically maintain clicks-and-mortar solutions without functional solutions.",thumb:"/assets/img/detail-small-8.jpg",type:"image"}],n=[{title:"Using the Template",link:"#",icon:"iconsminds-director"},{title:"Security",link:"#",icon:"iconsminds-security-settings"},{title:"Account Settings",link:"#",icon:"iconsminds-male"},{title:"Policies and Docs",link:"#",icon:"iconsminds-newspaper"}]},93:function(e,a,t){"use strict";var s=t(6),n=t.n(s),l=t(91),i=function(e){var a=e.match.path.substr(1).split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(n.a.Fragment,null,a.map((function(e,t){return n.a.createElement("span",{key:t},a.length!==t+1?null:e)})))};a.a=function(e){var a=e.heading,t=e.match;return n.a.createElement("span",null,a&&n.a.createElement(l.b,{to:"dashboard"},n.a.createElement("span",null,"Home"),"\xa0\xa0 | \xa0\xa0"),n.a.createElement(i,{match:t}),n.a.createElement("br",null),n.a.createElement("br",null))}}}]);