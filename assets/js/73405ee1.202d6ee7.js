"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9529],{65321:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"release-notes/1.14.8.post1","title":"1.14.8.post1","description":"Rucio","source":"@site/../docs/release-notes/1.14.8.post1.md","sourceDirName":"release-notes","slug":"/release-notes/1.14.8.post1","permalink":"/documentation/release-notes/1.14.8.post1","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.8.post1.md","tags":[],"version":"current","frontMatter":{"title":"1.14.8.post1"}}');var r=n(74848),t=n(28453);const o={title:"1.14.8.post1"},c=void 0,l={},h=[{value:"Rucio",id:"rucio",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements-2",level:3}];function u(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"rucio",children:"Rucio"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Probes & Alarms: Move the methods calls in check_rse_attributes from the API to the core ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/519",children:"#519"})]}),"\n",(0,r.jsxs)(s.li,{children:["RSE Manager: Remove <operation>_protocol entries in rse_settings ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/508",children:"#508"})]}),"\n",(0,r.jsxs)(s.li,{children:["RSE Manager: rsemanager add domain to all method signatures ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/62",children:"#62"})]}),"\n",(0,r.jsxs)(s.li,{children:["Rules: Possibility to give reason when denying a rule ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/487",children:"#487"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Conveyor should only use schemes compatible to the destination scheme ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/73",children:"#73"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: set_metadata should update guid both in did and content table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/413",children:"#413"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Creating incomplete message for datasets does not work ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/464",children:"#464"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Postgres error in conveyor-finisher ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/480",children:"#480"})]}),"\n",(0,r.jsxs)(s.li,{children:["Probes & Alarms: Probe setting the naming convention is broken ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/522",children:"#522"})]}),"\n",(0,r.jsxs)(s.li,{children:["Recovery: Crash when declaring bad file replicas already declared bad on a non-deterministic RSE ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/457",children:"#457"})]}),"\n",(0,r.jsxs)(s.li,{children:["Traces: heartbeats do not work correctly for kronos dataset thread ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/510",children:"#510"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Conveyor receiver does not consume messages ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/513",children:"#513"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: update-rule --lifetime command does not work ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/496",children:"#496"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Force GSI authentication for root fix did not work ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/467",children:"#467"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Automatic protocol failover broken in rucio download ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/502",children:"#502"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["WebUI: WebUI: Preview logfiles in browser ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/344",children:"#344"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/344",children:"#344"})]}),"\n",(0,r.jsxs)(s.li,{children:["WebUI: Rucio UI Account admin view ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/81",children:"#81"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-2",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["WebUI: Admin interface in Rucio UI ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/78",children:"#78"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);