"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7697],{7697:(B,u,g)=>{g.r(u),g.d(u,{TagPagePageModule:()=>q});var d=g(9808),x=g(3075),o=g(3349),l=g(1171),e=g(9863),m=g(2313),T=g(1808),_=g(8349),y=g(4662),f=g(4135);function Z(t,a){if(1&t&&(e.TgZ(0,"p",15),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(i.categoryDescripton)}}function v(t,a){1&t&&(e.TgZ(0,"ion-thumbnail",16),e._UZ(1,"ion-skeleton-text",17),e.qZA())}function P(t,a){1&t&&(e.TgZ(0,"div"),e._UZ(1,"img",24),e.TgZ(2,"ion-thumbnail",25),e._UZ(3,"ion-skeleton-text",17),e.qZA(),e.qZA())}function b(t,a){if(1&t&&e._UZ(0,"img",31),2&t){const i=e.oxw(2).$implicit;e.s9C("src",null==i?null:i.image_url,e.LSH),e.s9C("alt",null==i?null:i.title.rendered)}}function L(t,a){if(1&t&&e._UZ(0,"img",32),2&t){const i=e.oxw(2).$implicit;e.s9C("src",null==i?null:i.image_url,e.LSH),e.s9C("alt",null==i?null:i.title.rendered)}}function z(t,a){1&t&&(e.TgZ(0,"div",33),e._UZ(1,"ion-icon",34),e.TgZ(2,"ion-label",35),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"PREMIUM")))}function A(t,a){if(1&t&&(e.TgZ(0,"div",33),e.TgZ(1,"ion-label",35),e._uU(2),e.qZA(),e.qZA()),2&t){const i=e.oxw(2).$implicit;e.xp6(2),e.hij("\xb7 ",null==i?null:i.formatted_date," \xb7")}}function w(t,a){if(1&t&&(e.TgZ(0,"ion-card-content",26),e.YNc(1,b,1,2,"img",27),e.YNc(2,L,1,2,"img",28),e.TgZ(3,"div",29),e.YNc(4,z,5,3,"div",30),e.YNc(5,A,3,1,"div",30),e.qZA(),e.qZA()),2&t){const i=e.oxw(),n=i.index,r=i.$implicit;e.xp6(1),e.Q6J("ngIf",0==n),e.xp6(1),e.Q6J("ngIf",n>0),e.xp6(2),e.Q6J("ngIf",null==r?null:r.ACF.wersja_pro),e.xp6(1),e.Q6J("ngIf",null==r?null:r.formatted_date)}}const I=function(t,a){return[t,"legenda",a]};function N(t,a){if(1&t&&(e.TgZ(0,"ion-card",18),e.YNc(1,P,4,0,"div",19),e.YNc(2,w,6,4,"ion-card-content",20),e.TgZ(3,"ion-card-content",21),e._UZ(4,"ion-label",22),e._UZ(5,"p",23),e.qZA(),e._UZ(6,"ion-ripple-effect"),e.qZA()),2&t){const i=a.$implicit;e.Q6J("routerLink",e.WLB(5,I,"/"+(null==i?null:i.lang),null==i?null:i.slug)),e.xp6(1),e.Q6J("ngIf",!(null!=i&&i.image_url)),e.xp6(1),e.Q6J("ngIf",null==i?null:i.image_url),e.xp6(2),e.Q6J("innerHTML",null==i?null:i.title.rendered,e.oJD),e.xp6(1),e.Q6J("innerHTML",null==i?null:i.excerpt.rendered,e.oJD)}}function M(t,a){1&t&&(e.TgZ(0,"div",36),e._UZ(1,"ion-spinner",37),e.TgZ(2,"ion-label",38),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"LOADING")))}function U(t,a){1&t&&(e.TgZ(0,"h5",39),e._UZ(1,"ion-icon",40),e.TgZ(2,"p",41),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"THAT_ALL")))}function J(t,a){1&t&&e._UZ(0,"div",42)}function Y(t,a){1&t&&e._UZ(0,"div",43)}const Q=[{path:"",component:(()=>{class t{constructor(i,n,r,s,c){this.titleService=i,this.meta=n,this.route=r,this.service=s,this.settings=c,this.legendy=[],this.categories=[],this.loadingLegenda=!0,this.lastNumberLegenda=20,this.pageLegenda=1,this.noMorePosts=!1,this.infinityShow=!1,this.today=new Date,this.currentDate=this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate()}loadMoreLegendy(i){this.loadingLegenda=!0,this.service.getTag(this.pageLegenda,this.categoryId,i).then(n=>{n.error?(this.lastNumberLegenda=0,this.loadingLegenda=!1,this.refreshEvent&&this.refreshEvent.target.complete(),this.infinityLegendyEvent&&this.infinityLegendyEvent.target.complete(),400==n.error.data.status&&setTimeout(()=>{this.noMorePosts=!0},0)):n&&(this.legendy=this.legendy.concat(n),this.lastNumberLegenda=n.length,this.pageLegenda=this.pageLegenda+1,this.loadingLegenda=!1,this.refreshEvent&&this.refreshEvent.target.complete(),this.infinityLegendyEvent&&this.infinityLegendyEvent.target.complete())})}infinityLegendy(i){this.infinityLegendyEvent=i,this.loadMoreLegendy(this.settings.langCode),setTimeout(()=>{i.target.complete()},2400)}madeRefresh(i){location.reload()}ngOnInit(){this.route.paramMap.subscribe(i=>{this.settings.langCode=this.route.snapshot.paramMap.get("lang"),this.category=i.get("slug"),this.loadingLegenda=!0,this.service.searchCategory(this.category,this.settings.langCode).then(n=>{if(!n.error&&n){let r=function(s,c,D){var p=document.createElement("script");for(var h in s)p.setAttribute(h,s[h]?s[h]:null);p.innerHTML=c,p.onload=D,document.head.appendChild(p)};this.categoryId=n[0].id,this.categoryName=n[0].name,this.categoryDescripton=n[0].description,this.seo_short=this.categoryDescripton.replaceAll(/(\r\n|\n|\r)/gm,""),this.seo_description=this.seo_short.match(/^.{1,150}/g),this.loadMoreLegendy(this.settings.langCode),document.documentElement.setAttribute("lang",this.settings.langCode),this.titleService.setTitle("Tag: "+this.categoryName+" \u2022 Ba\u015bnie z Mazur"),this.meta.updateTag({name:"description",content:this.seo_description}),this.meta.updateTag({property:"og:title",content:"Tag: "+this.categoryName+" \u2022 Ba\u015bnie z Mazur"}),this.meta.updateTag({property:"og:description",content:this.seo_description}),this.meta.updateTag({property:"og:image",content:"https://basniezmazur.pl/service/assets/images/2022/02/legendy_z_mazur_tlo.png"}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:url",content:"https://basniezmazur.pl/tag/"+this.category}),this.meta.updateTag({property:"twitter:title",content:"Tag: "+this.categoryName+" \u2022 Ba\u015bnie z Mazur"}),this.meta.updateTag({property:"twitter:description",content:this.seo_description}),this.meta.updateTag({property:"twitter:image",content:"https://basniezmazur.pl/service/assets/images/2022/02/legendy_z_mazur_tlo.png"}),this.meta.updateTag({property:"twitter:url",content:"https://basniezmazur.pl/tag/"+this.category}),r({type:"application/ld+json"},'{"@context":"https://schema.org","@graph":[{"@type":"Article","datePublished":"'+this.currentDate+'","headline":"Tag: '+this.categoryName+' \u2022 Legendy z Mazur","description":"'+this.seo_description+'","name":"'+this.categoryName+'","image":{"@type":"ImageObject","@id":"Tag: '+this.categoryName+' \u2022 Legendy z Mazur","url":"'+this.categoryName+'","height":670,"width":1200,"caption":"Tag: '+this.categoryName+' \u2022 Legendy z Mazur"},"thumbnailUrl":"'+this.categoryName+'"}]}',function(){})}})})}ionViewDidEnter(){}ngOnDestroy(){this.legendy=[],this.lastNumberLegenda=0,this.pageLegenda=0}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.Dx),e.Y36(m.h_),e.Y36(l.gz),e.Y36(T.t),e.Y36(_.Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tag-page"]],decls:19,vars:12,consts:[["fullscreen","",3,"scrollEvents"],["slot","fixed","id","refresher",2,"padding","34px 0px 120px 0px","margin-top","0px",3,"ionRefresh"],[1,"content-size"],[2,"margin","0px 16px 20px 16px"],[2,"text-transform","capitalize","margin","0px","padding","0px","font-weight","500","font-size","24px"],["name","bookmark",2,"border-radius","8px","border","1px solid var(--ion-border-color-2)","background-color","var(--ion-border-back-color)","font-size","16px","padding","8px","margin","0px 6px -8px 0px"],["style","margin: 0px; padding: 8px 0px 0px 0px; font-weight: 500; font-size: 16px;",4,"ngIf"],["style","width: 100%; height: 64px; margin: 8px 0px 0px 0px;",4,"ngIf"],["class","ion-activatable ripple-parent","style","--ripple-color: var(--ion-border-color-2) !important; border: 1px solid var(--ion-border-color); margin: 16px 16px 0px 16px !important; box-shadow: none; border-radius: 8px;",3,"routerLink",4,"ngFor","ngForOf"],["style","text-align: center !important;",4,"ngIf"],["style","\t-webkit-animation: fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0s both; animation: fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0s both;width: 100%; text-align: center;",4,"ngIf"],[3,"ionInfinite"],["style","height: 18px",4,"ngIf"],["loadingSpinner","lines","loadingText",""],["style","height: 58px",4,"ngIf"],[2,"margin","0px","padding","8px 0px 0px 0px","font-weight","500","font-size","16px"],[2,"width","100%","height","64px","margin","8px 0px 0px 0px"],["animated",""],[1,"ion-activatable","ripple-parent",2,"--ripple-color","var(--ion-border-color-2) !important","border","1px solid var(--ion-border-color)","margin","16px 16px 0px 16px !important","box-shadow","none","border-radius","8px",3,"routerLink"],[4,"ngIf"],["style","padding: 0px;",4,"ngIf"],[2,"text-align","left","padding","22px 12px 12px 12px"],[2,"font-weight","regular","font-size","22px","line-height","22px",3,"innerHTML"],[2,"font-size","12pt","font-weight","500","padding-top","6px",3,"innerHTML"],["src","assets/imgs/placeholder.png","alt","Placeholder image",2,"width","100%","background-color","var(--ion-border-color)","opacity","0.6"],[2,"position","absolute","top","0px","left","0px","width","100%","height","100%"],[2,"padding","0px"],["width","1200","height","670","style","width: 100%; height: auto;",3,"src","alt",4,"ngIf"],["loading","lazy","width","1200","height","670","style","width: 100%; height: auto;",3,"src","alt",4,"ngIf"],[2,"margin","-48px 0px 0px 2px"],["class","postChip",4,"ngIf"],["width","1200","height","670",2,"width","100%","height","auto",3,"src","alt"],["loading","lazy","width","1200","height","670",2,"width","100%","height","auto",3,"src","alt"],[1,"postChip"],["name","star",2,"color","var(--ion-color-gold)","font-size","10pt","margin","0px 5px -2.5px 0px"],[2,"font-weight","500","font-size","8pt"],[2,"text-align","center !important"],["name","dots",2,"margin-top","24px","display","block","margin-left","auto","margin-right","auto"],[2,"font-weight","500","font-size","12pt","line-height","16pt"],[2,"-webkit-animation","fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0s both","animation","fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0s both","width","100%","text-align","center"],["name","trail-sign-outline",2,"font-size","64px"],[2,"text-align","center","font-size","12pt","font-weight","500","padding-top","6px","padding-right","24px","padding-left","24px","margin","0px !important"],[2,"height","18px"],[2,"height","58px"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-refresher",1),e.NdJ("ionRefresh",function(s){return n.madeRefresh(s)}),e._UZ(2,"ion-refresher-content"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"p",4),e._UZ(6,"ion-icon",5),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.YNc(9,Z,2,1,"p",6),e.YNc(10,v,2,0,"ion-thumbnail",7),e.qZA(),e.YNc(11,N,7,8,"ion-card",8),e.YNc(12,M,5,3,"div",9),e.YNc(13,U,5,3,"h5",10),e.TgZ(14,"ion-infinite-scroll",11),e.NdJ("ionInfinite",function(s){return n.infinityLegendy(s)}),e.YNc(15,J,1,0,"div",12),e._UZ(16,"ion-infinite-scroll-content",13),e.YNc(17,Y,1,0,"div",14),e.qZA(),e.qZA(),e._UZ(18,"app-footer"),e.qZA()),2&i&&(e.Q6J("scrollEvents",!0),e.xp6(7),e.AsE("",e.lcZ(8,10,"TAG"),": ",n.categoryName,""),e.xp6(2),e.Q6J("ngIf",n.legendy.length),e.xp6(1),e.Q6J("ngIf",!n.legendy.length&&n.loadingLegenda),e.xp6(1),e.Q6J("ngForOf",n.legendy),e.xp6(1),e.Q6J("ngIf",!n.legendy.length&&n.loadingLegenda),e.xp6(1),e.Q6J("ngIf",!n.loadingLegenda&&n.noMorePosts),e.xp6(2),e.Q6J("ngIf",n.loadingLegenda),e.xp6(2),e.Q6J("ngIf",n.loadingLegenda))},directives:[o.W2,o.nJ,o.Wo,o.gu,d.O5,o.Bs,o.CK,d.sg,o.PM,o.YI,l.rH,o.FN,o.Q$,o.H$,o.PQ,o.ju,o.MB,y.c],pipes:[f.X$],styles:[""]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(Q)],l.Bz]}),t})();var E=g(5642);let q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,x.u5,o.Pc,C,f.aw,E.K]]}),t})()}}]);