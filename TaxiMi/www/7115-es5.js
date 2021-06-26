!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkcsharpcornerauthor=self.webpackChunkcsharpcornerauthor||[]).push([[7115],{7115:function(e,o,i){"use strict";i.r(o),i.d(o,{AccountVerifyingPageModule:function(){return p}});var r,c,a=i(8583),u=i(3679),g=i(7823),s=i(4481),Z=i(3018),l=i(5056),d=i(1799),f=[{path:"",component:(r=function(){function e(t,o,i){n(this,e),this.route=t,this.accountService=o,this.driverService=i,this.user=this.accountService.userValue}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){this.getUser()}},{key:"getUser",value:function(){var n=this;this.accountService.getById(this.user.id).subscribe(function(t){n.driverService.getDriver(t.driverId).subscribe(function(t){1==t.documentConfirmation&&n.route.navigate(["menu/driver-profile"]),console.log(t)})})}}])&&t(o.prototype,i),r&&t(o,r),e}(),r.\u0275fac=function(n){return new(n||r)(Z.Y36(s.F0),Z.Y36(l.B),Z.Y36(d.F))},r.\u0275cmp=Z.Xpm({type:r,selectors:[["app-account-verifying"]],decls:39,vars:0,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline"],["padding","",1,"background"],[1,"row","mt-2"],[1,"col"],[1,"row"],[1,"col","text-center"],["color","dark",1,"centered"],[1,"text"],[1,"row","mt-5"],[1,"support"],[1,"col","mt-5","text-center"],["name","logo-instagram"],["name","logo-twitter"],["name","logo-facebook"]],template:function(n,t){1&n&&(Z.TgZ(0,"ion-header"),Z.TgZ(1,"ion-toolbar"),Z.TgZ(2,"ion-buttons",0),Z._UZ(3,"ion-menu-button"),Z.qZA(),Z.TgZ(4,"ion-title"),Z.TgZ(5,"ion-label"),Z._uU(6,"Cyber"),Z.qZA(),Z.qZA(),Z.TgZ(7,"ion-buttons",1),Z._UZ(8,"ion-icon",2),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(9,"ion-content",3),Z.TgZ(10,"div",4),Z.TgZ(11,"div",5),Z._UZ(12,"div",4),Z.TgZ(13,"div",6),Z.TgZ(14,"div",7),Z.TgZ(15,"ion-text",8),Z.TgZ(16,"h2",9),Z._uU(17,"Verifying..."),Z.qZA(),Z._UZ(18,"hr"),Z.TgZ(19,"h5"),Z._uU(20,"Please wait till we verify your account."),Z.qZA(),Z.TgZ(21,"h5"),Z._uU(22,"It may take from 1 to 5 days."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(23,"div",10),Z.TgZ(24,"div",5),Z.TgZ(25,"div",11),Z.TgZ(26,"ion-text",8),Z.TgZ(27,"h1",9),Z._uU(28,"Support us by"),Z.qZA(),Z.TgZ(29,"h2",9),Z._uU(30,"following on"),Z.qZA(),Z.qZA(),Z.TgZ(31,"div",12),Z.TgZ(32,"div",6),Z.TgZ(33,"div",5),Z._UZ(34,"ion-icon",13),Z.qZA(),Z.TgZ(35,"div",5),Z._UZ(36,"ion-icon",14),Z.qZA(),Z.TgZ(37,"div",5),Z._UZ(38,"ion-icon",15),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())},directives:[g.Gu,g.sr,g.Sm,g.fG,g.wd,g.Q$,g.gu,g.W2,g.yW],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}.centered[_ngcontent-%COMP%]{text-align:center}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}ion-title[_ngcontent-%COMP%]{text-align:center}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}ion-input[_ngcontent-%COMP%]{border-radius:20px;border:3px solid #eee}.backIcon[_ngcontent-%COMP%]{font-size:150%}.back[_ngcontent-%COMP%], .backIcon[_ngcontent-%COMP%]{color:#ffae00}.support[_ngcontent-%COMP%]{margin-top:50px}ion-icon[_ngcontent-%COMP%]{font-size:350%}"]}),r)}],v=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[s.Bz.forChild(f)],s.Bz]}),t}(),p=((c=function t(){n(this,t)}).\u0275fac=function(n){return new(n||c)},c.\u0275mod=Z.oAB({type:c}),c.\u0275inj=Z.cJS({imports:[[a.ez,u.u5,g.Pc,v]]}),c)}}])}();