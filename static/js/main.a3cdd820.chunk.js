(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/greenTshirt.4a682e1d.jpg"},17:function(e,a,t){e.exports=t.p+"static/media/MobacoTshirt.3ca07785.jpg"},18:function(e,a,t){e.exports=t.p+"static/media/TerranovaTshirt.4ba0002d.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/TerranovaTshirt2.39165b85.jpg"},29:function(e,a,t){e.exports=t(41)},34:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(14),o=t.n(c),s=(t(34),t(10)),l=function(){return function(e){console.log("Getting all basket numbers"),e({type:"GET_NUMBERS_BASKET"})}},i=t(7);var m=Object(s.b)((function(e){return{basketProps:e.basketState}}),{getNumbers:l})((function(e){return console.log(e),Object(r.useEffect)((function(){l()}),[]),n.a.createElement("header",null,n.a.createElement("div",{className:"overlay"}),n.a.createElement("nav",null,n.a.createElement("h2",null,"Shop"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(i.b,{to:"/React_Shopping_Cart/",className:"button3"},"Home")),n.a.createElement("li",{className:"cart"},n.a.createElement(i.b,{to:"/React_Shopping_Cart/cart/"},n.a.createElement("ion-icon",{name:"basket-outline"})," Cart ",n.a.createElement("span",null,e.basketProps.basketNumbers))))))})),u=t(16),d=t.n(u),p=t(17),b=t.n(p),E=t(18),h=t.n(E),T=t(19),g=t.n(T),N=Object(s.b)(null,{addBasket:function(e){return function(a){console.log("Adding to basket"),console.log("Product: ",e),a({type:"ADD_PRODUCT_BASKET",payload:e})}}})((function(e){return console.log(e),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{className:"imagleFile",src:d.a,alt:"Green T-Shirt"}),n.a.createElement("h3",null,"Grey T-shirt"),n.a.createElement("h3",null,"$15.00"),n.a.createElement(i.b,{onClick:function(){return e.addBasket("greenTshirt")},className:"addToCart cart1",href:"#"},"Add to Cart")),n.a.createElement("div",{className:"image"},n.a.createElement("img",{className:"imagleFile",src:b.a,alt:"Mobaco T-shirt"}),n.a.createElement("h3",null,"Mobaco T-shirt"),n.a.createElement("h3",null,"$10.00"),n.a.createElement(i.b,{onClick:function(){return e.addBasket("mobacoTshirt")},className:"addToCart cart2",href:"#"},"Add to Cart")),n.a.createElement("div",{className:"image"},n.a.createElement("img",{className:"imagleFile",src:h.a,alt:"Terranova black T-shirt"}),n.a.createElement("h3",null,"Terranova black T-shirt"),n.a.createElement("h3",null,"$25.00"),n.a.createElement(i.b,{onClick:function(){return e.addBasket("terranovablackTshirt")},className:"addToCart cart3",href:"#"},"Add to Cart")),n.a.createElement("div",{className:"image"},n.a.createElement("img",{className:"imagleFile",src:g.a,alt:"Terranova green T-shirt"}),n.a.createElement("h3",null,"Terranova green T-shirt"),n.a.createElement("h3",null,"$30.00"),n.a.createElement(i.b,{onClick:function(){return e.addBasket("TerranovagreenTshirt")},className:"addToCart cart4",href:"#"},"Add to Cart")))}));var C=Object(s.b)((function(e){return{basketProps:e.basketState}}),{productQuantity:function(e,a){return function(t){console.log("inside product quantity"),console.log("the acitons is",e),console.log("the product name is",a),t({type:"increase"===e?"INCREASE_QUANTITY":"DECREASE_QUANTITY",payload:a})}},clearProduct:function(e){return function(a){console.log("inside clear product"),console.log("product name",e),a({type:"CLEAR_PRODUCT",payload:e})}}})((function(e){var a=e.basketProps,t=e.productQuantity,c=e.clearProduct;console.log(a);var o=[];Object.keys(a.products).forEach((function(e){console.log(e),console.log(a.products[e].inCart),a.products[e].inCart&&o.push(a.products[e]),console.log(o)}));var s=function(e){return"greenTshirt"===e.tagName?d.a:"mobacoTshirt"===e.tagName?b.a:"terranovablackTshirt"===e.tagName?h.a:"TerranovagreenTshirt"===e.tagName?g.a:void 0};return o=o.map((function(e,a){return console.log("My Product is"),console.log(e),n.a.createElement(r.Fragment,{key:a},n.a.createElement("div",{className:"product"}," ",n.a.createElement("ion-icon",{onClick:function(){return c(e.tagName)},name:"close-circle"})," ",n.a.createElement("img",{src:s(e)}),n.a.createElement("span",{className:"price sm-hide"},e.name)),n.a.createElement("div",{className:"quantity"},n.a.createElement("ion-icon",{onClick:function(){return t("decrease",e.tagName)},className:"decrease",name:"arrow-back-circle-outline"}),n.a.createElement("span",null,e.numbers),n.a.createElement("ion-icon",{onClick:function(){return t("increase",e.tagName)},className:"increase",name:"arrow-forward-circle-outline"})),n.a.createElement("div",{className:"total"},"$",e.numbers*e.price,",00"))})),n.a.createElement("div",{className:"container-products"},n.a.createElement("div",{className:"product-header"},n.a.createElement("h5",{className:"product-title"},"PRODUCT"),n.a.createElement("h5",{className:"quantity"},"QUANTITY"),n.a.createElement("h5",{className:"price sm-hide "},"PRICE"),n.a.createElement("h5",{className:"total"},"TOTAL")),n.a.createElement("div",{className:"products"},o),n.a.createElement("div",{className:"basketTotalContainer"},n.a.createElement("ion-icon",{name:"arrow-back-outline"})," ",n.a.createElement(i.b,{to:"/React_Shopping_Cart/"}," ",n.a.createElement("h4",{className:"backToShopping"},"Continue Shopping")," "),n.a.createElement("h4",{className:"basketTotalTitle"},"Basket Total"),n.a.createElement("h4",{className:"basketTotal"},a.cartCost,",00")))})),k=(t(40),t(9)),v=t(27),f=t(28),O=t(11),j=t(2),y={basketNumbers:0,cartCost:0,products:{greenTshirt:{name:"Green T-Shirt",tagName:"greenTshirt",price:15,numbers:0,inCart:!1},mobacoTshirt:{name:"Mobaco T-shirt",tagName:"mobacoTshirt",price:10,numbers:0,inCart:!1},terranovablackTshirt:{name:"Terranova black T-shirt",tagName:"terranovablackTshirt",price:25,numbers:0,inCart:!1},TerranovagreenTshirt:{name:"Terranova green T-shirt",tagName:"TerranovagreenTshirt",price:30,numbers:0,inCart:!1}}},S=Object(k.combineReducers)({basketState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0,t="";switch(a.type){case"ADD_PRODUCT_BASKET":return(t=Object(j.a)({},e.products[a.payload])).numbers+=1,t.inCart=!0,console.log(t),Object(j.a)(Object(j.a)({},e),{},{basketNumbers:e.basketNumbers+1,cartCost:e.cartCost+e.products[a.payload].price,products:Object(j.a)(Object(j.a)({},e.products),{},Object(O.a)({},a.payload,t))});case"GET_NUMBERS_BASKET":return Object(j.a)({},e);case"INCREASE_QUANTITY":return(t=Object(j.a)({},e.products[a.payload])).numbers+=1,Object(j.a)(Object(j.a)({},e),{},{basketNumbers:e.basketNumbers+1,cartCost:e.cartCost+e.products[a.payload].price,products:Object(j.a)(Object(j.a)({},e.products),{},Object(O.a)({},a.payload,t))});case"DECREASE_QUANTITY":var r=0,n=0;return 0===(t=Object(j.a)({},e.products[a.payload])).numbers?(t.numbers=0,r=e.cartCost,n=e.basketNumbers):(t.numbers-=1,r=e.cartCost-e.products[a.payload].price,n=e.basketNumbers-1),Object(j.a)(Object(j.a)({},e),{},{basketNumbers:n,cartCost:r,products:Object(j.a)(Object(j.a)({},e.products),{},Object(O.a)({},a.payload,t))});case"CLEAR_PRODUCT":var c=(t=Object(j.a)({},e.products[a.payload])).numbers;return t.numbers=0,t.inCart=!1,Object(j.a)(Object(j.a)({},e),{},{basketNumbers:e.basketNumbers-c,cartCost:e.cartCost-c*t.price,products:Object(j.a)(Object(j.a)({},e.products),{},Object(O.a)({},a.payload,t))});default:return e}}}),A=[f.a],_=Object(k.createStore)(S,{},Object(v.composeWithDevTools)(k.applyMiddleware.apply(void 0,A))),R=t(3);var w=function(){return n.a.createElement(s.a,{store:_},n.a.createElement("div",{className:"App"},n.a.createElement(i.a,null,n.a.createElement(m,null),n.a.createElement(R.c,null,n.a.createElement(R.a,{exact:!0,path:"/React_Shopping_Cart/",component:N}),n.a.createElement(R.a,{path:"/React_Shopping_Cart/cart/",component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a3cdd820.chunk.js.map