!function(){function e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}(self.webpackChunkcsharpcornerauthor=self.webpackChunkcsharpcornerauthor||[]).push([[2343],{297:function(e,r,n){"use strict";n.d(r,{p:function(){return p}});var i=n(205),a=n(5304),c=n(3342),s=n(2340),u=n(3018),h=n(1841),l=n(728),p=function(){var e=function(){function e(r,n){t(this,e),this.http=r,this.sharedService=n,this.orders=[],this.completedOrder=!1}return o(e,[{key:"createOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.post("".concat(s.N.apiUrl,"/api/order"),e,{headers:r,responseType:"text"}).pipe((0,a.K)(this.handleError))}},{key:"addToFavourites",value:function(e){var r=this.sharedService.headerGerneration();return this.http.post("".concat(s.N.apiUrl,"/api/order/favourites"),e,{headers:r,responseType:"text"}).pipe((0,a.K)(this.handleError))}},{key:"getMyFavourites",value:function(e){var r=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/favourites/").concat(e),{headers:r}).pipe((0,a.K)(this.handleError))}},{key:"deleteFavouriteOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.delete("".concat(s.N.apiUrl,"/api/order/favourites/").concat(e),{headers:r}).pipe((0,c.b)(function(e){return console.log("deleted favourite order: ",JSON.stringify(e))}),(0,a.K)(this.handleError))}},{key:"getDirections",value:function(e,r,t,n){var o=this.sharedService.headerGerneration();return this.http.post("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=".concat(e,",").concat(r,"&destinations=").concat(t,"%2C").concat(n,"%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw"),{headers:o,responseType:"text"}).pipe((0,a.K)(this.handleError))}},{key:"getOrderById",value:function(e){var r=this,t=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/id/").concat(e),{headers:t}).pipe((0,c.b)(function(e){return r.order=e}))}},{key:"getCanceledOrderById",value:function(e){var r=this,t=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/canceled/").concat(e),{headers:t}).pipe((0,c.b)(function(e){return r.order=e}))}},{key:"getLastCompletedOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/completed/").concat(e),{headers:r}).pipe((0,a.K)(this.handleError))}},{key:"getMyOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/").concat(e),{headers:r}).pipe((0,a.K)(this.handleError))}},{key:"getOrderForChat",value:function(e){var r=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/chat/").concat(e),{headers:r}).pipe((0,a.K)(this.handleError))}},{key:"getAllOrders",value:function(){var e=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order"),{headers:e}).pipe((0,a.K)(this.handleError))}},{key:"getNormalOrders",value:function(){var e=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/normal"),{headers:e}).pipe((0,a.K)(this.handleError))}},{key:"getComfortOrders",value:function(){var e=this.sharedService.headerGerneration();return this.http.get("".concat(s.N.apiUrl,"/api/order/comfort"),{headers:e}).pipe((0,a.K)(this.handleError))}},{key:"acceptOrder",value:function(e,r){var t=this,n=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/").concat(e,"/").concat(r),{headers:n,responseType:"json"}).pipe((0,c.b)(function(e){return t.driverId=r}),(0,a.K)(this.handleError))}},{key:"updateOrderEta",value:function(e,r){var t=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/eta/").concat(e,"/").concat(r),{headers:t,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"updateDriverArrived",value:function(e){var r=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/arrived/").concat(e),{headers:r,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"rateOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/rate/").concat(e),{headers:r,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"increaseOrderPrice",value:function(e,r){var t=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/increase/").concat(e,"/").concat(r),{headers:t,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"completeOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/").concat(e),{headers:r,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"deleteOrder",value:function(e){var r=this.sharedService.headerGerneration();return this.http.delete("".concat(s.N.apiUrl,"/api/order/").concat(e),{headers:r}).pipe((0,c.b)(function(e){return console.log("deleted order: ",JSON.stringify(e))}),(0,a.K)(this.handleError))}},{key:"driverIncreaseOrderPrice",value:function(e,r,t){var n=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/increased/").concat(e,"/").concat(r,"/").concat(t),{headers:n,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"resetIncreasing",value:function(e){var r=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/reset/").concat(e),{headers:r,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"increasedOrderAccept",value:function(e,r){var t=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/accepted/increase/").concat(e,"/").concat(r),{headers:t,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"incrementOrderPrice",value:function(e){var r=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/increment/").concat(e),{headers:r,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"decrementOrderPrice",value:function(e){var r=this.sharedService.headerGerneration();return this.http.put("".concat(s.N.apiUrl,"/api/order/decrement/").concat(e),{headers:r,responseType:"json"}).pipe((0,a.K)(this.handleError))}},{key:"handleError",value:function(e){var r="";return e.error instanceof ErrorEvent?(console.log("Client side error."),r="Error: ".concat(e.error.message)):(console.log("Server side error."),r="Error Code: ".concat(e.status,"\nMessage: ").concat(e.message)),console.log(r),(0,i._)(r)}}]),e}();return e.\u0275fac=function(r){return new(r||e)(u.LFG(h.eN),u.LFG(l.F))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},2343:function(r,n,i){"use strict";i.r(n),i.d(n,{CategoriesPageModule:function(){return E},HttpLoaderFactory:function(){return U}});var a=i(8583),c=i(3679),s=i(7823),u=i(4481),h=i(4762),l=i(4426),p=i(2340),d=i(6522),v=i(3018),f=i(7800),g=i(5056),y=i(1799),m=i(297),b=i(3897);function Z(e,r){1&e&&(v.TgZ(0,"ion-title"),v.TgZ(1,"ion-label"),v._uU(2),v.ALo(3,"translate"),v.qZA(),v.qZA()),2&e&&(v.xp6(2),v.Oqu(v.lcZ(3,1,"Categories")))}function O(e,r){if(1&e&&(v.TgZ(0,"ion-chip"),v._uU(1),v.qZA()),2&e){var t=v.oxw();v.xp6(1),v.Oqu(t.driverService.categoryCloseCount)}}function k(e,r){if(1&e&&(v.TgZ(0,"ion-chip"),v._uU(1),v.qZA()),2&e){var t=v.oxw();v.xp6(1),v.Oqu(t.allCount)}}var S,C=[{path:"",component:(S=function(){function r(e,n,o,i,a,c,s){t(this,r),this.popoverController=e,this.translate=n,this.accountService=o,this.route=i,this.driverService=a,this.orderService=c,this.subOrderService=s,this.subscriptions=[],this.isDrivingNow=this.accountService.userValue.isDrivingNow,this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage)}return o(r,[{key:"ngOnInit",value:function(){var e=this;this.getNormalCount(),this.getComfortCount(),this.getAllCount(),this.getSubOrderCount();var r=(new l.su).configureLogging(l.in.Information).withUrl("".concat(p.N.signalRUrl,"/orderHub")).build();r.start().then(function(){console.log("signalR Connected in travelling")}).catch(function(e){return console.log(e)}),r.on("BroadcastMessage",function(){e.getNormalCount(),e.getComfortCount(),e.getAllCount(),e.getSubOrderCount()}),1==this.isDrivingNow&&this.route.navigate(["menu/driving"])}},{key:"all",value:function(){this.driverService.categoryType="All",this.route.navigate(["menu/driving"])}},{key:"closest",value:function(){this.driverService.categoryType="Closest",this.route.navigate(["menu/driving"])}},{key:"normal",value:function(){this.driverService.categoryType="Normal",this.route.navigate(["menu/driving"])}},{key:"comfort",value:function(){this.driverService.categoryType="Comfort",this.route.navigate(["menu/driving"])}},{key:"outOfTown",value:function(){this.driverService.categoryType="Out of town",this.route.navigate(["menu/driving"])}},{key:"booked",value:function(){this.route.navigate(["menu/booked-travels"])}},{key:"getNormalCount",value:function(){var e=this;this.subscriptions.push(this.orderService.getNormalOrders().subscribe(function(r){return e.normalCount=r.length}))}},{key:"getComfortCount",value:function(){var e=this;this.subscriptions.push(this.orderService.getComfortOrders().subscribe(function(r){return e.comfortCount=r.length}))}},{key:"getAllCount",value:function(){var e=this;this.subscriptions.push(this.orderService.getAllOrders().subscribe(function(r){return e.allCount=r.length}))}},{key:"getSubOrderCount",value:function(){var e=this;this.subscriptions.push(this.subOrderService.getAllSubOrders("Waiting").subscribe(function(r){return e.subOrderCount=r.length}))}},{key:"openLanguagePopover",value:function(e){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.popoverController.create({component:d.m,event:e});case 2:return t=r.sent,r.next=5,t.present();case 5:case"end":return r.stop()}},r,this)}))}},{key:"ionViewDidLeave",value:function(){var r,t=e(this.subscriptions);try{for(t.s();!(r=t.n()).done;){var n=r.value;console.log(n),n.unsubscribe()}}catch(o){t.e(o)}finally{t.f()}}}]),r}(),S.\u0275fac=function(e){return new(e||S)(v.Y36(s.Dh),v.Y36(f.sK),v.Y36(g.B),v.Y36(u.F0),v.Y36(y.F),v.Y36(m.p),v.Y36(b.g))},S.\u0275cmp=v.Xpm({type:S,selectors:[["app-categories"]],decls:47,vars:25,consts:[["slot","start"],[4,"ngIf"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"],["padding","",1,"background"],[1,"row","mt-2","text-center"],[1,"col-md-12"],[3,"click"]],template:function(e,r){1&e&&(v.TgZ(0,"ion-header"),v.TgZ(1,"ion-toolbar"),v.TgZ(2,"ion-buttons",0),v._UZ(3,"ion-menu-button"),v.qZA(),v.YNc(4,Z,4,3,"ion-title",1),v.TgZ(5,"ion-buttons",2),v.TgZ(6,"ion-icon",3),v.NdJ("click",function(e){return r.openLanguagePopover(e)}),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(7,"ion-content",4),v.TgZ(8,"div",5),v.TgZ(9,"div",6),v.TgZ(10,"ion-list"),v.TgZ(11,"ion-item",7),v.NdJ("click",function(){return r.all()}),v.TgZ(12,"ion-label"),v._uU(13),v.ALo(14,"translate"),v.qZA(),v.TgZ(15,"ion-chip"),v._uU(16),v.qZA(),v.qZA(),v.TgZ(17,"ion-item",7),v.NdJ("click",function(){return r.closest()}),v.TgZ(18,"ion-label"),v._uU(19),v.ALo(20,"translate"),v.qZA(),v.YNc(21,O,2,1,"ion-chip",1),v.YNc(22,k,2,1,"ion-chip",1),v.qZA(),v.TgZ(23,"ion-item",7),v.NdJ("click",function(){return r.normal()}),v.TgZ(24,"ion-label"),v._uU(25),v.ALo(26,"translate"),v.qZA(),v.TgZ(27,"ion-chip"),v._uU(28),v.qZA(),v.qZA(),v.TgZ(29,"ion-item",7),v.NdJ("click",function(){return r.comfort()}),v.TgZ(30,"ion-label"),v._uU(31),v.ALo(32,"translate"),v.qZA(),v.TgZ(33,"ion-chip"),v._uU(34),v.qZA(),v.qZA(),v.TgZ(35,"ion-item",7),v.NdJ("click",function(){return r.outOfTown()}),v.TgZ(36,"ion-label"),v._uU(37),v.ALo(38,"translate"),v.qZA(),v.TgZ(39,"ion-chip"),v._uU(40),v.qZA(),v.qZA(),v.TgZ(41,"ion-item",7),v.NdJ("click",function(){return r.booked()}),v.TgZ(42,"ion-label"),v._uU(43),v.ALo(44,"translate"),v.qZA(),v.TgZ(45,"ion-chip"),v._uU(46,"0"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&e&&(v.xp6(4),v.Q6J("ngIf",0==r.isDrivingNow),v.xp6(9),v.Oqu(v.lcZ(14,13,"All")),v.xp6(3),v.Oqu(r.allCount),v.xp6(3),v.Oqu(v.lcZ(20,15,"Closest")),v.xp6(2),v.Q6J("ngIf",null!=r.driverService.categoryCloseCount),v.xp6(1),v.Q6J("ngIf",null==r.driverService.categoryCloseCount),v.xp6(3),v.Oqu(v.lcZ(26,17,"Normal")),v.xp6(3),v.Oqu(r.normalCount),v.xp6(3),v.Oqu(v.lcZ(32,19,"Comfort")),v.xp6(3),v.Oqu(r.comfortCount),v.xp6(3),v.Oqu(v.lcZ(38,21,"Out of town")),v.xp6(3),v.Oqu(r.subOrderCount),v.xp6(3),v.Oqu(v.lcZ(44,23,"Booked")))},directives:[s.Gu,s.sr,s.Sm,s.fG,a.O5,s.gu,s.W2,s.q_,s.Ie,s.Q$,s.hM,s.wd],pipes:[f.X$],styles:["ion-content[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}ion-title[_ngcontent-%COMP%]{text-align:center}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}.fonted[_ngcontent-%COMP%]{font-family:Open Sans Light}.centered[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}"]}),S)}],A=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[[u.Bz.forChild(C)],u.Bz]}),e}(),T=i(1841),N=i(2472),q=i(3577);function U(e){return new N.w(e)}var w,E=((w=function e(){t(this,e)}).\u0275fac=function(e){return new(e||w)},w.\u0275mod=v.oAB({type:w}),w.\u0275inj=v.cJS({imports:[[a.ez,c.u5,s.Pc,A,f.aw.forChild({loader:{provide:f.Zw,useFactory:U,deps:[T.eN]}}),q.LanguagePopoverPageModule]]}),w)}}])}();