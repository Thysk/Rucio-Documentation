"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7071],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,h=p["".concat(s,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(58168),i=r(98587),a=(r(96540),r(15680)),l=["components"],o={title:"1.28.4"},s=void 0,u={unversionedId:"release-notes/1.28.4",id:"release-notes/1.28.4",title:"1.28.4",description:"General",source:"@site/../docs/release-notes/1.28.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.4",permalink:"/documentation/release-notes/1.28.4",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.4.md",tags:[],version:"current",frontMatter:{title:"1.28.4"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p},g="wrapper";function h(e){var t=e.components,r=(0,i.A)(e,l);return(0,a.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deletion: Re-factor/cleanup deletion workflow ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5442"},"#5442"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Add ",(0,a.yg)("inlineCode",{parentName:"li"},"session")," object to API layer ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5439"},"#5439")),(0,a.yg)("li",{parentName:"ul"},"Deletion: temporary tables should not be used on right side of joins ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5528"},"#5528")),(0,a.yg)("li",{parentName:"ul"},"Deletion: investigate/fix oidc authentication in reaper ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5538"},"#5538")),(0,a.yg)("li",{parentName:"ul"},"Life time model: CLI can\u2019t handle input files with more than 1000 datasets ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5479"},"#5479")),(0,a.yg)("li",{parentName:"ul"},"Recovery: Fixes in bad_replicas workflow ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5477"},"#5477")),(0,a.yg)("li",{parentName:"ul"},"Testing: Belle II : Add Belle II tests ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4864"},"#4864"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deletion: Reaper can loop up to 1000 times when called on a single RSE ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5198"},"#5198")),(0,a.yg)("li",{parentName:"ul"},"Deletion: reaper busy-looping over rses with greedyDeletion even if nothing to delete ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5549"},"#5549")),(0,a.yg)("li",{parentName:"ul"},"Recovery: Many database queries caused by necromancer ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5545"},"#5545")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Preparer sleeping even if the backlog is not empty ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5502"},"#5502"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"features-1"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Option to change replica sort algorithm in download client ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5355"},"#5355"))),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Force scheme in protocols for delete operations in UploadClient ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5507"},"#5507"))),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: rucio get doesn't show summary anymore ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5250"},"#5250"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: Improvements in the Lifetime Model pages ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1923"},"#1923"))))}h.isMDXComponent=!0}}]);