(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{25:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var s=r(1),i=r.n(s),a=r(13),c=r.n(a),n=(r(25),r(14)),o=r(2),l=r(3),d=r(5),u=r(4),j=r(8);function h(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "}var b=r(7),p=r.n(b),m=r(0),O=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).handleInput=function(e){s.setState(Object(j.a)({},e.target.name,e.target.value))},s.createOrder=function(e){e.preventDefault();var t={name:s.state.name,email:s.state.email,address:s.state.address,cartItems:s.props.cartItems};s.props.createOrder(t)},s.state={name:"",email:"",address:"",showChekout:!1},s}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return Object(m.jsxs)("div",{children:[0===t.length?Object(m.jsx)("div",{className:"cart cart-header",children:"Cart is empty"}):Object(m.jsxs)("div",{className:"cart cart-header",children:["You have ",t.length," in the cart "," "]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"cart",children:Object(m.jsx)(p.a,{left:!0,cascade:!0,children:Object(m.jsx)("ul",{className:"cart-items",children:t.map((function(t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t.image,alt:t.title})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:t.title}),Object(m.jsxs)("div",{className:"right",children:[h(t.price)," x ",t.count," "," ",Object(m.jsx)("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)},children:"Remove"})]})]})]},t._id)}))})})}),0!==t.length&&Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"cart",children:Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("div",{children:["Total: "," ",h(t.reduce((function(e,t){return e+t.price*t.count}),0))]}),Object(m.jsx)("button",{onClick:function(){e.setState({showChekout:!0})},className:"button primary",children:"Proceed"})]})}),this.state.showChekout&&Object(m.jsx)(p.a,{right:!0,cascade:!0,children:Object(m.jsx)("div",{className:"cart",children:Object(m.jsx)("form",{onSubmit:this.createOrder,children:Object(m.jsxs)("ul",{className:"form-container",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{name:"name",type:"text",required:!0,onChange:this.handleInput})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})]}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"button primary",type:"submit",children:"Checkout"})})]})})})})]})]})]})}}]),r}(s.Component),x=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsxs)("div",{className:"filter-result",children:[this.props.count," Products"]}),Object(m.jsxs)("div",{className:"filter-sort",children:["Order "," ",Object(m.jsxs)("select",{value:this.props.sort,onChange:this.props.sortProducts,children:[Object(m.jsx)("option",{children:"Latest"}),Object(m.jsx)("option",{value:"lowest",children:"Lowest"}),Object(m.jsx)("option",{value:"highest",children:"Highest"})]})]}),Object(m.jsxs)("div",{className:"filter-size",children:["Filter "," ",Object(m.jsxs)("select",{value:this.props.size,onChange:this.props.filterProducts,children:[Object(m.jsx)("option",{value:"",children:"ALL"}),Object(m.jsx)("option",{value:"XS",children:"XS"}),Object(m.jsx)("option",{value:"S",children:"S"}),Object(m.jsx)("option",{value:"M",children:"M"}),Object(m.jsx)("option",{value:"L",children:"L"}),Object(m.jsx)("option",{value:"XL",children:"XL"}),Object(m.jsx)("option",{value:"XXL",children:"XXL"})]})]})]})}}]),r}(s.Component),v=r(19),f=r.n(v),y=r(20),g=r.n(y),S=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).openModel=function(e){s.setState({product:e})},s.closeModal=function(){s.setState({product:null})},s.state={product:null},s}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.state.product;return Object(m.jsxs)("div",{children:[Object(m.jsx)(p.a,{bottom:!0,cascade:!0,children:Object(m.jsx)("ul",{className:"products",children:this.props.products.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("a",{href:"#"+t._id,onClick:function(){return e.openModel(t)},children:[Object(m.jsx)("img",{src:t.image,alt:t.title}),Object(m.jsx)("p",{children:t.title})]}),Object(m.jsxs)("div",{className:"product-price",children:[Object(m.jsx)("div",{children:h(t.price)}),Object(m.jsx)("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary",children:"Add To Cart"})]})]})},t._id)}))})}),t&&Object(m.jsx)(f.a,{isOpen:!0,onRequestClose:this.closeModal,children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)("button",{className:"close-modal",onClick:this.closeModal,children:"x"}),Object(m.jsxs)("div",{className:"product-details",children:[Object(m.jsx)("img",{src:t.image,alt:t.title}),Object(m.jsxs)("div",{className:"product-detail-description",children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:t.title})}),Object(m.jsx)("p",{children:t.description}),Object(m.jsxs)("p",{children:["Available Sizes : "," ",t.availableSizes.map((function(e){return Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("button",{className:"button",children:e})]})}))]}),Object(m.jsxs)("div",{className:"product-price",children:[Object(m.jsx)("div",{children:h(t.price)}),Object(m.jsx)("button",{className:"button primary",onClick:function(){e.props.addToCart(t),e.closeModal()},children:"Add To Cart"})]})]})]})]})})]})}}]),r}(s.Component),C=r(9),N=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).createOrder=function(e){alert("Need to save order for "+e.name)},e.removeFromCart=function(t){var r=e.state.cartItems.slice();e.setState({cartItems:r.filter((function(e){return e._id!==t._id}))}),localStorage.setItem("cartItems",JSON.stringify(r.filter((function(e){return e._id!==t._id}))))},e.addToCart=function(t){var r=e.state.cartItems.slice(),s=!1;r.forEach((function(e){e._id===t._id&&(e.count++,s=!0)})),s||r.push(Object(n.a)(Object(n.a)({},t),{},{count:1})),e.setState({cartItems:r}),localStorage.setItem("cartItems",JSON.stringify(r))},e.sortProducts=function(t){var r=t.target.value;e.setState((function(t){return{sort:r,products:e.state.products.slice().sort((function(e,t){return"lowest"===r?e.price>t.price?1:-1:"highest"===r?e.price<t.price?1:-1:e._id<t._id?1:-1}))}}))},e.filterProducts=function(t){""===t.target.value?e.setState({size:t.target.value,products:C.products}):e.setState({size:t.target.value,products:C.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))})},e.state={products:C.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",sort:""},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsx)("header",{children:Object(m.jsx)("a",{href:"/",children:"React Shopping Cart"})}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(x,{count:this.state.products.length,size:this.state.size,sort:this.state.sort,filterProducts:this.filterProducts,sortProducts:this.sortProducts}),Object(m.jsx)(S,{products:this.state.products,addToCart:this.addToCart})]}),Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsx)(O,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart,createOrder:this.createOrder})})]})}),Object(m.jsx)("footer",{children:"All right is riserved."})]})}}]),r}(i.a.Component);c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"products":[{"_id":"dress1","image":"/images/dress1.jpg","title":"Midi sundress with shirring detail","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL","XXL"],"price":29.9},{"_id":"dress2","image":"/images/dress2.jpg","title":"Midi sundress with ruched front","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":18.9},{"_id":"dress3","image":"/images/dress3.jpg","title":"Midi dress in pink ditsy floral","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":14.9},{"_id":"dress4","image":"/images/dress4.jpg","title":"cami maxi dress in polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL"],"price":25.9},{"_id":"dress5","image":"/images/dress5.jpg","title":"Frill mini dress in yellow polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL"],"price":10.9},{"_id":"dress6","image":"/images/dress6.jpg","title":"Midi tea dress in blue and red spot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL","XXL"],"price":49.9}]}')}},[[39,1,2]]]);
//# sourceMappingURL=main.41f714af.chunk.js.map