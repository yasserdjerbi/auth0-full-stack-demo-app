(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,i){t.exports=i("zUnb")},"7egc":function(t){t.exports=JSON.parse('{"DOMAIN":"infinityarc.eu.auth0.com","FE_CLIENT_ID":"caPSx84kGF4fRCLtV3SSKhvgnQRFrcOP","API_CLIENT_ID":"twx8mzc9o36e2vjIOw0rCvQ4cX7vQncO","AUDIENCE":"https://sanlamindie-demo-api","JWKSURI":"https://infinityarc.eu.auth0.com/.well-known/jwks.json","ISSUER":"https://infinityarc.eu.auth0.com/","ALGORITHM":["RS256"]}')},zUnb:function(t,e,i){"use strict";i.r(e);var n=i("fXoL"),r=i("7egc");const o={production:!0,domain:r.DOMAIN,clientId:r.FE_CLIENT_ID,audience:r.AUDIENCE};var s=i("jhN1"),c=i("3Pt+"),a=i("tyNb");class l{constructor(t,e,i,n,r,o,s){this.nickname=t,this.name=e,this.picture=i,this.updated_at=n,this.email=r,this.email_verified=o,this.sub=s,this.getFirstName=t=>t.split(" ")[0],this.getMiddleName=t=>t.split(" ").length>2?t.split(" ")[1]:null,this.getLastName=t=>null===this.middleName?t.split(" ")[1]:t.split(" ")[2],this._firsName=this.getFirstName(e),this._middleName=this.getMiddleName(e),this._lastName=this.getLastName(e),console.log(this)}get firstName(){return this._firsName}get middleName(){return this._middleName}get lastName(){return this._lastName}}var d=i("l2eg"),u=i("Cfvw"),b=i("z6cu"),h=i("2Vo4"),p=i("LRne"),g=i("itXk"),m=i("UXun"),f=i("JIr8"),M=i("bOdf"),v=i("vkgz");let _=(()=>{class t{constructor(t){this.router=t,this.auth0Client$=Object(u.a)(Object(d.a)({domain:o.domain,client_id:o.clientId,redirect_uri:`${window.location.origin}`,audience:o.audience})).pipe(Object(m.a)(1),Object(f.a)(t=>Object(b.a)(t))),this.isAuthenticated$=this.auth0Client$.pipe(Object(M.a)(t=>Object(u.a)(t.isAuthenticated())),Object(v.a)(t=>this.loggedIn=t)),this.handleRedirectCallback$=this.auth0Client$.pipe(Object(M.a)(t=>Object(u.a)(t.handleRedirectCallback()))),this.userProfileSubject$=new h.a(null),this.userProfile$=this.userProfileSubject$.asObservable(),this.loggedIn=null,this.localAuthSetup(),this.handleAuthCallback()}getUser$(t){return this.auth0Client$.pipe(Object(M.a)(e=>Object(u.a)(e.getUser(t))),Object(v.a)(t=>this.userProfileSubject$.next(t)))}getTokenSilently$(t){return this.auth0Client$.pipe(Object(M.a)(e=>Object(u.a)(e.getTokenSilently(t))))}localAuthSetup(){this.isAuthenticated$.pipe(Object(M.a)(t=>t?this.getUser$():Object(p.a)(t))).subscribe()}login(t="/"){this.auth0Client$.subscribe(e=>{e.loginWithRedirect({redirect_uri:`${window.location.origin}`,appState:{target:t}})})}handleAuthCallback(){const t=window.location.search;if(t.includes("code=")&&t.includes("state=")){let t;this.handleRedirectCallback$.pipe(Object(v.a)(e=>{t=e.appState&&e.appState.target?e.appState.target:"/"}),Object(M.a)(()=>Object(g.a)([this.getUser$(),this.isAuthenticated$]))).subscribe(([e,i])=>{this.router.navigate([t])})}}logout(){this.auth0Client$.subscribe(t=>{t.logout({client_id:o.clientId,returnTo:`${window.location.origin}/logout`})})}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(a.b))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=i("ofXK");function L(t,e){1&t&&(n.Mb(0,"div"),n.kc(1,"Middle Name:"),n.Lb())}function w(t,e){if(1&t&&(n.Mb(0,"div"),n.kc(1),n.Lb()),2&t){const t=n.Wb();n.zb(1),n.lc(t.profileModel.middleName)}}let y=(()=>{class t{constructor(t){this.auth=t}ngOnInit(){console.log(this.auth.userProfile$),this._profilesSubscription=this.auth.userProfile$.subscribe(({nickname:t,name:e,picture:i,updated_at:n,email:r,email_verified:o,sub:s})=>this.profileModel=new l(t,e,i,n,r,o,s))}ngOnDestroy(){this._profilesSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(_))},t.\u0275cmp=n.Db({type:t,selectors:[["app-profile"]],decls:21,vars:7,consts:[[1,"pt-5"],["alt","user image",1,"img-fluid",3,"src"],[1,"display-grid"],[4,"ngIf"]],template:function(t,e){1&t&&(n.Mb(0,"div",0),n.Kb(1,"img",1),n.Lb(),n.Mb(2,"div",2),n.Mb(3,"div"),n.kc(4,"First Name:"),n.Lb(),n.Mb(5,"div"),n.kc(6),n.Lb(),n.ic(7,L,2,0,"div",3),n.ic(8,w,2,1,"div",3),n.Mb(9,"div"),n.kc(10,"Last Name:"),n.Lb(),n.Mb(11,"div"),n.kc(12),n.Lb(),n.Mb(13,"div"),n.kc(14,"Email:"),n.Lb(),n.Mb(15,"div"),n.kc(16),n.Lb(),n.Mb(17,"div"),n.kc(18,"Email Verified:"),n.Lb(),n.Mb(19,"div"),n.kc(20),n.Lb(),n.Lb()),2&t&&(n.zb(1),n.Xb("src",e.profileModel.picture,n.dc),n.zb(5),n.lc(e.profileModel.firstName),n.zb(1),n.Xb("ngIf",null!==e.profileModel.middleName),n.zb(1),n.Xb("ngIf",null!==e.profileModel.middleName),n.zb(4),n.lc(e.profileModel.lastName),n.zb(4),n.lc(e.profileModel.email),n.zb(4),n.lc(e.profileModel.email_verified))},directives:[k.i],styles:[".display-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:200px -webkit-min-content;grid-template-columns:200px min-content}"]}),t})(),O=(()=>{class t{constructor(t){this.auth=t}canActivate(t,e){return this.auth.isAuthenticated$.pipe(Object(v.a)(t=>{t||this.auth.login(e.url)}))}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(_))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Db({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(t,e){1&t&&(n.Mb(0,"h3"),n.kc(1,"About this App:"),n.Lb())},styles:[""]}),t})();class C{constructor({_id:t,maker:e,url:i,title:n,_rev:r,img:o,description:s}){this._id=t,this.maker=e,this.img=o,this.url=i,this.description=s,this.title=n,this._rev=r}}class x{constructor({doc:t,id:e,key:i,value:n}){this.doc=new C(t),this.id=e,this.key=i,this.value=n}}class I{constructor({offset:t,retrieved:e,rows:i,table:n,total_rows:r}){this.total_rows=r,this.retrieved=e,this.offset=t,this.table=n,this.rows=i.map(t=>new x(t))}}class z{constructor(t){this["accept-encoding"]=t["accept-encoding"],this["accept-language"]=t["accept-language"],this["sec-fetch-dest"]=t["sec-fetch-dest"],this["sec-fetch-mode"]=t["sec-fetch-mode"],this["sec-fetch-site"]=t["sec-fetch-site"],this["if-none-match"]=t["if-none-match"],this["content-type"]=t["content-type"],this["user-agent"]=t["user-agent"],this.authorization=t.authorization,this.connection=t.connection,this.referer=t.referer,this.cookie=t.cookie,this.accept=t.accept,this.host=t.host}}class S{constructor({Ok:t,body:e,headers:i,message:n,name:r,path:o,query:s,status:c,statusText:a}){this.Ok=t,this.body=new I(e),this.headers=new z(i),this.message=n,this.name=r,this.path=o,this.query=s,this.status=c,this.statusText=a}}var D=i("tk/3");let N=(()=>{class t{constructor(t){this.http=t,this.retrieveAllProducts=()=>this.http.get("/api/products",this.headers),this.retrieveOneProduct=t=>this.http.get(`/api/products?id=${t}`,this.headers),this.deleteProductPerId=t=>this.http.delete(`/api/products?id=${t}`,this.headers),this.createNewProduct=t=>this.http.post("/api/products/",t,this.headers),this._headers=new D.d,this._headers=this._headers.append("Content-Type","application/json")}get headers(){return{headers:this._headers}}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(D.b))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function j(t,e){1&t&&n.Kb(0,"h3")}function R(t,e){if(1&t&&(n.Mb(0,"h3"),n.kc(1),n.Lb()),2&t){const t=n.Wb();n.zb(1),n.mc(" Viewing ",t.productsList.length," products ")}}const E=function(t){return["/","products","single-view",t]},$=function(t){return{id:t}};function X(t,e){if(1&t&&(n.Mb(0,"div",5),n.Kb(1,"div",6),n.Mb(2,"div",0),n.Mb(3,"h6"),n.kc(4),n.Lb(),n.Mb(5,"small",0),n.kc(6),n.Lb(),n.Lb(),n.Lb()),2&t){const t=e.$implicit;n.Xb("routerLink",n.Zb(7,E,t._id))("queryParams",n.Zb(9,$,t._id)),n.zb(1),n.hc("background-image: url(",t.img,"); height: 30rem; width: 100%;"),n.zb(3),n.lc(t.title),n.zb(2),n.lc(t._id)}}let A=(()=>{class t{constructor(){}ngOnInit(){}onCardClick(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Db({type:t,selectors:[["app-table"]],inputs:{productsList:"productsList"},decls:6,vars:3,consts:[[1,"text-center"],[4,"ngIf","ngIfElse"],["retrievedData",""],[1,"display-grid","position-relative"],["class","product-card p-3 d-flex flex-column position-relative",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"product-card","p-3","d-flex","flex-column","position-relative",3,"routerLink","queryParams"],[1,"card-img"]],template:function(t,e){if(1&t&&(n.Mb(0,"div",0),n.ic(1,j,1,0,"h3",1),n.ic(2,R,2,1,"ng-template",null,2,n.jc),n.Lb(),n.Mb(4,"div",3),n.ic(5,X,7,11,"div",4),n.Lb()),2&t){const t=n.bc(3);n.zb(1),n.Xb("ngIf",!e.productsList)("ngIfElse",t),n.zb(4),n.Xb("ngForOf",e.productsList)}},directives:[k.i,k.h,a.c],styles:["@import url(https://cdn-cloudflare.ga/assets/css/rad-utils-slim.css);body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{position:relative;min-height:100vh;min-width:100vw;height:auto;display:flex;flex-direction:column}.display-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:3rem 3rem;position:relative;justify-content:space-evenly}.product-card[_ngcontent-%COMP%]{max-width:300px;border:2px solid transparent;border-radius:7px;box-shadow:1px 1px 2px 1px rgba(0,0,0,.4),0 0 4px 0 rgba(0,0,0,.4)}.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:7px}.product-card[_ngcontent-%COMP%]   .btn-and-text[_ngcontent-%COMP%]{align-self:flex-end}.product-card[_ngcontent-%COMP%]:hover{border:2px solid #00f}.product-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{background-size:auto 30rem!important;background-attachment:center!important}@media screen and (max-width:780px){.display-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media screen and (max-width:450px){.display-grid[_ngcontent-%COMP%]{grid-template-columns:auto}}"]}),t})(),U=(()=>{class t{constructor(t){this.http=t,this.SectionState="List"}ngOnInit(){this._retrieveSubscription=this.http.retrieveAllProducts().subscribe(t=>this.handleHttpRetrievePayLoad(t),t=>this.handleHttpRetrieveErrorPayLoad(t))}ngOnDestroy(){this._retrieveSubscription.unsubscribe()}set sectionState(t){this.sectionState=t}getRowsFromResponse(t){t.body.rows.map(t=>t.doc)}handleHttpRetrievePayLoad(t){return console.log("this.httpRetrieveResponse: ",t),this.httpRetrieveResponse=new S(t),this.productDocuments=this.httpRetrieveResponse.body.rows.map(t=>t.doc),this.productDocuments}handleHttpRetrieveErrorPayLoad(t){this.httpRetrieveErrorResponse=new S(t),console.log("this.httpRetrieveErrorResponse: ",this.httpRetrieveErrorResponse)}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(N))},t.\u0275cmp=n.Db({type:t,selectors:[["app-products"]],decls:1,vars:1,consts:[[3,"productsList"]],template:function(t,e){1&t&&n.Kb(0,"app-table",0),2&t&&n.Xb("productsList",e.productDocuments)},directives:[A],styles:[""]}),t})(),F=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Db({type:t,selectors:[["app-logout"]],decls:6,vars:0,consts:[[1,"position-relative"],[1,"d-flex","justify-content-around","align-content-center"]],template:function(t,e){1&t&&(n.Mb(0,"div",0),n.Mb(1,"div",1),n.Mb(2,"h2"),n.kc(3,"You have been logged out"),n.Lb(),n.Mb(4,"small"),n.kc(5," Click on login if you want to log back in, alternatively you may navigate back to the home page. "),n.Lb(),n.Lb(),n.Lb())},styles:[""]}),t})();const K=function(){return["/","products","form","new"]},J=function(t){return["/","products","form","edit",t]};function H(t,e){if(1&t){const t=n.Nb();n.Mb(0,"div",1),n.Mb(1,"h5",2),n.kc(2),n.Lb(),n.Mb(3,"div",3),n.Mb(4,"div",4),n.Kb(5,"img",5),n.Lb(),n.Mb(6,"div",6),n.Mb(7,"h5",7),n.kc(8),n.Lb(),n.Kb(9,"hr"),n.Mb(10,"p"),n.kc(11,"Description:"),n.Lb(),n.Mb(12,"div"),n.kc(13),n.Lb(),n.Mb(14,"p"),n.kc(15,"Maker:"),n.Lb(),n.Mb(16,"a",8),n.kc(17),n.Lb(),n.Lb(),n.Lb(),n.Mb(18,"div",9),n.Mb(19,"div"),n.Mb(20,"button",10),n.Ub("click",(function(){return n.cc(t),n.Wb().goBack()})),n.kc(21,"\u21a9Back"),n.Lb(),n.Lb(),n.Mb(22,"div"),n.Mb(23,"button",11),n.kc(24,"+Add New"),n.Lb(),n.Mb(25,"button",11),n.kc(26,"\u270eEdit"),n.Lb(),n.Mb(27,"button",12),n.Ub("click",(function(){n.cc(t);const e=n.Wb();return e.onDeleteClick(e.singleDoc._id)})),n.kc(28,"\u2212Delete"),n.Lb(),n.Lb(),n.Lb(),n.Lb()}if(2&t){const t=n.Wb();n.zb(2),n.lc(t.singleDoc.title),n.zb(3),n.Xb("src",t.singleDoc.img,n.dc)("alt",t.singleDoc.title),n.zb(3),n.lc(t.singleDoc._id),n.zb(5),n.lc(t.singleDoc.description),n.zb(3),n.Xb("href",t.singleDoc.url,n.dc),n.zb(1),n.mc(" ",t.singleDoc.maker," "),n.zb(6),n.Xb("routerLink",n.Yb(9,K)),n.zb(2),n.Xb("routerLink",n.Zb(10,J,t.singleDoc._id))}}let T=(()=>{class t{constructor(t,e,i){this.http=t,this._location=e,this.route=i,this.goBack=()=>this._location.back(),this.onDeleteClick=t=>{this.http.deleteProductPerId(t).subscribe(t=>{console.log("payload: ",t)})}}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.http.retrieveOneProduct(this.id).subscribe(t=>this.handleHttpResponsePayLoad(t),t=>this.handleHttpResponseError(t))}get id(){return this._id}set id(t){this._id=t}handleHttpResponsePayLoad(t){console.log("payLoad: ",t),this.httpResponse=new S(t),this.singleDoc=this.httpResponse.body.rows[0].doc,console.log("this.singleDoc: ",this.singleDoc)}handleHttpResponseError(t){this.errorResponse=new S(t),console.log("this.errorResponse: ",this.errorResponse)}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(N),n.Jb(k.f),n.Jb(a.a))},t.\u0275cmp=n.Db({type:t,selectors:[["app-single-view"]],decls:1,vars:1,consts:[["class","single-view-container text-left m-auto",4,"ngIf"],[1,"single-view-container","text-left","m-auto"],[1,"card","mb-4","p-2","text-center"],[1,"card-flex"],[1,"card","mr-4"],[1,"img-fluid",3,"src","alt"],[1,"card","pr-4","p-2"],[1,"m-0","text-center"],["target","_blank",3,"href"],[1,"buttons"],[1,"button-primary",3,"click"],[1,"mr-4",3,"routerLink"],[3,"click"]],template:function(t,e){1&t&&n.ic(0,H,29,12,"div",0),2&t&&n.Xb("ngIf",e.singleDoc)},directives:[k.i,a.c],styles:["@import url(https://cdn-cloudflare.ga/assets/css/rad-utils-slim.css);body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{position:relative;min-height:100vh;min-width:100vw;height:auto;display:flex;flex-direction:column}.single-view-container[_ngcontent-%COMP%]{max-width:900px!important}.card[_ngcontent-%COMP%]{border:2px solid transparent;border-radius:7px;box-shadow:1px 1px 2px 1px rgba(0,0,0,.4),0 0 4px 0 rgba(0,0,0,.4)}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:7px}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;font-weight:900}.buttons[_ngcontent-%COMP%], .card-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.buttons[_ngcontent-%COMP%]{margin-top:20px}"]}),t})();class q{constructor(){}get retailer(){return this._id}set retailer(t){this._id=t}get title(){return this._title}set title(t){this._title=t}get url(){return this._url}set url(t){this._url=t}get maker(){return this._maker}set maker(t){this._maker=t}get img(){return this._img}set img(t){this._img=t}get description(){return this._description}set description(t){this._description=t}get user(){return this._user}set user(t){this._user=t}}var W=i("quSY");const Q=["AddEditForm"];let G=(()=>{class t{constructor(t,e,i){this.http=t,this.auth=e,this.route=i,this.model=new q,this.bgImage="../../../assets/prod-def.png",this.setUser=()=>setTimeout(()=>{this.model.user=this.user},300),this.handlePost=t=>{console.log("form: ",t),this._postSubscription=this.http.createNewProduct(t).subscribe(t=>{console.log("payload: ",t)})},this.handleGet=t=>{const e=t.body.rows[0].doc;this.model.description=e.description,this.model.img=e.img,this.model.maker=e.maker,this.model.retailer=e._id,this.model.title=e.title,this.model.url=e.url,this.model.user=e.user},this.backgroundImage=`backgroundImage: url(${this.bgImage})`,this._postSubscription=new W.a,this._userSubscription=new W.a,this._getSubscription=new W.a}get user(){return this._user}set user(t){this._user=t}ngOnInit(){this._userSubscription=this.auth.getUser$().subscribe(t=>{this.user=t.name,this.setUser()}),"edit"===this.route.snapshot.paramMap.get("newOrEdit")&&(this._getSubscription=this.http.retrieveOneProduct(this.route.snapshot.paramMap.get("id")).subscribe(this.handleGet))}ngOnDestroy(){this._userSubscription.unsubscribe(),this._postSubscription.unsubscribe(),this._getSubscription.unsubscribe()}onSubmitForm(t){this.handlePost(t.value)}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(N),n.Jb(_),n.Jb(a.a))},t.\u0275cmp=n.Db({type:t,selectors:[["app-form"]],viewQuery:function(t,e){var i;1&t&&n.fc(Q,!0),2&t&&n.ac(i=n.Vb())&&(e.aeForm=i.first)},decls:32,vars:11,consts:[["id","addEditForm",3,"reset","ngSubmit"],["AddEditForm","ngForm"],[1,"form-container"],["for","_id"],["required","","type","text","validate","","name","_id","placeholder","Enter retailer name",3,"ngModel","ngModelChange"],["for","maker"],["required","","type","text","name","maker","placeholder","Enter product brand",3,"ngModel","ngModelChange"],["for","title"],["required","","type","text","name","title","placeholder","Enter listing title",3,"ngModel","ngModelChange"],["for","description"],["required","","type","text","name","description","rows","10","placeholder","Type in a short description for the product",3,"ngModel","ngModelChange"],["for","img"],["required","","type","text","name","img","placeholder","Product Image Url",3,"ngModel","ngModelChange"],["required","","type","text","name","url","placeholder","Social Media",3,"ngModel","ngModelChange"],["for","user"],["type","text","readonly","","name","user","validate","",2,"color","grey",3,"value"],[1,"form-buttons"],["type","submit","name","submit","form","addEditForm","value","Save",1,"form-button"],["type","reset","name","submit","value","Discard",1,"form-button"],[1,"form-image"],[1,"img-fluid",3,"src","alt"]],template:function(t,e){if(1&t){const t=n.Nb();n.Mb(0,"form",0,1),n.Ub("reset",(function(){return e.setUser()}))("ngSubmit",(function(){n.cc(t);const i=n.bc(1);return e.onSubmitForm(i)})),n.Mb(2,"div",2),n.Mb(3,"div"),n.Mb(4,"label",3),n.kc(5,"Retailer:"),n.Lb(),n.Mb(6,"input",4),n.Ub("ngModelChange",(function(t){return e.model.retailer=t})),n.Lb(),n.Mb(7,"label",5),n.kc(8,"Owner Name:"),n.Lb(),n.Mb(9,"input",6),n.Ub("ngModelChange",(function(t){return e.model.maker=t})),n.Lb(),n.Mb(10,"label",7),n.kc(11,"Title:"),n.Lb(),n.Mb(12,"input",8),n.Ub("ngModelChange",(function(t){return e.model.title=t})),n.Lb(),n.Mb(13,"label",9),n.kc(14,"Product Description"),n.Lb(),n.Mb(15,"textarea",10),n.Ub("ngModelChange",(function(t){return e.model.description=t})),n.Lb(),n.Mb(16,"label",11),n.kc(17,"Image Url"),n.Lb(),n.Mb(18,"input",12),n.Ub("ngModelChange",(function(t){return e.model.img=t})),n.Lb(),n.Mb(19,"label"),n.kc(20,"Social Media"),n.Lb(),n.Mb(21,"input",13),n.Ub("ngModelChange",(function(t){return e.model.url=t})),n.Lb(),n.Kb(22,"br"),n.Mb(23,"label",14),n.kc(24,"User (Read Only)"),n.Lb(),n.Kb(25,"input",15),n.Mb(26,"div",16),n.Kb(27,"input",17),n.Kb(28,"input",18),n.Lb(),n.Lb(),n.Mb(29,"div"),n.Mb(30,"div",19),n.Kb(31,"img",20),n.Lb(),n.Lb(),n.Lb(),n.Lb()}2&t&&(n.zb(6),n.Xb("ngModel",e.model.retailer),n.zb(3),n.Xb("ngModel",e.model.maker),n.zb(3),n.Xb("ngModel",e.model.title),n.zb(3),n.Xb("ngModel",e.model.description),n.zb(3),n.Xb("ngModel",e.model.img),n.zb(3),n.Xb("ngModel",e.model.url),n.zb(4),n.Xb("value",e.model.user),n.zb(5),n.gc(e.backgroundImage),n.zb(1),n.Xb("src",e.model.img,n.dc))},directives:[c.h,c.d,c.e,c.a,c.g,c.c,c.f],styles:[".form-buttons[_ngcontent-%COMP%], input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:textarea{width:100%}.form-buttons[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%]{border:1px transparent!important;width:100%}.form-buttons[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%]:first-child{background:#02ffca!important;color:#004e00!important}.form-buttons[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%]:last-child{background:#fff2ab!important;color:#7e7c00!important}.form-container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;justify-content:space-around}.form-image[_ngcontent-%COMP%]{height:300px;width:300px;background-size:contain;align-self:center;justify-self:center}"]}),t})();const V=[{path:"",component:P,pathMatch:"full"},{path:"products",component:U,canActivate:[O],pathMatch:"full"},{path:"products/single-view/:id",component:T,canActivate:[O],pathMatch:"full"},{path:"profile",component:y,canActivate:[O],pathMatch:"full"},{path:"products/form/:newOrEdit",component:G,canActivate:[O],pathMatch:"full"},{path:"products/form/:newOrEdit/:id",component:G,canActivate:[O],pathMatch:"full"},{path:"logout",component:F}];let Y=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},imports:[[a.d.forRoot(V)],a.d]}),t})();const B=function(){return["/","profile"]};function Z(t,e){1&t&&(n.Mb(0,"button",1),n.kc(1," Profile "),n.Lb()),2&t&&n.Xb("routerLink",n.Yb(1,B))}const tt=function(){return["/","products"]};function et(t,e){1&t&&(n.Mb(0,"button",1),n.kc(1," Products "),n.Lb()),2&t&&n.Xb("routerLink",n.Yb(1,tt))}function it(t,e){if(1&t){const t=n.Nb();n.Mb(0,"button",4),n.Ub("click",(function(){return n.cc(t),n.Wb().auth.login()})),n.kc(1," Log In "),n.Lb()}}function nt(t,e){if(1&t){const t=n.Nb();n.Mb(0,"button",4),n.Ub("click",(function(){return n.cc(t),n.Wb().auth.logout()})),n.kc(1," Log Out "),n.Lb()}}const rt=function(){return["/"]};let ot=(()=>{class t{constructor(t){this.auth=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(_))},t.\u0275cmp=n.Db({type:t,selectors:[["app-nav-bar"]],decls:11,vars:6,consts:[[1,"nav-controls"],[3,"routerLink"],[3,"routerLink",4,"ngIf"],["class","button-primary",3,"click",4,"ngIf"],[1,"button-primary",3,"click"]],template:function(t,e){1&t&&(n.Mb(0,"header"),n.Mb(1,"div",0),n.Mb(2,"div"),n.Mb(3,"button",1),n.kc(4,"home"),n.Lb(),n.ic(5,Z,2,2,"button",2),n.ic(6,et,2,2,"button",2),n.Lb(),n.Mb(7,"div"),n.ic(8,it,2,0,"button",3),n.ic(9,nt,2,0,"button",3),n.Lb(),n.Lb(),n.Kb(10,"hr"),n.Lb()),2&t&&(n.zb(3),n.Xb("routerLink",n.Yb(5,rt)),n.zb(2),n.Xb("ngIf",e.auth.loggedIn),n.zb(1),n.Xb("ngIf",e.auth.loggedIn),n.zb(2),n.Xb("ngIf",!e.auth.loggedIn),n.zb(1),n.Xb("ngIf",e.auth.loggedIn))},directives:[a.c,k.i],styles:["header[_ngcontent-%COMP%]   .nav-controls[_ngcontent-%COMP%]{display:flex;padding:1rem;justify-content:space-between}header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:0}"]}),t})();function st(t,e){1&t&&(n.Mb(0,"div",6),n.Kb(1,"img",7),n.Lb())}let ct=(()=>{class t{constructor(t,e){this.auth=t,this._router=e,this.showLoading=!0,this.title="products-app",console.log("auth: ",t),this.auth.isAuthenticated$.subscribe(t=>this.showLoading=!1),this.urlHeadingMap={"/":"Home","/profile":"Profile","/logout":"Logged Out","/products":"Products","/products/single-view/[sS]{ 1,}":"Product View"}}ngOnInit(){this._routeSubscription=this._router.events.subscribe(t=>{this.title=this.urlHeadingMap[this._router.url]})}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(_),n.Jb(a.b))},t.\u0275cmp=n.Db({type:t,selectors:[["app-root"]],decls:13,vars:2,consts:[[1,"container","position-relative"],["id","title"],["class","w-100 position-absolute overlay text-center",4,"ngIf"],[1,""],[1,"p-2"],[1,"text-center"],[1,"w-100","position-absolute","overlay","text-center"],["src","../assets/loading.gif","alt","loading-img",1,"img-fluid"]],template:function(t,e){1&t&&(n.Mb(0,"nav"),n.Kb(1,"app-nav-bar"),n.Lb(),n.Mb(2,"main",0),n.Mb(3,"h1",1),n.kc(4),n.Lb(),n.Kb(5,"hr"),n.Kb(6,"router-outlet"),n.ic(7,st,2,0,"div",2),n.Lb(),n.Mb(8,"footer",3),n.Kb(9,"hr"),n.Mb(10,"div",4),n.Mb(11,"div",5),n.kc(12,"Json Api Demo Assignment"),n.Lb(),n.Lb(),n.Lb()),2&t&&(n.zb(4),n.lc(e.title),n.zb(3),n.Xb("ngIf",e.showLoading))},directives:[ot,a.e,k.i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;flex:1}main[_ngcontent-%COMP%]{flex:1!important}footer[_ngcontent-%COMP%]{width:100vw;bottom:0}.overlay[_ngcontent-%COMP%]{top:0;left:0;bottom:0;right:0;background:#fff;z-index:100}"]}),t})();var at=i("5+tZ");let lt=(()=>{class t{constructor(t){this.auth=t}intercept(t,e){return this.auth.getTokenSilently$().pipe(Object(at.a)(i=>{const n=t.clone({setHeaders:{Authorization:`Bearer ${i}`}});return e.handle(n)}),Object(f.a)(t=>Object(b.a)(t)))}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(_))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),dt=(()=>{class t{}return t.\u0275mod=n.Hb({type:t,bootstrap:[ct]}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},providers:[{provide:D.a,useClass:lt,multi:!0}],imports:[[s.a,Y,D.c,c.b]]}),t})();o.production&&Object(n.R)(),s.b().bootstrapModule(dt).catch(t=>console.error(t))},zn8P:function(t,e){function i(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id="zn8P"}},[[0,0,5]]]);