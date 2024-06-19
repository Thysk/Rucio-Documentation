"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6201],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>c});var r=a(96540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),g=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=g(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=g(a),d=n,c=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(c,s(s({ref:e},p),{},{components:a})):r.createElement(c,s({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[m]="string"==typeof t?t:n,s[1]=o;for(var g=2;g<i;g++)s[g]=a[g];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32959:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>g,toc:()=>m});var r=a(58168),n=a(98587),i=(a(96540),a(15680)),s=["components"],o={id:"component_leads",title:"Component development leads",sidebar_label:"Component leads"},l=void 0,g={unversionedId:"component_leads",id:"component_leads",title:"Component development leads",description:"The component lead is responsible for the planning and development of patches",source:"@site/../docs/component_leads.md",sourceDirName:".",slug:"/component_leads",permalink:"/documentation/component_leads",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/component_leads.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1707927896,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"component_leads",title:"Component development leads",sidebar_label:"Component leads"},sidebar:"docs",previous:{title:"Rucio Advisory Board",permalink:"/documentation/rucio_advisory_board"},next:{title:"Special Interest Groups",permalink:"/documentation/special_interest_groups"}},p={},m=[],u={toc:m},d="wrapper";function c(t){var e=t.components,a=(0,n.A)(t,s);return(0,i.yg)(d,(0,r.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The component lead is responsible for the planning and development of patches\nand features for the respective component. This does not mean that the component\nlead is the only person developing the component, but he/she should direct the\nefforts and be the point of contact in case of problems."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Rucio Project Leader"),": ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/bari12"},"Martin Barisits")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Component"),(0,i.yg)("th",{parentName:"tr",align:null},"Lead (+Deputies)"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Authentication+%26+Authorisation%22+is%3Aissue+is%3Aopen"},"Authentication & Authorisation")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/dchristidis"},"Dimitrios Christidis"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig")),(0,i.yg)("td",{parentName:"tr",align:null},"Client-server authentication, Rucio tokens, auth methods (kerberos, ssh, userpass, OIDC, ...)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Clients%22+is%3Aissue+is%3Aopen"},"Clients")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/rcarpa"},"Radu Carpa")),(0,i.yg)("td",{parentName:"tr",align:null},"General Python Clients and Command Line interface related development, rucio download, rucio upload; Specific component related client functionality is part of the other components")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Consistency+checks%22+is%3Aissue+is%3Aopen"},"Consistency checks")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/faluchet"},"Fabio Luchetti"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/orgs/rucio/people/ivmfnal"},"Igor Mandrichenko")),(0,i.yg)("td",{parentName:"tr",align:null},"Dark data detection daemon: Auditor")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Core+%26+Internals%22+is%3Aissue+is%3Aopen"},"Core & Internals")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig")),(0,i.yg)("td",{parentName:"tr",align:null},"Core functionality not specifically part of other components")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Database%22+is%3Aissue+is%3Aopen"},"Database")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits")),(0,i.yg)("td",{parentName:"tr",align:null},"Database (Compatibility and optimisation) and SQLAlchemy framework specific issues")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Dataset+deletion%22+is%3Aissue+is%3Aopen"},"Dataset deletion")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits")),(0,i.yg)("td",{parentName:"tr",align:null},"Dataset deletion daemon: Undertaker")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Deletion%22+is%3Aissue+is%3Aopen"},"Deletion")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/cserf"},"Cedric Serfon"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/rcarpa"},"Radu Carpa")),(0,i.yg)("td",{parentName:"tr",align:null},"File deletion daemon: Reaper")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Dirac%22+is%3Aissue+is%3Aopen"},"DIRAC")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/cserf"},"Cedric Serfon")),(0,i.yg)("td",{parentName:"tr",align:null},"Rucio integration with ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/DIRACGrid/"},"Dirac"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3A%22Docker+%26+Kubernetes%22"},"Docker & Kubernetes")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/rcarpa"},"Radu Carpa"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/ericvaandering"},"Eric Vaandering")),(0,i.yg)("td",{parentName:"tr",align:null},"Docker & Kubernetes deployment")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Documentation%22+is%3Aissue+is%3Aopen"},"Documentation")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits")),(0,i.yg)("td",{parentName:"tr",align:null},"General documentation")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Functional+tests%22+is%3Aissue+is%3Aopen"},"Functional tests")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/cserf"},"Cedric Serfon")),(0,i.yg)("td",{parentName:"tr",align:null},"Functional transfer tests")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/jupyterlab-extension/issues"},"Jupyterlab extension")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/ftorradeflot"},"Francesc Torradeflot"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/garciagenrique"},"Enrique Garcia Garcia")),(0,i.yg)("td",{parentName:"tr",align:null},"Rucio Jupyterlab extension")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Life+time+model%22+is%3Aissue+is%3Aopen"},"Life time model")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/dchristidis"},"Dimitrios Christidis")),(0,i.yg)("td",{parentName:"tr",align:null},"Life time model processing and exceptions")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Messaging%22+is%3Aissue+is%3Aopen"},"Messaging")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig")),(0,i.yg)("td",{parentName:"tr",align:null},"Messaging daemon: Hermes, Creation of eMails and ActiveMQ messages")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Metadata%22+is%3Aissue+is%3Aopen"},"Metadata")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/robbarnsley"},"Rob Barnsley")),(0,i.yg)("td",{parentName:"tr",align:null},"Metadata workflows")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Monitoring+%26+Logging%22+is%3Aissue+is%3Aopen"},"Monitoring & Logging")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/maany"},"Mayank Sharma"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/rcarpa"},"Radu Carpa")),(0,i.yg)("td",{parentName:"tr",align:null},"All things logging and internal monitoring")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3A%22Multi+VO%22"},"Multi VO")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/Thysk"},"Tim Noble")),(0,i.yg)("td",{parentName:"tr",align:null},"Issues and developments related to Rucio Multi VO mode")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3APolicies"},"Policies")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/jamesp-epcc"},"James Perry")),(0,i.yg)("td",{parentName:"tr",align:null},"All things related to separate settings/config/policies into community specific things")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Probes+%26+Alarms%22+is%3Aissue+is%3Aopen"},"Probes & Alarms")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/dchristidis"},"Dimitrios Christidis"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/ericvaandering"},"Eric Vaandering")),(0,i.yg)("td",{parentName:"tr",align:null},"Probes and alarms for Nagios")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3AProtocols"},"Protocols")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/rcarpa"},"Radu Carpa")),(0,i.yg)("td",{parentName:"tr",align:null},"Protocols (Upload, Download, Deletion)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Rebalancing%22+is%3Aissue+is%3Aopen"},"Rebalancing")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/cserf"},"Cedric Serfon")),(0,i.yg)("td",{parentName:"tr",align:null},"Data rebalancing daemon: BB8")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Recovery%22+is%3Aissue+is%3Aopen"},"Recovery")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/cserf"},"Cedric Serfon")),(0,i.yg)("td",{parentName:"tr",align:null},"Data recovery daemon: Necromancer")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Release+management%22+is%3Aissue+is%3Aopen"},"Release management")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/dchristidis"},"Dimitrios Christidis")),(0,i.yg)("td",{parentName:"tr",align:null},"Packaging of new versions, package configuration")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3AReplicas"},"Replicas")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig")),(0,i.yg)("td",{parentName:"tr",align:null},"Replicas related workflows (list_replicas, add_replica, ...)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3A%22REST+%26+API%22"},"REST & API")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/bziemons"},"Benedikt Ziemons"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits")),(0,i.yg)("td",{parentName:"tr",align:null},"Web-Framework (Web.py & Flask)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Rules%22+is%3Aissue+is%3Aopen"},"Rules")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/bari12"},"Martin Barisits")),(0,i.yg)("td",{parentName:"tr",align:null},"Replication rules and rule daemons: Judge")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Subscriptions%22+is%3Aissue+is%3Aopen"},"Subscriptions")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/cserf"},"Cedric Serfon")),(0,i.yg)("td",{parentName:"tr",align:null},"Subscription daemon: Transmogrifier")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Testing%22+is%3Aissue+is%3Aopen"},"Testing")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/maany"},"Mayank Sharma")),(0,i.yg)("td",{parentName:"tr",align:null},"Regression and Unit tests, automatic tests of submissions")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Traces%22+is%3Aissue+is%3Aopen"},"Traces")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/mlassnig"},"Mario Lassnig"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/maany"},"Mayank Sharma")),(0,i.yg)("td",{parentName:"tr",align:null},"All things traces and Trace processing daemon: Kronos")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22Transfers%22+is%3Aissue+is%3Aopen"},"Transfers")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rcarpa"},"Radu Carpa"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/ericvaandering"},"Eric Vaandering")),(0,i.yg)("td",{parentName:"tr",align:null},"Transfer daemons: conveyor")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/rucio/rucio/issues?q=label%3A%22WebUI%22+is%3Aissue+is%3Aopen"},"WebUI")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://github.com/maany"},"Mayank Sharma"),", ",(0,i.yg)("a",{parentName:"td",href:"https://github.com/esilvaju"},"Eraldo Silva Junior")),(0,i.yg)("td",{parentName:"tr",align:null},"Web user interface: Rucio Web UI")))))}c.isMDXComponent=!0}}]);