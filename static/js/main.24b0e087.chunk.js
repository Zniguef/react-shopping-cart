(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{25:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var r=s(1),i=s.n(r),a=s(13),c=s.n(a),n=(s(25),s(14)),o=s(2),l=s(3),d=s(5),u=s(4),h=s(8);function j(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "}var p=s(7),b=s.n(p),m=s(0),O=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).handleInput=function(e){r.setState(Object(h.a)({},e.target.name,e.target.value))},r.createOrder=function(e){e.preventDefault();var t={name:r.state.name,email:r.state.email,address:r.state.address,cartItems:r.props.cartItems};r.props.createOrder(t)},r.state={name:"",email:"",address:"",showChekout:!1},r}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return Object(m.jsxs)("div",{children:[0===t.length?Object(m.jsx)("div",{className:"cart cart-header",children:"Cart is empty"}):Object(m.jsxs)("div",{className:"cart cart-header",children:["You have ",t.length," in the cart"," "]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"cart",children:Object(m.jsx)(b.a,{left:!0,cascade:!0,children:Object(m.jsx)("ul",{className:"cart-items",children:t.map((function(t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t.image,alt:t.title})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:t.title}),Object(m.jsxs)("div",{className:"right",children:[j(t.price)," x ",t.count," ",Object(m.jsx)("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)},children:"Remove"})]})]})]},t._id)}))})})}),0!==t.length&&Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"cart",children:Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{children:["Total:"," ",j(t.reduce((function(e,t){return e+t.price*t.count}),0))]}),Object(m.jsx)("button",{onClick:function(){e.setState({showChekout:!0})},className:"button primary",children:"Proceed"})]})}),this.state.showChekout&&Object(m.jsx)(b.a,{right:!0,cascade:!0,children:Object(m.jsx)("div",{className:"cart",children:Object(m.jsx)("form",{onSubmit:this.createOrder,children:Object(m.jsxs)("ul",{className:"form-container",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{name:"name",type:"text",required:!0,onChange:this.handleInput})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})]}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"button primary",type:"submit",children:"Checkout"})})]})})})})]})]})]})}}]),s}(r.Component),x=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsxs)("div",{className:"filter-result",children:[this.props.count," Products"]}),Object(m.jsxs)("div",{className:"filter-sort",children:["Order"," ",Object(m.jsxs)("select",{value:this.props.sort,onChange:this.props.sortProducts,children:[Object(m.jsx)("option",{children:"Latest"}),Object(m.jsx)("option",{value:"lowest",children:"Lowest"}),Object(m.jsx)("option",{value:"highest",children:"Highest"})]})]}),Object(m.jsxs)("div",{className:"filter-size",children:["Filter"," ",Object(m.jsxs)("select",{value:this.props.size,onChange:this.props.filterProducts,children:[Object(m.jsx)("option",{value:"",children:"ALL"}),Object(m.jsx)("option",{value:"XS",children:"XS"}),Object(m.jsx)("option",{value:"S",children:"S"}),Object(m.jsx)("option",{value:"M",children:"M"}),Object(m.jsx)("option",{value:"L",children:"L"}),Object(m.jsx)("option",{value:"XL",children:"XL"}),Object(m.jsx)("option",{value:"XXL",children:"XXL"})]})]})]})}}]),s}(r.Component),v=s(19),f=s.n(v),y=s(20),g=s.n(y),S=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).openModel=function(e){r.setState({product:e})},r.closeModal=function(){r.setState({product:null})},r.state={product:null},r}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.product;return Object(m.jsxs)("div",{children:[Object(m.jsx)(b.a,{bottom:!0,cascade:!0,children:Object(m.jsx)("ul",{className:"products",children:this.props.products.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("a",{href:"#"+t._id,onClick:function(){return e.openModel(t)},children:[Object(m.jsx)("img",{src:t.image,alt:t.title}),Object(m.jsx)("p",{children:t.title})]}),Object(m.jsxs)("div",{className:"product-price",children:[Object(m.jsx)("div",{children:j(t.price)}),Object(m.jsx)("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary",children:"Add To Cart"})]})]})},t._id)}))})}),t&&Object(m.jsx)(f.a,{isOpen:!0,onRequestClose:this.closeModal,children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)("button",{className:"close-modal",onClick:this.closeModal,children:"x"}),Object(m.jsxs)("div",{className:"product-details",children:[Object(m.jsx)("img",{src:t.image,alt:t.title}),Object(m.jsxs)("div",{className:"product-detail-description",children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:t.title})}),Object(m.jsx)("p",{children:t.description}),Object(m.jsxs)("p",{children:["Available Sizes :"," ",t.availableSizes.map((function(e){return Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("button",{className:"button",children:e})]})}))]}),Object(m.jsxs)("div",{className:"product-price",children:[Object(m.jsx)("div",{children:j(t.price)}),Object(m.jsx)("button",{className:"button primary",onClick:function(){e.props.addToCart(t),e.closeModal()},children:"Add To Cart"})]})]})]})]})})]})}}]),s}(r.Component),C=s(9),N=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).createOrder=function(e){alert("Need to save order for "+e.name)},e.removeFromCart=function(t){var s=e.state.cartItems.slice();e.setState({cartItems:s.filter((function(e){return e._id!==t._id}))}),localStorage.setItem("cartItems",JSON.stringify(s.filter((function(e){return e._id!==t._id}))))},e.addToCart=function(t){var s=e.state.cartItems.slice(),r=!1;s.forEach((function(e){e._id===t._id&&(e.count++,r=!0)})),r||s.push(Object(n.a)(Object(n.a)({},t),{},{count:1})),e.setState({cartItems:s}),localStorage.setItem("cartItems",JSON.stringify(s))},e.sortProducts=function(t){var s=t.target.value;e.setState((function(t){return{sort:s,products:e.state.products.slice().sort((function(e,t){return"lowest"===s?e.price>t.price?1:-1:"highest"===s?e.price<t.price?1:-1:e._id<t._id?1:-1}))}}))},e.filterProducts=function(t){""===t.target.value?e.setState({size:t.target.value,products:C.products}):e.setState({size:t.target.value,products:C.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))})},e.state={products:C.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",sort:""},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsx)("header",{children:Object(m.jsx)("a",{href:"/",children:"React Shopping Cart"})}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(x,{count:this.state.products.length,size:this.state.size,sort:this.state.sort,filterProducts:this.filterProducts,sortProducts:this.sortProducts}),Object(m.jsx)(S,{products:this.state.products,addToCart:this.addToCart})]}),Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsx)(O,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart,createOrder:this.createOrder})})]})}),Object(m.jsx)("footer",{children:"All right riserved."})]})}}]),s}(i.a.Component);c.a.render(Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"products":[{"_id":"dress1","image":"https://images.asos-media.com/products/asos-design-midi-sundress-with-shirring-detail-in-ditsy-floral-print/20049737-1-floral?$n_640w$&wid=513&fit=constrain","title":"Midi sundress with shirring detail","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL","XXL"],"price":29.9},{"_id":"dress2","image":"https://cdn.shopify.com/s/files/1/1042/2564/products/D1462641_800x.jpg?v=1628846309","title":"Midi sundress with ruched front","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":18.9},{"_id":"dress3","image":"https://cdn.shopify.com/s/files/1/1042/2564/products/D5073531_800x1200.jpg?v=1615916728","title":"Midi dress in pink ditsy floral","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":14.9},{"_id":"dress4","image":"https://cdn.shopify.com/s/files/1/1042/2564/products/D146264_NAVY_2_800x.jpg?v=1628863850","title":"cami maxi dress in polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL"],"price":25.9},{"_id":"dress5","image":"https://cdn.shopify.com/s/files/1/1042/2564/products/D507342_NAVY_1_800x1200.jpg?v=1616684633","title":"Frill mini dress in yellow polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL"],"price":10.9},{"_id":"dress6","image":"https://cdn.shopify.com/s/files/1/1042/2564/products/D158987_BLACK_1_800x1200.jpg?v=1624471075","title":"Midi tea dress in blue and red spot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL","XXL"],"price":49.9}]}')}},[[39,1,2]]]);
//# sourceMappingURL=main.24b0e087.chunk.js.map