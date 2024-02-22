"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9784],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68414:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(58168),a=t(98587),o=(t(96540),t(15680)),i=["components"],s={id:"transfers-preparer",title:"Transfers Preparer"},p=void 0,l={unversionedId:"operator/transfers/transfers-preparer",id:"operator/transfers/transfers-preparer",title:"Transfers Preparer",description:"conveyor-preparer (transfer preparer) is the main entry point into the",source:"@site/../docs/operator/transfers/transfers_preparer.md",sourceDirName:"operator/transfers",slug:"/operator/transfers/transfers-preparer",permalink:"/documentation/operator/transfers/transfers-preparer",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_preparer.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1707927896,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"transfers-preparer",title:"Transfers Preparer"},sidebar:"docs",previous:{title:"Transfers Overview",permalink:"/documentation/operator/transfers/transfers-overview"},next:{title:"Transfers Throttler",permalink:"/documentation/operator/transfers/transfers-throttler"}},c={},u=[],d={toc:u},h="wrapper";function f(e){var r=e.components,t=(0,a.A)(e,i);return(0,o.yg)(h,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"conveyor-preparer")," (transfer preparer) is the main entry point into the\ntransfer machinery. It leverages topological information to pick the best source\nreplica for the transfer. It also decides if the transfer has to be handled by\nthe throttler or not. For all new rucio installations, it is recommended to run\nthis daemon and activate it by setting the ",(0,o.yg)("inlineCode",{parentName:"p"},"conveyor/use_preparer = True"),"\nconfiguration option."),(0,o.yg)("p",null,"Preparer:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"finds all source RSEs which have a replica of the desired file"),(0,o.yg)("li",{parentName:"ul"},"filters out the source RSEs which don't respect administrative constraints"),(0,o.yg)("li",{parentName:"ul"},"ensures protocol compatibility between sources and destination"),(0,o.yg)("li",{parentName:"ul"},"performs path computations to find the best sources"),(0,o.yg)("li",{parentName:"ul"},"transitions the transfer request either to a ",(0,o.yg)("inlineCode",{parentName:"li"},"Waiting")," or to a ",(0,o.yg)("inlineCode",{parentName:"li"},"Queued")," state")),(0,o.yg)("h1",{id:"source-replica-selection"},"Source replica selection"),(0,o.yg)("p",null,"One of the main jobs done by the preparer is the selection of the replica\nto be used as a transfer sources. For that, it relies on multiple RSE\nattributes and on the configured protocols. This section provides a summary\nof what configuration parameters can influence the preparer at this stage."),(0,o.yg)("p",null,"We will use the notation ",(0,o.yg)("inlineCode",{parentName:"p"},"section/option")," to speak about a configuration\nvalue to be set in ",(0,o.yg)("inlineCode",{parentName:"p"},"rucio.cfg")," like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"[section]\noption = value\n")),(0,o.yg)("p",null,"The preparer will start by retrieving all the possible sources from the\ndatabase."),(0,o.yg)("p",null,"In the following step, the preparer will skip all sources which don't\nrespect the administrative constraints. For example, it will ignore source\nRSEs with ",(0,o.yg)("inlineCode",{parentName:"p"},"availability_read=False")," (unless the preparer is run with\n",(0,o.yg)("inlineCode",{parentName:"p"},"--ignore-availability"),"). It also respects the ",(0,o.yg)("inlineCode",{parentName:"p"},"restricted_read")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"restricted_write")," RSE attributes for the source and the destination."),(0,o.yg)("p",null,"Some request attributes will impact the source selection. For example, preparer\nwill skip source RSEs which don't match the ",(0,o.yg)("inlineCode",{parentName:"p"},"source_replica_expression")," or\n",(0,o.yg)("inlineCode",{parentName:"p"},"allow_tape_source")," conditions. It will also ignore requests witch require a\n",(0,o.yg)("inlineCode",{parentName:"p"},"transfertool")," that this preparer cannot use. The request attributes are\neither inherited from the rule, or set by another transfer daemon\n(for example: preparer)"),(0,o.yg)("p",null,"The next step is to perform the path computation. At this stage, preparer\nuses the distance between RSEs to perform shortest-path computations. If\nmulti-hopping is enabled via ",(0,o.yg)("inlineCode",{parentName:"p"},"transfers/use_multihop"),", then the configuration\nvalue ",(0,o.yg)("inlineCode",{parentName:"p"},"transfers/hop_penalty")," + the RSE attributes ",(0,o.yg)("inlineCode",{parentName:"p"},"available_for_multihop"),"\nand ",(0,o.yg)("inlineCode",{parentName:"p"},"hop_penalty")," will influence the distances for multi-hop paths.\nEach hop, even for single-hop transfers, must respect the protocol\ncompatibility between the source of the hop and its destination. The\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/1b8ca368523d13fd11bc0b32c14528f2fcec778b/lib/rucio/common/constants.py#L48"},"SCHEME_MAP"),"\nconstant defines the compatibility between protocols. Only protocols with\nnon-zero ",(0,o.yg)("inlineCode",{parentName:"p"},"third_party_copy_read")," will be considered for source RSEs, ordered\nby priority. Same for the destination: ",(0,o.yg)("inlineCode",{parentName:"p"},"third_party_copy_write")," is used."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": distances between RSEs which are set by the administrator via"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"rucio-admin rse add-distance --distance 1 RSE1 RSE2\n# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),\n# the --ranking option was used for the same purpose. The --distance option\n# could still be set and was mentioned in documentation alongside --ranking\n# but was completely ignored by rucio.\n# On 1.29, you'll have to use the following command:\nrucio-admin rse add-distance --ranking 1 RSE1 RSE2\n")),(0,o.yg)("p",null,"Once all valid paths are found, after all the filtering done previously,\nthe paths are ordered using the following simple\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/608c9b1dc834f07396cc49dfcbc3daa613b61d56/lib/rucio/core/transfer.py#L905"},"rules"),"\n:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"the source ranking is compared first. Source ranking is an integer which is\ndecreased each time a particular source is found to have an issue to perform\nthis particular transfer. It is thus equal to 0 at first try, and decreased\nat transfer failure before re-trying the transfer. This ensures that\nproblematic sources are much less likely to be re-used."),(0,o.yg)("li",{parentName:"ul"},"On equal source ranking, the RSE type is checked. Disk sources are preferred\nover tape."),(0,o.yg)("li",{parentName:"ul"},"On equal source RSE type, the distance between the source RSE and the\ndestination RSE is compared."),(0,o.yg)("li",{parentName:"ul"},"On equal distance, we prefer single-hop paths.")))}f.isMDXComponent=!0}}]);