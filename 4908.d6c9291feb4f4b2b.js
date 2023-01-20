"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4908],{4908:(g,p,t)=>{t.r(p),t.d(p,{ion_spinner:()=>m});var i=t(1308),c=t(5179),u=t(2854),f=t(7741);const m=class{constructor(e){(0,i.r)(this,e),this.paused=!1}getName(){const e=this.name||c.c.get("spinner"),n=(0,c.b)(this);return e||("ios"===n?"lines":"circular")}render(){var e;const n=this,o=(0,c.b)(n),a=n.getName(),r=null!==(e=f.S[a])&&void 0!==e?e:f.S.lines,k="number"==typeof n.duration&&n.duration>10?n.duration:r.dur,y=[];if(void 0!==r.circles)for(let l=0;l<r.circles;l++)y.push(h(r,k,l,r.circles));else if(void 0!==r.lines)for(let l=0;l<r.lines;l++)y.push(s(r,k,l,r.lines));return(0,i.h)(i.H,{class:(0,u.c)(n.color,{[o]:!0,[`spinner-${a}`]:!0,"spinner-paused":n.paused||c.c.getBoolean("_testing")}),role:"progressbar",style:r.elmDuration?{animationDuration:k+"ms"}:{}},y)}},h=(e,n,o,a)=>{const r=e.fn(n,o,a);return r.style["animation-duration"]=n+"ms",(0,i.h)("svg",{viewBox:r.viewBox||"0 0 64 64",style:r.style},(0,i.h)("circle",{transform:r.transform||"translate(32,32)",cx:r.cx,cy:r.cy,r:r.r,style:e.elmDuration?{animationDuration:n+"ms"}:{}}))},s=(e,n,o,a)=>{const r=e.fn(n,o,a);return r.style["animation-duration"]=n+"ms",(0,i.h)("svg",{viewBox:r.viewBox||"0 0 64 64",style:r.style},(0,i.h)("line",{transform:"translate(32,32)",y1:r.y1,y2:r.y2}))};m.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},2854:(g,p,t)=>{t.d(p,{c:()=>u,g:()=>d,h:()=>c,o:()=>h});var i=t(9671);const c=(s,e)=>null!==e.closest(s),u=(s,e)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},e):e,d=s=>{const e={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(s).forEach(n=>e[n]=!0),e},m=/^[a-z][a-z0-9+\-.]*:/,h=function(){var s=(0,i.Z)(function*(e,n,o,a){if(null!=e&&"#"!==e[0]&&!m.test(e)){const r=document.querySelector("ion-router");if(r)return n?.preventDefault(),r.push(e,o,a)}return!1});return function(n,o,a,r){return s.apply(this,arguments)}}()}}]);