!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(self.webpackChunkcsharpcornerauthor=self.webpackChunkcsharpcornerauthor||[]).push([[114],{114:function(n,r,i){"use strict";i.r(r),i.d(r,{DriverProfilePageModule:function(){return J},HttpLoaderFactory:function(){return U}});var o=i(8583),a=i(3679),c=i(7823),s=i(4481),u=i(4762),l=i(4426),g=i(1841),p=i(2340),d=i(6522),f=i(3018),h=i(5056),v=i(1799),m=i(8948),b=i(292),Z=i(7800);function x(t,e){if(1&t&&(f.TgZ(0,"span",24),f._uU(1),f.qZA()),2&t){var n=f.oxw();f.xp6(1),f.hij(" ",n.progress,"% ")}}function C(t,e){if(1&t&&(f.TgZ(0,"span",24),f._uU(1),f.qZA()),2&t){var n=f.oxw();f.xp6(1),f.hij(" ",n.message," ")}}function k(t,e){1&t&&(f.TgZ(0,"h6",25),f.TgZ(1,"ion-chip"),f.TgZ(2,"ion-label",26),f._uU(3),f.ALo(4,"translate"),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(3),f.hij("",f.lcZ(4,1,"Choose your car for today"),":"))}function A(t,e){1&t&&(f.TgZ(0,"h6",27),f.TgZ(1,"ion-chip"),f.TgZ(2,"ion-label",26),f._uU(3),f.ALo(4,"translate"),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(3),f.Oqu(f.lcZ(4,1,"You must add car")))}function y(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"button",35),f.NdJ("click",function(){f.CHM(n);var t=f.oxw().$implicit;return f.oxw().active(t)}),f._uU(1),f.qZA()}if(2&t){var r=f.oxw().$implicit;f.xp6(1),f.hij(" ",r.model," - Comfort ")}}function q(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"button",35),f.NdJ("click",function(){f.CHM(n);var t=f.oxw().$implicit;return f.oxw().active(t)}),f._uU(1),f.qZA()}if(2&t){var r=f.oxw().$implicit;f.xp6(1),f.hij(" ",r.model," - Normal ")}}function w(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"button",36),f.NdJ("click",function(){f.CHM(n);var t=f.oxw().$implicit;return f.oxw().active(t)}),f._uU(1),f.qZA()}if(2&t){var r=f.oxw().$implicit;f.xp6(1),f.hij(" ",r.model," - Comfort ")}}function _(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"button",37),f.NdJ("click",function(){f.CHM(n);var t=f.oxw().$implicit;return f.oxw().active(t)}),f._uU(1),f.qZA()}if(2&t){var r=f.oxw().$implicit;f.xp6(1),f.hij(" ",r.model," - Normal ")}}function P(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"div"),f.TgZ(1,"div",28),f.TgZ(2,"div",29),f.YNc(3,y,2,1,"button",30),f.YNc(4,q,2,1,"button",30),f.YNc(5,w,2,1,"button",31),f.YNc(6,_,2,1,"button",32),f.qZA(),f.TgZ(7,"div",33),f.TgZ(8,"button",34),f.NdJ("click",function(){f.CHM(n);var t=e.$implicit;return f.oxw().deleteCar(t.id)}),f._uU(9),f.ALo(10,"translate"),f.qZA(),f.qZA(),f.qZA(),f.qZA()}if(2&t){var r=e.$implicit;f.xp6(3),f.Q6J("ngIf",0==r.isActive&&2==r.typeId),f.xp6(1),f.Q6J("ngIf",0==r.isActive&&1==r.typeId),f.xp6(1),f.Q6J("ngIf",1==r.isActive&&2==r.typeId),f.xp6(1),f.Q6J("ngIf",1==r.isActive&&1==r.typeId),f.xp6(3),f.hij(" ",f.lcZ(10,5,"Delete")," ")}}var M,T=[{path:"",component:(M=function(){function n(e,r,i,o,a,c,s,u,l){t(this,n),this.accountService=e,this.driverService=r,this.route=i,this.location=o,this.alertController=a,this.walletService=c,this.imageService=s,this.translate=u,this.popoverController=l,this.subscriptions=[],this.user=this.accountService.userValue,this.driverId=this.user.driverId,this.carsCount=0,this.folderName="driverFacePic",this.imgType="profile",this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage)}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){var t=this;this.getDriver(),this.getProfilePicture(),this.getWalletAmount(),this.getCars();var e=(new l.su).configureLogging(l.in.Information).withUrl("".concat(p.N.signalRUrl,"/orderHub")).build();e.start().then(function(){console.log("signalR Connected in profile")}).catch(function(t){return console.log(t)}),e.on("Voted",function(e){t.driverId==e&&t.getDriver()}),e.on("CarAction",function(e){t.driverId==e&&t.getCars()}),e.on("WalletAction",function(e){t.getWalletAmount()}),e.on("BroadcastMessage",function(){t.getProfilePicture()})}},{key:"copy",value:function(t){console.log(t)}},{key:"getProfilePicture",value:function(){var t=this;this.subscriptions.push(this.imageService.getMyPicture(this.user.id).subscribe(function(e){null!=e&&(t.imgPath=e.path)}))}},{key:"upload",value:function(t){var e=this;if(0!==t.length){var n=t[0],r=new FormData;r.append("file",n,n.name),this.subscriptions.push(this.imageService.upload(r,this.folderName,this.user.id,this.imgType).subscribe(function(t){t.type===g.dt.UploadProgress?e.progress=Math.round(100*t.loaded/t.total):t.type===g.dt.Response&&(e.message="Upload success.")}))}}},{key:"getDriver",value:function(){var t=this;this.subscriptions.push(this.driverService.getDriver(this.driverId).subscribe(function(e){null!=e?(t.driver=e,t.rating=e.rating.toFixed(2),t.driverCommission=e.comission,(Math.round(100*t.driverCommission)/100).toFixed(2),t.referral=t.driver.referal):console.log("No driver")}))}},{key:"getWalletAmount",value:function(){var t=this;this.subscriptions.push(this.walletService.getMyWallet(this.user.id).subscribe(function(e){t.walletAmount=e.ammount?e.ammount:0}))}},{key:"getCars",value:function(){var t=this;this.subscriptions.push(this.driverService.getDriverCars(this.driverId).subscribe(function(e){null!=e?(t.driverCars=e,t.carsCount=t.driverCars.length):console.log("No cars")}))}},{key:"openHistory",value:function(){this.route.navigate(["menu/driver-history"])}},{key:"addNewCar",value:function(){this.route.navigate(["menu/car-register"])}},{key:"active",value:function(t){var e=this;t.isActive||(0!=t.confirmation?this.subscriptions.push(this.driverService.activeCar(t.id,t.driverId).subscribe(function(t){e.isActiveCar=t.isActive,console.log(t)})):this.presentAlert())}},{key:"deleteCar",value:function(t){this.deleteCarConfirmation(t)}},{key:"goBack",value:function(){this.location.back()}},{key:"openLanguagePopover",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:d.m,event:t});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"presentAlert",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.translate.get(["Confirmation","Your car is not confirmet yet."]).subscribe(function(t){return(0,u.mG)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:t.Confirmation,message:t["Your car is not confirmet yet."],buttons:["OK"]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"deleteCarConfirmation",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.translate.get(["Delete the car?","Yes","No"]).subscribe(function(e){return(0,u.mG)(n,void 0,void 0,regeneratorRuntime.mark(function n(){var r,i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:e["Delete the car?"],buttons:[{text:e.Yes,handler:function(){i.subscriptions.push(i.driverService.deleteCar(t).subscribe(function(t){console.log(t)}))}},{text:e.No}]});case 2:return r=n.sent,n.next=5,r.present();case 5:case"end":return n.stop()}},n,this)}))});case 1:case"end":return e.stop()}},e,this)}))}},{key:"chargeCash",value:function(){this.route.navigate(["menu/payments"])}},{key:"reservation",value:function(){this.route.navigate(["menu/reservations"])}}])&&e(r.prototype,i),o&&e(r,o),n}(),M.\u0275fac=function(t){return new(t||M)(f.Y36(h.B),f.Y36(v.F),f.Y36(s.F0),f.Y36(o.Ye),f.Y36(c.Br),f.Y36(m.X),f.Y36(b.A),f.Y36(Z.sK),f.Y36(c.Dh))},M.\u0275cmp=f.Xpm({type:M,selectors:[["app-driver-profile"]],decls:55,vars:32,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"],["padding","",1,"background"],[1,"row","mt-2"],[1,"col"],[1,"card-transparent"],[1,"header-transparent"],[1,"avatar"],["onerror","this.onerror=null; this.src='../assets/default.png'","alt","",3,"src","click"],[1,"card-body"],[1,"user-meta","ion-text-center"],[1,"playername","my-label","text"],[1,"ranking","my-label","text"],[1,"my-label","text","btn","btn-success","btn-block","mb-1",3,"click"],["type","file","placeholder","Choose file",2,"display","none",3,"change"],["file",""],[1,"col-md-4"],["class","upload",4,"ngIf"],[1,"my-label","text","btn","btn-info","btn-block",3,"click"],[1,"my-label","mt-1","text","btn","btn-info","btn-block",3,"click"],["class","ranking ion-text-center mt-1",4,"ngIf"],["class","ranking ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"upload"],[1,"ranking","ion-text-center","mt-1"],[1,"my-label","text"],[1,"ranking","ion-text-center"],[1,"row"],[1,"col-10"],["class","my-label text btn btn-dark btn-block mt-1",3,"click",4,"ngIf"],["class","my-label text btn btn-info btn-block mt-1",3,"click",4,"ngIf"],["class","my-label text btn-info btn-block mt-1",3,"click",4,"ngIf"],[1,"col-2"],["expand","full","color","danger",1,"my-label","text","btn","btn-danger","mt-1",2,"float","right",3,"click"],[1,"my-label","text","btn","btn-dark","btn-block","mt-1",3,"click"],[1,"my-label","text","btn","btn-info","btn-block","mt-1",3,"click"],[1,"my-label","text","btn-info","btn-block","mt-1",3,"click"]],template:function(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"ion-header"),f.TgZ(1,"ion-toolbar"),f.TgZ(2,"ion-buttons",0),f._UZ(3,"ion-menu-button"),f.qZA(),f.TgZ(4,"ion-title"),f.TgZ(5,"ion-label"),f._uU(6),f.ALo(7,"translate"),f.qZA(),f.qZA(),f.TgZ(8,"ion-buttons",1),f.TgZ(9,"ion-icon",2),f.NdJ("click",function(t){return e.openLanguagePopover(t)}),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(10,"ion-content",3),f.TgZ(11,"div",4),f.TgZ(12,"div",5),f.TgZ(13,"div",6),f.TgZ(14,"div",7),f.TgZ(15,"div",8),f.TgZ(16,"img",9),f.NdJ("click",function(){return f.CHM(n),f.MAs(39).click()}),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(17,"div",10),f.TgZ(18,"div",11),f.TgZ(19,"h3",12),f._uU(20),f.qZA(),f.TgZ(21,"h4",12),f._uU(22),f.qZA(),f.TgZ(23,"h6",13),f._uU(24),f.ALo(25,"translate"),f.TgZ(26,"ion-chip"),f.TgZ(27,"ion-label"),f._uU(28),f.qZA(),f.qZA(),f.qZA(),f.TgZ(29,"h6",13),f._uU(30),f.ALo(31,"translate"),f.TgZ(32,"ion-chip"),f.TgZ(33,"ion-label"),f._uU(34),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(35,"button",14),f.NdJ("click",function(){return e.chargeCash()}),f._uU(36),f.ALo(37,"translate"),f.qZA(),f.TgZ(38,"input",15,16),f.NdJ("change",function(){f.CHM(n);var t=f.MAs(39);return e.upload(t.files)}),f.qZA(),f.TgZ(40,"div",17),f.YNc(41,x,2,1,"span",18),f.YNc(42,C,2,1,"span",18),f.qZA(),f.TgZ(43,"button",19),f.NdJ("click",function(){return e.openHistory()}),f._uU(44),f.ALo(45,"translate"),f.qZA(),f.TgZ(46,"button",20),f.NdJ("click",function(){return e.addNewCar()}),f._uU(47),f.ALo(48,"translate"),f.qZA(),f.TgZ(49,"button",20),f.NdJ("click",function(){return e.reservation()}),f._uU(50),f.ALo(51,"translate"),f.qZA(),f.YNc(52,k,5,3,"h6",21),f.YNc(53,A,5,3,"h6",22),f.YNc(54,P,11,7,"div",23),f.qZA(),f.qZA(),f.qZA(),f.qZA()}2&t&&(f.xp6(6),f.Oqu(f.lcZ(7,18,"Profile")),f.xp6(10),f.s9C("src",e.imgPath,f.LSH),f.xp6(4),f.AsE("",e.user.firstName," ",e.user.lastName,""),f.xp6(2),f.Oqu(e.user.phone),f.xp6(2),f.hij(" ",f.lcZ(25,20,"Wallet ballance"),": "),f.xp6(4),f.hij("",e.walletAmount," \u043b\u0432."),f.xp6(2),f.hij(" ",f.lcZ(31,22,"My rating"),": "),f.xp6(4),f.Oqu(e.rating),f.xp6(2),f.Oqu(f.lcZ(37,24,"Click to charge your account")),f.xp6(5),f.Q6J("ngIf",e.progress>0),f.xp6(1),f.Q6J("ngIf",e.message),f.xp6(2),f.Oqu(f.lcZ(45,26,"Drive history")),f.xp6(3),f.Oqu(f.lcZ(48,28,"Add new car")),f.xp6(3),f.Oqu(f.lcZ(51,30,"Suburban reservations")),f.xp6(2),f.Q6J("ngIf",e.carsCount>0),f.xp6(1),f.Q6J("ngIf",0==e.carsCount),f.xp6(1),f.Q6J("ngForOf",e.driverCars))},directives:[c.Gu,c.sr,c.Sm,c.fG,c.wd,c.Q$,c.gu,c.W2,c.hM,o.O5,o.sg],pipes:[Z.X$],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#353535}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}ion-title[_ngcontent-%COMP%]{text-align:center}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.centered[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}.my-label[_ngcontent-%COMP%]{font-family:Open Sans Light}.backIcon[_ngcontent-%COMP%]{font-size:150%}.back[_ngcontent-%COMP%], .backIcon[_ngcontent-%COMP%]{color:#ffae00}.car[_ngcontent-%COMP%]{color:green}.card-transparent[_ngcontent-%COMP%]{margin:0 auto}.card-transparent[_ngcontent-%COMP%]   .header-transparent[_ngcontent-%COMP%]{height:150px}.card-transparent[_ngcontent-%COMP%]   .header-transparent[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:160px;height:120px;position:relative;margin:0 auto}.card-transparent[_ngcontent-%COMP%]   .header-transparent[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:130px;display:block;border-radius:50%;position:absolute;bottom:calc(-1*(80px + 8px));background-color:#fff;margin-left:20px}.my-custom-class[_ngcontent-%COMP%]{--background:#e5e5e5}.card-body[_ngcontent-%COMP%]{background-color:#fff;padding:30px;height:100%;overflow:hidden}.card-body[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]{padding-top:40px}.card-body[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .playername[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:#303940}.card-body[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%]{font-size:90%;color:#949ea6;text-transform:uppercase;margin:0 auto}"]}),M)}],O=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),e}(),N=i(2472),I=i(3577);function U(t){return new N.w(t)}var Y,J=((Y=function e(){t(this,e)}).\u0275fac=function(t){return new(t||Y)},Y.\u0275mod=f.oAB({type:Y}),Y.\u0275inj=f.cJS({providers:[Z.sK],imports:[[o.ez,a.u5,c.Pc,O,Z.aw.forChild({loader:{provide:Z.Zw,useFactory:U,deps:[g.eN]}}),I.LanguagePopoverPageModule]]}),Y)}}])}();