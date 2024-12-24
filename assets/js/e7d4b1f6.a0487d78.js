"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3304],{8149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"bin/rucio","title":"rucio","description":"","source":"@site/../docs/bin/rucio.md","sourceDirName":"bin","slug":"/bin/rucio","permalink":"/documentation/bin/rucio","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio.md","tags":[],"version":"current","frontMatter":{"title":"rucio"},"sidebar":"docs","previous":{"title":"rucio-undertaker","permalink":"/documentation/bin/rucio-undertaker"},"next":{"title":"Setting up a Rucio Developer environment on Mac with Apple Silicon","permalink":"/documentation/developer/setting_up_mac_apple_silicon"}}');var o=t(74848),s=t(28453);const r={title:"rucio"},c=void 0,a={},u=[];function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"usage: rucio [-h] [--version] [--config CONFIG] [--verbose] [-H ADDRESS]\n             [--auth-host ADDRESS] [-a ISSUER] [-S AUTH_STRATEGY] [-T TIMEOUT]\n             [--user-agent USER_AGENT] [--vo VO] [-u USERNAME] [-pwd PASSWORD]\n             [--oidc-user OIDC_USERNAME] [--oidc-password OIDC_PASSWORD]\n             [--oidc-scope OIDC_SCOPE] [--oidc-audience OIDC_AUDIENCE]\n             [--oidc-auto] [--oidc-polling]\n             [--oidc-refresh-lifetime OIDC_REFRESH_LIFETIME]\n             [--oidc-issuer OIDC_ISSUER] [--certificate CERTIFICATE]\n             [--client-key CLIENT_KEY] [--ca-certificate CA_CERTIFICATE]\n             {account,config,did,download,replica,rse,rule,scope,subscription,upload,ping,whoami,lifetime-exception,test-server}\n             ...\n\nCLI Rucio Client. (Use --legacy to view CLI from <36.0)\n\npositional arguments:\n  {account,config,did,download,replica,rse,rule,scope,subscription,upload,ping,whoami,lifetime-exception,test-server}\n                        Command to execute, see `{command} -h` for more\n                        details and subcommands.\n\noptional arguments:\n  -h, --help            show this help message and exit\n\nMain Arguments:\n  --version             show program's version number and exit\n  --config CONFIG       The Rucio configuration file to use.\n  --verbose, -v         Print more verbose output.\n  -H ADDRESS, --host ADDRESS\n                        The Rucio API host.\n  --auth-host ADDRESS   The Rucio Authentication host.\n  -a ISSUER, --account ISSUER\n                        Rucio account to use.\n  -S AUTH_STRATEGY, --auth-strategy AUTH_STRATEGY\n                        Authentication strategy (userpass, x509...)\n  -T TIMEOUT, --timeout TIMEOUT\n                        Set all timeout values to seconds.\n  --user-agent USER_AGENT, -U USER_AGENT\n                        Rucio User Agent\n  --vo VO               VO to authenticate at. Only used in multi-VO mode.\n\nAuthentication Settings:\n  -u USERNAME, --user USERNAME\n                        username\n  -pwd PASSWORD, --password PASSWORD\n                        password\n  --oidc-user OIDC_USERNAME\n                        OIDC username\n  --oidc-password OIDC_PASSWORD\n                        OIDC password\n  --oidc-scope OIDC_SCOPE\n                        Defines which (OIDC) information user will share with\n                        Rucio. Rucio requires at least -sc='openid profile'.\n                        To request refresh token for Rucio, scope must include\n                        'openid offline_access' and there must be no active\n                        access token saved on the side of the currently used\n                        Rucio Client.\n  --oidc-audience OIDC_AUDIENCE\n                        Defines which audience are tokens requested for.\n  --oidc-auto           If not specified, username and password credentials\n                        are not required and users will be given a URL to use\n                        in their browser. If specified, the users explicitly\n                        trust Rucio with their IdP credentials.\n  --oidc-polling        If not specified, user will be asked to enter a code\n                        returned by the browser to the command line. If\n                        --polling is set, Rucio Client should get the token\n                        without any further interaction of the user. This\n                        option is active only if --auto is *not* specified.\n  --oidc-refresh-lifetime OIDC_REFRESH_LIFETIME\n                        Max lifetime in hours for this access token; the token\n                        will be refreshed by an asynchronous Rucio daemon. If\n                        not specified, refresh will be stopped after 4 days.\n                        This option is effective only if --oidc-scope includes\n                        offline_access scope for a refresh token to be granted\n                        to Rucio.\n  --oidc-issuer OIDC_ISSUER\n                        Defines which Identity Provider is going to be used.\n                        The issuer string must correspond to the keys\n                        configured in the /etc/idpsecrets.json auth server\n                        configuration file.\n  --certificate CERTIFICATE\n                        Client certificate file.\n  --client-key CLIENT_KEY\n                        Client key for x509 Authentication.\n  --ca-certificate CA_CERTIFICATE\n                        CA certificate to verify peer against (SSL).\n"})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);