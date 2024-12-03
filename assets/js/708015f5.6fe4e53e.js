"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91299],{53245:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"release-notes/1.16.3","title":"1.16.3","description":"General","source":"@site/../docs/release-notes/1.16.3.md","sourceDirName":"release-notes","slug":"/release-notes/1.16.3","permalink":"/documentation/release-notes/1.16.3","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.3.md","tags":[],"version":"current","frontMatter":{"title":"1.16.3"}}');var r=n(74848),t=n(28453);const c={title:"1.16.3"},o=void 0,l={},u=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Consistency checks: Auditor is not able to handle dumps on non-SRM endpoint ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/429",children:"#429"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: dataset thread in kronos dies when RSE doesn't exist ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1184",children:"#1184"})]}),"\n",(0,r.jsxs)(s.li,{children:["Infrastructure: Rework docker images for Kubernetes ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1086",children:"#1086"})]}),"\n",(0,r.jsxs)(s.li,{children:["Infrastructure: server and daemons container builds are failing caused by pip install ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1190",children:"#1190"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Fixes for replica selection in conveyor ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/667",children:"#667"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: rucio set-metadata returns status code 0 for non-existing DID ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/493",children:"#493"})]}),"\n",(0,r.jsxs)(s.li,{children:["Consistency checks: Auditor does not work with certain HTTPS dumps ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/367",children:"#367"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: DB exception occur after detach and attach DID repeatedly ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1004",children:"#1004"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Credentials config/file should be optional not mandatory ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1144",children:"#1144"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: transfers: verify_checksum badly propagated ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1219",children:"#1219"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Raise Meaningful Exception When Protocol Fails To Get Checksum ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1149",children:"#1149"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: clients: workaround url signature for rucio download until download-api is deployed ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1208",children:"#1208"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: ",(0,r.jsx)(s.code,{children:"rucio erase"})," with wildcards ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/406",children:"#406"})]}),"\n",(0,r.jsxs)(s.li,{children:["RSE Manager: RSE manager: remove .part from filename if adler32 is set and ignore_checksum is true ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1185",children:"#1185"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);