(self.webpackChunkcsharpcornerauthor=self.webpackChunkcsharpcornerauthor||[]).push([[9088],{297:function(e,t,r){"use strict";r.d(t,{p:function(){return d}});var i=r(205),n=r(5304),o=r(3342),s=r(2340),a=r(3018),c=r(1841),l=r(728);let d=(()=>{class e{constructor(e,t){this.http=e,this.sharedService=t,this.orders=[],this.completedOrder=!1}createOrder(e){const t=this.sharedService.headerGerneration();return this.http.post(`${s.N.apiUrl}/api/order`,e,{headers:t,responseType:"text"}).pipe((0,n.K)(this.handleError))}addToFavourites(e){const t=this.sharedService.headerGerneration();return this.http.post(`${s.N.apiUrl}/api/order/favourites`,e,{headers:t,responseType:"text"}).pipe((0,n.K)(this.handleError))}getMyFavourites(e){const t=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/favourites/${e}`,{headers:t}).pipe((0,n.K)(this.handleError))}deleteFavouriteOrder(e){const t=this.sharedService.headerGerneration();return this.http.delete(`${s.N.apiUrl}/api/order/favourites/${e}`,{headers:t}).pipe((0,o.b)(e=>console.log("deleted favourite order: ",JSON.stringify(e))),(0,n.K)(this.handleError))}getDirections(e,t,r,i){const o=this.sharedService.headerGerneration();return this.http.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${e},${t}&destinations=${r}%2C${i}%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw`,{headers:o,responseType:"text"}).pipe((0,n.K)(this.handleError))}getOrderById(e){const t=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/id/${e}`,{headers:t}).pipe((0,o.b)(e=>this.order=e))}getCanceledOrderById(e){const t=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/canceled/${e}`,{headers:t}).pipe((0,o.b)(e=>this.order=e))}getLastCompletedOrder(e){const t=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/completed/${e}`,{headers:t}).pipe((0,n.K)(this.handleError))}getMyOrder(e){const t=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/${e}`,{headers:t}).pipe((0,n.K)(this.handleError))}getOrderForChat(e){const t=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/chat/${e}`,{headers:t}).pipe((0,n.K)(this.handleError))}getAllOrders(){const e=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order`,{headers:e}).pipe((0,n.K)(this.handleError))}getNormalOrders(){const e=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/normal`,{headers:e}).pipe((0,n.K)(this.handleError))}getComfortOrders(){const e=this.sharedService.headerGerneration();return this.http.get(`${s.N.apiUrl}/api/order/comfort`,{headers:e}).pipe((0,n.K)(this.handleError))}acceptOrder(e,t){const r=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/${e}/${t}`,{headers:r,responseType:"json"}).pipe((0,o.b)(e=>this.driverId=t),(0,n.K)(this.handleError))}updateOrderEta(e,t){const r=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/eta/${e}/${t}`,{headers:r,responseType:"json"}).pipe((0,n.K)(this.handleError))}updateDriverArrived(e){const t=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/arrived/${e}`,{headers:t,responseType:"json"}).pipe((0,n.K)(this.handleError))}rateOrder(e){const t=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/rate/${e}`,{headers:t,responseType:"json"}).pipe((0,n.K)(this.handleError))}increaseOrderPrice(e,t){const r=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/increase/${e}/${t}`,{headers:r,responseType:"json"}).pipe((0,n.K)(this.handleError))}completeOrder(e){const t=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/${e}`,{headers:t,responseType:"json"}).pipe((0,n.K)(this.handleError))}deleteOrder(e){const t=this.sharedService.headerGerneration();return this.http.delete(`${s.N.apiUrl}/api/order/${e}`,{headers:t}).pipe((0,o.b)(e=>console.log("deleted order: ",JSON.stringify(e))),(0,n.K)(this.handleError))}driverIncreaseOrderPrice(e,t,r){const i=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/increased/${e}/${t}/${r}`,{headers:i,responseType:"json"}).pipe((0,n.K)(this.handleError))}resetIncreasing(e){const t=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/reset/${e}`,{headers:t,responseType:"json"}).pipe((0,n.K)(this.handleError))}increasedOrderAccept(e,t){const r=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/accepted/increase/${e}/${t}`,{headers:r,responseType:"json"}).pipe((0,n.K)(this.handleError))}incrementOrderPrice(e){const t=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/increment/${e}`,{headers:t,responseType:"json"}).pipe((0,n.K)(this.handleError))}decrementOrderPrice(e){const t=this.sharedService.headerGerneration();return this.http.put(`${s.N.apiUrl}/api/order/decrement/${e}`,{headers:t,responseType:"json"}).pipe((0,n.K)(this.handleError))}handleError(e){let t="";return e.error instanceof ErrorEvent?(console.log("Client side error."),t=`Error: ${e.error.message}`):(console.log("Server side error."),t=`Error Code: ${e.status}\nMessage: ${e.message}`),console.log(t),(0,i._)(t)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(c.eN),a.LFG(l.F))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9088:function(e,t,r){"use strict";r.r(t),r.d(t,{HttpLoaderFactory:function(){return P},OrderDetailsPageModule:function(){return Y}});var i=r(8583),n=r(3679),o=r(7823),s=r(4481),a=r(4762),c=r(3018),l=r(4426),d=r(8442),p=r(2340),h=r(6522),u=r(7800),g=r(5056),m=r(297),f=r(1799),v=r(8948),b=r(1177);const y=["map"];function Z(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",24),c.NdJ("click",function(){return c.CHM(e),c.oxw().showMap()}),c._uU(1),c.ALo(2,"translate"),c.qZA()}2&e&&(c.xp6(1),c.Oqu(c.lcZ(2,1,"Show map")))}function O(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",24),c.NdJ("click",function(){return c.CHM(e),c.oxw().hideMap()}),c._uU(1),c.ALo(2,"translate"),c.qZA()}2&e&&(c.xp6(1),c.Oqu(c.lcZ(2,1,"Show details")))}function A(e,t){1&e&&c._UZ(0,"ion-icon",25)}function T(e,t){if(1&e&&(c.TgZ(0,"small",26),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.AsE("",c.lcZ(2,2,"Pickup time")," ",e.order.pickUpTime,"")}}function w(e,t){1&e&&(c.TgZ(0,"small"),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.hij("",c.lcZ(2,1,"Additional options"),":"))}function C(e,t){1&e&&(c.TgZ(0,"li"),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.Oqu(c.lcZ(2,1,"Pets")))}function x(e,t){1&e&&(c.TgZ(0,"li"),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.Oqu(c.lcZ(2,1,"Baggage")))}function U(e,t){1&e&&(c.TgZ(0,"li"),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.Oqu(c.lcZ(2,1,"Special needs")))}function S(e,t){1&e&&(c.TgZ(0,"small"),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.hij("",c.lcZ(2,1,"Desired car type"),":"))}function I(e,t){if(1&e&&(c.TgZ(0,"ul"),c.TgZ(1,"li"),c._uU(2),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Oqu(e.order.carType)}}function N(e,t){1&e&&(c.TgZ(0,"small"),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.hij("",c.lcZ(2,1,"Additional requirements"),":"))}function $(e,t){if(1&e&&(c.TgZ(0,"ul"),c.TgZ(1,"li"),c._uU(2),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Oqu(e.order.description)}}function q(e,t){1&e&&(c.TgZ(0,"p",27),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&e&&(c.xp6(1),c.Oqu(c.lcZ(2,1,"Offer more price to order")))}function k(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",9),c.TgZ(1,"button",28),c.NdJ("click",function(){return c.CHM(e),c.oxw().offer(1)}),c._uU(2,"+1\u043b\u0432"),c.qZA(),c.TgZ(3,"button",28),c.NdJ("click",function(){return c.CHM(e),c.oxw().offer(2)}),c._uU(4,"+2\u043b\u0432"),c.qZA(),c.TgZ(5,"button",28),c.NdJ("click",function(){return c.CHM(e),c.oxw().offer(3)}),c._uU(6,"+3\u043b\u0432"),c.qZA(),c.TgZ(7,"button",28),c.NdJ("click",function(){return c.CHM(e),c.oxw().offer(4)}),c._uU(8,"+4\u043b\u0432"),c.qZA(),c.TgZ(9,"button",28),c.NdJ("click",function(){return c.CHM(e),c.oxw().offer(5)}),c._uU(10,"+5\u043b\u0432"),c.qZA(),c.qZA()}}const{Geolocation:_}=d.Vn,M=[{path:"",component:(()=>{class e{constructor(e,t,r,i,n,o,s,a,c,l){this.translate=e,this.popoverController=t,this.accountService=r,this.router=i,this.route=n,this.orderService=o,this.driverService=s,this.walletService=a,this.tripService=c,this.alertController=l,this.orderId=this.route.snapshot.params.id,this.applicationUserId=this.accountService.userValue.id,this.isDrivingNow=this.accountService.userValue.isDrivingNow,this.order={id:"",location:"",locationLat:"",locationLong:"",destination:"",destinationLat:"",destinationLong:"",increasePrice:"",isAccepted:null,isCompleted:null,createdOn:null,status:null,applicationUser:null,applicationUserId:null,totalPrice:null,acceptedBy:null,tripDistance:null,userDistance:null,withPets:null,withStroller:null,carType:null,isRated:null,km:null,distanceText:null,eta:null,isDeleted:null,isDriverArrived:null,increasedByDriver:null,increaseAccepted:null,increasedBy:null,special:null,pickUpTime:null,description:null},this.mapVisible=!1,this.subscriptions=[],this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage)}ngOnInit(){this.mapId=document.getElementById("map"),this.mapId.style.display="none",this.orderDiv=document.getElementById("order"),this.orderDiv.style.display="block";const e=(new l.su).configureLogging(l.in.Information).withUrl(`${p.N.signalRUrl}/orderHub`).build();e.start().then(function(){console.log("signalR Connected in travel-mode")}).catch(function(t){console.log("Reconnecting in 1 sec."),setTimeout(()=>e.start(),1e3)}),e.on("NotifyDriver",e=>{this.subscriptions.push(this.orderService.getOrderById(e).subscribe(e=>{this.order.id==e.id&&(1==e.increaseAccepted?this.IncreaseAccepted(e):0==e.increaseAccepted&&this.IncreaseRefused())}))}),e.on("OrderDeleted",e=>{this.subscriptions.push(this.orderService.getOrderById(e).subscribe(e=>{this.order.id==e.id&&this.OrderTaken()}))})}ionViewDidEnter(){this.orderDiv.style.display="block",this.mapId.style.display="none",this.subscriptions.push(this.orderService.getOrderById(this.orderId).subscribe(e=>{if(null==e)return this.OrderTaken();this.canIncrease=e.totalPrice<=3.5,this.order=e,this.calculateEta(this.order),this.loadMap(this.mapRef)}))}loadMap(e){return(0,a.mG)(this,void 0,void 0,function*(){const t={lat:+this.order.locationLat,lng:+this.order.locationLong},r={center:new google.maps.LatLng(t.lat,t.lng),zoom:14,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControl:!1};null!=e&&(this.map=new google.maps.Map(e.nativeElement,r));var i={url:"https://www.freeiconspng.com/uploads/-human-male-man-people-person-profile-red-user-icon--icon--23.png",scaledSize:new window.google.maps.Size(25,25),anchor:{x:10,y:10}},n=new google.maps.Marker({position:new google.maps.LatLng(t),icon:i,map:this.map});this.navigateToUserAndCalculateDistance(n)})}navigateToUserAndCalculateDistance(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=new google.maps.DirectionsService,r=new google.maps.DirectionsRenderer,i=yield _.getCurrentPosition(),n={lat:i.coords.latitude,lng:i.coords.longitude};let o=+this.order.locationLat,s=+this.order.locationLong;t.route({origin:{lat:n.lat,lng:n.lng},destination:{lat:o,lng:s},travelMode:google.maps.TravelMode.DRIVING},(t,i)=>{if("OK"===i){r.setDirections(t);var a=new google.maps.LatLng(n.lat,n.lng),c=new google.maps.LatLng(o,s);this.distance=(google.maps.geometry.spherical.computeDistanceBetween(a,c)/1e3).toFixed(2),new google.maps.InfoWindow({content:`${this.distance} km from you.`}).open(this.map,e)}else window.alert("Directions request failed due to "+i)}),r.setMap(this.map)})}hideMap(){this.orderDiv.style.display="block",this.mapId.style.display="none",this.mapVisible=!1,this.orderDiv.cancelable&&this.orderDiv.preventDefault(),this.mapId.cancelable&&this.mapId.preventDefault()}showMap(){this.orderDiv.style.display="none",this.mapId.style.display="block",this.mapVisible=!0,this.loadMap(this.mapRef),this.orderDiv.cancelable&&this.orderDiv.preventDefault(),this.mapId.cancelable&&this.mapId.preventDefault()}offer(e){this.subscriptions.push(this.orderService.getOrderById(this.order.id).subscribe(t=>{if("Canceled"==t.status)return this.OrderTaken(),void this.router.navigate(["menu/driving"]);this.subscriptions.push(this.orderService.driverIncreaseOrderPrice(this.order.id,e,this.accountService.userValue.driverId).subscribe(()=>{}))}))}calculateEta(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield _.getCurrentPosition(),r={lat:t.coords.latitude,lng:t.coords.longitude};this.myLat=r.lat,this.myLng=r.lng,(new google.maps.DirectionsService).route({origin:{lat:+this.myLat,lng:+this.myLng},destination:{lat:+e.locationLat,lng:+e.locationLong},travelMode:google.maps.TravelMode.DRIVING},(t,r)=>{"OK"===r&&(e.eta=t.routes[0].legs[0].duration.text)})})}acceptOrder(e){this.subscriptions.push(this.orderService.getOrderById(e.id).subscribe(t=>{let r=new Date;return t.pickUpTime?(console.log(t.pickUpTime),console.log(`${r.getHours()}:${r.getMinutes()}`),this.AcceptConfirmation(t)):t.applicationUserId==this.applicationUserId?this.OwnOrderError():"Canceled"==t.status?(this.OrderTaken(),void this.router.navigate(["menu/driving"])):void this.subscriptions.push(this.driverService.getDriverActiveCar(this.accountService.userValue.driverId).subscribe(r=>{if(1==r.typeId&&"Comfort"==e.carType)return this.WrongCarAlert();this.acceptConfirm(t)}))}))}acceptConfirm(e){this.subscriptions.push(this.driverService.getDriver(this.accountService.userValue.driverId).subscribe(t=>{this.tripPriceForDriver=e.totalPrice*(t.comission/100),this.subscriptions.push(this.walletService.getMyWallet(this.applicationUserId).subscribe(t=>{if(t.ammount<this.tripPriceForDriver)this.NotEnoughCashAlert();else{let t=this.accountService.userValue.id;this.accountService.userValue.isDrivingNow=!0,this.subscriptions.push(this.accountService.updateDriving(this.applicationUserId,!0).subscribe(()=>{})),this.isDrivingNow=this.accountService.userValue.isDrivingNow,e.acceptedBy=t,this.subscriptions.push(this.orderService.acceptOrder(e.id,t).subscribe(()=>{this.subscriptions.push(this.orderService.updateOrderEta(r,e.eta).subscribe())}));let r=e.id;this.subscriptions.push(this.tripService.createTrip({orderId:r,applicationUserId:t,order:e}).subscribe(()=>{})),this.router.navigate(["menu/driving-mode"])}}))}))}openLanguagePopover(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:h.m,event:e});yield t.present()})}AcceptConfirmation(e){return(0,a.mG)(this,void 0,void 0,function*(){let t={};t.first=this.translate.instant("The customer wants to pick him up at "),this.translate.get(["Order information","Accept","Cancel"]).subscribe(r=>(0,a.mG)(this,void 0,void 0,function*(){const i=yield this.alertController.create({cssClass:"my-custom-class",header:r["Order information"],message:`${t.first} ${e.pickUpTime}`,buttons:[{text:r.Accept,handler:()=>{this.acceptConfirm(e)}},{text:r.Cancel,role:"cancel"}]});yield i.present()}))})}NotEnoughCashAlert(){return(0,a.mG)(this,void 0,void 0,function*(){this.translate.get(["Balance","Your wallet balance is not enough for this order!"]).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:e.Balance,message:e["Your wallet balance is not enough for this order!"],buttons:["OK"]});yield t.present()}))})}OrderTaken(){return(0,a.mG)(this,void 0,void 0,function*(){this.translate.get(["Sorry","This order is no longer active"]).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:e.Sorry,message:e["This order is no longer active"],buttons:[{text:"OK",handler:()=>{this.router.navigate(["menu/driving"])}}]});yield t.present()}))})}IncreaseRefused(){return(0,a.mG)(this,void 0,void 0,function*(){this.translate.get(["Order increasing refused."]).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:e["Order increasing refused."],buttons:[{text:"Ok",role:"cancel"}]});yield t.present()}))})}IncreaseAccepted(e){return(0,a.mG)(this,void 0,void 0,function*(){this.translate.get(["Order increasing accepted.","You can accept the order now","Accept","Cancel"]).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){const r=yield this.alertController.create({cssClass:"my-custom-class",header:t["Order increasing accepted."],message:t["You can accept the order now"],buttons:[{text:t.Accept,handler:()=>{this.acceptOrder(e)}},{text:t.Cancel,role:"cancel"}]});yield r.present()}))})}WrongCarAlert(){return(0,a.mG)(this,void 0,void 0,function*(){this.translate.get(["Order information","Your car is of type 'Normal' but the order desired car type is 'Comfort'!"]).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:e["Order information"],message:e['Your car is of type "Normal" but the order desired car type is "Comfort"!'],buttons:["OK"]});yield t.present()}))})}OwnOrderError(){return(0,a.mG)(this,void 0,void 0,function*(){this.translate.get(["You cant take your order."]).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:e["You cant take your order."],buttons:["OK"]});yield t.present()}))})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(u.sK),c.Y36(o.Dh),c.Y36(g.B),c.Y36(s.F0),c.Y36(s.gz),c.Y36(m.p),c.Y36(f.F),c.Y36(v.X),c.Y36(b.a),c.Y36(o.Br))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-order-details"]],viewQuery:function(e,t){if(1&e&&c.Gf(y,1,c.SBq),2&e){let e;c.iGM(e=c.CRH())&&(t.mapRef=e.first)}},decls:61,vars:34,consts:[["slot","start"],["slot","end"],["id","toolbarIcon","name","language-outline",3,"click"],["class","fonted btn btn-info col-md-12",3,"click",4,"ngIf"],["id","order",1,"col-md-10"],[1,"list-group","mt-2"],[1,"text","list-group-item","list-group-item-action","flex-column","align-items-start"],["name","alert-circle",4,"ngIf"],["id","warningicn",4,"ngIf"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1","fonted"],["name","analytics-outline",1,"mr-2"],["name","arrow-forward-outline",1,"mr-2"],[1,"row"],[1,"col"],[4,"ngIf"],[1,"w-100"],[1,"fonted"],["type","button",1,"fonted","btn","btn-info",3,"click"],["class","text-center",4,"ngIf"],["class","d-flex w-100 justify-content-between",4,"ngIf"],["padding","",1,"noScroll"],["id","map"],["map",""],[1,"fonted","btn","btn-info","col-md-12",3,"click"],["name","alert-circle"],["id","warningicn"],[1,"text-center"],["type","button",1,"btn","btn-info","btn-sm",3,"click"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-menu-button"),c.qZA(),c.TgZ(4,"ion-title"),c.TgZ(5,"ion-label"),c._uU(6),c.ALo(7,"translate"),c.qZA(),c.qZA(),c.TgZ(8,"ion-buttons",1),c.TgZ(9,"ion-icon",2),c.NdJ("click",function(e){return t.openLanguagePopover(e)}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(10,"ion-content"),c.YNc(11,Z,3,3,"button",3),c.YNc(12,O,3,3,"button",3),c.TgZ(13,"div",4),c.TgZ(14,"div",5),c.TgZ(15,"a",6),c.YNc(16,A,1,0,"ion-icon",7),c.YNc(17,T,3,4,"small",8),c.TgZ(18,"div",9),c._UZ(19,"h5",10),c.TgZ(20,"small"),c._uU(21),c.ALo(22,"date"),c.qZA(),c.qZA(),c.TgZ(23,"p"),c._UZ(24,"ion-icon",11),c._uU(25),c.qZA(),c._UZ(26,"hr"),c.TgZ(27,"p"),c._UZ(28,"ion-icon",12),c._uU(29),c.qZA(),c.TgZ(30,"div",9),c._UZ(31,"h5",10),c.qZA(),c.TgZ(32,"div",13),c.TgZ(33,"div",14),c.YNc(34,w,3,3,"small",15),c.TgZ(35,"ul"),c.YNc(36,C,3,3,"li",15),c.YNc(37,x,3,3,"li",15),c.YNc(38,U,3,3,"li",15),c.qZA(),c.YNc(39,S,3,3,"small",15),c.YNc(40,I,3,1,"ul",15),c.YNc(41,N,3,3,"small",15),c.YNc(42,$,3,1,"ul",15),c.TgZ(43,"div",16),c.TgZ(44,"h5"),c._uU(45),c.ALo(46,"translate"),c.qZA(),c._UZ(47,"br"),c.qZA(),c.TgZ(48,"div",9),c.TgZ(49,"small",17),c._uU(50),c.ALo(51,"translate"),c.qZA(),c.TgZ(52,"button",18),c.NdJ("click",function(){return t.acceptOrder(t.order)}),c._uU(53),c.ALo(54,"translate"),c.qZA(),c.qZA(),c._UZ(55,"hr"),c.YNc(56,q,3,3,"p",19),c.YNc(57,k,11,0,"div",20),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(58,"ion-content",21),c._UZ(59,"div",22,23),c.qZA(),c.qZA()),2&e&&(c.xp6(6),c.Oqu(c.lcZ(7,23,"Details")),c.xp6(5),c.Q6J("ngIf",0==t.mapVisible),c.xp6(1),c.Q6J("ngIf",1==t.mapVisible),c.xp6(4),c.Q6J("ngIf",t.order.pickUpTime),c.xp6(1),c.Q6J("ngIf",t.order.pickUpTime),c.xp6(4),c.Oqu(c.xi3(22,25,t.order.createdOn,"dd/MM/yyyy HH:mm")),c.xp6(4),c.Oqu(t.order.location),c.xp6(4),c.Oqu(t.order.destination),c.xp6(5),c.Q6J("ngIf",1==t.order.withPets||1==t.order.withStroller||1==t.order.special),c.xp6(2),c.Q6J("ngIf",1==t.order.withPets),c.xp6(1),c.Q6J("ngIf",1==t.order.withStroller),c.xp6(1),c.Q6J("ngIf",1==t.order.special),c.xp6(1),c.Q6J("ngIf",t.order.carType),c.xp6(1),c.Q6J("ngIf",t.order.carType),c.xp6(1),c.Q6J("ngIf",t.order.description),c.xp6(1),c.Q6J("ngIf",t.order.description),c.xp6(3),c.AsE("",c.lcZ(46,28,"Trip distance"),": ",t.order.tripDistance," km"),c.xp6(5),c.AsE("",c.lcZ(51,30,"Total cost"),": ",t.order.totalPrice," \u043b\u0432."),c.xp6(3),c.Oqu(c.lcZ(54,32,"Accept")),c.xp6(3),c.Q6J("ngIf",1==t.canIncrease),c.xp6(1),c.Q6J("ngIf",1==t.canIncrease))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.Q$,o.gu,o.W2,i.O5],pipes:[u.X$,i.uU],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#e9e9e9}ion-toolbar[_ngcontent-%COMP%]{--ion-background-color:#eee}#map[_ngcontent-%COMP%]{height:100%;width:100%}ion-title[_ngcontent-%COMP%]{text-align:center}#warningicn[_ngcontent-%COMP%]{margin-left:6px}h5[_ngcontent-%COMP%]{font-size:.9em}#toolbarIcon[_ngcontent-%COMP%]{font-size:1.7em}.fonted[_ngcontent-%COMP%]{font-family:Open Sans Light}.centered[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{font-family:Open Sans Light}hr[_ngcontent-%COMP%]{background:#eee;width:70%!important}.blink_me[_ngcontent-%COMP%]{-webkit-animation:blinker 1s linear infinite;animation:blinker 1s linear infinite}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}.msg-box[_ngcontent-%COMP%]{width:100%;height:140px;padding:10px 30px;font-size:14px;font-family:Open Sans Light;overflow:auto}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:-5px;list-style:none}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ex-msg[_ngcontent-%COMP%]{text-align:right}.msg-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .in-msg[_ngcontent-%COMP%]{text-align:left;margin-left:-60px}"]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),e})();var D=r(1841),L=r(2472),E=r(3577);function P(e){return new L.w(e)}let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,n.u5,o.Pc,G,u.aw.forChild({loader:{provide:u.Zw,useFactory:P,deps:[D.eN]}}),E.LanguagePopoverPageModule]]}),e})()}}]);