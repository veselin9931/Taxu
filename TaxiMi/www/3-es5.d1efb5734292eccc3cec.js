!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{nhYi:function(e,o,i){"use strict";i.r(o),i.d(o,"AccountVerifyingPageModule",function(){return v});var c,r,b,a=i("ofXK"),u=i("3Pt+"),s=i("TEn/"),l=i("tyNb"),d=i("fXoL"),f=i("8Xdb"),g=i("exMm"),p=[{path:"",component:(c=function(){function e(t,o,i){n(this,e),this.route=t,this.accountService=o,this.driverService=i,this.user=this.accountService.userValue}var o,i,c;return o=e,(i=[{key:"ngOnInit",value:function(){this.getUser()}},{key:"getUser",value:function(){var n=this;this.accountService.getById(this.user.id).subscribe(function(t){n.driverService.getDriver(t.driverId).subscribe(function(t){1==t.documentConfirmation&&n.route.navigate(["menu/driver-profile"]),console.log(t)})})}}])&&t(o.prototype,i),c&&t(o,c),e}(),c.\u0275fac=function(n){return new(n||c)(d.Kb(l.f),d.Kb(f.a),d.Kb(g.a))},c.\u0275cmp=d.Eb({type:c,selectors:[["app-account-verifying"]],decls:39,vars:0,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline"],["padding","",1,"background"],[1,"row","mt-2"],[1,"col"],[1,"row"],[1,"col","text-center"],["color","dark",1,"centered"],[1,"text"],[1,"row","mt-5"],[1,"support"],[1,"col","mt-5","text-center"],["name","logo-instagram"],["name","logo-twitter"],["name","logo-facebook"]],template:function(n,t){1&n&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-buttons",0),d.Lb(3,"ion-menu-button"),d.Mb(),d.Nb(4,"ion-title"),d.Nb(5,"ion-label"),d.pc(6,"Cyber"),d.Mb(),d.Mb(),d.Nb(7,"ion-buttons",1),d.Lb(8,"ion-icon",2),d.Mb(),d.Mb(),d.Mb(),d.Nb(9,"ion-content",3),d.Nb(10,"div",4),d.Nb(11,"div",5),d.Lb(12,"div",4),d.Nb(13,"div",6),d.Nb(14,"div",7),d.Nb(15,"ion-text",8),d.Nb(16,"h2",9),d.pc(17,"Verifying..."),d.Mb(),d.Lb(18,"hr"),d.Nb(19,"h5"),d.pc(20,"Please wait till we verify your account."),d.Mb(),d.Nb(21,"h5"),d.pc(22,"It may take from 1 to 5 days."),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(23,"div",10),d.Nb(24,"div",5),d.Nb(25,"div",11),d.Nb(26,"ion-text",8),d.Nb(27,"h1",9),d.pc(28,"Support us by"),d.Mb(),d.Nb(29,"h2",9),d.pc(30,"following on"),d.Mb(),d.Mb(),d.Nb(31,"div",12),d.Nb(32,"div",6),d.Nb(33,"div",5),d.Lb(34,"ion-icon",13),d.Mb(),d.Nb(35,"div",5),d.Lb(36,"ion-icon",14),d.Mb(),d.Nb(37,"div",5),d.Lb(38,"ion-icon",15),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb())},directives:[s.l,s.B,s.e,s.s,s.A,s.p,s.m,s.i,s.z],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}.centered[_ngcontent-%COMP%]{text-align:center}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}ion-title[_ngcontent-%COMP%]{text-align:center}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}ion-input[_ngcontent-%COMP%]{border-radius:20px;border:3px solid #eee}.backIcon[_ngcontent-%COMP%]{font-size:150%}.back[_ngcontent-%COMP%], .backIcon[_ngcontent-%COMP%]{color:#ffae00}.support[_ngcontent-%COMP%]{margin-top:50px}ion-icon[_ngcontent-%COMP%]{font-size:350%}"]}),c)}],M=((b=function t(){n(this,t)}).\u0275fac=function(n){return new(n||b)},b.\u0275mod=d.Ib({type:b}),b.\u0275inj=d.Hb({imports:[[l.h.forChild(p)],l.h]}),b),v=((r=function t(){n(this,t)}).\u0275fac=function(n){return new(n||r)},r.\u0275mod=d.Ib({type:r}),r.\u0275inj=d.Hb({imports:[[a.b,u.e,s.C,M]]}),r)}}])}();