!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{mbC9:function(t,o,i){"use strict";i.r(o),i.d(o,"HttpLoaderFactory",function(){return M}),i.d(o,"BookedTravelsPageModule",function(){return P});var r,a,c=i("ofXK"),l=i("3Pt+"),u=i("TEn/"),b=i("tyNb"),s=i("mrSG"),f=i("Gpoy"),p=i("AytR"),g=i("oXKM"),d=i("fXoL"),m=i("sYmb"),h=[{path:"",component:(r=function(){function t(e){n(this,t),this.popoverController=e}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){(new f.b).configureLogging(f.c.Information).withUrl("".concat(p.a.signalRUrl,"/orderHub")).build().start().then(function(){console.log("signalR Connected in travelling")}).catch(function(n){return console.log(n)})}},{key:"openLanguagePopover",value:function(n){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:g.a,event:n});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}}])&&e(o.prototype,i),r&&e(o,r),t}(),r.\u0275fac=function(n){return new(n||r)(d.Kb(u.H))},r.\u0275cmp=d.Eb({type:r,selectors:[["app-booked-travels"]],decls:11,vars:3,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"]],template:function(n,e){1&n&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-buttons",0),d.Lb(3,"ion-menu-button"),d.Mb(),d.Nb(4,"ion-title"),d.Nb(5,"ion-label"),d.pc(6),d.Yb(7,"translate"),d.Mb(),d.Mb(),d.Nb(8,"ion-buttons",1),d.Nb(9,"ion-icon",2),d.Vb("click",function(n){return e.openLanguagePopover(n)}),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Lb(10,"ion-content")),2&n&&(d.zb(6),d.qc(d.Zb(7,1,"Booked")))},directives:[u.l,u.B,u.e,u.s,u.A,u.p,u.m,u.i],pipes:[m.c],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}#map[_ngcontent-%COMP%]{height:100%;width:100%}ion-title[_ngcontent-%COMP%]{text-align:center}h5[_ngcontent-%COMP%]{font-size:.9em}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}.fonted[_ngcontent-%COMP%]{font-family:Open Sans Light}.centered[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}.blink_me[_ngcontent-%COMP%]{-webkit-animation:blinker 1s linear infinite;animation:blinker 1s linear infinite}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}"]}),r)}],k=((a=function e(){n(this,e)}).\u0275fac=function(n){return new(n||a)},a.\u0275mod=d.Ib({type:a}),a.\u0275inj=d.Hb({imports:[[b.h.forChild(h)],b.h]}),a),v=i("tk/3"),w=i("mqiu"),y=i("QhVT");function M(n){return new w.a(n)}var C,P=((C=function e(){n(this,e)}).\u0275fac=function(n){return new(n||C)},C.\u0275mod=d.Ib({type:C}),C.\u0275inj=d.Hb({imports:[[c.b,l.e,u.C,k,m.b.forChild({loader:{provide:m.a,useFactory:M,deps:[v.a]}}),y.LanguagePopoverPageModule]]}),C)}}])}();