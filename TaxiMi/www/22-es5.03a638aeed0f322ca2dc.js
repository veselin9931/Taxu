!function(){function t(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,b=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){b=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(b)throw a}}}}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{odG3:function(n,o,i){"use strict";i.r(o),i.d(o,"HttpLoaderFactory",function(){return k}),i.d(o,"DriverHistoryPageModule",function(){return z});var a=i("ofXK"),c=i("3Pt+"),b=i("TEn/"),s=i("tyNb"),l=i("mrSG"),u=i("Gpoy"),d=i("AytR"),f=i("oXKM"),p=i("fXoL"),g=i("exMm"),h=i("8Xdb"),v=i("sYmb");function y(t,n){if(1&t&&(p.Nb(0,"div",11),p.Nb(1,"a",12),p.Nb(2,"div",13),p.Nb(3,"h5",14),p.pc(4),p.Yb(5,"translate"),p.Mb(),p.Nb(6,"small"),p.pc(7),p.Yb(8,"date"),p.Mb(),p.Mb(),p.Nb(9,"p",16),p.pc(10),p.Yb(11,"translate"),p.Mb(),p.Nb(12,"p",16),p.pc(13),p.Yb(14,"translate"),p.Mb(),p.Nb(15,"p",16),p.pc(16),p.Yb(17,"translate"),p.Mb(),p.Nb(18,"p",16),p.pc(19),p.Yb(20,"translate"),p.Mb(),p.Nb(21,"div",6),p.Nb(22,"div",17),p.Nb(23,"small",9),p.pc(24),p.Yb(25,"translate"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&t){var e=n.$implicit;p.zb(4),p.qc(p.Zb(5,13,"Order details")),p.zb(3),p.qc(p.ac(8,15,e.createdOn,"MM/dd/yyyy h:mm")),p.zb(3),p.tc("",p.Zb(11,18,"Passenger"),": ",e.applicationUser.firstName," ",e.applicationUser.lastName,""),p.zb(3),p.sc("",p.Zb(14,20,"Phone number"),": ",e.applicationUser.phone,""),p.zb(3),p.sc("",p.Zb(17,22,"Location"),": ",e.location,""),p.zb(3),p.sc("",p.Zb(20,24,"Destination"),": ",e.destination,""),p.zb(5),p.sc("",p.Zb(25,26,"Profit"),": ",e.totalPrice," \u043b\u0432.")}}var m,M,N=[{path:"",component:(m=function(){function n(t,r,o,i,a){e(this,n),this.driverService=t,this.accountService=r,this.alertController=o,this.popoverController=i,this.translate=a,this.subscriptions=[],this.orders=[],this.userId=this.accountService.userValue.id,this.currentDate=new Date,this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage)}var o,i,a;return o=n,(i=[{key:"ngOnInit",value:function(){var t=this;this.getHistory();var n=(new u.b).configureLogging(u.c.Information).withUrl("".concat(d.a.signalRUrl,"/orderHub")).build();n.start().then(function(){console.log("signalR Connected in history")}).catch(function(t){return console.log(t.toString())}),n.on("BroadcastMessage",function(){t.getHistory()})}},{key:"ionViewDidLeave",value:function(){var n,e=t(this.subscriptions);try{for(e.s();!(n=e.n()).done;){var r=n.value;console.log(r),r.unsubscribe()}}catch(o){e.e(o)}finally{e.f()}}},{key:"getHistory",value:function(){var t=this;this.subscriptions.push(this.driverService.getDriverHistory(this.userId).subscribe(function(n){if(null!=t.orders){t.orders=n;var e=0;n.forEach(function(t){e+=t.totalPrice}),t.dailyProfit=e.toFixed(2)}else console.log("No orders")}))}},{key:"openLanguagePopover",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.popoverController.create({component:f.a,event:t});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}},n,this)}))}}])&&r(o.prototype,i),a&&r(o,a),n}(),m.\u0275fac=function(t){return new(t||m)(p.Kb(g.a),p.Kb(h.a),p.Kb(b.a),p.Kb(b.H),p.Kb(v.d))},m.\u0275cmp=p.Eb({type:m,selectors:[["app-driver-history"]],decls:37,vars:18,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"],["padding","",1,"background"],[1,"row","mt-2"],[1,"col"],[1,"row"],[1,"col-md-12","text-center"],[1,"centered"],[1,"text"],[1,"col-md-10"],[1,"list-group","mt-2"],[1,"text","list-group-item","list-group-item-action","flex-column","align-items-start"],[1,"d-flex","w-100","justify-content-between"],[1,"text","mb-1"],["class","list-group mt-2",4,"ngFor","ngForOf"],[1,"mb-1","text"],[1,"col-md-12"]],template:function(t,n){1&t&&(p.Nb(0,"ion-header"),p.Nb(1,"ion-toolbar"),p.Nb(2,"ion-buttons",0),p.Lb(3,"ion-menu-button"),p.Mb(),p.Nb(4,"ion-title"),p.Nb(5,"ion-label"),p.pc(6,"Cyber"),p.Mb(),p.Mb(),p.Nb(7,"ion-buttons",1),p.Nb(8,"ion-icon",2),p.Vb("click",function(t){return n.openLanguagePopover(t)}),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(9,"ion-content",3),p.Nb(10,"div",4),p.Nb(11,"div",5),p.Nb(12,"div",6),p.Nb(13,"div",7),p.Nb(14,"ion-text",8),p.Nb(15,"h2",9),p.pc(16),p.Yb(17,"translate"),p.Mb(),p.Lb(18,"hr"),p.Mb(),p.Mb(),p.Nb(19,"div",10),p.Nb(20,"div",11),p.Nb(21,"a",12),p.Nb(22,"div",13),p.Nb(23,"h5",14),p.pc(24),p.Yb(25,"translate"),p.Mb(),p.Nb(26,"small"),p.pc(27),p.Yb(28,"translate"),p.Yb(29,"date"),p.Mb(),p.Mb(),p.Nb(30,"div",6),p.Nb(31,"div",7),p.Nb(32,"h5",9),p.pc(33),p.Yb(34,"translate"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(35,"div",10),p.oc(36,y,26,28,"div",15),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&t&&(p.zb(16),p.qc(p.Zb(17,7,"My history")),p.zb(8),p.qc(p.Zb(25,9,"Daily earnings")),p.zb(3),p.sc("",p.Zb(28,11,"Today"),": ",p.ac(29,13,n.currentDate,"MM/dd/yyyy h:mm"),""),p.zb(6),p.sc("",p.Zb(34,16,"Total"),": ",n.dailyProfit," \u043b\u0432."),p.zb(3),p.dc("ngForOf",n.orders))},directives:[b.l,b.B,b.e,b.s,b.A,b.p,b.m,b.i,b.z,a.k],pipes:[v.c,a.d],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}ion-title[_ngcontent-%COMP%]{text-align:center}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}.centered[_ngcontent-%COMP%]{text-align:center}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}.backIcon[_ngcontent-%COMP%]{font-size:150%}.back[_ngcontent-%COMP%], .backIcon[_ngcontent-%COMP%]{color:#ffae00}"]}),m)}],w=((M=function t(){e(this,t)}).\u0275fac=function(t){return new(t||M)},M.\u0275mod=p.Ib({type:M}),M.\u0275inj=p.Hb({imports:[[s.h.forChild(N)],s.h]}),M),P=i("tk/3"),C=i("mqiu"),O=i("QhVT");function k(t){return new C.a(t)}var x,z=((x=function t(){e(this,t)}).\u0275fac=function(t){return new(t||x)},x.\u0275mod=p.Ib({type:x}),x.\u0275inj=p.Hb({imports:[[a.b,c.e,b.C,w,v.b.forChild({loader:{provide:v.a,useFactory:k,deps:[P.a]}}),O.LanguagePopoverPageModule]]}),x)}}])}();