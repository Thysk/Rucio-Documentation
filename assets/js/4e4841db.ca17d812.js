"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6017],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),l=["components"],i={title:"32.1.0"},c=void 0,s={unversionedId:"release-notes/32.1.0",id:"release-notes/32.1.0",title:"32.1.0",description:"General",source:"@site/../docs/release-notes/32.1.0.md",sourceDirName:"release-notes",slug:"/release-notes/32.1.0",permalink:"/documentation/release-notes/32.1.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/32.1.0.md",tags:[],version:"current",frontMatter:{title:"32.1.0"}},u={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3}],f={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,o.A)(e,l);return(0,a.yg)(m,(0,n.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rules: Add size information to list_rules() ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5978"},"#5978"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Make use of ModelBase.to_dict() wherever applicable ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6307"},"#6307"))))}y.isMDXComponent=!0}}]);