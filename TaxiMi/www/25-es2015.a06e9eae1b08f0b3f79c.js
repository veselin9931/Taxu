(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{tIIa:function(e,t,i){"use strict";i.r(t),i.d(t,"HttpLoaderFactory",function(){return q}),i.d(t,"OrderDetailsPageModule",function(){return B});var n=i("ofXK"),r=i("3Pt+"),o=i("TEn/"),s=i("tyNb"),c=i("mrSG"),a=i("fXoL"),l=i("Gpoy"),d=i("gcOT"),b=i("AytR"),u=i("oXKM"),p=i("sYmb"),h=i("8Xdb"),g=i("8k+r"),m=i("exMm"),f=i("Hmjx"),v=i("e7jj");const y=["map"];function M(e,t){if(1&e){const e=a.Ob();a.Nb(0,"button",24),a.Vb("click",function(){return a.jc(e),a.Xb().showMap()}),a.pc(1),a.Yb(2,"translate"),a.Mb()}2&e&&(a.zb(1),a.qc(a.Zb(2,1,"Show map")))}function I(e,t){if(1&e){const e=a.Ob();a.Nb(0,"button",24),a.Vb("click",function(){return a.jc(e),a.Xb().hideMap()}),a.pc(1),a.Yb(2,"translate"),a.Mb()}2&e&&(a.zb(1),a.qc(a.Zb(2,1,"Show details")))}function w(e,t){1&e&&a.Lb(0,"ion-icon",25)}function O(e,t){if(1&e&&(a.Nb(0,"small",26),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e){const e=a.Xb();a.zb(1),a.sc("",a.Zb(2,2,"Pickup time")," ",e.order.pickUpTime,"")}}function N(e,t){1&e&&(a.Nb(0,"small"),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.rc("",a.Zb(2,1,"Additional options"),":"))}function C(e,t){1&e&&(a.Nb(0,"li"),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.qc(a.Zb(2,1,"Pets")))}function k(e,t){1&e&&(a.Nb(0,"li"),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.qc(a.Zb(2,1,"Baggage")))}function D(e,t){1&e&&(a.Nb(0,"li"),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.qc(a.Zb(2,1,"Special needs")))}function L(e,t){1&e&&(a.Nb(0,"small"),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.rc("",a.Zb(2,1,"Desired car type"),":"))}function P(e,t){if(1&e&&(a.Nb(0,"ul"),a.Nb(1,"li"),a.pc(2),a.Mb(),a.Mb()),2&e){const e=a.Xb();a.zb(2),a.qc(e.order.carType)}}function S(e,t){1&e&&(a.Nb(0,"small"),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.rc("",a.Zb(2,1,"Additional requirements"),":"))}function z(e,t){if(1&e&&(a.Nb(0,"ul"),a.Nb(1,"li"),a.pc(2),a.Mb(),a.Mb()),2&e){const e=a.Xb();a.zb(2),a.qc(e.order.description)}}function x(e,t){1&e&&(a.Nb(0,"p",27),a.pc(1),a.Yb(2,"translate"),a.Mb()),2&e&&(a.zb(1),a.qc(a.Zb(2,1,"Offer more price to order")))}function T(e,t){if(1&e){const e=a.Ob();a.Nb(0,"div",9),a.Nb(1,"button",28),a.Vb("click",function(){return a.jc(e),a.Xb().offer(1)}),a.pc(2,"+1\u043b\u0432"),a.Mb(),a.Nb(3,"button",28),a.Vb("click",function(){return a.jc(e),a.Xb().offer(2)}),a.pc(4,"+2\u043b\u0432"),a.Mb(),a.Nb(5,"button",28),a.Vb("click",function(){return a.jc(e),a.Xb().offer(3)}),a.pc(6,"+3\u043b\u0432"),a.Mb(),a.Nb(7,"button",28),a.Vb("click",function(){return a.jc(e),a.Xb().offer(4)}),a.pc(8,"+4\u043b\u0432"),a.Mb(),a.Nb(9,"button",28),a.Vb("click",function(){return a.jc(e),a.Xb().offer(5)}),a.pc(10,"+5\u043b\u0432"),a.Mb(),a.Mb()}}const{Geolocation:V}=d.c,j=[{path:"",component:(()=>{class e{constructor(e,t,i,n,r,o,s,c,a,l){this.translate=e,this.popoverController=t,this.accountService=i,this.router=n,this.route=r,this.orderService=o,this.driverService=s,this.walletService=c,this.tripService=a,this.alertController=l,this.orderId=this.route.snapshot.params.id,this.applicationUserId=this.accountService.userValue.id,this.isDrivingNow=this.accountService.userValue.isDrivingNow,this.order={id:"",location:"",locationLat:"",locationLong:"",destination:"",destinationLat:"",destinationLong:"",increasePrice:"",isAccepted:null,isCompleted:null,createdOn:null,status:null,applicationUser:null,applicationUserId:null,totalPrice:null,acceptedBy:null,tripDistance:null,userDistance:null,withPets:null,withStroller:null,carType:null,isRated:null,km:null,distanceText:null,eta:null,isDeleted:null,isDriverArrived:null,increasedByDriver:null,increaseAccepted:null,increasedBy:null,special:null,pickUpTime:null,description:null},this.mapVisible=!1,this.subscriptions=[],this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage)}ngOnInit(){this.mapId=document.getElementById("map"),this.mapId.style.display="none",this.orderDiv=document.getElementById("order"),this.orderDiv.style.display="block";const e=(new l.b).configureLogging(l.c.Information).withUrl(`${b.a.signalRUrl}/orderHub`).build();e.start().then(function(){console.log("signalR Connected in travel-mode")}).catch(function(t){console.log("Reconnecting in 1 sec."),setTimeout(()=>e.start(),1e3)}),e.on("NotifyDriver",e=>{this.subscriptions.push(this.orderService.getOrderById(e).subscribe(e=>{this.order.id==e.id&&(1==e.increaseAccepted?this.IncreaseAccepted(e):0==e.increaseAccepted&&this.IncreaseRefused())}))}),e.on("OrderDeleted",e=>{this.subscriptions.push(this.orderService.getOrderById(e).subscribe(e=>{this.order.id==e.id&&this.OrderTaken()}))})}ionViewDidEnter(){this.orderDiv.style.display="block",this.mapId.style.display="none",this.subscriptions.push(this.orderService.getOrderById(this.orderId).subscribe(e=>{if(null==e)return this.OrderTaken();this.canIncrease=e.totalPrice<=3.5,this.order=e,this.calculateEta(this.order),this.loadMap(this.mapRef)}))}loadMap(e){return Object(c.a)(this,void 0,void 0,function*(){const t={lat:+this.order.locationLat,lng:+this.order.locationLong},i={center:new google.maps.LatLng(t.lat,t.lng),zoom:14,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControl:!1};null!=e&&(this.map=new google.maps.Map(e.nativeElement,i));var n={url:"https://www.freeiconspng.com/uploads/-human-male-man-people-person-profile-red-user-icon--icon--23.png",scaledSize:new window.google.maps.Size(25,25),anchor:{x:10,y:10}},r=new google.maps.Marker({position:new google.maps.LatLng(t),icon:n,map:this.map});this.navigateToUserAndCalculateDistance(r)})}navigateToUserAndCalculateDistance(e){return Object(c.a)(this,void 0,void 0,function*(){const t=new google.maps.DirectionsService,i=new google.maps.DirectionsRenderer,n=yield V.getCurrentPosition(),r={lat:n.coords.latitude,lng:n.coords.longitude};let o=+this.order.locationLat,s=+this.order.locationLong;t.route({origin:{lat:r.lat,lng:r.lng},destination:{lat:o,lng:s},travelMode:google.maps.TravelMode.DRIVING},(t,n)=>{if("OK"===n){i.setDirections(t);var c=new google.maps.LatLng(r.lat,r.lng),a=new google.maps.LatLng(o,s);this.distance=(google.maps.geometry.spherical.computeDistanceBetween(c,a)/1e3).toFixed(2),new google.maps.InfoWindow({content:`${this.distance} km from you.`}).open(this.map,e)}else window.alert("Directions request failed due to "+n)}),i.setMap(this.map)})}hideMap(){this.orderDiv.style.display="block",this.mapId.style.display="none",this.mapVisible=!1,this.orderDiv.cancelable&&this.orderDiv.preventDefault(),this.mapId.cancelable&&this.mapId.preventDefault()}showMap(){this.orderDiv.style.display="none",this.mapId.style.display="block",this.mapVisible=!0,this.loadMap(this.mapRef),this.orderDiv.cancelable&&this.orderDiv.preventDefault(),this.mapId.cancelable&&this.mapId.preventDefault()}offer(e){this.subscriptions.push(this.orderService.getOrderById(this.order.id).subscribe(t=>{if("Canceled"==t.status)return this.OrderTaken(),void this.router.navigate(["menu/driving"]);this.subscriptions.push(this.orderService.driverIncreaseOrderPrice(this.order.id,e,this.accountService.userValue.driverId).subscribe(()=>{}))}))}calculateEta(e){return Object(c.a)(this,void 0,void 0,function*(){const t=yield V.getCurrentPosition(),i={lat:t.coords.latitude,lng:t.coords.longitude};this.myLat=i.lat,this.myLng=i.lng,(new google.maps.DirectionsService).route({origin:{lat:+this.myLat,lng:+this.myLng},destination:{lat:+e.locationLat,lng:+e.locationLong},travelMode:google.maps.TravelMode.DRIVING},(t,i)=>{"OK"===i&&(e.eta=t.routes[0].legs[0].duration.text)})})}acceptOrder(e){this.subscriptions.push(this.orderService.getOrderById(e.id).subscribe(t=>{if("Canceled"==t.status)return this.OrderTaken(),void this.router.navigate(["menu/driving"]);this.subscriptions.push(this.driverService.getDriverActiveCar(this.accountService.userValue.driverId).subscribe(t=>{if(1==t.typeId&&"Comfort"==e.carType)return this.WrongCarAlert();this.subscriptions.push(this.driverService.getDriver(this.accountService.userValue.driverId).subscribe(t=>{this.tripPriceForDriver=e.totalPrice*(t.comission/100),this.subscriptions.push(this.walletService.getMyWallet(this.applicationUserId).subscribe(t=>{if(t.ammount<this.tripPriceForDriver)this.NotEnoughCashAlert();else{let t=this.accountService.userValue.id;this.accountService.userValue.isDrivingNow=!0,this.subscriptions.push(this.accountService.updateDriving(this.applicationUserId,!0).subscribe(()=>{})),this.isDrivingNow=this.accountService.userValue.isDrivingNow,e.acceptedBy=t,this.subscriptions.push(this.orderService.acceptOrder(e.id,t).subscribe(()=>{this.subscriptions.push(this.orderService.updateOrderEta(i,e.eta).subscribe())}));let i=e.id;this.subscriptions.push(this.tripService.createTrip({orderId:i,applicationUserId:t,order:e}).subscribe(()=>{})),this.router.navigate(["menu/driving-mode"])}}))}))}))}))}openLanguagePopover(e){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:u.a,event:e});yield t.present()})}NotEnoughCashAlert(){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Balance",message:"Your wallet balance is not enough for this order!",buttons:["OK"]});yield e.present()})}OrderTaken(){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Sorry",message:"This order is no longer active",buttons:[{text:"OK",handler:()=>{this.router.navigate(["menu/driving"])}}]});yield e.present()})}IncreaseRefused(){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Order increasing refused.",buttons:[{text:"Ok",role:"cancel"}]});yield e.present()})}IncreaseAccepted(e){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Order increasing accepted.",message:"You can accept the order now",buttons:[{text:"Accept",handler:()=>{this.acceptOrder(e)}},{text:"Cancel",role:"cancel"}]});yield t.present()})}WrongCarAlert(){return Object(c.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Order information",message:'Your car is of type "Normal" but the order desired car type is "Comfort"! ',buttons:["OK"]});yield e.present()})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(p.d),a.Kb(o.H),a.Kb(h.a),a.Kb(s.f),a.Kb(s.a),a.Kb(g.a),a.Kb(m.a),a.Kb(f.a),a.Kb(v.a),a.Kb(o.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-order-details"]],viewQuery:function(e,t){if(1&e&&a.vc(y,1,a.m),2&e){let e;a.hc(e=a.Wb())&&(t.mapRef=e.first)}},decls:61,vars:34,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"],["class","fonted btn btn-info col-md-12",3,"click",4,"ngIf"],["id","order",1,"col-md-10"],[1,"list-group","mt-2"],[1,"text","list-group-item","list-group-item-action","flex-column","align-items-start"],["name","alert-circle",4,"ngIf"],["id","warningicn",4,"ngIf"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1","fonted"],["name","analytics-outline",1,"mr-2"],["name","arrow-forward-outline",1,"mr-2"],[1,"row"],[1,"col"],[4,"ngIf"],[1,"w-100"],[1,"fonted"],["type","button",1,"fonted","btn","btn-info",3,"click"],["class","text-center",4,"ngIf"],["class","d-flex w-100 justify-content-between",4,"ngIf"],["padding","",1,"noScroll"],["id","map"],["map",""],[1,"fonted","btn","btn-info","col-md-12",3,"click"],["name","alert-circle"],["id","warningicn"],[1,"text-center"],["type","button",1,"btn","btn-info","btn-sm",3,"click"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar"),a.Nb(2,"ion-buttons",0),a.Lb(3,"ion-menu-button"),a.Mb(),a.Nb(4,"ion-title"),a.Nb(5,"ion-label"),a.pc(6),a.Yb(7,"translate"),a.Mb(),a.Mb(),a.Nb(8,"ion-buttons",1),a.Nb(9,"ion-icon",2),a.Vb("click",function(e){return t.openLanguagePopover(e)}),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(10,"ion-content"),a.oc(11,M,3,3,"button",3),a.oc(12,I,3,3,"button",3),a.Nb(13,"div",4),a.Nb(14,"div",5),a.Nb(15,"a",6),a.oc(16,w,1,0,"ion-icon",7),a.oc(17,O,3,4,"small",8),a.Nb(18,"div",9),a.Lb(19,"h5",10),a.Nb(20,"small"),a.pc(21),a.Yb(22,"date"),a.Mb(),a.Mb(),a.Nb(23,"p"),a.Lb(24,"ion-icon",11),a.pc(25),a.Mb(),a.Lb(26,"hr"),a.Nb(27,"p"),a.Lb(28,"ion-icon",12),a.pc(29),a.Mb(),a.Nb(30,"div",9),a.Lb(31,"h5",10),a.Mb(),a.Nb(32,"div",13),a.Nb(33,"div",14),a.oc(34,N,3,3,"small",15),a.Nb(35,"ul"),a.oc(36,C,3,3,"li",15),a.oc(37,k,3,3,"li",15),a.oc(38,D,3,3,"li",15),a.Mb(),a.oc(39,L,3,3,"small",15),a.oc(40,P,3,1,"ul",15),a.oc(41,S,3,3,"small",15),a.oc(42,z,3,1,"ul",15),a.Nb(43,"div",16),a.Nb(44,"h5"),a.pc(45),a.Yb(46,"translate"),a.Mb(),a.Lb(47,"br"),a.Mb(),a.Nb(48,"div",9),a.Nb(49,"small",17),a.pc(50),a.Yb(51,"translate"),a.Mb(),a.Nb(52,"button",18),a.Vb("click",function(){return t.acceptOrder(t.order)}),a.pc(53),a.Yb(54,"translate"),a.Mb(),a.Mb(),a.Lb(55,"hr"),a.oc(56,x,3,3,"p",19),a.oc(57,T,11,0,"div",20),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(58,"ion-content",21),a.Lb(59,"div",22,23),a.Mb(),a.Mb()),2&e&&(a.zb(6),a.qc(a.Zb(7,23,"Details")),a.zb(5),a.dc("ngIf",0==t.mapVisible),a.zb(1),a.dc("ngIf",1==t.mapVisible),a.zb(4),a.dc("ngIf",t.order.pickUpTime),a.zb(1),a.dc("ngIf",t.order.pickUpTime),a.zb(4),a.qc(a.ac(22,25,t.order.createdOn,"MM/dd/yyyy h:mm")),a.zb(4),a.qc(t.order.location),a.zb(4),a.qc(t.order.destination),a.zb(5),a.dc("ngIf",1==t.order.withPets||1==t.order.withStroller||1==t.order.special),a.zb(2),a.dc("ngIf",1==t.order.withPets),a.zb(1),a.dc("ngIf",1==t.order.withStroller),a.zb(1),a.dc("ngIf",1==t.order.special),a.zb(1),a.dc("ngIf",t.order.carType),a.zb(1),a.dc("ngIf",t.order.carType),a.zb(1),a.dc("ngIf",t.order.description),a.zb(1),a.dc("ngIf",t.order.description),a.zb(3),a.sc("",a.Zb(46,28,"Trip distance"),": ",t.order.tripDistance," km"),a.zb(5),a.sc("",a.Zb(51,30,"Total cost"),": ",t.order.totalPrice," \u043b\u0432."),a.zb(3),a.qc(a.Zb(54,32,"Accept")),a.zb(3),a.dc("ngIf",1==t.canIncrease),a.zb(1),a.dc("ngIf",1==t.canIncrease))},directives:[o.l,o.B,o.e,o.s,o.A,o.p,o.m,o.i,n.l],pipes:[p.c,n.d],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}#map[_ngcontent-%COMP%]{height:100%;width:100%}ion-title[_ngcontent-%COMP%]{text-align:center}#warningicn[_ngcontent-%COMP%]{margin-left:6px}h5[_ngcontent-%COMP%]{font-size:.9em}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}.fonted[_ngcontent-%COMP%]{font-family:Open Sans Light}.centered[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}.blink_me[_ngcontent-%COMP%]{-webkit-animation:blinker 1s linear infinite;animation:blinker 1s linear infinite}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}.msg-box[_ngcontent-%COMP%]{width:100%;height:140px;padding:10px 30px;font-size:14px;font-family:Open Sans Light;overflow:auto}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:-5px;list-style:none}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ex-msg[_ngcontent-%COMP%]{text-align:right}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .in-msg[_ngcontent-%COMP%]{text-align:left;margin-left:-60px}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[s.h.forChild(j)],s.h]}),e})();var _=i("tk/3"),Y=i("mqiu"),K=i("QhVT");function q(e){return new Y.a(e)}let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[n.b,r.e,o.C,A,p.b.forChild({loader:{provide:p.a,useFactory:q,deps:[_.a]}}),K.LanguagePopoverPageModule]]}),e})()}}]);