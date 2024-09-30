import{u as E,c as y,r as f,e as i,f as t,t as e,h as a,q as m,n as u,x as R,A as D,F as k,l as P,b as r,j as N,U as j}from"./vendor-CvqS6pG7.js";import{u as A,t as B,g as L}from"./index-BxdBlEeC.js";const F={class:"ping-test-section my-4"},U={class:"text-secondary"},Z={key:0},G={class:"row"},H={class:"col-12 mb-3"},V={class:"card-body"},q={class:"row mt-3 mb-3 align-items-center justify-content-center"},O={class:"col-12 col-md-auto"},$={for:"pingIP",class:"col-form-label"},J={class:"col-12 col-md-auto mt-2 mt-md-0"},W={class:"input-group"},z={disabled:"",value:""},K=["value"],Q=["disabled"],X={key:0},Y={key:1,class:"spinner-grow spinner-grow-sm","aria-hidden":"true"},tt={key:0,id:"pingresult"},st={class:"table-responsive text-nowrap"},et={scope:"col"},ot={scope:"col"},nt={scope:"col"},at={scope:"col"},lt={scope:"col"},it={scope:"col"},rt={scope:"col"},ct={scope:"col"},dt={key:1,id:"pingresult-error"},ut=["data-bs-theme"],vt={__name:"GlobalLatencyTest",setup(pt){const{t:o}=E(),v=A(),h=y(()=>v.isDarkMode),x=y(()=>v.isMobile),M=y(()=>v.lang);let w=y(()=>v.allIPs.filter(n=>n&&!n.includes(" ")));const _=f(""),p=f([]),c=f("idle"),T=()=>{B("Section","StartClick","GlobalLatency"),p.value=[],S();let d=0;const n=async()=>{c.value="running";try{const l=await fetch("https://api.globalping.io/v1/measurements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:16,locations:[{country:"HK"},{country:"TW"},{country:"CN"},{country:"JP"},{country:"SG"},{country:"IN"},{country:"RU"},{country:"US"},{country:"CA"},{country:"AU"},{country:"GB"},{country:"DE"},{country:"FR"},{country:"BR"},{country:"ZA"},{country:"SA"}],target:_.value,type:"ping",measurementOptions:{packets:8}})});if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(l){console.error("Error sending ping request:",l)}},s=async l=>{try{const g=await fetch(`https://api.globalping.io/v1/measurements/${l}`);if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const b=await g.json();C(b),b.status==="in-progress"&&d<4?(setTimeout(()=>s(l),1e3),d++):p.value.length===0?c.value="error":(c.value="finished",I())}catch(g){console.error("Error fetching ping results:",g)}};n().then(l=>{l&&l.id&&setTimeout(()=>{s(l.id)},1e3)})},C=d=>{const n=d.results.filter(s=>s.result.status==="finished").filter(s=>s.result.stats.min!==null).map(s=>({country:s.probe.country,country_name:L(s.probe.country,M.value),stats:s.result.stats}));p.value=n},I=()=>{const d={data:{avgPing:{name:o("pingtest.AvgDelay"),format:"{0} ms",thresholdMax:250,thresholdMin:0},minPing:{name:o("pingtest.MinDelay"),format:"{0} ms"},maxPing:{name:o("pingtest.MaxDelay"),format:"{0} ms"},total:{name:o("pingtest.TotalPackets"),format:"{0}"},loss:{name:o("pingtest.PacketLoss"),format:"{0}%"},rcv:{name:o("pingtest.ReceivedPackets"),format:"{0}"},drop:{name:o("pingtest.DroppedPackets"),format:"{0}"}},applyData:"avgPing",values:{}};p.value.forEach(n=>{d.values[n.country]={avgPing:n.stats.avg,minPing:n.stats.min,maxPing:n.stats.max,total:n.stats.total,loss:n.stats.loss,rcv:n.stats.rcv,drop:n.stats.drop}}),new j({targetElementID:"svgMap",data:d,colorMax:"#083923",colorMin:"#22CB80",minZoom:1,maxZoom:1,mouseWheelZoomEnabled:!1,initialZoom:1})},S=()=>{document.getElementById("svgMap").innerHTML=""};return(d,n)=>(r(),i("div",F,[t("div",U,[t("p",null,e(a(o)("pingtest.Note")),1),x.value?m("",!0):(r(),i("p",Z,e(a(o)("pingtest.Note2")),1))]),t("div",G,[t("div",H,[t("div",{class:u(["card jn-card",{"dark-mode dark-mode-border":h.value}])},[t("div",V,[t("div",q,[t("div",O,[t("label",$,e(a(o)("pingtest.Note3")),1)]),t("div",J,[t("div",W,[R(t("select",{id:"pingIP","aria-label":"Select IP to Ping",class:u(["form-select jn-ping-form-select",{"bg-dark text-light":h.value}]),"onUpdate:modelValue":n[0]||(n[0]=s=>_.value=s)},[t("option",z,e(a(o)("pingtest.SelectIP")),1),(r(!0),i(k,null,P(a(w),s=>(r(),i("option",{key:s,value:s},e(s),9,K))),128))],2),[[D,_.value]]),t("button",{class:"btn btn-primary",onClick:T,disabled:c.value==="running"||_.value===""},[c.value==="idle"||c.value==="finished"||c.value==="error"?(r(),i("span",X,e(a(o)("pingtest.Run")),1)):m("",!0),c.value==="running"?(r(),i("span",Y)):m("",!0)],8,Q)])])]),p.value.length>0?(r(),i("div",tt,[t("div",st,[t("table",{class:u(["table table-hover",{"table-dark":h.value}])},[t("thead",null,[t("tr",null,[t("th",et,e(a(o)("pingtest.Region")),1),t("th",ot,e(a(o)("pingtest.MinDelay")),1),t("th",nt,e(a(o)("pingtest.MaxDelay")),1),t("th",at,e(a(o)("pingtest.AvgDelay")),1),t("th",lt,e(a(o)("pingtest.TotalPackets")),1),t("th",it,e(a(o)("pingtest.PacketLoss")),1),t("th",rt,e(a(o)("pingtest.ReceivedPackets")),1),t("th",ct,e(a(o)("pingtest.DroppedPackets")),1)])]),t("tbody",null,[(r(!0),i(k,null,P(p.value,s=>(r(),i("tr",{key:s.country},[t("td",null,[t("span",{class:u("jn-fl fi fi-"+s.country.toLowerCase())},null,2),N(" "+e(s.country_name),1)]),t("td",{class:u(s.stats.min<100?"text-success":"")},e(s.stats.min.toFixed(1)),3),t("td",{class:u(s.stats.max<100?"text-success":"")},e(s.stats.max.toFixed(1)),3),t("td",{class:u(s.stats.avg<100?"text-success":"")},e(s.stats.avg.toFixed(1)),3),t("td",null,e(s.stats.total),1),t("td",null,e(Math.round(s.stats.loss))+"%",1),t("td",null,e(s.stats.rcv),1),t("td",null,e(s.stats.drop),1)]))),128))])],2)])])):m("",!0),n[1]||(n[1]=t("div",{id:"svgMap"},null,-1)),c.value==="error"?(r(),i("div",dt,[t("div",{class:"alert alert-info","data-bs-theme":h.value?"dark":""},e(a(o)("pingtest.Error")),9,ut)])):m("",!0)])],2)])])]))}};export{vt as default};
