(this["webpackJsonppractice-ui"]=this["webpackJsonppractice-ui"]||[]).push([[0],[,function(e,t,a){e.exports={Topbar:"App_Topbar__3Di13",container:"App_container__3HVDf",right:"App_right__1ve0r",left:"App_left__VJlFd",date:"App_date__HoQ3h",Heart:"App_Heart__2LkXK",beat:"App_beat__aKbMG",colors:"App_colors__2b-iX",examples:"App_examples__2Rzv2",Selectedexample:"App_Selectedexample__1ZB-R",features:"App_features__2qOZj",Selectedfeature:"App_Selectedfeature__2arUQ",buy:"App_buy__3qsJs"}},,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=(a(13),a(4)),c=a(5),s=a(7),u=a(6),m=(a(14),a(15),a(1)),p=a.n(m),d={title:"FitBit 19 - The Smartest Watch",description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",colorOptions:[{styleName:"Black Strap",imageUrl:"https://imgur.com/iOeUBV7.png"},{styleName:"Red Strap",imageUrl:"https://imgur.com/PTgQlim.png"},{styleName:"Blue Strap",imageUrl:"https://imgur.com/Mplj1YR.png"},{styleName:"Purple Strap",imageUrl:"https://imgur.com/xSIK4M8.png"}],featureList:["Time","Heart Rate"]};Object.freeze(d);var h=d,g=function(e){var t=(new Date).getHours()>9?(new Date).getHours():"0"+(new Date).getHours(),a=(new Date).getMinutes()>9?(new Date).getMinutes():"0"+(new Date).getMinutes();return r.a.createElement("div",null,r.a.createElement("img",{src:e.productPreviewImage,alt:"Band"}),e.ShowHeartbeat?r.a.createElement("div",{className:p.a.Heart},r.a.createElement("i",{className:"fas fa-heartbeat"}),r.a.createElement("p",null,"78")):r.a.createElement("div",{className:p.a.date},"".concat(t,":").concat(a)))},f=function(e){var t=e.data.colorOptions.map((function(t,a){var n=[p.a.examples];return a===e.position&&n.push(p.a.Selectedexample),r.a.createElement("img",{key:a,className:n.join(" "),src:t.imageUrl,alt:t.styleName,onClick:function(){return e.onClickPreviewChange(a)}})})),a=e.data.featureList.map((function(t,a){var n=[p.a.features];return a===e.feautrePos&&n.push(p.a.Selectedfeature),r.a.createElement("button",{key:a,className:n.join(" "),onClick:function(){return e.onClickFeatureChange(a)}},t)}));return r.a.createElement("div",null,r.a.createElement("h1",null,e.data.title),r.a.createElement("p",null,e.data.description),r.a.createElement("h3",{className:p.a.color},"Select Color"),r.a.createElement("div",null,t),r.a.createElement("h3",{className:p.a.color},"Features"),r.a.createElement("div",null,a),r.a.createElement("button",{className:p.a.buy,onClick:function(){return alert("Item Purchased")}},"Buy Now"))},_=function(){return r.a.createElement("header",{className:p.a.Topbar},r.a.createElement("nav",null,r.a.createElement("img",{src:"https://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"Amazon"})))},v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={productData:h,position:0,feautrePos:0,showHeartbeat:!1},e.onClickPreviewChange=function(t){e.setState({position:t})},e.onClickFeatureChange=function(t){var a=!1;1===t&&(a=!0),e.setState({feautrePos:t,showHeartbeat:a})},e}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.position!==this.state.position}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",{className:p.a.container},r.a.createElement("div",{className:p.a.left},r.a.createElement(g,{ShowHeartbeat:this.state.showHeartbeat,productPreviewImage:this.state.productData.colorOptions[this.state.position].imageUrl})),r.a.createElement("div",{className:p.a.right},r.a.createElement(f,{feautrePos:this.state.feautrePos,onClickFeatureChange:this.onClickFeatureChange,data:this.state.productData,onClickPreviewChange:this.onClickPreviewChange,position:this.state.position}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d9a1d30d.chunk.js.map