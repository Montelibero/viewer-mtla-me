(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{47943:function(){},55024:function(){},21361:function(e,t,n){Promise.resolve().then(n.bind(n,62135))},62135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Main}});var l=n(57437),a=n(69108),i=n(42333);let r={mainAccount:"GCNVDZIHGX473FEI7IXCUAEXUJ4BGCKEMHF36VYP5EMS7PX2QBLAMTLA",mtlapToken:"MTLAP",mtlacToken:"MTLAC"};var s=n(7006),o=n.n(s),c=n(30954),d=n.n(c),u=n(47520),m=n.n(u),h=n(48911),g=n.n(h),x=n(83705),v=n.n(x),j=n(92166);let sumCount=e=>{var t,n;return e?e.count+ +((null===(t=e.children)||void 0===t?void 0:t.length)?null===(n=e.children)||void 0===n?void 0:n.map(sumCount).reduce((e,t)=>e+t,0):0):0},sumWeight=(e,t,n)=>{var l,a;return n?(n[e]&&t?0:n.count>0?1:0)+ +((null===(l=n.children)||void 0===l?void 0:l.length)?null===(a=n.children)||void 0===a?void 0:a.map(sumWeight.bind(null,e,!1)).reduce((e,t)=>e+t,0):0):0},Link=e=>e?(0,l.jsx)("a",{href:"https://stellar.expert/explorer/public/account/".concat(e),target:"_blank",className:"stellar_address",children:e.replace(e.substring(4,e.length-4),"...")}):null;var p=n(2265),C=n(30210),b=n(24033);function useActiveTab(){let e=(0,b.useSearchParams)(),t=e.get("activeTab")||"assembly";return t}let f=new a.Server("https://horizon.stellar.org"),y=new a.Asset(r.mtlapToken,r.mainAccount),T=new a.Asset(r.mtlacToken,r.mainAccount),w=["GDGC46H4MQKRW3TZTNCWUU6R2C7IPXGN7HQLZBJTNQO6TW7ZOS6MSECR"],A=(0,C.sU)({currentC:[],error:null,isLoading:!1,isValidating:!1,mutate:()=>Promise.resolve(void 0)},()=>{let e=(0,i.ZP)("currentC",async()=>{var e,t;let n=JSON.parse((null===(e=localStorage)||void 0===e?void 0:e.getItem("currentC"))||"null"),l=new Date;if(l.setDate(l.getDate()-1),!(!n||!n.data||new Date(n.date).getTime()<l.getTime()))return n.data;{let e=await f.loadAccount(r.mainAccount);return null===(t=localStorage)||void 0===t||t.setItem("currentC",JSON.stringify({data:e,date:new Date})),e}},{revalidateOnFocus:!1,revalidateIfStale:!1}),{data:t,error:n,mutate:l,isLoading:a,isValidating:s}=e,o=(0,p.useMemo)(()=>null==t?void 0:t.signers.filter(e=>e.key!==r.mainAccount).map(e=>({id:e.key,count:e.weight})).sort((e,t)=>t.count-e.count),[t]);return{currentC:o,error:n,mutate:l,isLoading:a,isValidating:s}}),asyncWhile=async function(e,t){var n;let l=await t();return(e=e.concat(await Promise.all(null==l?void 0:l.records.map(async e=>{try{let t=e.home_domain?await fetch("https://api.stellar.expert/explorer/public/domain-meta?domain=".concat(e.home_domain)):null;return t&&(e.toml=await t.json()),e}catch(t){return e}}))),(null==l?void 0:null===(n=l.records)||void 0===n?void 0:n.length)>0)?await asyncWhile(e,l.next):e},_=(0,C.sU)({data:[],isLoading:!1,isValidating:!1,members:[],mutate:()=>Promise.resolve(void 0),date:null},()=>{var e;let t=JSON.parse((null===(e=localStorage)||void 0===e?void 0:e.getItem("members"))||"null"),n=(null==t?void 0:t.date)||null,l=(0,i.ZP)("members",async()=>{let e=JSON.parse(localStorage.getItem("members")||"null"),t=new Date;if(t.setDate(t.getDate()-1),!(!e||new Date(e.date).getTime()<t.getTime()))return e.data;{var n;let e=[],t=await f.accounts().forAsset(y).call();return e=(e=e.concat(t.records,await asyncWhile(e,t.next))).filter(e=>!w.includes(e.account_id)),null===(n=localStorage)||void 0===n||n.setItem("members",JSON.stringify({data:e,date:new Date})),e}},{revalidateOnFocus:!1,revalidateIfStale:!1}),[a,r]=(0,p.useMemo)(()=>{var e;let t=[],n=[];return null==l||null===(e=l.data)||void 0===e||e.forEach(e=>{var l;let a=atob(e.data_attr.mtla_a_delegate||e.data_attr.mtla_delegate||""),i=atob(e.data_attr.mtla_c_delegate||e.data_attr.mtla_delegate||""),r="ready"===atob(e.data_attr["MTLA Council"]||"")||"ready"===i;""!==a&&n.push(a),""!==i&&"ready"!==i&&i!==e.account_id&&n.push(i),t.push({id:e.account_id,count:Number((null===(l=e.balances.find(e=>"credit_alphanum12"===e.asset_type&&e.asset_code===y.getCode()&&e.asset_issuer===y.getIssuer()))||void 0===l?void 0:l.balance)||0),delegateA:a,delegateC:"ready"!==i&&i!==e.account_id?i:"",councilReady:r})}),[t,n]},[l.data]),[s,o]=(0,p.useState)([]);return(0,p.useEffect)(()=>{(async()=>{let e=d()(g()(r),a,(e,t)=>e===t.id);(null==e?void 0:e.length)>0?o(await enrichMembers(v()(a,"id"),e,10)):o(a)})()},[a,r,n]),{data:l.data,isLoading:l.isLoading,isValidating:l.isValidating,mutate:l.mutate,members:s,date:n}}),L=(0,C.sU)({data:[],isLoading:!1,isValidating:!1,members:[],mutate:()=>Promise.resolve(void 0),date:null},()=>{var e;let t=JSON.parse((null===(e=localStorage)||void 0===e?void 0:e.getItem("сorporateMembers"))||"null"),n=(null==t?void 0:t.date)||null,l=(0,i.ZP)("сorporateMembers",async()=>{let e=JSON.parse(localStorage.getItem("сorporateMembers")||"null"),t=new Date;if(t.setDate(t.getDate()-1),!(!e||new Date(e.date).getTime()<t.getTime()))return e.data;{var n;let e=[],t=await f.accounts().forAsset(T).call();return e=(e=e.concat(await Promise.all(t.records.map(async e=>{try{let t=e.home_domain?await fetch("https://api.stellar.expert/explorer/public/domain-meta?domain=".concat(e.home_domain)):null;return t&&(e.toml=await t.json()),e}catch(t){return e}})),await asyncWhile(e,t.next))).filter(e=>!w.includes(e.account_id)),null===(n=localStorage)||void 0===n||n.setItem("сorporateMembers",JSON.stringify({data:e,date:new Date})),e}},{revalidateOnFocus:!1,revalidateIfStale:!1}),a=(0,p.useMemo)(()=>{var e;let t=[];return null==l||null===(e=l.data)||void 0===e||e.forEach(e=>{var n;t.push({id:e.account_id,count:Number((null===(n=e.balances.find(e=>"credit_alphanum12"===e.asset_type&&e.asset_code===T.getCode()&&e.asset_issuer===T.getIssuer()))||void 0===n?void 0:n.balance)||0),domain:e.home_domain,toml:e.toml})}),t},[l.data]);return{data:l.data,isLoading:l.isLoading,isValidating:l.isValidating,mutate:l.mutate,members:a,date:n}}),useGetTree=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"delegateC",{members:t,isLoading:n,isValidating:a,mutate:i,date:r}=_(),[s,o]=(0,p.useMemo)(()=>{let n;let a=(0,j.arrayToTree)(t,{parentId:e,dataField:null});try{(0,j.arrayToTree)(t,{parentId:e,dataField:null,throwIfOrphans:!0})}catch(t){var i;let e=null===(i=/\[(.+?)\]/.exec(t))||void 0===i?void 0:i[1];n=()=>(0,l.jsxs)(l.Fragment,{children:["В делигациях есть циклические ссылки или ссылки на недействительных участников",e?(0,l.jsxs)(l.Fragment,{children:[" (",Link(e),")"]}):"","!"]})}return[a,n]},[t]);return{tree:s,isLoading:n,isValidating:a,mutate:i,error:o,date:r}},I=(0,C.sU)({newC:[],isLoading:!1,isValidating:!1,mutate:()=>Promise.resolve(void 0),date:null},()=>{let{tree:e,isLoading:t,isValidating:n,mutate:l,date:a}=useGetTree(),i=(0,p.useMemo)(()=>e.filter(e=>e.count>0&&e.councilReady).map(e=>({...e,count:sumCount(e),delegations:sumCount(e)-e.count,weight:Math.floor(Math.log10(Math.max(sumCount(e),2)-1)+1)})).sort((e,t)=>t.count-e.count||e.id.localeCompare(t.id)).splice(0,20),[e]);return{newC:i,isLoading:t,isValidating:n,mutate:l,date:a}}),S=(0,C.sU)({newC:[],isLoading:!1,isValidating:!1,mutate:()=>Promise.resolve(void 0),date:null},()=>{let{members:e}=_(),{tree:t,isLoading:n,isValidating:l,mutate:a,date:i}=useGetTree("delegateA"),r=(0,p.useMemo)(()=>v()(t.concat(e),"id").filter(e=>e.count>0).map(e=>({...e,count:sumCount(e),delegations:sumCount(e)-e.count,weight:sumWeight("delegateA",!0,e)})).sort((e,t)=>t.count-e.count||e.id.localeCompare(t.id)),[t]);return{newC:r,isLoading:n,isValidating:l,mutate:a,date:i}}),D=(0,C.sU)({changes:[],isLoading:!1,isValidating:!1,mutate:()=>[Promise.resolve(void 0),Promise.resolve(void 0)],date:null},()=>{let{currentC:e=[],mutate:t,isLoading:n,isValidating:l}=A(),{newC:a,isLoading:i,isValidating:r,mutate:s,date:c}=I(),d=(0,p.useMemo)(()=>{if(!(null==a?void 0:a.length)||!(null==e?void 0:e.length))return[];let t={},n=o()(e,a,"id");n.forEach(e=>t[e.id]=0);let l=o()(a,e,"id");l.forEach(e=>t[e.id]=e.weight);let i=m()(a,e,(e,t)=>e.id===t.id&&e.weight!==t.count);i.forEach(e=>t[e.id]=e.weight);let r=e.reduce((e,t)=>({...e,[t.id]:t.count}),{});return Object.keys(t).map(e=>{var n;let l=null!==(n=r[e])&&void 0!==n?n:0,a=t[e];return{id:e,weight:a,diff:0===l?"новый":a<l?"- ".concat(l-a):"+ ".concat(a-l)}})},[e,a]),u=(0,p.useCallback)(()=>[s(),t()],[s,t]),h=(0,p.useMemo)(()=>i||n,[i,n]),g=(0,p.useMemo)(()=>r||l,[r,l]);return{changes:d,isLoading:h,isValidating:g,mutate:u,date:c}}),enrichMembers=async(e,t,n)=>{let l=[...e],a=[];if(n>0&&(null==t?void 0:t.length)>0){(await Promise.all(t.map(async e=>{var t,n,l;let i=JSON.parse((null===(t=localStorage)||void 0===t?void 0:t.getItem("accounts"))||"null"),r=new Date;r.setDate(r.getDate()-1);let s=null==i?void 0:null===(n=i.data)||void 0===n?void 0:n[e];if(!(!s||new Date(i.date).getTime()<r.getTime()))return s;{let t=await f.loadAccount(e),n=atob(t.data_attr.mtla_a_delegate||t.data_attr.mtla_delegate||""),r=atob(t.data_attr.mtla_c_delegate||t.data_attr.mtla_delegate||"");""!==n&&a.push(n),""!==r&&"ready"!==r&&r!==t.account_id&&a.push(r);let s={id:e,count:0,delegateA:n,delegateC:"ready"!==r&&r!==t.account_id?r:"",removed:!0};return i={data:{...null==i?void 0:i.data,[e]:s},date:new Date},null===(l=localStorage)||void 0===l||l.setItem("accounts",JSON.stringify(i)),s}}))).forEach(e=>l.push(e));let e=d()(g()(a),l,(e,t)=>e===t.id);(null==e?void 0:e.length)>0&&(l=await enrichMembers(l,e,n-1))}return l},M=(0,C.sU)(null,()=>{let{newC:e,isLoading:t}=I(),{changes:n,isLoading:l}=D(),s=(0,i.ZP)((null==e?void 0:e.length)>0&&(null==n?void 0:n.length)>0&&!t&&!l&&"account",()=>f.loadAccount(r.mainAccount),{revalidateOnFocus:!1,revalidateIfStale:!1}),o=(0,p.useMemo)(()=>{if(!((null==e?void 0:e.length)>0&&(null==n?void 0:n.length)>0&&!t&&!l))return null;let i=e.reduce((e,t)=>e+t.weight,0),r=Math.floor(i/2+1);if(s.data){let e=new a.TransactionBuilder(s.data,{fee:"100000",networkPassphrase:a.Networks.PUBLIC});e.addMemo(a.Memo.text("Update sign weights"));let t=0,l=n[n.length-1];if(n.forEach(n=>{let i=a.Operation.setOptions({signer:{ed25519PublicKey:a.Keypair.fromPublicKey(n.id).publicKey(),weight:n.weight},...l.id===n.id&&{masterWeight:0,lowThreshold:r,medThreshold:r,highThreshold:r}});e.addOperation(i),t++}),t)return e.setTimeout(a.TimeoutInfinite).build().toEnvelope()}return null},[e,n,t,l,s.data]);return o});var N=n(30415),k=n.n(N),O=JSON.parse('{"common":{"title":"Loading...","data":"The data as of","buttonTitle":"Update"},"assembly":{"name":"Assembly","content":{"members":{"name":"Delegate in the Assembly","title":"Individual members of the Association","tableHead":"Account"},"delegateTree":"Delegation check for the Assembly:","newAssembly":{"title":"Composition of the Assembly","firstColumn":"Account","secondColumn":"Tokens","thirdColumn":"Votes"}}},"council":{"name":"Council","content":{"currentC":{"title":"Current composition of the Council","firstColumn":"Account","secondColumn":"Votes"},"members":{"name":"Delegate in the Council"},"delegateTree":{"name":"Delegation check for the Council:"},"newC":{"title":"Expected composition of the Council","firstColumn":"Account","secondColumn":"Tokens","thirdColumn":"Votes"},"changes":{"title":"Difference between calculated and current:","firstColumn":"Account","secondColumn":"Voting weight","thirdColumn":"Changes","noChanges":"No changes"}}},"corporate":{"name":"Corporates","content":{"members":{"title":"Corporate members of the Association","secondColumn":"Account","fourthColumn":"Website"}}}}'),P=JSON.parse('{"common":{"title":"Загрузка...","data":"Данные на","buttonTitle":"Обновить"},"assembly":{"name":"Собрание","content":{"members":{"name":"Делегат в Собрании","title":"Индивидуальные участники Ассоциации","tableHead":"Аккаунт"},"delegateTree":"Проверка делегаций для Собрания:","newAssembly":{"title":"Состав Собрания","firstColumn":"Аккаунт","secondColumn":"Токены","thirdColumn":"Голоса"}}},"council":{"name":"Совет","content":{"currentC":{"title":"Актуальный состав Совета","firstColumn":"Аккаунт","secondColumn":"Голоса"},"members":{"name":"Делегат в Совете"},"delegateTree":{"name":"Проверка делегаций для Совета:"},"newC":{"title":"Ожидаемый состав Совета","firstColumn":"Аккаунт","secondColumn":"Токены","thirdColumn":"Голоса"},"changes":{"title":"Разница расчетного и текущего:","firstColumn":"Аккаунт","secondColumn":"Вес голоса","thirdColumn":"Изменения","noChanges":"Нет изменений"}}},"corporate":{"name":"Корпорации","content":{"members":{"title":"Корпоративные участники Ассоциации","secondColumn":"Аккаунт","fourthColumn":"Сайт"}}}}'),E=n(64946);let F={en:O,ru:P},useTranslations=()=>{let{locale:e}=(0,E.Q)();return F[e]},Loader=()=>()=>{let e=useTranslations();return(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,l.jsx)("div",{children:e.common.title})})},Members=e=>{var t,n;let{delegateId:a,delegateName:i}=e,r=useTranslations(),{members:s,isLoading:o,isValidating:c,mutate:d}=_();return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:r.assembly.content.members.title}),(o||c)&&(0,l.jsx)("div",{children:r.common.title}),(0,l.jsxs)("table",{cellSpacing:"16px",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:r.assembly.content.members.tableHead}),(0,l.jsx)("th",{children:"MTLAP"}),(0,l.jsx)("th",{children:i})]})}),(0,l.jsx)("tbody",{children:null===(n=s.filter(e=>!e.removed&&e.count>0))||void 0===n?void 0:null===(t=n.sort((e,t)=>t.count-e.count||e.id.localeCompare(t.id)))||void 0===t?void 0:t.map((e,t)=>{var n;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{style:{textAlign:"right",paddingRight:"16px"},children:t+1}),(0,l.jsx)("td",{children:Link(e.id)}),(0,l.jsx)("td",{children:e.count}),(0,l.jsx)("td",{children:Link(null!==(n=null==e?void 0:e[a])&&void 0!==n?n:null)})]},e.id)})})]})]})})};var U=k()(()=>Promise.resolve(Members),{ssr:!1,loading:Loader()});let Tree=e=>{var t;let{member:n,num:a}=e,i=sumCount(n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a?"".concat(a):0===a?"-":"",Link(n.id)," ",i-n.count>0?i+" = "+n.count+" + "+(i-n.count):i]})},n.id),!!(null===(t=n.children)||void 0===t?void 0:t.length)&&(0,l.jsx)("ul",{children:n.children.map(e=>(0,l.jsx)(Tree,{member:e},"".concat(e.id,"_children")))},"".concat(n.id,"_children"))]})},DelegateTree=e=>{var t,n;let{header:a,type:i}=e,r=useTranslations(),{tree:s,isLoading:o,isValidating:c,mutate:d,error:u}=useGetTree(i),m=1;return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:a}),(o||c)&&(0,l.jsx)("div",{children:r.common.title}),(0,l.jsx)("ul",{children:null==s?void 0:null===(n=s.map(e=>({...e,delegations:sumCount(e)})))||void 0===n?void 0:null===(t=n.sort((e,t)=>t.delegations-e.delegations||e.id.localeCompare(t.id)))||void 0===t?void 0:t.map((e,t)=>(0,l.jsxs)("div",{children:[e.count>0?(0,l.jsx)(Tree,{member:e,num:e.councilReady?m++:0},e.id):null,19===t&&"delegateC"===i&&(0,l.jsx)("hr",{})]},e.id))},"tree"),u&&(0,l.jsx)("div",{style:{color:"red"},children:u()})]})})};var V=k()(()=>Promise.resolve(DelegateTree),{ssr:!1,loading:Loader()});function Refresh(){let e=useTranslations(),{changes:t,isLoading:n,isValidating:a,mutate:i,date:r}=D();return(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:n||a?(0,l.jsx)("div",{children:e.common.title}):(0,l.jsxs)(l.Fragment,{children:["".concat(e.common.data," ").concat(r&&new Date(r).toLocaleString()),(0,l.jsx)("button",{onClick:()=>{localStorage.clear(),i()},style:{width:"320px",height:"32px",margin:"16px"},children:e.common.buttonTitle})]})})}var R=k()(()=>Promise.resolve(Refresh),{ssr:!1});function NewAssembly(){let e=useTranslations(),{newC:t,isLoading:n,isValidating:a}=S();return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:e.assembly.content.newAssembly.title}),(n||a)&&(0,l.jsx)("div",{children:e.common.title}),(0,l.jsxs)("table",{cellSpacing:"16px",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:e.assembly.content.newAssembly.firstColumn}),(0,l.jsx)("th",{children:e.assembly.content.newAssembly.secondColumn}),(0,l.jsx)("th",{children:e.assembly.content.newAssembly.thirdColumn})]})}),(0,l.jsx)("tbody",{children:null==t?void 0:t.map(e=>{var t,n;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:Link(e.id)}),(0,l.jsx)("td",{children:null!==(t=e.delegations)&&void 0!==t&&t?e.count+" = "+(e.count-(null!==(n=e.delegations)&&void 0!==n?n:0))+" + "+e.delegations:e.count}),(0,l.jsx)("td",{children:e.weight})]},e.id)})})]})]})})}var J=k()(()=>Promise.resolve(NewAssembly),{ssr:!1,loading:Loader()});let Assembly=e=>{let{className:t}=e,n=useTranslations();return(0,l.jsxs)("article",{className:t,children:[(0,l.jsx)(R,{}),(0,l.jsx)(U,{delegateId:"delegateA",delegateName:n.assembly.content.members.name}),(0,l.jsx)("hr",{}),(0,l.jsx)(V,{header:n.assembly.content.delegateTree,type:"delegateA"},"delegateA"),(0,l.jsx)("hr",{}),(0,l.jsx)(J,{})]})};function CurrentC(){let e=useTranslations(),{currentC:t,error:n,mutate:a,isLoading:i,isValidating:r}=A();return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:e.council.content.currentC.title}),(i||r)&&(0,l.jsx)("div",{children:e.common.title}),(0,l.jsxs)("table",{cellSpacing:"16px",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:e.council.content.currentC.firstColumn}),(0,l.jsx)("th",{children:e.council.content.currentC.secondColumn})]})}),(0,l.jsx)("tbody",{children:null==t?void 0:t.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:Link(e.id)}),(0,l.jsx)("td",{children:e.count})]},e.id))})]})]})})}var G=k()(()=>Promise.resolve(CurrentC),{ssr:!1,loading:Loader()});function NewC(){let e=useTranslations(),{newC:t,isLoading:n,isValidating:a,mutate:i}=I();return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:e.council.content.newC.title}),(n||a)&&(0,l.jsx)("div",{children:e.common.title}),(0,l.jsxs)("table",{cellSpacing:"16px",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:e.council.content.newC.firstColumn}),(0,l.jsx)("th",{children:e.council.content.newC.secondColumn}),(0,l.jsx)("th",{children:e.council.content.newC.thirdColumn})]})}),(0,l.jsx)("tbody",{children:null==t?void 0:t.map(e=>{var t,n;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:Link(e.id)}),(0,l.jsx)("td",{children:null!==(t=e.delegations)&&void 0!==t&&t?e.count+" = "+(e.count-(null!==(n=e.delegations)&&void 0!==n?n:0))+" + "+e.delegations:e.count}),(0,l.jsx)("td",{children:e.weight})]},e.id)})})]})]})})}var W=k()(()=>Promise.resolve(NewC),{ssr:!1,loading:Loader()});function Changes(){let e=useTranslations(),{changes:t}=D(),n=M();return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:e.council.content.changes.title}),(null==t?void 0:t.length)>0?(0,l.jsxs)("table",{cellSpacing:"16px",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:e.council.content.changes.firstColumn}),(0,l.jsx)("th",{children:e.council.content.changes.secondColumn}),(0,l.jsx)("th",{children:e.council.content.changes.thirdColumn})]})}),(0,l.jsx)("tbody",{children:null==t?void 0:t.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:Link(e.id)}),(0,l.jsx)("td",{children:e.weight}),(0,l.jsx)("td",{children:e.diff})]},e.id))})]}):(0,l.jsx)(l.Fragment,{children:e.council.content.changes.noChanges}),n&&(0,l.jsx)("p",{style:{width:"600px",wordWrap:"break-word"},children:n.toXDR().toString("base64")})]})})}var Z=k()(()=>Promise.resolve(Changes),{ssr:!1,loading:Loader()});let Council=e=>{let{className:t}=e,n=useTranslations();return(0,l.jsxs)("article",{className:t,children:[(0,l.jsx)(R,{}),(0,l.jsx)(G,{}),(0,l.jsx)("hr",{}),(0,l.jsx)(U,{delegateId:"delegateC",delegateName:n.council.content.members.name}),(0,l.jsx)("hr",{}),(0,l.jsx)(V,{header:n.council.content.delegateTree.name,type:"delegateC"},"delegateC"),(0,l.jsx)("hr",{}),(0,l.jsx)(W,{}),(0,l.jsx)("hr",{}),(0,l.jsx)(Z,{})]})};var H=n(61396),Q=n.n(H);let Tab=e=>{let{id:t,name:n}=e,a=useActiveTab();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(Q(),{href:"?activeTab=".concat(t),className:"tab ".concat(a===t?"selected":""),children:n})})},TabContent=e=>{let{id:t,Component:n}=e,a=useActiveTab();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.type,{...n.props,className:"tab-content ".concat(a===t?"selected":"")})})},CorporateMembers=e=>{var t,n;let{}=e,a=useTranslations(),{data:i,members:r,isLoading:s,isValidating:o,mutate:c}=L();return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:a.corporate.content.members.title}),(s||o)&&(0,l.jsx)("div",{children:a.common.title}),(0,l.jsxs)("table",{cellSpacing:"16px",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:a.corporate.content.members.secondColumn}),(0,l.jsx)("th",{children:"MTLAC"}),(0,l.jsx)("th",{children:a.corporate.content.members.fourthColumn}),(0,l.jsx)("th",{children:"TOML"})]})}),(0,l.jsx)("tbody",{children:null===(n=r.filter(e=>!e.removed))||void 0===n?void 0:null===(t=n.sort((e,t)=>t.count-e.count||e.id.localeCompare(t.id)))||void 0===t?void 0:t.map((e,t)=>{var n,a,i;return(0,l.jsxs)("tr",{style:{alignItems:"center"},children:[(0,l.jsx)("td",{style:{textAlign:"right",paddingRight:"16px"},children:t+1}),(0,l.jsx)("td",{children:Link(e.id)}),(0,l.jsx)("td",{children:e.count}),(0,l.jsx)("td",{children:e.domain?(0,l.jsx)("a",{href:"https://".concat(e.domain),children:e.domain}):""}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{style:{textAlign:"left"},children:Object.keys(null!==(i=null===(a=e.toml)||void 0===a?void 0:null===(n=a.meta)||void 0===n?void 0:n.DOCUMENTATION)&&void 0!==i?i:{}).filter(e=>["ORG_NAME","ORG_URL","ORG_OFFICIAL_EMAIL"].includes(e)).sort((e,t)=>e.localeCompare(t)).map((t,n)=>{var a,i;return(0,l.jsxs)("div",{children:[t,": ",null===(i=e.toml)||void 0===i?void 0:null===(a=i.meta)||void 0===a?void 0:a.DOCUMENTATION[t],(0,l.jsx)("br",{})]},n)})})})]},e.id)})})]})]})})};var K=k()(()=>Promise.resolve(CorporateMembers),{ssr:!1,loading:Loader()});function CorporateRefresh(){let e=useTranslations(),{isLoading:t,isValidating:n,mutate:a,date:i}=L();return(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:t||n?(0,l.jsx)("div",{children:e.common.title}):(0,l.jsxs)(l.Fragment,{children:["".concat(e.common.data," ").concat(i&&new Date(i).toLocaleString()),(0,l.jsx)("button",{onClick:()=>{localStorage.clear(),a()},style:{width:"320px",height:"32px",margin:"16px"},children:e.common.buttonTitle})]})})}var X=k()(()=>Promise.resolve(CorporateRefresh),{ssr:!1});let Corporate=e=>{let{className:t}=e;return(0,l.jsxs)("article",{className:t,children:[(0,l.jsx)(X,{}),(0,l.jsx)(K,{})]})};var B=n(57042),components_LanguageSwitcher=()=>{let{locale:e,changeLanguage:t}=(0,E.Q)();return(0,l.jsxs)("div",{className:"lang-switcher",children:[(0,l.jsx)("span",{className:(0,B.Z)({active:"en"===e}),onClick:()=>t("en"),children:"EN"}),(0,l.jsx)("span",{className:(0,B.Z)({active:"ru"===e}),onClick:()=>t("ru"),children:"RU"})]})};function Main(){let e=useTranslations();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(components_LanguageSwitcher,{}),(0,l.jsxs)("nav",{style:{display:"flex"},children:[(0,l.jsx)(Tab,{id:"assembly",name:e.assembly.name}),(0,l.jsx)(Tab,{id:"council",name:e.council.name}),(0,l.jsx)(Tab,{id:"corporate",name:e.corporate.name})]}),(0,l.jsxs)("main",{children:[(0,l.jsx)(TabContent,{id:"assembly",Component:(0,l.jsx)(Assembly,{})}),(0,l.jsx)(TabContent,{id:"council",Component:(0,l.jsx)(Council,{})}),(0,l.jsx)(TabContent,{id:"corporate",Component:(0,l.jsx)(Corporate,{})})]})]})}},64946:function(e,t,n){"use strict";n.d(t,{A:function(){return a},Q:function(){return useLanguageContext}});var l=n(2265);let a=(0,l.createContext)({locale:"ru",changeLanguage:e=>{}}),useLanguageContext=()=>(0,l.useContext)(a)}},function(e){e.O(0,[638,983,971,864,744],function(){return e(e.s=21361)}),_N_E=e.O()}]);