!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{y67D:function(n,r,i){"use strict";i.r(r),i.d(r,"HttpLoaderFactory",function(){return V}),i.d(r,"TravelModePageModule",function(){return B});var o=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),u=i("mrSG"),l=i("fXoL"),d=i("Gpoy"),b=i("gcOT"),p=i("AytR"),f=i("VeQZ"),g=i("oXKM"),h=i("8k+r"),v=i("8Xdb"),m=i("e7jj"),y=i("exMm"),M=i("RX8M"),k=i("sYmb"),w=i("Wwn5"),x=["map"];function O(e,t){if(1&e&&(l.Nb(0,"p"),l.pc(1),l.Yb(2,"translate"),l.Yb(3,"date"),l.Mb()),2&e){var n=l.Xb();l.zb(1),l.tc(" ",l.Zb(2,3,"Price"),": ",n.totalPrice," \u043b\u0432. | ",l.ac(3,5,1e3*n.secsDiff,"mm:ss")," ")}}function C(e,t){if(1&e&&(l.Nb(0,"p"),l.pc(1),l.Yb(2,"translate"),l.Mb()),2&e){var n=l.Xb();l.zb(1),l.sc(" ",l.Zb(2,2,"Price"),": ",n.totalPrice," \u043b\u0432. ")}}function N(e,t){if(1&e){var n=l.Ob();l.Nb(0,"button",26),l.Vb("click",function(){return l.jc(n),l.Xb().cancelTrip()}),l.pc(1),l.Yb(2,"translate"),l.Mb()}2&e&&(l.zb(1),l.rc(" ",l.Zb(2,1,"Cancel")," "))}function S(e,t){1&e&&(l.Nb(0,"ion-label",27),l.pc(1),l.Yb(2,"translate"),l.Mb()),2&e&&(l.zb(1),l.rc(" ",l.Zb(2,1,"You have new message"),". "))}function P(e,t){1&e&&(l.Nb(0,"ul",28),l.Nb(1,"li",29),l.pc(2),l.Yb(3,"translate"),l.Mb(),l.Mb()),2&e&&(l.zb(2),l.qc(l.Zb(3,1,"No messages for now")))}function I(e,t){if(1&e&&(l.Nb(0,"ul"),l.Nb(1,"li",30),l.pc(2),l.Mb(),l.Mb()),2&e){var n=t.$implicit,r=l.Xb();l.zb(1),l.dc("ngClass",n.user===r.msgDto.user?"in-msg":"ex-msg"),l.zb(1),l.sc(" ",n.user,": ",n.text," ")}}var T,D,L=b.c.LocalNotifications,R=[{path:"",component:(T=function(){function n(t,r,i,o,c,a,s,u,l,d){e(this,n),this.route=t,this.orderService=r,this.accountService=i,this.tripService=o,this.driverService=c,this.alertController=a,this.chatService=s,this.translate=u,this.popoverController=l,this.callNumber=d,this.user=this.accountService.userValue,this.driverId=this.accountService.userValue.driverId,this.carModel="",this.carColor="",this.firstName="",this.lastName="",this.messages=this.chatService.messages,this.chatStyle="",this.subscriptions=[],this.maxTime=3e4,this.msgDto=new f.c,this.msgInboxArray=[],this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage)}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.checkorder(),this.chatService.retrieveMappedObject().subscribe(function(t){e.addToInbox(t)});var t=(new d.b).configureLogging(d.c.Information).withUrl("".concat(p.a.signalRUrl,"/orderHub")).build();t.start().then(function(){console.log("signalR Connected in travel-mode")}).catch(function(e){console.log("Reconnecting in 1 sec."),setTimeout(function(){return t.start()},1e3)}),t.on("BroadcastMessage",function(){console.log("broadcasted from travel-mode")}),t.on("StartTrip",function(){e.checkorder()}),t.on("Navigate",function(){e.checkorder()}),t.on("OrderAccepted",function(t){e.subscriptions.push(e.orderService.getOrderById(t).subscribe(function(t){t.id==e.order.id&&"Accepted"==t.status&&e.presentOrderAcceptedNotification()}))}),t.on("OrderWaiting",function(t){e.subscriptions.push(e.orderService.getMyOrder(e.user.id).subscribe(function(n){n.id==t&&e.canceledOrder()}))}),t.on("LocateDriver",function(t){e.subscriptions.push(e.orderService.getMyOrder(e.user.id).subscribe(function(n){e.subscriptions.push(e.driverService.getDriver(t).subscribe(function(n){n.id==t&&e.loadMap(e.mapRef,n.applicationUserId)}))}))}),t.on("NotifyArrived",function(t){e.subscriptions.push(e.orderService.getOrderById(t).subscribe(function(n){1==n.isDriverArrived&&e.order.id==t&&(e.presentDriverArrivedNotification(),e.accountService.userValue.alertTriggered=!0,e.subscriptions.push(e.accountService.updateAlert(e.user.id,!0).subscribe(function(){})),e.accountService.userValue.timer=new Date,60==e.seconds&&(e.seconds=0),e.startTimer())}))}),t.on("CompleteOrder",function(t){e.order.id==t&&e.completedOrderAlert()})}},{key:"ionViewDidEnter",value:function(){this.checkorder(),1==this.accountService.userValue.alertTriggered&&this.startTimer()}},{key:"checkorder",value:function(){var e=this;this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(function(t){t?(e.chatService.stop(),e.chatService.start(),e.totalPrice=t.totalPrice,e.orderStatus=t.status,e.orderAcceptedBy=t.acceptedBy,e.orderService.currentOrderId=t.id,e.location=t.location,e.destination=t.destination,(Math.round(100*e.orderTotalPrice)/100).toFixed(2),e.orderTotalPrice=t.totalPrice,e.order=t,e.estimatedDuration=t.eta,null!=t.acceptedBy&&(e.getUserById(t.acceptedBy),e.getAcceptedTrip(t.acceptedBy),e.driverId=t.acceptedBy)):(e.accountService.userValue.alertTriggered=!1,e.subscriptions.push(e.accountService.updateAlert(e.user.id,!1).subscribe(function(){})),e.orderTotalPrice=0)},function(e){console.log(e)}))}},{key:"startTimer",value:function(){var e=this;this.startTime=new Date(this.accountService.userValue.timer),setInterval(function(){300!=e.secsDiff?(e.secsDiff=(new Date).getTime()-e.startTime.getTime(),e.secsDiff=Math.floor(e.secsDiff/1e3)):e.subscriptions.push(e.orderService.increaseOrderPrice(e.order.id,1).subscribe(function(){}))},1e3)}},{key:"presentOrderAcceptedNotification",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.schedule({notifications:[{title:"Order alert",body:"Your order is accepted",id:1}]});case 2:case"end":return e.stop()}},e)}))}},{key:"presentDriverArrivedNotification",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.schedule({notifications:[{title:"Order alert",body:"Your driver is on the address",id:2}]});case 2:case"end":return e.stop()}},e)}))}},{key:"chat",value:function(){var e=document.getElementById("chat");"none"===e.style.display?(e.style.display="block",this.chatStyle="block"):(e.style.display="none",this.chatStyle="none")}},{key:"send",value:function(){if(this.msgDto){if(0==this.msgDto.text.length)return void window.alert("Text field is required.");this.msgDto.user="".concat(this.accountService.userValue.firstName," ").concat(this.accountService.userValue.lastName),this.chatService.broadcastMessage(this.msgDto)}}},{key:"clearMessages",value:function(){this.messages.length=0}},{key:"addToInbox",value:function(e){var t=new f.c;t.user=e.user,t.text=e.text,this.msgInboxArray.push(t),this.msgDto.text=""}},{key:"getUserById",value:function(e){var t=this;this.subscriptions.push(this.accountService.getById(e).subscribe(function(e){t.firstName=e.firstName,t.lastName=e.lastName,t.driverId=e.driverId,t.phoneNumber=e.phone,t.subscriptions.push(t.driverService.getDriverActiveCar(e.driverId).subscribe(function(e){t.carModel=e.model,t.carColor=e.color}))}))}},{key:"callDriver",value:function(){var e=this.phoneNumber.toString();this.callNumber.callNumber(e,!0).then(function(e){return console.log("Launched dialer!",e)}).catch(function(e){return console.log("Error launching dialer",e)})}},{key:"getAcceptedTrip",value:function(e){var t=this;this.subscriptions.push(this.tripService.getTrip(e).subscribe(function(n){null!=n?(t.tripStatus=n.status,"Started"==n.status&&(t.accountService.userValue.alertTriggered=!1,t.subscriptions.push(t.accountService.updateAlert(t.user.id,!1).subscribe(function(){}))),t.currentTrip=n,t.loadMap(t.mapRef,e)):console.log("No trip!")}))}},{key:"addToFavourite",value:function(){var e=this,t={applicationUserId:this.order.applicationUserId,location:this.order.location,locationLat:this.order.locationLat,locationLong:this.order.locationLong,destination:this.order.destination,destinationLat:this.order.destinationLat,destinationLong:this.order.destinationLong,totalPrice:this.order.totalPrice};t?this.subscriptions.push(this.orderService.addToFavourites(t).subscribe(function(){e.successAddedFavourite()})):console.log("Problem with data occured")}},{key:"loadMap",value:function(e,t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.subscriptions.push(this.accountService.getById(t).subscribe(function(t){r.subscriptions.push(r.driverService.getDriver(t.driverId).subscribe(function(t){var n={lat:+t.currentLocationLat,lng:+t.currentLocationLong},i={center:new google.maps.LatLng(n.lat,n.lng),zoom:15,disableDefaultUI:!0};null!=e&&(r.map=new google.maps.Map(e.nativeElement,i));var o={url:"https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png",scaledSize:new window.google.maps.Size(25,25),anchor:{x:10,y:10}};new google.maps.Marker({position:new google.maps.LatLng(n),icon:o,map:r.map})}))}));case 1:case"end":return n.stop()}},n,this)}))}},{key:"cancelTrip",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.alertForCancel();case 1:case"end":return e.stop()}},e,this)}))}},{key:"alertForCancel",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.translate.get(["Are you sure you want to cancel the order?","Your rating will decrease!","Confirm","Cancel"]).subscribe(function(e){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:e["Are you sure you want to cancel the order?"],message:e["Your rating will decrease!"],buttons:[{text:e.Confirm,handler:function(){r.subscriptions.push(r.tripService.getTrip(r.orderAcceptedBy).subscribe(function(e){r.subscriptions.push(r.tripService.cancelTrip(e.id).subscribe(function(t){r.subscriptions.push(r.accountService.updateDriving(r.orderAcceptedBy,!1).subscribe(function(){})),r.accountService.userValue.isDrivingNow=!1,r.subscriptions.push(r.orderService.deleteOrder(e.orderId).subscribe(function(){return r.route.navigate(["menu/travelling"])}))}))}))}},{text:e.Cancel,role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))});case 1:case"end":return e.stop()}},e,this)}))}},{key:"openLanguagePopover",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverController.create({component:g.a,event:e});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"completedOrderAlert",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.translate.get(["You have reached the final destination! Did you enjoyed the trip?","Yes","No","Cancel","Report a problem"]).subscribe(function(e){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"my-custom-class",header:e["You have reached the final destination! Did you enjoyed the trip?"],buttons:[{text:e.Yes,role:"cancel",handler:function(){r.subscriptions.push(r.driverService.voteUp(r.driverId).subscribe(function(e){})),r.route.navigate(["menu/travelling"]),window.location.reload()}},{text:e.No,role:"no",handler:function(){r.subscriptions.push(r.driverService.voteDown(r.driverId).subscribe(function(e){})),r.route.navigate(["menu/travelling"]),window.location.reload()}},{text:e.Cancel,role:"cancel",handler:function(){r.route.navigate(["menu/travelling"]),window.location.reload()}},{text:e["Report a problem"],role:"cancel",handler:function(){r.route.navigate(["menu/report"])}}]});case 2:return n=t.sent,this.route.navigate(["menu/travelling"]),t.next=6,n.present();case 6:case"end":return t.stop()}},t,this)}))});case 1:case"end":return e.stop()}},e,this)}))}},{key:"successAddedFavourite",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.translate.get(["Successfully added to favourites!","Cancel"]).subscribe(function(e){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:e["Successfully added to favourites!"],buttons:[{text:e.Cancel,role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))});case 1:case"end":return e.stop()}},e,this)}))}},{key:"canceledOrder",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.translate.get(["Order is cancelled by the driver."]).subscribe(function(e){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:e["Order is cancelled by the driver."],buttons:[{text:"Ok",handler:function(){r.route.navigate(["menu/travelling"])}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))});case 1:case"end":return e.stop()}},e,this)}))}}])&&t(r.prototype,i),o&&t(r,o),n}(),T.\u0275fac=function(e){return new(e||T)(l.Kb(s.f),l.Kb(h.a),l.Kb(v.a),l.Kb(m.a),l.Kb(y.a),l.Kb(a.a),l.Kb(M.a),l.Kb(k.d),l.Kb(a.H),l.Kb(w.a))},T.\u0275cmp=l.Eb({type:T,selectors:[["app-travel-mode"]],viewQuery:function(e,t){var n;1&e&&l.vc(x,1,l.m),2&e&&l.hc(n=l.Wb())&&(t.mapRef=n.first)},decls:55,vars:34,consts:[["slot","start"],[1,"blink_me"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"],["id","map"],["map",""],[1,"row"],[1,"col"],[1,"list-group"],[1,"list-group-item","list-group-item-action","flex-column","align-items-start"],["name","analytics-outline",1,"mr-2"],[1,"d-flex","w-100","justify-content-between"],[4,"ngIf"],["type","button",1,"fonted","btn","btn-warning","mb-1",3,"click"],["name","call",1,"mr-2"],["type","button",1,"fonted","btn","btn-secondary","mr-1",3,"click"],["type","button",1,"fonted","btn","btn-info",3,"click"],["class","fonted btn btn-warning ml-1","type","button",3,"click",4,"ngIf"],["class","blink_me fonted",4,"ngIf"],["id","chat",1,"row","chat",2,"display","none"],[1,"msg-box"],["class","text-center mr-5",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"type"],[3,"ngModel","placeholder","ngModelChange"],["name","send-outline",3,"click"],["type","button",1,"fonted","btn","btn-warning","ml-1",3,"click"],[1,"blink_me","fonted"],[1,"text-center","mr-5"],[1,"fonted"],[1,"fonted",3,"ngClass"]],template:function(e,t){1&e&&(l.Nb(0,"ion-content"),l.Nb(1,"ion-header"),l.Nb(2,"ion-toolbar"),l.Nb(3,"ion-buttons",0),l.Lb(4,"ion-menu-button"),l.Mb(),l.Nb(5,"ion-title"),l.Nb(6,"ion-label",1),l.pc(7),l.Yb(8,"translate"),l.Mb(),l.Mb(),l.Nb(9,"ion-buttons",2),l.Nb(10,"ion-icon",3),l.Vb("click",function(e){return t.openLanguagePopover(e)}),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Lb(11,"div",4,5),l.Mb(),l.Nb(13,"ion-footer"),l.Nb(14,"div",6),l.Nb(15,"div",7),l.Nb(16,"div",8),l.Nb(17,"a",9),l.Nb(18,"p"),l.pc(19),l.Yb(20,"translate"),l.Yb(21,"translate"),l.Mb(),l.Lb(22,"hr"),l.Nb(23,"p"),l.Lb(24,"ion-icon",10),l.pc(25),l.Mb(),l.Lb(26,"hr"),l.Nb(27,"div",11),l.oc(28,O,4,8,"p",12),l.oc(29,C,3,4,"p",12),l.Nb(30,"button",13),l.Vb("click",function(){return t.callDriver()})("click",function(){return t.clearMessages()}),l.Lb(31,"ion-icon",14),l.pc(32),l.Yb(33,"translate"),l.Mb(),l.Mb(),l.Nb(34,"div",11),l.Nb(35,"button",15),l.Vb("click",function(){return t.chat()})("click",function(){return t.clearMessages()}),l.pc(36),l.Yb(37,"translate"),l.Mb(),l.Nb(38,"button",16),l.Vb("click",function(){return t.addToFavourite()}),l.pc(39),l.Yb(40,"translate"),l.Mb(),l.oc(41,N,3,3,"button",17),l.Mb(),l.Lb(42,"br"),l.oc(43,S,3,3,"ion-label",18),l.Nb(44,"div",19),l.Nb(45,"div",7),l.Nb(46,"ion-card"),l.Nb(47,"div",20),l.oc(48,P,4,3,"ul",21),l.oc(49,I,3,3,"ul",22),l.Mb(),l.Mb(),l.Nb(50,"ion-card",23),l.Nb(51,"ion-item"),l.Nb(52,"ion-input",24),l.Vb("ngModelChange",function(e){return t.msgDto.text=e}),l.Yb(53,"translate"),l.Mb(),l.Nb(54,"ion-icon",25),l.Vb("click",function(){return t.send()}),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&e&&(l.zb(7),l.qc(l.Zb(8,20,"Waiting for the car")),l.zb(12),l.uc("",t.firstName," ",t.lastName," ",l.Zb(20,22,"will arrive with")," ",t.carColor," ",t.carModel," ",l.Zb(21,24,"in about")," ",t.estimatedDuration,"."),l.zb(6),l.rc("",t.destination," "),l.zb(3),l.dc("ngIf",1==t.accountService.userValue.alertTriggered),l.zb(1),l.dc("ngIf",0==t.accountService.userValue.alertTriggered),l.zb(3),l.rc("",l.Zb(33,26,"Call driver")," "),l.zb(4),l.rc(" ",l.Zb(37,28,"Chat")," "),l.zb(3),l.rc(" ",l.Zb(40,30,"Add to favourites")," "),l.zb(2),l.dc("ngIf","Processing"==t.tripStatus),l.zb(2),l.dc("ngIf",0!=t.messages.length&&"none"==t.chatStyle),l.zb(5),l.dc("ngIf",0==t.msgInboxArray.length),l.zb(1),l.dc("ngForOf",t.msgInboxArray),l.zb(3),l.dc("ngModel",t.msgDto.text)("placeholder",l.Zb(53,32,"Type your message...")))},directives:[a.i,a.l,a.B,a.e,a.s,a.A,a.p,a.m,a.k,o.l,a.f,o.k,a.o,a.n,a.K,c.h,c.j,o.j],pipes:[k.c,o.d],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#353535}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}ion-title[_ngcontent-%COMP%]{text-align:center}#marker[_ngcontent-%COMP%]{position:absolute;background:url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;top:50%;left:50%;z-index:1;margin-left:-10px;margin-top:-34px;height:34px;width:20px;cursor:pointer}#map[_ngcontent-%COMP%]{height:100%;width:100%}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}.centered[_ngcontent-%COMP%]{text-align:center}.textTravel[_ngcontent-%COMP%]{font-size:1.5em}.text[_ngcontent-%COMP%], .textTravel[_ngcontent-%COMP%]{font-family:Open Sans Light}.text[_ngcontent-%COMP%]{font-size:2.4em}i[_ngcontent-%COMP%]{color:#eee}.my-custom-class[_ngcontent-%COMP%]{--background:#e5e5e5}.checkbox-icon[_ngcontent-%COMP%]{color:#fff}ion-checkbox[_ngcontent-%COMP%]{--border-color:#fff}ion-select[_ngcontent-%COMP%]{color:#383838;background-color:#fff;border-radius:10px;border:3px solid #eee}.blink_me[_ngcontent-%COMP%]{-webkit-animation:blinker 1s linear infinite;animation:blinker 1s linear infinite}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}.backIcon[_ngcontent-%COMP%]{font-size:150%}.back[_ngcontent-%COMP%], .backIcon[_ngcontent-%COMP%]{color:#ffae00}.fonted[_ngcontent-%COMP%], .msg-box[_ngcontent-%COMP%]{font-family:Open Sans Light}.msg-box[_ngcontent-%COMP%]{width:100%;height:140px;padding:10px 30px;font-size:14px;overflow:auto}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:-5px;list-style:none}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ex-msg[_ngcontent-%COMP%]{text-align:right}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .in-msg[_ngcontent-%COMP%]{text-align:left;margin-left:-60px}"]}),T)}],_=((D=function t(){e(this,t)}).\u0275fac=function(e){return new(e||D)},D.\u0275mod=l.Ib({type:D}),D.\u0275inj=l.Hb({imports:[[s.h.forChild(R)],s.h]}),D),A=i("tk/3"),z=i("mqiu"),j=i("QhVT");function V(e){return new z.a(e)}var Y,B=((Y=function t(){e(this,t)}).\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=l.Ib({type:Y}),Y.\u0275inj=l.Hb({providers:[w.a],imports:[[o.b,c.e,a.C,_,k.b.forChild({loader:{provide:k.a,useFactory:V,deps:[A.a]}}),j.LanguagePopoverPageModule]]}),Y)}}])}();