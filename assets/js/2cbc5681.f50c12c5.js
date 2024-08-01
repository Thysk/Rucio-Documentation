"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5539],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),o=["components"],l={title:"35.0.0"},s=void 0,u={unversionedId:"release-notes/35.0.0",id:"release-notes/35.0.0",title:"35.0.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/35.0.0.md",sourceDirName:"release-notes",slug:"/release-notes/35.0.0",permalink:"/documentation/release-notes/35.0.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/35.0.0.md",tags:[],version:"current",frontMatter:{title:"35.0.0"}},p={},c=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:c},m="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),(0,i.yg)("p",null,"This release marks the start of the 35 ",(0,i.yg)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",(0,i.yg)("strong",{parentName:"p"},"July 2026"),"."),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This major release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/operator/database/#upgrading-and-downgrading-the-database-schema"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Dropping and re-creation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"SUBSCRIPTIONS_HISTORY_PK")," primary key in the  ",(0,i.yg)("inlineCode",{parentName:"p"},"subscriptions_history")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"b5493606bbf5"),")")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Creating ",(0,i.yg)("inlineCode",{parentName:"p"},"deleted_did_meta")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"b0070f3695c8"),")"))),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Document and cleanup discrepancies between surl and lfn2pfn algorithms ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5129"},"#5129")),(0,i.yg)("li",{parentName:"ul"},"Metadata: MongoDB metadata implementation does not allow using authentication ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6605"},"#6605")),(0,i.yg)("li",{parentName:"ul"},"Metadata: Alter schema in preparation for metadata deletion trigger ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6958"},"#6958"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Database: Migrating core/replica.py to SQLAlchemy 2.0 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6586"},"#6586")),(0,i.yg)("li",{parentName:"ul"},"REST & API: Metrics API endpoint: allow option to return RSEs identified by RSE attribute ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6564"},"#6564")),(0,i.yg)("li",{parentName:"ul"},"REST & API: Rename internal ",(0,i.yg)("inlineCode",{parentName:"li"},"API")," layer to ",(0,i.yg)("inlineCode",{parentName:"li"},"gateway")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6644"},"#6644")),(0,i.yg)("li",{parentName:"ul"},"Release management: Remove upper bound version constraints for rucio-clients ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6663"},"#6663")),(0,i.yg)("li",{parentName:"ul"},"Release management: Refactor Python dependencies into multiple files depending on app ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6750"},"#6750")),(0,i.yg)("li",{parentName:"ul"},"Release management: Rucio 35 dependency upgrade ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6890"},"#6890")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Updates to overwrite configuration on tape ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6581"},"#6581")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Transfers: add overwrite_when_only_on_disk FTS logic ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6903"},"#6903"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Database: Inconsistencies in Model Registration and Unregistration Functions in ",(0,i.yg)("inlineCode",{parentName:"li"},"models.py")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6677"},"#6677")),(0,i.yg)("li",{parentName:"ul"},"Possible redundant util function ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6598"},"#6598")),(0,i.yg)("li",{parentName:"ul"},"REST & API: Capital ",(0,i.yg)("inlineCode",{parentName:"li"},"I")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"Id")," in REST API for Subscriptions ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6316"},"#6316")),(0,i.yg)("li",{parentName:"ul"},"Release management: Mismatch between package names in ",(0,i.yg)("inlineCode",{parentName:"li"},"setuputil")," and requirements files ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6969"},"#6969")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Regression in core/replica.py SQL migration ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6983"},"#6983")),(0,i.yg)("li",{parentName:"ul"},"Subscriptions: SUBSCRIPTIONS_HISTORY integrity error ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6292"},"#6292")),(0,i.yg)("li",{parentName:"ul"},"Testing: Race conditions in ",(0,i.yg)("inlineCode",{parentName:"li"},"test_lifetime.py")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6911"},"#6911"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Regression in ",(0,i.yg)("inlineCode",{parentName:"li"},"rucio download --pfn")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6280"},"#6280")),(0,i.yg)("li",{parentName:"ul"},"Clients: x509 auth: client does not read from configuration file whe creds are passed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6846"},"#6846"))))}y.isMDXComponent=!0}}]);