"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9088],{9088:(M,g,o)=>{o.r(g),o.d(g,{RoadmapPagePageModule:()=>v});var l=o(9808),s=o(3075),d=o(3349),r=o(1171),t=o(9863),c=o(1808),u=o(8349),p=o(4135);function m(n,a){if(1&n&&(t.TgZ(0,"div",7),t.TgZ(1,"div",8),t.TgZ(2,"span",9),t._uU(3),t.qZA(),t.qZA(),t._UZ(4,"div",10),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(3),t.Oqu(null==e?null:e.tytul),t.xp6(1),t.Q6J("innerHTML",null==e?null:e.opis,t.oJD)}}function f(n,a){if(1&n&&(t.TgZ(0,"div",7),t.TgZ(1,"div",8),t.TgZ(2,"span",11),t._uU(3),t.qZA(),t.qZA(),t._UZ(4,"div",10),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(3),t.Oqu(null==e?null:e.tytul),t.xp6(1),t.Q6J("innerHTML",null==e?null:e.opis,t.oJD)}}function x(n,a){if(1&n&&(t.TgZ(0,"li"),t.YNc(1,m,5,2,"div",6),t.YNc(2,f,5,2,"div",6),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("ngIf",null==e?null:e.wykonane),t.xp6(1),t.Q6J("ngIf",!(null!=e&&e.wykonane))}}const P=[{path:"",component:(()=>{class n{constructor(e,i,b){this.service=e,this.route=i,this.settings=b,this.roadmap=[],this.settings.langCode=this.route.snapshot.paramMap.get("lang"),document.documentElement.setAttribute("lang",this.settings.langCode)}loadRoadmap(e){this.service.getRecentRoadmap(e).then(i=>{i.error?this.loadingRoadmap=!1:i&&(this.roadmap=this.roadmap.concat(i))})}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.t),t.Y36(r.gz),t.Y36(u.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-roadmap-page"]],decls:10,vars:8,consts:[["fullscreen","",3,"scrollEvents"],[1,"content-size"],[2,"text-align","center"],[2,"text-align","center","margin","0px auto 48px auto","width","350px"],[1,"timeline"],[4,"ngFor","ngForOf"],["class","box",4,"ngIf"],[1,"box"],[1,"flag-wrapper"],[1,"flag",2,"--flag-color","green"],[1,"desc",3,"innerHTML"],[1,"flag",2,"--flag-color","var(--ion-color-gold)"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"p",3),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"ul",4),t.YNc(9,x,3,2,"li",5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("scrollEvents",!0),t.xp6(3),t.Oqu(t.lcZ(4,4,"ROADMAP")),t.xp6(3),t.Oqu(t.lcZ(7,6,"ROADMAP_DESC")),t.xp6(3),t.Q6J("ngForOf",i.settings.roadmap))},directives:[d.W2,l.sg,l.O5],pipes:[p.X$],styles:['.timeline[_ngcontent-%COMP%]{position:relative;width:660px;margin:-18px auto 0;padding:1em 0;list-style-type:none}.timeline[_ngcontent-%COMP%]:before{position:absolute;left:50%;top:0;content:" ";display:block;width:6px;height:100%;margin-left:-3px;background:#505050;background:linear-gradient(to bottom,rgba(80,80,80,0) 0%,#505050 8%,#505050 92%,rgba(80,80,80,0) 100%);z-index:5}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1em 0}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";display:block;height:0;clear:both;visibility:hidden}.flag-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-block;text-align:center}.time-wrapper[_ngcontent-%COMP%]{display:inline;line-height:1em;font-size:.66666em;vertical-align:middle}.timeline[_ngcontent-%COMP%]{width:100%;padding:4em 0 1em}.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2em 0}.box[_ngcontent-%COMP%]{float:none;width:300px;text-align:center;margin-left:auto;margin-right:auto}.flag[_ngcontent-%COMP%]{position:relative;display:inline;background:var(--ion-card-background);padding:6px 10px;border-radius:8px;border:1px solid var(--ion-border-color);font-weight:600;text-align:left;z-index:15}.flag[_ngcontent-%COMP%]:before{position:absolute;top:-30px;left:50%;content:" ";display:block;width:12px;height:12px;margin-left:-9px;margin-top:-10px;background:#fff;border-radius:10px;border:4px solid var(--flag-color);z-index:10}.flag[_ngcontent-%COMP%]:after{content:"";position:absolute;margin-top:-8px;border:solid transparent;border-right-color:var(--ion-card-background);border-width:8px;pointer-events:none}.flag[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;top:-8px;height:0;width:0;margin-left:-8px;border:solid transparent;border-bottom-color:var(--ion-card-background);border-width:8px;pointer-events:none}.desc[_ngcontent-%COMP%]{position:relative;margin:12px;font-size:13px;line-height:1.5em;padding:12px;background:var(--ion-card-background);border:1px solid var(--ion-border-color);border-radius:8px;z-index:15}']}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(P)],r.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,s.u5,d.Pc,h,p.aw]]}),n})()}}]);