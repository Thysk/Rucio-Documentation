"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[511],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),i=["components"],p={id:"kubernetes",title:"Setting up Rucio on Kubernetes"},l=void 0,u={unversionedId:"operator/kubernetes",id:"operator/kubernetes",title:"Setting up Rucio on Kubernetes",description:"Helm Charts",source:"@site/../docs/operator/kubernetes.md",sourceDirName:"operator",slug:"/operator/kubernetes",permalink:"/documentation/operator/kubernetes",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1707927896,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"kubernetes",title:"Setting up Rucio on Kubernetes"},sidebar:"docs",previous:{title:"Setting up a Rucio demo environment",permalink:"/documentation/operator/setting_up_demo"},next:{title:"Installing Rucio Server",permalink:"/documentation/operator/installing_server"}},c={},s=[{value:"Helm Charts",id:"helm-charts",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Example of kubernetes deployment",id:"example-of-kubernetes-deployment",level:2},{value:"Bootstrapping the database",id:"bootstrapping-the-database",level:2},{value:"Upgrading the database",id:"upgrading-the-database",level:2}],d={toc:s},m="wrapper";function h(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.yg)(m,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"helm-charts"},"Helm Charts"),(0,o.yg)("p",null,"Rucio has ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts"},"helm charts")," available to do a set up on kubernetes."),(0,o.yg)("h2",{id:"tutorial"},"Tutorial"),(0,o.yg)("p",null,"A tutorial for using rucio with kubernetes can be found ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/k8s-tutorial/blob/master/README.md"},"here")),(0,o.yg)("h2",{id:"example-of-kubernetes-deployment"},"Example of kubernetes deployment"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.km3net.org"},"KM3NeT")," runs rucio on kubernetes via ",(0,o.yg)("a",{parentName:"p",href:"https://fluxcd.io"},"flux"),".\nThe configuration deployed on their rucio server can be found ",(0,o.yg)("a",{parentName:"p",href:"https://git.km3net.de/rucio/rucio-deployment"},"here"),".\nThe documentation of how this (specific) instance can be set up can be found in the ",(0,o.yg)("a",{parentName:"p",href:"https://git.km3net.de/rucio/rucio-deployment/-/blob/main/docs/installation.md"},"docs")),(0,o.yg)("h2",{id:"bootstrapping-the-database"},"Bootstrapping the database"),(0,o.yg)("p",null,"By default no database is initialized when a new rucio installation is set up.\nWith this guide you can bootstrap the database on a kubernetes cluster."),(0,o.yg)("p",null,"Create a ",(0,o.yg)("inlineCode",{parentName:"p"},"init-pod.yaml")," file and apply it as specified in the readme of the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/k8s-tutorial/blob/master/README.md"},"k8s_tutorial"),", replace the ",(0,o.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with the secret needed to connect to the database:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: init\n  labels:\n    app: rucio\nspec:\n  restartPolicy: Never\n  containers:\n    - name: init\n      image: rucio/rucio-init:latest\n      imagePullPolicy: Always\n      env:\n        - name: RUCIO_CFG_DATABASE_DEFAULT\n          value: postgresql://rucio:<PASSWORD>@postgres-postgresql/rucio\n        - name: RUCIO_CFG_DATABASE_SCHEMA\n          value: test\n        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_IDENTITY\n          value: tutorial\n        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_PWD\n          value: secret1R\n        - name: RUCIO_PRINT_CFG\n          value: "true"\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl apply -f init-pod.yaml\n")),(0,o.yg)("h2",{id:"upgrading-the-database"},"Upgrading the database"),(0,o.yg)("p",null,"After the rucio version has been upgraded, there might be database changes\nthat have to be done. These can be done on the ",(0,o.yg)("inlineCode",{parentName:"p"},"rucio-server")," pod of the cluster and\nare performed with the ",(0,o.yg)("a",{parentName:"p",href:"http://alembic.zzzcomputing.com/en/latest/"},"Alembic")," tool."),(0,o.yg)("p",null,"The alembic.ini template can be found\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/alembic.ini.template"},"here"),".\nA kubernetes+postgresql specific version can be found in the KM3NeT example\n",(0,o.yg)("a",{parentName:"p",href:"https://git.km3net.de/rucio/rucio-deployment/-/blob/main/docs/alembic.ini"},"here"),".\nFill in the correct values before transferring the file to the ",(0,o.yg)("inlineCode",{parentName:"p"},"rucio-server")," pod:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cat alembic.ini | kubectl exec -i rucio-server-<pod identifier> --container rucio-server -- tee /tmp/alembic.ini\n")),(0,o.yg)("p",null,"Open a bash prompt on the pod"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl exec rucio-server-<pod identifier> --container rucio-server -it -- bash\n")),(0,o.yg)("p",null,"Then perform the upgrade with the Alembic tool as described in the database ",(0,o.yg)("a",{parentName:"p",href:"./database#upgrading-and-downgrading-the-database-schema"},"documentation")))}h.isMDXComponent=!0}}]);