(window.webpackJsonpchat=window.webpackJsonpchat||[]).push([[0],{11:function(e,a,t){e.exports={wrap:"Footer_wrap__2TAji",inner:"Footer_inner__l97wy",nav:"Footer_nav__YglWe",navLink:"Footer_navLink__3hU9B",copyright:"Footer_copyright__3ipED","nav-link":"Footer_nav-link__2bfI6"}},13:function(e,a,t){e.exports={inner:"Header_inner__2rzD1",wrap:"Header_wrap__323Ed",logo:"Header_logo__1On6H",chatInfo:"Header_chatInfo__1Ai6u",chatInfoNumberOf:"Header_chatInfoNumberOf__3EGpr",chatInfoLastMessage:"Header_chatInfoLastMessage__1X1R8"}},17:function(e,a,t){e.exports={wrap:"Login_wrap__1maWs",inner:"Login_inner__DuZ0e",input:"Login_input__3J7qI",btn:"Login_btn__lq-HH"}},18:function(e,a,t){e.exports={wrap:"MessageInput_wrap__1sEft",content:"MessageInput_content__1WO4E",input:"MessageInput_input__2pOzp",btn:"MessageInput_btn__17lhZ"}},2:function(e,a,t){e.exports={wrap:"Message_wrap__30hQ9",message:"Message_message__15SQI",inner:"Message_inner__hNt1P",time:"Message_time__kqhND",info:"Message_info__3pIMW",desc:"Message_desc__1kzFn",title:"Message_title__2j9Rl",body:"Message_body__3bZ-o",messageLike:"Message_messageLike__tNwUk",messageLikeWrap:"Message_messageLikeWrap__8qDgP",like:"Message_like__1GnSH",myMessage:"Message_myMessage__30dcG",myMessageWrap:"Message_myMessageWrap__6Bdh9",avatar:"Message_avatar__3lrhu",nav:"Message_nav__1aPR2",deleteBtn:"Message_deleteBtn__1i0Di",editBtn:"Message_editBtn__39mWs"}},26:function(e,a,t){e.exports={wrap:"Preloader_wrap__1sVqL",inner:"Preloader_inner__2VW6Y"}},35:function(e,a,t){e.exports=t.p+"static/media/Spinner.315ddeed.svg"},36:function(e,a,t){e.exports=t.p+"static/media/avatar.0a5e7a1f.png"},42:function(e,a,t){e.exports=t(55)},53:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(19),c=t.n(r),i=t(12),l=t(10),o=t(3),m=t(17),u=t.n(m),g=function(e){var a=e.addUserName,t=Object(n.useRef)();return s.a.createElement("div",{className:u.a.wrap},s.a.createElement("div",{className:u.a.inner},s.a.createElement(l.b,{render:function(e){var n=e.history;return s.a.createElement("input",{type:"text",className:u.a.input,onKeyUp:function(e){return 13===e.keyCode?a(t.current.value)&&n.push("/"):null},placeholder:"Please, enter your name",ref:t})}}),s.a.createElement(i.b,{to:"/",className:u.a.btn,onClick:function(){return a(t.current.value)}},"Login")))},d=t(25),_=t.n(d),p=t(31),E=function(e){return{type:"TOGGLE_IS_FETSHING",isFetching:e}},f={addUserName:function(e){return{type:"ADD_USER_NAME",userName:e}}},v=Object(l.f)(Object(o.b)(function(e){return{}},f)(g)),h=t(32),N=t(33),M=t(40),b=t(34),y=t(41),k=t(26),O=t.n(k),w=t(35),S=t.n(w),I=function(){return s.a.createElement("div",{className:O.a.wrap},s.a.createElement("div",{className:O.a.inner},s.a.createElement("img",{src:S.a,alt:"Spinner"})))},j=t(13),L=t.n(j),D=function(e){var a=e.messages;return s.a.createElement("header",{className:L.a.wrap},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:L.a.inner},s.a.createElement("div",{className:L.a.logo},"My chat"),s.a.createElement("div",{className:L.a.chatInfo},s.a.createElement("div",{className:L.a.chatInfoNumberOf},function(e){var a=new Set;if(e)return e.map(function(e){return a.add(e.user)}),a.size}(a)," users \xa0",a.length," messages"),s.a.createElement("div",{className:L.a.chatInfoLastMessage},"Last message: ",function(e){var a=e.length-1;if(e[a])return e[a].created_at}(a))))))},A=Object(o.b)(function(e){return{messages:e.messages}},{})(D),G=t(2),x=t.n(G),W=function(e){var a=e.toggleLike,t=e.likeMessages,n=e.deleteMessage,r=e.changeMessage,c=e.classWrap,i=e.classMessage,l=e.createdTime,o=e.classAvatar,m=e.avatar,u=e.name,g=e.message,d=e.classLikeWrap,_=e.id,p=e.classNav;return s.a.createElement("li",{className:c},s.a.createElement("div",{className:i},s.a.createElement("div",{className:x.a.time},l),s.a.createElement("div",{className:x.a.inner},s.a.createElement("div",{className:x.a.info},s.a.createElement("div",{className:o},s.a.createElement("img",{src:m,alt:"avatar"})),s.a.createElement("div",{className:x.a.desc},s.a.createElement("h2",{className:x.a.title},u),s.a.createElement("div",{className:x.a.body},g))),s.a.createElement("div",{className:d},s.a.createElement("div",{className:t.includes(_)?"".concat(x.a.messageLike," ").concat(x.a.like):x.a.messageLike,onClick:function(e){return a(e.target.id)},id:_},"\u2665")),s.a.createElement("nav",{className:p},s.a.createElement("div",{className:x.a.editBtn,id:_,title:"edit message",onClick:function(e){return r(e.target.id)}},"edit"),s.a.createElement("div",{id:_,onClick:function(e){return n(e.target.id)},className:x.a.deleteBtn,title:"delete message"},"\u2a2f")))))},F={toggleLike:function(e){return{type:"TOGGLE_LIKE",id:e}},deleteMessage:function(e){return{type:"DELETE_MESSAGE",id:e}},changeMessage:function(e){return{type:"CHANGE_MESSAGE",id:e}}},H=Object(o.b)(function(e){return{likeMessages:e.likeMessages}},F)(W),C=t(36),P=t.n(C),T=function(e){var a=e.messages,t=Object(n.useRef)(null);return Object(n.useEffect)(function(){t.current.scrollIntoView({behavior:"smooth"})},[a]),s.a.createElement("section",{className:"chatList"},s.a.createElement("div",{className:"content"},a?s.a.createElement("ul",{className:"messages-list"},a.map(function(a){return s.a.createElement(H,{classWrap:a.user===e.userName?"".concat(x.a.wrap," ").concat(x.a.myMessageWrap):x.a.wrap,classMessage:a.user===e.userName?"".concat(x.a.message," ").concat(x.a.myMessage):x.a.message,classLikeWrap:a.user===e.userName?"display-none":x.a.messageLikeWrap,classAvatar:a.user===e.userName?"display-none":x.a.avatar,classNav:a.user===e.userName?x.a.nav:"display-none",key:a.id,id:a.id,avatar:a.avatar?a.avatar:P.a,createdTime:a.created_at,name:a.user,message:a.message})})):null,s.a.createElement("div",{ref:t})))},B=Object(o.b)(function(e){return{messages:e.messages,newMessage:e.newMessage,userName:e.userName}},{})(T),U=t(18),R=t.n(U),Y=function(e){var a=e.addMessage,t=e.message,n=e.sendMessage,r=e.editId,c=e.saveEditedMessage,i=e.editIndex;return s.a.createElement("div",{className:R.a.wrap},s.a.createElement("div",{className:R.a.content},s.a.createElement("input",{className:R.a.input,type:"text",onChange:function(e){return a(e.target.value)},onKeyUp:function(e){return 13===e.keyCode&&r&&t?c(t,i):13===e.keyCode&&t?n(t):null},value:t,placeholder:"Type something..."}),s.a.createElement("button",{className:R.a.btn,onClick:function(){return t&&r?c(t,i):t?n(t):null}},"send")))},q={addMessage:function(e){return{type:"ADD_MESSAGE",message:e}},sendMessage:function(e){return{type:"SEND_MESSAGE",message:e}},saveEditedMessage:function(e,a){return{type:"SAVE_EDITED_MESSAGE",message:e,index:a}}},V=Object(o.b)(function(e){return{message:e.message,editId:e.editId,editIndex:e.editIndex,f:e.f}},q)(Y),z=t(11),K=t.n(z),J=function(){return s.a.createElement("footer",{className:K.a.wrap},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:K.a.inner},s.a.createElement("nav",{className:K.a.nav},s.a.createElement("a",{className:K.a.navLink,href:"#"},"Home"),s.a.createElement("a",{className:K.a.navLink,href:"#"},"About"),s.a.createElement("a",{className:K.a.navLink,href:"#"},"Contact us")),s.a.createElement("div",{className:K.a.copyright},"@ Copyright 2019"))))},Z=function(e){function a(){return Object(h.a)(this,a),Object(M.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.getMessages()}},{key:"render",value:function(){var e=this.props.isFetching,a=this.props.userName;return s.a.createElement("div",{className:"chat-wrap"},e?s.a.createElement(I,null):null,a?null:s.a.createElement(l.a,{to:"/login"}),s.a.createElement("main",{className:"main"},s.a.createElement(A,null),s.a.createElement(B,null),s.a.createElement(V,null)),s.a.createElement(J,null))}}]),a}(s.a.Component),Q={getMessages:function(){return function(){var e=Object(p.a)(_.a.mark(function e(a){var t,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(E(!0)),"https://api.dev.buki.com.ua/frontend_test",e.next=5,fetch("https://api.dev.buki.com.ua/frontend_test");case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,a({type:"ADD_MESSAGES",messages:n}),a(E(!1)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(a){return e.apply(this,arguments)}}()},toggleIsFetching:E},X=Object(l.f)(Object(o.b)(function(e){return{isFetching:e.isFetching,messages:e.messages,userName:e.userName}},Q)(Z)),$=function(){return s.a.createElement(i.a,null,s.a.createElement(l.b,{path:"/",exact:!0,component:X}),s.a.createElement(l.b,{path:"/login",exact:!0,component:v}))};t(53);var ee=function(){return s.a.createElement("div",{className:"App"},s.a.createElement($,null))},ae=t(16),te=t(37),ne=t(14),se=t(38),re=t(39);function ce(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function ie(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ce(t,!0).forEach(function(a){Object(se.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var le={userName:!1,messages:!1,message:"",isFetching:!1,newMessage:"",likeMessages:[],editId:!1,editIndex:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_USER_NAME":return ie({},e,{userName:a.userName});case"TOGGLE_IS_FETSHING":return ie({},e,{isFetching:a.isFetching});case"ADD_MESSAGES":return ie({},e,{messages:a.messages});case"ADD_MESSAGE":return ie({},e,{message:a.message});case"SEND_MESSAGE":var t=e.messages.length-1;return ie({},e,{messages:[].concat(Object(ne.a)(e.messages),[{id:+[e.messages[t].id]+1,user:e.userName,created_at:re().format("YYYY-MM-D HH:mm:ss"),message:a.message}]),message:""});case"CHANGE_MESSAGE":for(var n,s=0;s<e.messages.length;s++)+a.id===+e.messages[s].id&&(n=s);var r=e.messages[n]?e.messages[n].message:"";return ie({},e,{editId:a.id,message:r,editIndex:n});case"SAVE_EDITED_MESSAGE":var c=Object(ne.a)(e.messages);return c[a.index].message=a.message,ie({},e,{messages:c,message:"",editId:!1,editIndex:!1});case"DELETE_MESSAGE":return ie({},e,{messages:Object(ne.a)(e.messages.filter(function(e){return+e.id!==+a.id}))});case"TOGGLE_LIKE":if(e.likeMessages.includes(a.id)){var i=e.likeMessages.indexOf(a.id);return ie({},e,{likeMessages:[].concat(Object(ne.a)(e.likeMessages.slice(0,i)),Object(ne.a)(e.likeMessages.slice(i+1)))})}return ie({},e,{likeMessages:[].concat(Object(ne.a)(e.likeMessages),[a.id])});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(){return Object(ae.c)(oe,le,Object(ae.a)(te.a))}t.d(a,"configureStore",function(){return me}),t.d(a,"store",function(){return ue});var ue=me();c.a.render(s.a.createElement(o.a,{store:ue},s.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.74b6b698.chunk.js.map