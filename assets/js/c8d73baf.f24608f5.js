"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25571],{39810:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"release-notes/32.0.0rc2","title":"32.0.0rc2","description":"Release Candidate","source":"@site/../docs/release-notes/32.0.0rc2.md","sourceDirName":"release-notes","slug":"/release-notes/32.0.0rc2","permalink":"/documentation/release-notes/32.0.0rc2","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/32.0.0rc2.md","tags":[],"version":"current","frontMatter":{"title":"32.0.0rc2"}}');var t=i(74848),n=i(28453);const o={title:"32.0.0rc2"},a=void 0,c={},l=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"Helm chart changes",id:"helm-chart-changes",level:2},{value:"breaking change: rework of the additionalSecrets section",id:"breaking-change-rework-of-the-additionalsecrets-section",level:3},{value:"breaking change introduced in the previous release: <code>1.31.x</code> of <code>rucio-servers</code> helm chart is incompatible with old values",id:"breaking-change-introduced-in-the-previous-release-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values",level:3},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,t.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,t.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,t.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,t.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,t.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,t.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Renaming index ",(0,t.jsx)(s.code,{children:"RULES_STUCKSTATE_IDX"})," to ",(0,t.jsx)(s.code,{children:"RULES_STATE_IDX"})," (Alembic revision ",(0,t.jsx)(s.code,{children:"a6eb23955c28"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Adding ",(0,t.jsx)(s.code,{children:"last_processed_by"})," and ",(0,t.jsx)(s.code,{children:"last_processed_at"})," column to ",(0,t.jsx)(s.code,{children:"requests"})," table (Alembic revision ",(0,t.jsx)(s.code,{children:"295289b5a800"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Drop of indices ",(0,t.jsx)(s.code,{children:"REPLICAS_TOMBSTONE_IDX"})," and ",(0,t.jsx)(s.code,{children:"REPLICAS_RSE_ID_IDX"})," (Alembic revision ",(0,t.jsx)(s.code,{children:"27e3a68927fb"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Only for ATLAS and CMS, because they run specific oracle database schemas which diverge from the standard SQLAlchemy schema in alembic: Some additional steps have to be performed during database schema update by these two communities. See the relevant commit message: ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/commit/81bacae53dbe2486bcff87d55feb0dc65daa7ac0",children:"https://github.com/rucio/rucio/commit/81bacae53dbe2486bcff87d55feb0dc65daa7ac0"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Drop support for python < 3.9."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The temporary tables workflow is now mandatory. This feature was gradually introduced over many previous releases. First it was opt-in, since 1.31.0 it is an opt-out. Starting the current release, the old behavior is completely removed and the usage of temporary tables is mandatory. The update should be transparent, but requires the database user used by rucio to be allowed to create temporary tables in the database. The configuration switch ",(0,t.jsx)(s.code,{children:"[core]use_temp_tables=[True|False]"})," can now be removed, as it does not do anything."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The configuration switch ",(0,t.jsx)(s.code,{children:"[transfers]use_multihop=[True|False]"})," isn't used by rucio anymore and can be removed. Use ",(0,t.jsx)(s.code,{children:"[transfers]multihop_rse_expression=\\<some_rse_expression\\>"})," to define which RSEs can be used for multihop. It defaults to the RSE-expression ",(0,t.jsx)(s.code,{children:"available_for_multihop=true"}),", meaning that the update should be transparent for everybody. Communities who did not use multi-hop should not have any RSEs with this attribute set. Communities who used multi-hop already had this attribute set on all required RSEs, as it was mandatory for multi-hopping to work correctly. To explicitly disable multi-hopping, set ",(0,t.jsx)(s.code,{children:"[transfers]multihop_rse_expression="})," to an empty value."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The transfers(conveyor) daemons where subjected to a huge internal re-design. The ",(0,t.jsx)(s.code,{children:"--threads N"})," CLI switch now has a slightly different meaning. Instead of having N threads getting data from database and working on the retrieved data, there will now be 1 thread getting data from the database + N threads working on that data. This change should have no particular impact."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"helm-chart-changes",children:"Helm chart changes"}),"\n",(0,t.jsxs)(s.p,{children:["Note: Technically, rucio ",(0,t.jsx)(s.code,{children:"32.0.0"})," can still be run with the last helm charts of the 1.31 line. You are not required to update the helm values at the same time you update rucio if you want to dissociate updating rucio from updating the helm charts. However, it's strongly advised to update helm charts rapidly after rucio update. We don't guarantee that this compatibility will be maintained in rucio 32.1.0+"]}),"\n",(0,t.jsx)(s.h3,{id:"breaking-change-rework-of-the-additionalsecrets-section",children:"breaking change: rework of the additionalSecrets section"}),"\n",(0,t.jsxs)(s.p,{children:["This change was anounced in previous rucio release ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/releases/tag/1.31.0",children:"1.31.0"}),". The current release makes the new behavior mandatory. Follow the instructions from the previous release to substitute the ",(0,t.jsx)(s.code,{children:"additionalSecrets"})," sections in helm values with ",(0,t.jsx)(s.code,{children:"secretMounts"})," sections."]}),"\n",(0,t.jsxs)(s.h3,{id:"breaking-change-introduced-in-the-previous-release-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values",children:["breaking change introduced in the previous release: ",(0,t.jsx)(s.code,{children:"1.31.x"})," of ",(0,t.jsx)(s.code,{children:"rucio-servers"})," helm chart is incompatible with old values"]}),"\n",(0,t.jsxs)(s.p,{children:["If you are updating from a helm chart prior to 1.31.0, please follow the instruction from the previous rucio release ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/releases/tag/1.31.0",children:"1.31.0"})," to upgrade the value of the rucio-server helm charts."]}),"\n",(0,t.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Replace all instances of X509 identities presented in the legacy format ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6182",children:"#6182"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: make temporary tables mandatory ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6238",children:"#6238"})]}),"\n",(0,t.jsxs)(s.li,{children:["Database: Exchange of function-based indices with normal index ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6143",children:"#6143"})]}),"\n",(0,t.jsxs)(s.li,{children:["Release management: drop support for python 3.6, 3.7 and 3.8 ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6251",children:"#6251"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: New dispatcher logic for conveyors ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6190",children:"#6190"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Extend /auth/x509 endpoint for browser-based clients ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6048",children:"#6048"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Protocol Priority Renumbering ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6083",children:"#6083"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: finalize migration to unified config table + config file ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6107",children:"#6107"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Customisable replica sorter algorithm ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6114",children:"#6114"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Support protocols with NULL priority ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6201",children:"#6201"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Remove prefixes for unicode string literals ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6268",children:"#6268"})]}),"\n",(0,t.jsxs)(s.li,{children:["Messaging: Get rid of hermes-legacy ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6213",children:"#6213"})]}),"\n",(0,t.jsxs)(s.li,{children:["Remove deprecated constructs from the ",(0,t.jsx)(s.code,{children:"typing"})," module ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6276",children:"#6276"})]}),"\n",(0,t.jsxs)(s.li,{children:["Replicas: remove REPLICAS_TOMBSTONE_IDX and REPLICAS_RSE_ID_IDX indexes ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6287",children:"#6287"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: get rid of the ",(0,t.jsx)(s.code,{children:"use_multihop"})," configuration option ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6164",children:"#6164"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: internal refactoring in the conveyor ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6207",children:"#6207"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Restrict permissions for adding scopes or manipulating identities ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6267",children:"#6267"})]}),"\n",(0,t.jsxs)(s.li,{children:["Metadata: set_metadata_bulk doesn't work for external postgres / mongo metadata plugins ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6246",children:"#6246"})]}),"\n",(0,t.jsxs)(s.li,{children:["x509 authentication fails for baseclient.py ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6294",children:"#6294"})]}),"\n",(0,t.jsxs)(s.li,{children:["Protocols: CMS LFN to PFN translation gives double hosts ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6096",children:"#6096"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: broken stats retrieval in the xrootd rse protocol ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6265",children:"#6265"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var r=i(96540);const t={},n=r.createContext(t);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);