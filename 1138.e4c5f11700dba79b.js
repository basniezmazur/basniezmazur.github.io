"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1138],{1138:(T,r,a)=>{a.r(r),a.d(r,{UlubionePagePageModule:()=>U});var p=a(9808),d=a(3075),o=a(3349),g=a(1171),n=a(9863),c=a(8349),s=a(4135);function u(t,i){1&t&&(n.TgZ(0,"h5",2),n._UZ(1,"img",3),n.TgZ(2,"p",4),n._uU(3),n.ALo(4,"translate"),n.qZA(),n.TgZ(5,"p",5),n._uU(6),n.ALo(7,"translate"),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Oqu(n.lcZ(4,2,"NO_FAV")),n.xp6(3),n.Oqu(n.lcZ(7,4,"FAV_DESC")))}function x(t,i){1&t&&(n.TgZ(0,"div"),n._UZ(1,"img",15),n.TgZ(2,"ion-thumbnail",16),n._UZ(3,"ion-skeleton-text",17),n.qZA(),n.qZA())}function f(t,i){1&t&&(n.TgZ(0,"div",22),n._UZ(1,"ion-icon",24),n.TgZ(2,"ion-label",23),n._uU(3),n.ALo(4,"translate"),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Oqu(n.lcZ(4,1,"PREMIUM")))}function m(t,i){if(1&t&&(n.TgZ(0,"div",22),n._UZ(1,"img",25),n.qZA()),2&t){const e=n.oxw(2).$implicit;n.xp6(1),n.MGl("src","assets/imgs/",null==e?null:e.lang,".png",n.LSH)}}function h(t,i){if(1&t&&(n.TgZ(0,"ion-card-content",18),n._UZ(1,"img",19),n.TgZ(2,"div",20),n.YNc(3,f,5,3,"div",21),n.TgZ(4,"div",22),n.TgZ(5,"ion-label",23),n._uU(6),n.qZA(),n.qZA(),n.YNc(7,m,2,1,"div",21),n.qZA(),n.qZA()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.s9C("src",null==e?null:e.FeaturedImage,n.LSH),n.s9C("alt",null==e?null:e.Title),n.xp6(2),n.Q6J("ngIf",(null==e?null:e.Points)>0),n.xp6(3),n.hij("\xb7 ",null==e?null:e.Date," \xb7"),n.xp6(1),n.Q6J("ngIf",null==e?null:e.formatted_date)}}const Z=function(t,i){return[t,"legenda",i]};function _(t,i){if(1&t&&(n.TgZ(0,"ion-card",9),n.YNc(1,x,4,0,"div",10),n.YNc(2,h,8,5,"ion-card-content",11),n.TgZ(3,"ion-card-content",12),n._UZ(4,"ion-label",13),n._UZ(5,"p",14),n.qZA(),n._UZ(6,"ion-ripple-effect"),n.qZA()),2&t){const e=i.$implicit,l=n.oxw(2);n.Q6J("routerLink",n.WLB(5,Z,"/"+l.settings.langCode,null==e?null:e.Slug)),n.xp6(1),n.Q6J("ngIf",!(null!=e&&e.FeaturedImage)),n.xp6(1),n.Q6J("ngIf",null==e?null:e.FeaturedImage),n.xp6(2),n.Q6J("innerHTML",null==e?null:e.Title,n.oJD),n.xp6(1),n.Q6J("innerHTML",null==e?null:e.Excerpt,n.oJD)}}function P(t,i){if(1&t&&(n.TgZ(0,"div",6),n.TgZ(1,"p",7),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.YNc(4,_,7,8,"ion-card",8),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.hij("\xb7 ",n.lcZ(3,2,"FAVOURITE")," \xb7"),n.xp6(2),n.Q6J("ngForOf",e.settings.favoriteLegends)}}const b=[{path:"",component:(()=>{class t{constructor(e,l){this.settings=e,this.route=l,document.documentElement.setAttribute("lang",this.settings.langCode)}ngOnInit(){this.route.paramMap.subscribe(e=>{this.settings.langCode=this.route.snapshot.paramMap.get("lang")})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.Z),n.Y36(g.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-ulubione-page"]],decls:3,vars:2,consts:[["style","width: 100%; text-align: center; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);",4,"ngIf"],["class","content-size","style","padding: 1px 0px 16px 0px;",4,"ngIf"],[2,"width","100%","text-align","center","position","absolute","top","50%","left","50%","-ms-transform","translate(-50%, -50%)","transform","translate(-50%, -50%)"],["src","assets/imgs/ulubione.svg",2,"display","block","margin-left","auto","margin-right","auto","width","128px","padding-bottom","12px"],[2,"text-align","center","font-size","18pt","font-weight","500","padding-top","6px","padding-right","24px","padding-left","24px","margin","0px !important"],[2,"text-align","center","font-size","10pt","font-weight","500","padding-top","6px","padding-right","24px","padding-left","24px","margin","0px !important"],[1,"content-size",2,"padding","1px 0px 16px 0px"],[2,"text-align","center","font-size","20pt","font-weight","500","padding-top","12px","padding-right","24px","padding-left","24px","margin","0px !important"],["class","ion-activatable ripple-parent","style","--ripple-color: var(--ion-border-color-2) !important; border: 1px solid var(--ion-border-color); margin: 16px 16px 0px 16px !important; box-shadow: none; border-radius: 8px;",3,"routerLink",4,"ngFor","ngForOf"],[1,"ion-activatable","ripple-parent",2,"--ripple-color","var(--ion-border-color-2) !important","border","1px solid var(--ion-border-color)","margin","16px 16px 0px 16px !important","box-shadow","none","border-radius","8px",3,"routerLink"],[4,"ngIf"],["style","padding: 0px;",4,"ngIf"],[2,"text-align","left","padding","22px 12px 12px 12px"],[2,"font-weight","regular","font-size","22px","line-height","22px",3,"innerHTML"],[2,"font-size","12pt","font-weight","500","padding-top","6px",3,"innerHTML"],["src","assets/imgs/placeholder.png","alt","Placeholder image",2,"width","100%","background-color","var(--ion-border-color)","opacity","0.6"],[2,"position","absolute","top","0px","left","0px","width","100%","height","100%"],["animated",""],[2,"padding","0px"],["loading","lazy","width","1200","height","670",2,"width","100%","height","auto",3,"src","alt"],[2,"margin","-48px 0px 0px 2px"],["class","postChip",4,"ngIf"],[1,"postChip"],[2,"font-weight","500","font-size","8pt"],["name","star",2,"color","var(--ion-color-gold)","font-size","10pt","margin","0px 5px -2.5px 0px"],["loading","lazy","alt","Language",2,"width","16px","height","16px","margin","0px 0px -5px 0px",3,"src"]],template:function(e,l){1&e&&(n.TgZ(0,"ion-content"),n.YNc(1,u,8,6,"h5",0),n.YNc(2,P,5,4,"div",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",0==l.settings.favoriteLegends.length),n.xp6(1),n.Q6J("ngIf",l.settings.favoriteLegends.length>0))},directives:[o.W2,p.O5,p.sg,o.PM,o.YI,g.rH,o.Bs,o.CK,o.FN,o.gu,o.Q$,o.H$],pipes:[s.X$],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.Bz.forChild(b)],g.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,d.u5,o.Pc,v,s.aw]]}),t})()}}]);