(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{nhYi:function(n,t,e){"use strict";e.r(t),e.d(t,"AccountVerifyingPageModule",function(){return l});var o=e("ofXK"),i=e("3Pt+"),b=e("TEn/"),c=e("tyNb"),r=e("fXoL"),a=e("8Xdb"),s=e("exMm");const u=[{path:"",component:(()=>{class n{constructor(n,t,e){this.route=n,this.accountService=t,this.driverService=e,this.user=this.accountService.userValue}ngOnInit(){this.getUser()}getUser(){this.accountService.getById(this.user.id).subscribe(n=>{this.driverService.getDriver(n.driverId).subscribe(n=>{1==n.documentConfirmation&&this.route.navigate(["menu/driver-profile"]),console.log(n)})})}}return n.\u0275fac=function(t){return new(t||n)(r.Kb(c.f),r.Kb(a.a),r.Kb(s.a))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-account-verifying"]],decls:39,vars:0,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline"],["padding","",1,"background"],[1,"row","mt-2"],[1,"col"],[1,"row"],[1,"col","text-center"],["color","dark",1,"centered"],[1,"text"],[1,"row","mt-5"],[1,"support"],[1,"col","mt-5","text-center"],["name","logo-instagram"],["name","logo-twitter"],["name","logo-facebook"]],template:function(n,t){1&n&&(r.Nb(0,"ion-header"),r.Nb(1,"ion-toolbar"),r.Nb(2,"ion-buttons",0),r.Lb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title"),r.Nb(5,"ion-label"),r.pc(6,"Cyber"),r.Mb(),r.Mb(),r.Nb(7,"ion-buttons",1),r.Lb(8,"ion-icon",2),r.Mb(),r.Mb(),r.Mb(),r.Nb(9,"ion-content",3),r.Nb(10,"div",4),r.Nb(11,"div",5),r.Lb(12,"div",4),r.Nb(13,"div",6),r.Nb(14,"div",7),r.Nb(15,"ion-text",8),r.Nb(16,"h2",9),r.pc(17,"Verifying..."),r.Mb(),r.Lb(18,"hr"),r.Nb(19,"h5"),r.pc(20,"Please wait till we verify your account."),r.Mb(),r.Nb(21,"h5"),r.pc(22,"It may take from 1 to 5 days."),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(23,"div",10),r.Nb(24,"div",5),r.Nb(25,"div",11),r.Nb(26,"ion-text",8),r.Nb(27,"h1",9),r.pc(28,"Support us by"),r.Mb(),r.Nb(29,"h2",9),r.pc(30,"following on"),r.Mb(),r.Mb(),r.Nb(31,"div",12),r.Nb(32,"div",6),r.Nb(33,"div",5),r.Lb(34,"ion-icon",13),r.Mb(),r.Nb(35,"div",5),r.Lb(36,"ion-icon",14),r.Mb(),r.Nb(37,"div",5),r.Lb(38,"ion-icon",15),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb())},directives:[b.l,b.B,b.e,b.s,b.A,b.p,b.m,b.i,b.z],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}.centered[_ngcontent-%COMP%]{text-align:center}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}ion-title[_ngcontent-%COMP%]{text-align:center}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}ion-input[_ngcontent-%COMP%]{border-radius:20px;border:3px solid #eee}.backIcon[_ngcontent-%COMP%]{font-size:150%}.back[_ngcontent-%COMP%], .backIcon[_ngcontent-%COMP%]{color:#ffae00}.support[_ngcontent-%COMP%]{margin-top:50px}ion-icon[_ngcontent-%COMP%]{font-size:350%}"]}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({imports:[[c.h.forChild(u)],c.h]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({imports:[[o.b,i.e,b.C,d]]}),n})()}}]);