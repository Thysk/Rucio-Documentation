"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8282],{28094:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"bin/rucio-oauth-manager","title":"rucio-oauth-manager","description":"","source":"@site/../docs/bin/rucio-oauth-manager.md","sourceDirName":"bin","slug":"/bin/rucio-oauth-manager","permalink":"/documentation/bin/rucio-oauth-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-oauth-manager.md","tags":[],"version":"current","frontMatter":{"title":"rucio-oauth-manager"},"sidebar":"docs","previous":{"title":"rucio-necromancer","permalink":"/documentation/bin/rucio-necromancer"},"next":{"title":"rucio-reaper","permalink":"/documentation/bin/rucio-reaper"}}');var r=o(74848),a=o(28453);const i={title:"rucio-oauth-manager"},s=void 0,c={},u=[];function l(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"usage: rucio-oauth-manager [-h] [--max-rows MAX_ROWS] [--loop-rate LOOP_RATE]\n                           [--run-once] [--threads THREADS]\n                           [--sleep-time SLEEP_TIME]\n\nOAuth Manager is a daemon which is responsible for: - deletion of expired\naccess tokens (in case there is a valid refresh token, expired access tokens\nwill be kept until refresh_token expires as well.) - deletion of expired OAuth\nsession parameters - refreshing access tokens via their refresh tokens. These\n3 actions run consequently one after another in a loop with a sleeptime of\n'looprate' seconds. The maximum number of DB rows (tokens, parameters, refresh\ntokens) on which the script will operate can be specified by 'maxrows'\nparameter.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --max-rows MAX_ROWS   Max number of DB rows to deal with per operation.\n  --loop-rate LOOP_RATE\n                        OBSOLETE, USE --sleep-time INSTEAD. The number of\n                        seconds the daemon will wait before running next loop\n                        of operations.\n  --run-once            One iteration only.\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --sleep-time SLEEP_TIME\n                        The number of seconds the daemon will wait before\n                        running next loop of operations.\n"})})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var t=o(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);