(this["webpackJsonpvk-photos"]=this["webpackJsonpvk-photos"]||[]).push([[0],{23:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=n(8),s=n(7),l=n(6),u=[],p=!1;function h(e,t){var n=[];return e.forEach((function(e){new Date(1e3*e.date).getFullYear()===t&&n.push(e)})),n.sort((function(e,t){return t.likes.count-e.likes.count})),n}function m(e){return function(t){(t({type:"GET_PHOTOS_REQUEST",payload:e}),p)?t({type:"GET_PHOTOS_SUCCESS",payload:h(u,e)}):function e(t,n,r,a){VK.Api.call("photos.getAll",{extended:1,count:n,offset:t,v:"5.80"},(function(o){try{if(u=u.concat(o.response.items),t<=o.response.count)e(t+=200,n,r,a);else{var c=h(u,r);p=!0,a({type:"GET_PHOTOS_SUCCESS",payload:c})}}catch(i){a({type:"GET_PHOTOS_FAILURE",error:!0,payload:new Error(i)})}}))}(0,200,e,t)}}var f=function(){return(new Date).getFullYear()},d={year:f(),photos:[],isFetching:!1,error:""};var g={name:"",error:"",isFetching:!1};var E=Object(s.c)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PHOTOS_REQUEST":return Object(l.a)({},e,{year:t.payload,isFetching:!0,error:""});case"GET_PHOTOS_SUCCESS":return Object(l.a)({},e,{photos:t.payload,isFetching:!1,error:""});case"GET_PHOTOS_FAILURE":return Object(l.a)({},e,{error:t.payload.message,isFetching:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return Object(l.a)({},e,{isFetching:!0,error:""});case"LOGIN_SUCCESS":return Object(l.a)({},e,{isFetching:!1,name:t.payload});case"LOGIN_FAILURE":return Object(l.a)({},e,{isFetching:!1,error:t.payload.message});default:return e}}}),O=n(20),v=n.n(O),y=n(21),b=Object(s.d)(E,Object(s.a)(y.a,v.a)),j=n(1),S=n(2),k=n(4),T=n(3),C=n(5),F=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).renderTemplate=function(){var e=n.props,t=e.name,r=e.error,o=e.isFetching;return r?a.a.createElement("p",null,"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"):o?a.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."):t?a.a.createElement("p",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",t,"!"):a.a.createElement("button",{className:"btn",onClick:n.props.handleLogin},"\u0412\u043e\u0439\u0442\u0438")},n}return Object(C.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"ib user"},this.renderTemplate())}}]),t}(a.a.Component),_=Object(i.b)((function(e){return{user:e.user}}),(function(e){return{handleLogin:function(t){return e((function(e){e({type:"LOGIN_REQUEST"}),VK.Auth.login((function(t){if(t.session){var n=t.session.user.first_name;e({type:"LOGIN_SUCCESS",payload:n})}else e({type:"LOGIN_FAILURE",error:!0,payload:new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")})}),4)}))},getPhotos:function(t){return e(m(t))}}}))((function(e){var t=e.handleLogin,n=e.getPhotos,r=e.user;return t=function(){t((function(){var e=f();n(e)}))},a.a.createElement(F,{name:r.name,error:r.error,isFetching:r.isFetching,handleLogin:t})})),w=n(22),I=n.n(w),L=function(e){var t=e.photos,n=e.openModal;return t.map((function(e){return a.a.createElement("div",{key:e.id,className:"photo"},a.a.createElement("p",null,a.a.createElement("img",{src:e.sizes[0].url,alt:"thumbnail vk",onClick:function(){return n(e.sizes[4].url)}})),a.a.createElement("p",null,e.likes.count," \u2764"))}))},U=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).state={isLoading:!1},n.loadImage=function(e){n.setState({isLoading:!0});var t=new Image;t.onload=function(){n.setState({isLoading:!1})},t.src=e},n}return Object(C.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.loadImage(this.props.url)}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.url;return e?a.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."):a.a.createElement("img",{src:t,alt:"big vk"})}}]),t}(a.a.Component),A={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0px"},overlay:{backgroundColor:"rgba(0,0,0,0.7)"}},G=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).state={modalIsOpen:!1,activeUrl:""},n.openModal=function(e){n.setState({modalIsOpen:!0,activeUrl:e})},n.closeModal=function(){n.setState({modalIsOpen:!1,activeUrl:""})},n}return Object(C.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.photos,t=this.state,n=t.modalIsOpen,r=t.activeUrl;return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{photos:e,openModal:this.openModal}),a.a.createElement(I.a,{isOpen:n,ariaHideApp:!1,style:A,onRequestClose:this.closeModal},a.a.createElement(U,{url:r})))}}]),t}(a.a.Component),N=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).onBtnClick=function(e){var t=+e.currentTarget.innerText;n.props.getPhotos(t)},n.renderButtons=function(){return n.props.years.map((function(e,t){return a.a.createElement("button",{key:t,className:"btn",onClick:n.onBtnClick},e)}))},n.renderTemplate=function(){var e=n.props,t=e.photos,r=e.isFetching;return e.error?a.a.createElement("p",{className:"error"},"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"):r?a.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):a.a.createElement(G,{photos:t})},n}return Object(C.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.year,n=e.photos;return a.a.createElement("div",{className:"ib page"},a.a.createElement("p",null,this.renderButtons()),a.a.createElement("h3",null,t," \u0433\u043e\u0434 [",n.length,"]"),this.renderTemplate())}}]),t}(a.a.Component),P=Object(i.b)((function(e){return{page:e.page}}),(function(e){return{getPhotos:function(t){return e(m(t))}}}))((function(e){var t=e.page,n=e.getPhotos;return a.a.createElement(N,{photos:t.photos,year:t.year,isFetching:t.isFetching,error:t.error,getPhotos:n,years:Array.from({length:5},(function(e,t){return f()-t}))})})),R=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(P,null),a.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(40);c.a.render(a.a.createElement(i.a,{store:b},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ed84bce0.chunk.js.map