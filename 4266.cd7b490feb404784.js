"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4266],{4266:(I,h,g)=>{g.r(h),g.d(h,{MainPageModule:()=>T});var i=g(603),s=g(6895),l=g(4006),c=g(1698),n=g(4650),x=g(8914),p=g(6188),u=g(5393),m=g(241);const _=function(){return["mapa"]};function f(t,a){1&t&&(n.TgZ(0,"ion-fab",10)(1,"ion-fab-button",11),n._UZ(2,"ion-icon",12),n.TgZ(3,"ion-label"),n._uU(4),n.ALo(5,"translate"),n.qZA()()()),2&t&&(n.Q6J("routerLink",n.DdM(4,_)),n.xp6(4),n.Oqu(n.lcZ(5,2,"MAP")))}function M(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"ion-button",13),n.NdJ("click",function(){n.CHM(e);const r=n.oxw();return n.KtG(r.resetSearchLegendy())}),n._UZ(1,"ion-icon",14),n.TgZ(2,"ion-label",15),n._uU(3),n.ALo(4,"translate"),n.qZA()()}2&t&&(n.xp6(3),n.Oqu(n.lcZ(4,1,"CLEAR")))}function b(t,a){1&t&&(n.TgZ(0,"div"),n._UZ(1,"img",22),n.TgZ(2,"ion-thumbnail",23),n._UZ(3,"ion-skeleton-text",24),n.qZA()())}function P(t,a){if(1&t&&n._UZ(0,"img",30),2&t){const e=n.oxw(2).$implicit;n.s9C("src",null==e?null:e.FeaturedImage,n.LSH),n.s9C("alt",null==e?null:e.Title)}}function C(t,a){if(1&t&&n._UZ(0,"img",31),2&t){const e=n.oxw(2).$implicit;n.s9C("src",null==e?null:e.FeaturedImage,n.LSH),n.s9C("alt",null==e?null:e.Title)}}function O(t,a){1&t&&(n.TgZ(0,"div",32),n._UZ(1,"ion-icon",33),n.TgZ(2,"ion-label",34),n._uU(3),n.ALo(4,"translate"),n.qZA()()),2&t&&(n.xp6(3),n.Oqu(n.lcZ(4,1,"PREMIUM")))}function v(t,a){if(1&t&&(n.TgZ(0,"div",32)(1,"ion-label",34),n._uU(2),n.qZA()()),2&t){const e=n.oxw(2).$implicit;n.xp6(2),n.hij("\xb7 ",null==e?null:e.Date," \xb7")}}function w(t,a){if(1&t&&(n.TgZ(0,"ion-card-content",25),n.YNc(1,P,1,2,"img",26),n.YNc(2,C,1,2,"img",27),n.TgZ(3,"div",28),n.YNc(4,O,5,3,"div",29),n.YNc(5,v,3,1,"div",29),n.qZA()()),2&t){const e=n.oxw(),o=e.index,r=e.$implicit;n.xp6(1),n.Q6J("ngIf",0==o),n.xp6(1),n.Q6J("ngIf",o>0),n.xp6(2),n.Q6J("ngIf",(null==r?null:r.Points)>0),n.xp6(1),n.Q6J("ngIf",null==r?null:r.Date)}}const y=function(t){return["legenda",t]};function L(t,a){if(1&t&&(n.TgZ(0,"ion-card",16),n.YNc(1,b,4,0,"div",17),n.YNc(2,w,6,4,"ion-card-content",18),n.TgZ(3,"ion-card-content",19),n._UZ(4,"ion-label",20)(5,"p",21),n.qZA(),n._UZ(6,"ion-ripple-effect"),n.qZA()),2&t){const e=a.$implicit;n.Q6J("routerLink",n.VKq(5,y,null==e?null:e.Slug)),n.xp6(1),n.Q6J("ngIf",!(null!=e&&e.FeaturedImage)),n.xp6(1),n.Q6J("ngIf",null==e?null:e.FeaturedImage),n.xp6(2),n.Q6J("innerHTML",null==e?null:e.Title,n.oJD),n.xp6(1),n.Q6J("innerHTML",null==e?null:e.Excerpt,n.oJD)}}const k=[{path:"",component:(()=>{class t{constructor(e,o,r,d){this.service=e,this.translate=o,this.route=r,this.settings=d,this.legendy=[],this.loadingLegenda=!0,this.lastNumberLegenda=20,this.pageLegenda=1,this.noMorePosts=!1,this.searchLegenda="",this.searchingFor=!1,this.searchingLegenda=!1,this.infinityShow=!1,this.settings.langCode=this.route.snapshot.paramMap.get("lang"),document.documentElement.setAttribute("lang",this.settings.langCode)}loadMoreLegendy(e){this.loadingLegenda=!0,this.searchingFor=!0,this.service.getRecentLegendy(this.pageLegenda,this.searchLegenda,e).then(o=>{o.error?(this.lastNumberLegenda=0,this.loadingLegenda=!1,this.searchingFor=!0,this.refreshEvent&&this.refreshEvent.target.complete(),this.infinityLegendyEvent&&this.infinityLegendyEvent.target.complete()):o&&(this.legendy=this.legendy.concat(o),this.legendy.forEach(r=>{!0===this.settings.isPro&&(r.ACF.wersja_pro=!1)}),this.lastNumberLegenda=o.length,this.pageLegenda=this.pageLegenda+1,this.loadingLegenda=!1,this.searchingFor=!1,this.refreshEvent&&this.refreshEvent.target.complete(),this.infinityLegendyEvent&&this.infinityLegendyEvent.target.complete())})}searchLegendy(){this.searchingLegenda=!0,this.noMorePosts=!1,this.loadMoreLegendy(this.settings.langCode)}resetSearchLegendy(){this.loadingLegenda=!0,this.searchingLegenda=!1,this.searchingFor=!1,this.searchLegenda="",this.legendy.length=null,this.lastNumberLegenda=0,this.pageLegenda=1,this.loadMoreLegendy(this.settings.langCode)}resetSearch(){this.loadingLegenda=!0,this.searchingFor=!1,this.legendy.length=null,this.lastNumberLegenda=0,this.pageLegenda=1}infinityLegendy(e){this.infinityLegendyEvent=e,this.loadMoreLegendy(this.settings.langCode),setTimeout(()=>{e.target.complete()},2400)}doRefresh(e){this.legendy.length=null,this.lastNumberLegenda=10,this.pageLegenda=1,this.loadingLegenda=!1,this.refreshEvent=e,this.loadMoreLegendy(this.settings.langCode)}madeRefresh(e){location.reload()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(x.t),n.Y36(p.sK),n.Y36(c.gz),n.Y36(u.Z))},t.\u0275cmp=n.Xpm({type:t,selectors:[["mainPage"]],decls:13,vars:8,consts:[["fullscreen","",3,"scrollEvents"],["slot","fixed","id","refresher",2,"padding","34px 0px 120px 0px","margin-top","0px",3,"ionRefresh"],["horizontal","center","vertical","bottom","slot","fixed",3,"routerLink",4,"ngIf"],[1,"content-size"],[2,"--ripple-color","white !important","margin","0px 16px 0px 16px","padding","8px 18px 8px 18px","box-shadow","0px 0px 0px 0px var(--ion-box-shadow)","border-radius","8px","background-color","var(--ion-card-background-2)"],["enterkeyhint","search",2,"color","var(--ion-text-color)","font-weight","500","font-size","16px","margin","0px","padding","0px",3,"placeholder","ngModel","ngModelChange","keyup.enter","change"],["searchInput",""],["name","search-sharp",2,"opacity","0.6","padding-right","6px","margin-bottom","-1px"],["class","resetButton",3,"click",4,"ngIf"],["class","ion-activatable ripple-parent","style","--ripple-color: var(--ion-color-gold) !important; margin: 16px 16px 0px 16px !important; box-shadow: none; border-radius: 8px;",3,"routerLink",4,"ngFor","ngForOf"],["horizontal","center","vertical","bottom","slot","fixed",3,"routerLink"],[1,"FaButton"],["name","map"],[1,"resetButton",3,"click"],["name","close-circle-outline"],[2,"color","var(--ion-background-color) !important"],[1,"ion-activatable","ripple-parent",2,"--ripple-color","var(--ion-color-gold) !important","margin","16px 16px 0px 16px !important","box-shadow","none","border-radius","8px",3,"routerLink"],[4,"ngIf"],["style","padding: 0px;",4,"ngIf"],[2,"text-align","left","padding","28px 18px 18px 18px"],[2,"font-weight","normal","font-size","24px","line-height","30px",3,"innerHTML"],[2,"font-size","12pt","font-weight","500","padding-top","6px",3,"innerHTML"],["src","assets/imgs/placeholder.png","alt","Placeholder image",2,"width","100%","background-color","var(--ion-border-color)","opacity","0.6"],[2,"position","absolute","top","0px","left","0px","width","100%","height","100%"],["animated",""],[2,"padding","0px"],["width","1200","height","670","style","width: 100%; height: auto;",3,"src","alt",4,"ngIf"],["loading","lazy","width","1200","height","670","style","width: 100%; height: auto;",3,"src","alt",4,"ngIf"],[2,"margin","-48px 0px 0px 2px"],["class","postChip",4,"ngIf"],["width","1200","height","670",2,"width","100%","height","auto",3,"src","alt"],["loading","lazy","width","1200","height","670",2,"width","100%","height","auto",3,"src","alt"],[1,"postChip"],["name","star",2,"color","var(--ion-color-gold)","font-size","10pt","margin","0px 5px -2.5px 0px"],[2,"font-weight","500","font-size","8pt"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-content",0)(1,"ion-refresher",1),n.NdJ("ionRefresh",function(d){return o.madeRefresh(d)}),n._UZ(2,"ion-refresher-content"),n.qZA(),n.YNc(3,f,6,5,"ion-fab",2),n.TgZ(4,"div",3)(5,"ion-card",4)(6,"ion-input",5,6),n.NdJ("ngModelChange",function(d){return o.searchLegenda=d})("keyup.enter",function(){return o.searchLegendy()})("change",function(){return o.resetSearch()}),n.ALo(8,"translate"),n._UZ(9,"ion-icon",7),n.qZA(),n.YNc(10,M,5,3,"ion-button",8),n.qZA(),n.YNc(11,L,7,7,"ion-card",9),n.qZA(),n._UZ(12,"app-footer"),n.qZA()),2&e&&(n.Q6J("scrollEvents",!0),n.xp6(3),n.Q6J("ngIf",!o.searchingLegenda),n.xp6(3),n.s9C("placeholder",n.lcZ(8,6,"SEARCH")),n.Q6J("ngModel",o.searchLegenda),n.xp6(4),n.Q6J("ngIf",o.searchingLegenda),n.xp6(1),n.Q6J("ngForOf",o.settings.legends))},dependencies:[s.sg,s.O5,l.JJ,l.On,i.YG,i.PM,i.FN,i.W2,i.IJ,i.W4,i.gu,i.pK,i.Q$,i.nJ,i.Wo,i.H$,i.CK,i.Bs,i.j9,i.YI,c.rH,m.c,p.X$],styles:[".source-button[_ngcontent-%COMP%]{text-align:left;margin:18px!important;padding:18px;box-shadow:none;border-radius:12px;display:flex;--box-shadow: none;box-shadow:0;border:1px solid var(--ion-border-color-2);background-color:var(--ion-card-background-2)}.etykieta[_ngcontent-%COMP%]{opacity:.5}ion-list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:8px}ion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px}.FaButton[_ngcontent-%COMP%]{width:112px;height:44px;--box-shadow: 0px 3px 14px -4px var(--ion-color-gold);border:1px solid var(--ion-color-gold);--background: #1e1f21 !important;--color: var(--ion-color-gold);border-radius:8px;--border-radius: 8px;padding:0;margin-bottom:9px;margin-left:-28.5px}.FaButton[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:6px;margin-top:-1px}.FaButton[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.resetButton[_ngcontent-%COMP%]{width:auto;height:57px;--box-shadow: 0px 0px 0px 0px rgba(0,0,0,.53);border-radius:8px 0 0;--border-radius: 0px 8px 8px 0px;padding:0;position:absolute;right:-2px;top:-4px;z-index:10;--background: var(--ion-text-color);color:var(--ion-background-color)!important;text-transform:capitalize}.resetButton[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:6px;margin-top:-1px}.resetButton[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.website[_ngcontent-%COMP%]{width:auto;background-color:transparent;--background: transparent;color:#ffffff60;border-radius:3px;border:0px solid var(--ion-border-color);font-weight:600;font-size:8pt;line-height:20px;text-transform:none;min-height:16px;--box-shadow: none;--border-radius: 3px;box-shadow:none;margin:3px;padding:0!important}.actBtn4[_ngcontent-%COMP%]{border-radius:3px;border:0px solid var(--ion-border-color);font-weight:600;font-size:12px;line-height:20px;text-transform:none;min-height:38px;width:auto;--box-shadow: none;--background: var(--ion-border-color);--border-radius: 3px;box-shadow:none;margin:0 3px 12px!important;padding:0!important}.backVid[_ngcontent-%COMP%]{padding:0;margin:16px!important;-webkit-box-shadow:none;border:1px solid var(--ion-border-color);box-shadow:none;border-radius:6px!important}.img-holder[_ngcontent-%COMP%]{display:inline-block;width:100%;height:75%;overflow:hidden;border-radius:5px 5px 0 0}.img-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;width:100%;height:75%;margin:-12% 0}.backImg2[_ngcontent-%COMP%]{height:100%;background-position:center!important;background-size:cover!important;position:relative;overflow:hidden}.actBtn44[_ngcontent-%COMP%]{color:var(--ion-text-color);border-radius:50px;border:1px solid rgba(0,71,66,.4392156863);background-color:transparent;font-weight:600;font-size:16px;line-height:20px;padding:0;text-transform:none;min-height:54px;width:54px;--box-shadow: none;--background: transparent;--border-radius: 50px;box-shadow:none;margin:0 0 12px!important}.backImgNull[_ngcontent-%COMP%]{height:100%;width:100%;background-position:center!important;background-size:cover!important;position:relative;overflow:hidden;background-color:var(--ion-background-color)!important}.backImg2[_ngcontent-%COMP%]{background-position:center!important;background-size:cover!important;position:relative;overflow:hidden;padding:0;margin:0!important;box-shadow:none;border:1px solid var(--ion-border-color);border-radius:6px;height:232px;display:flex}.play-button[_ngcontent-%COMP%]{display:flex;width:100%;text-align:center;margin:0!important;background-color:var(--ion-color-primary);--background: var(--ion-color-primary);border-radius:12px;--border-radius: 12px;border-color:#e3e3e3;border-style:solid;border-width:0px;color:#fff;--color: #ffffff;font-weight:600;font-size:12px;line-height:20px;text-transform:none;min-height:47px;--box-shadow: none;box-shadow:none;margin-right:6px}ion-tab-bar[_ngcontent-%COMP%]{display:none}ion-select[_ngcontent-%COMP%]::part(text){display:none}ion-item[_ngcontent-%COMP%]::part(native){padding-left:unset;padding-right:unset;padding-inline-start:unset;padding-inline-end:unset;background-color:#3330!important}ion-select[_ngcontent-%COMP%]::part(icon){display:none}.select-speed[_ngcontent-%COMP%]{text-align:center;font-size:18px;border-radius:30%;--border-radius: 30%;padding:0;position:relative;right:0;width:48px;height:48px;line-height:1px;box-shadow:none;opacity:1;color:var(--ion-text-color);background-color:var(--ion-background-color)!important;padding-inline-start:0px!important}.togleFav[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:0px;height:0px;transition:all .3s;opacity:0;font-size:22px}.togleFav[_ngcontent-%COMP%]   ion-icon.zmdi-bookmark-outline[_ngcontent-%COMP%]{width:22px;height:22px;opacity:1}button.active[_ngcontent-%COMP%]   ion-icon.zmdi-bookmark-outline[_ngcontent-%COMP%]{width:0px;height:0px;opacity:0}button.active[_ngcontent-%COMP%]   ion-icon.zmdi-bookmark[_ngcontent-%COMP%]{width:22px;height:22px;opacity:1;color:var(--primary)}.zwiedza-tlo[_ngcontent-%COMP%]{width:100%;height:350px;background-position:center!important;background-size:cover!important;position:relative;overflow:hidden;border-radius:0;padding:0;background-color:#00a698!important}.parallax-image3[_ngcontent-%COMP%]{z-index:-5;margin:0!important;padding-bottom:0;box-shadow:none;border:none;border-bottom-left-radius:18px;border-bottom-right-radius:18px;width:100%;height:350px;overflow:hidden;background-position:center!important;background-size:cover!important;transition:opacity .35s linear}.zwiedza-wstep[_ngcontent-%COMP%]{transition:opacity .35s linear;padding:12px;box-shadow:none;margin:0;position:absolute;left:18px;right:18px;bottom:20px;width:auto;border-radius:18px}.zwiedza-tyt[_ngcontent-%COMP%]{font-size:14pt;font-weight:600;white-space:normal}div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]{width:100%}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]{width:100%;height:170px}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{position:absolute;bottom:14px;left:15px;margin:0;border-radius:4px;text-transform:uppercase;font-weight:400;width:-moz-fit-content;width:fit-content;font-size:.7rem;padding:4px 23px;letter-spacing:.5px}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   h4.helth_care[_ngcontent-%COMP%]{background:#a1e548}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   h4.life_style[_ngcontent-%COMP%]{background:#23ecdb}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   h4.family[_ngcontent-%COMP%]{background:#ffc016}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_detail[_ngcontent-%COMP%]{padding:16px;width:100%}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:500;font-size:1.13rem;padding-bottom:10px}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0;font-size:.75rem}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;display:flex;align-items:center}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem;color:#ffd05d;display:flex;align-items:center}div[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item_inner[_ngcontent-%COMP%]   .item_detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px}"]}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.Bz.forChild(k),c.Bz]}),t})();var Z=g(9258);let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,l.u5,i.Pc,z,p.aw,Z.K]}),t})()}}]);