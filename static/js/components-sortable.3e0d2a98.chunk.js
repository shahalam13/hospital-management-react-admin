(this["webpackJsonpdulton-react"]=this["webpackJsonpdulton-react"]||[]).push([[47],{100:function(e,a,t){"use strict";var n=t(11),l=t(15),c=t(6),r=t.n(c),s=t(41),i=t.n(s),o=t(87),m=t.n(o),u=t(88),d={tag:u.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.color,s=e.body,i=e.inverse,o=e.outline,d=e.tag,b=e.innerRef,f=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),E=Object(u.mapToCssModules)(m()(a,"card",!!i&&"text-white",!!s&&"card-body",!!c&&(o?"border":"bg")+"-"+c),t);return r.a.createElement(d,Object(n.a)({},f,{className:E,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},101:function(e,a,t){"use strict";var n=t(11),l=t(15),c=t(6),r=t.n(c),s=t(41),i=t.n(s),o=t(87),m=t.n(o),u=t(88),d={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,s=e.tag,i=Object(l.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(m()(a,"card-body"),t);return r.a.createElement(s,Object(n.a)({},i,{className:o,ref:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},1189:function(e,a,t){"use strict";t.r(a);var n=t(94),l=t(6),c=t.n(l),r=t(231),s=t(100),i=t(101),o=t(435),m=t(96),u=t(92),d=t(93);a.default=function(e){var a=e.match,t=Object(l.useState)([{icon:"iconsminds-clock",title:"Pending Orders",value:14,id:1},{icon:"iconsminds-basket-coins",title:"Completed Orders",value:32,id:2},{icon:"iconsminds-arrow-refresh",title:"Refund Requests",value:74,id:3},{icon:"iconsminds-mail-read",title:"New Comments",value:25,id:4}]),b=Object(n.a)(t,2),f=b[0],E=b[1],p=Object(l.useState)([{id:1,title:"Angel Cake"},{id:2,title:"Bibingka"},{id:3,title:"Cremeschnitte"},{id:4,title:"Faworki"}]),g=Object(n.a)(p,2),h=g[0],N=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,c.a.createElement(u.a,{xxs:"12"},c.a.createElement(d.a,{heading:"menu.sortable",match:a}),c.a.createElement(u.b,{className:"mb-5"}))),c.a.createElement(r.a,null,c.a.createElement(u.a,{xxs:"12"},c.a.createElement("h5",{className:"mb-4"},c.a.createElement(m.a,{id:"sortable.columns"})),c.a.createElement(o.a,{className:"row icon-cards-row mb-2",list:f,setList:function(e){return E(e)}},f.map((function(e){return c.a.createElement(u.a,{key:"column_".concat(e.id),xxs:"6",sm:"4",md:"3",className:"mb-4"},c.a.createElement(s.a,null,c.a.createElement(i.a,{className:"text-center"},c.a.createElement("i",{className:e.icon}),c.a.createElement("p",{className:"card-text font-weight-semibold mb-0"},e.title),c.a.createElement("p",{className:"lead text-center"},e.value))))}))))),c.a.createElement(r.a,null,c.a.createElement(u.a,{xxs:"12"},c.a.createElement("h5",{className:"mb-4"},c.a.createElement(m.a,{id:"sortable.basic"})),c.a.createElement(s.a,{className:"mb-4"},c.a.createElement(i.a,null,c.a.createElement(o.a,{list:h,setList:function(e){return N(e)},tag:"ul",className:"list-unstyled"},h.map((function(e){return c.a.createElement("li",{key:"basic_".concat(e.id)},c.a.createElement("p",null,e.id,". ",e.title))}))))))))}},93:function(e,a,t){"use strict";var n=t(6),l=t.n(n),c=t(91),r=function(e){var a=e.match.path.substr(1).split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),l.a.createElement(l.a.Fragment,null,a.map((function(e,t){return l.a.createElement("span",{key:t},a.length!==t+1?null:e)})))};a.a=function(e){var a=e.heading,t=e.match;return l.a.createElement("span",null,a&&l.a.createElement(c.b,{to:"dashboard"},l.a.createElement("span",null,"Home"),"\xa0\xa0 | \xa0\xa0"),l.a.createElement(r,{match:t}),l.a.createElement("br",null),l.a.createElement("br",null))}}}]);