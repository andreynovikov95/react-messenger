(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],{32:function(e,a,t){e.exports=t(74)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(29),m=t.n(n),o=t(7),c=t(14),u=t(13),g=t(9),i=t(10),d=t(12),l=t(11),I=t(16),h=t.n(I),p=function(e){var a=e.split("/");return a[a.length-1]},b=t(21),O=(t(37),function(e){return function(a){var t=a.currentTarget.value;e(t)}}),j=function(e,a,t){var s=t.history,r=t.authors,n=t.setAuthorization,m=t.setCurrentUser;return function(){if(e.trim().length>0&&a.trim().length>0){var t=r.findIndex((function(a){var t=a.email;return t===e||t.split("@")[0]===e}));t>=0&&r[t].password===a&&(n(!0),m(t),s.push("/chat"))}}},_=function(e,a,t){return function(s){"Enter"===s.key&&j(e,a,t)}},v=function(e){var a=e.userName,t=e.userPassword,s=e.setUserName,n=e.setUserPassword,m=Object(b.a)(e,["userName","userPassword","setUserName","setUserPassword"]);return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__continer"},r.a.createElement("img",{className:"login__continer__img",src:"/icons/profile.svg",alt:"profile icon"}),r.a.createElement("input",{className:"login__continer__input",placeholder:"Username",value:a,onChange:O(s),onKeyDown:_(a,t,m),required:!0})),r.a.createElement("div",{className:"login__continer"},r.a.createElement("img",{className:"login__continer__img",src:"/icons/lock.svg",alt:"profile icon"}),r.a.createElement("input",{className:"login__continer__input",type:"password",placeholder:"Password",value:t,onChange:O(n),onKeyDown:_(a,t,m),required:!0})),r.a.createElement("div",{className:"login__helpers"},r.a.createElement("div",{className:"login__helpers_rememberMe"},r.a.createElement("input",{className:"login__helpers__checkbox",id:"rememberMe",type:"checkbox",disabled:!0}),r.a.createElement("label",{htmlFor:"rememberMe"},"Remember me")),r.a.createElement("div",null,"Forgot password?")),r.a.createElement("button",{className:"login__button",type:"button",onClick:j(a,t,m)},"Login"))},f=t(6),E=(t(38),function(e){return function(a){var t=a.currentTarget.value;e(t)}}),N=function(e,a,t,s,r){var n=r.history,m=r.authors,o=r.addNewAuthor,c=r.setAuthorization,u=r.setCurrentUser;return function(){a.trim().length>0&&t.trim().length>0&&s.trim().length>0&&(m.findIndex((function(e){return e.email===a}))<0&&t===s&&(o([].concat(Object(f.a)(m),[{email:e,name:a,avatar:"Anonymous",password:t}])),c(!0),u(m.length),n.push("/chat")))}},M=function(e,a,t,s,r){return function(n){"Enter"===n.key&&N(e,a,t,s,r)}},w=function(e){var a=e.userLogin,t=e.userName,s=e.userPassword,n=e.userPasswordConfirm,m=e.setUserLogin,o=e.setUserName,c=e.setUserPassword,u=e.setUserPasswordConfirm,g=Object(b.a)(e,["userLogin","userName","userPassword","userPasswordConfirm","setUserLogin","setUserName","setUserPassword","setUserPasswordConfirm"]);return r.a.createElement("div",{className:"registration"},r.a.createElement("div",{className:"registration__continer"},r.a.createElement("img",{className:h()("registration__continer__img","registration__continer__img_email"),src:"/icons/email.svg",alt:"email icon"}),r.a.createElement("input",{className:"registration__continer__input",type:"email",placeholder:"Email",value:a,onChange:E(m),onKeyDown:M(a,t,s,n,g),required:!0})),r.a.createElement("div",{className:"registration__continer"},r.a.createElement("img",{className:"registration__continer__img",src:"/icons/profile.svg",alt:"profile icon"}),r.a.createElement("input",{className:"registration__continer__input",type:"email",placeholder:"Username",value:t,onChange:E(o),onKeyDown:M(a,t,s,n,g),required:!0})),r.a.createElement("div",{className:"registration__continer"},r.a.createElement("img",{className:"registration__continer__img",src:"/icons/lock.svg",alt:"profile icon"}),r.a.createElement("input",{className:"registration__continer__input",type:"password",placeholder:"Password",value:s,onChange:E(c),onKeyDown:M(a,t,s,n,g),required:!0})),r.a.createElement("div",{className:"registration__continer"},r.a.createElement("img",{className:"registration__continer__img",src:"/icons/lock.svg",alt:"profile icon"}),r.a.createElement("input",{className:"registration__continer__input",type:"password",placeholder:"Password",onChange:E(u),onKeyDown:M(a,t,s,n,g),required:!0})),r.a.createElement("button",{className:"registration__button",type:"button",onClick:N(a,t,s,n,g)},"Sign Up"))},y=(t(39),[{id:"authorization",name:"LOG IN",to:"/authorization"},{id:"registration",name:"SIGN UP",to:"/authorization/registration"}]),C=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(g.a)(this,t);for(var s=arguments.length,n=new Array(s),m=0;m<s;m++)n[m]=arguments[m];return(e=a.call.apply(a,[this].concat(n))).renderTabs=function(){var a=e.props.location.pathname,t=p(a);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"tabs"},y.map((function(e){var a=e.id,s=e.name,n=e.to,m=a===t;return r.a.createElement("li",{className:h()("tabs__tab",{tabs__tab_active:m}),key:a},r.a.createElement(o.b,{className:"tabs__tab__link ",to:n},s))}))))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.userLogin,t=e.userName,s=e.userPassword,n=e.userPasswordConfirm,m=e.authors,o=e.addNewAuthor,c=e.setUserLogin,g=e.setUserName,i=e.setUserPassword,d=e.setUserPasswordConfirm,l=e.setAuthorization,I=e.setCurrentUser,h=e.isAuthorization;return r.a.createElement("div",{className:"authorization"},r.a.createElement("form",{className:"authorization__form"},this.renderTabs(),r.a.createElement("div",{className:"authorization__form__content"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/authorization",render:function(e){return r.a.createElement(v,Object.assign({},e,{userName:t,userPassword:s,authors:m,setUserName:g,setUserPassword:i,setAuthorization:l,setCurrentUser:I,isAuthorization:h}))},exact:!0}),r.a.createElement(u.b,{path:"/authorization/registration",render:function(e){return r.a.createElement(w,Object.assign({},e,{authors:m,userLogin:a,userName:t,userPassword:s,userPasswordConfirm:n,setUserLogin:c,setUserPasswordConfirm:d,addNewAuthor:o,setUserName:g,setUserPassword:i,setAuthorization:l,setCurrentUser:I,isAuthorization:h}))}})))))}}]),t}(s.PureComponent),U=t(1),P=t.n(U);function k(e){return Object(u.g)((function(a){var t=a.location.pathname,s=p(void 0===t?"":t);return r.a.createElement(e,Object.assign({},a,{selectedChatId:s}))}))}t(53);var x=function(){return r.a.createElement("div",{className:"placeholder"},r.a.createElement("div",{className:"placeholder__text"},"Please select a chat to start messaging"))},D=(t(54),function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.selectedChatId,t=e.chatId,s=e.date,n=void 0===s?15566688e5:s,m=e.author,c=void 0===m?"Shrek 2":m,u=e.chatName,g=void 0===u?"Group Chat":u,i=e.lastMessage,d=void 0===i?"tas odio. Ut sit amet...":i,l=e.icon,I=void 0===l?"react":l,p=d.replace(/<br>/g," ");p=p.length>18?"".concat(p.slice(0,18).trim(),"..."):p;var b=new Date(n);return r.a.createElement("li",null,r.a.createElement(o.b,{className:h()("bar",{bar_selected:t===a}),to:"/chat/".concat(t)},r.a.createElement("div",{className:"bar__icon"},r.a.createElement("img",{src:"/icons/".concat(I,".svg"),alt:I})),r.a.createElement("div",{className:"bar__message"},r.a.createElement("div",{className:"bar__message__title"},r.a.createElement("h1",{className:"bar__message__title__name"},g),r.a.createElement("div",{className:"bar__message__title__date"},"".concat(b.getUTCMonth()+1,"/").concat(b.getUTCDate(),"/").concat(b.getFullYear()))),r.a.createElement("div",{className:"bar__message__content"},r.a.createElement("span",{className:"bar__message__content_author"},c,":")," ",p))))}}]),t}(s.PureComponent)),S=(t(55),k(D)),z=function(e){var a=e.authors,t=void 0===a?[]:a,n=e.chats,m=void 0===n?[]:n,o=e.messages,c=void 0===o?[]:o,u=Object(s.useMemo)((function(){return function(e,a,t){return e.map((function(e){var s=e.chatId,r=e.messagesId,n=e.chatName,m=void 0===n?"Group chat":n,o=e.icon,c=void 0===o?"react":o,u=a[r],g=u[u.length-1],i=g.dateMessages,d=void 0===i?[]:i,l=g.date,I=d[d.length-1],h=I.authorId,p=void 0===h?0:h,b=I.message,O=void 0===b?"tas odio. Ut sit amet...":b;return{author:t[p].name||"Anonymous",chatId:s,date:l,chatName:m,lastMessage:O,icon:c}})).sort((function(e,a){return a.date-e.date}))}(m,c,t)}),[m,c,t]);return r.a.createElement("ul",{className:"chatList"},u.map((function(e){var a=e.author,t=e.chatId,s=e.date,n=e.chatName,m=e.lastMessage,o=e.icon;return r.a.createElement(S,{key:t,chatId:t,author:a,date:s,chatName:n,lastMessage:m,icon:o})})))},A=(t(56),function(e){var a=e.authors,t=e.chats,s=e.messages;return r.a.createElement("header",{className:"leftColumn"},r.a.createElement(z,{authors:a,chats:t,messages:s}))}),L=(t(57),function(e,a){return e.map((function(e){var t=e.date,s=e.dateMessagesId,n=e.dateMessages,m=function(e){return new Date(e).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",weekday:"short",timeZone:"UTC"}).replace(/,/g,"")}(t);return r.a.createElement("div",{className:"dateMessages",key:s},r.a.createElement("div",{className:"dateMessages__date"},m),r.a.createElement("div",{className:"dateMessages__messages"},function(e,a){return e.map((function(t,s){var n,m=t.authorId,o=t.messageId,c=t.message,u=t.time,g=a[m],i=g.name,d=void 0===i?"Anonymous":i,l=g.avatar,I=void 0===l?"Anonymous":l,h=0===s||s>0&&m!==e[s-1].authorId;return r.a.createElement("div",{className:"message",key:o},r.a.createElement("div",{className:"message__avatar"},h&&r.a.createElement("img",{src:"/react-messenger/images/".concat(I,".png"),alt:d,width:50})),r.a.createElement("div",{className:"message__text"},h&&r.a.createElement("div",{className:"message__text__name"},d),r.a.createElement("div",{className:"message__text__message",dangerouslySetInnerHTML:(n=c,{__html:n})})),r.a.createElement("div",{className:"message__time"},u))}))}(n,a)))}))}),G=function(e){var a=e.authors,t=void 0===a?[]:a,s=e.chatMessages,n=void 0===s?[]:s;return r.a.createElement("div",{className:"messages"},n.length>0?L(n,t):r.a.createElement("div",{className:"messages__emptyChat"},"You have no messages yet"))},R=(t(58),function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).textareaRef=void 0,n.state={textareaValue:""},n.handleChange=function(e){n.setState({textareaValue:e.target.value})},n.handleSendingMessage=function(e,a){return function(){var t=n.props,s=t.currentUserId,r=t.sendMessage,m=n.state.textareaValue;if(m.trim().length>0){var o=new Date;r({authorId:s||0,messageId:P.a.generate(),message:m.replace(/(\r\n|\n|\r)/gm,"<br>"),time:"".concat(o.getHours(),":").concat(o.getMinutes(),":").concat(o.getSeconds())},e,a),n.handleResetTextareaValue()}}},n.handleResetTextareaValue=function(){var e;n.setState({textareaValue:""}),null===(e=n.textareaRef.current)||void 0===e||e.focus()},n.handleKeyDown=function(e,a){return function(t){var s=t.key,r=t.shiftKey;"Enter"!==s||r||n.handleSendingMessage(e,a)()}},n.getIndexChatMessage=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.findIndex((function(a){return a.chatId===e}))},n.getChatMessages=function(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e&&(a=t[e]),a?s[a.messagesId]:[]},n.renderPanel=function(e,a){return r.a.createElement("div",{className:"panel"},r.a.createElement("img",{src:"/icons/clip.svg",alt:"clip"}),r.a.createElement("textarea",{className:"panel__textarea",ref:n.textareaRef,placeholder:"Write a message...",value:n.state.textareaValue,onChange:n.handleChange,onKeyDown:n.handleKeyDown(e,a)}),r.a.createElement("img",{className:"panel__send",src:"/icons/send.svg",alt:"send button",onClick:n.handleSendingMessage(e,a)}))},n.textareaRef=Object(s.createRef)(),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e;null===(e=this.textareaRef.current)||void 0===e||e.focus()}},{key:"componentDidUpdate",value:function(e){this.props.selectedChatId!==e.selectedChatId&&this.handleResetTextareaValue()}},{key:"render",value:function(){var e=this.props,a=e.authors,t=void 0===a?[]:a,s=e.chats,n=void 0===s?[]:s,m=e.messages,o=void 0===m?[]:m,c=e.selectedChatId,g=this.getIndexChatMessage(c,n),i=this.getChatMessages(g,n,o);return r.a.createElement("main",{className:"rightColumn"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/chat",render:function(e){return r.a.createElement(G,Object.assign({},e,{authors:t,chatMessages:i}))}})),this.renderPanel(i,g))}}]),t}(s.PureComponent)),T=(t(59),t(2)),K=[{chatId:P.a.generate(),chatName:"Group chat",messagesId:0,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:1,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:2,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:3,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:4,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:5,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:6,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:7,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:8,icon:"react"},{chatId:P.a.generate(),chatName:"Group chat",messagesId:9,icon:"react"}],V=[[{dateMessagesId:P.a.generate(),date:1584144e6,dateMessages:[{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"}]},{dateMessagesId:P.a.generate(),date:15842304e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15524352e5,dateMessages:[{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"}]},{dateMessagesId:P.a.generate(),date:15527808e5,dateMessages:[{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"15:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"16:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"17:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"18:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"19:40:06"}]}],[{dateMessagesId:P.a.generate(),date:15598656e5,dateMessages:[{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"10:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"11:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"12:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"13:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"14:40:06"}]},{dateMessagesId:P.a.generate(),date:15794784e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15844032e5,dateMessages:[{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]},{dateMessagesId:P.a.generate(),date:15844896e5,dateMessages:[{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15844032e5,dateMessages:[{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"}]},{dateMessagesId:P.a.generate(),date:1584576e6,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15598656e5,dateMessages:[{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"15:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"16:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"17:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"18:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"19:40:06"}]},{dateMessagesId:P.a.generate(),date:15610752e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15576192e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"22:40:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"22:45:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:45:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:50:06"}]},{dateMessagesId:P.a.generate(),date:15792192e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:45:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:46:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:47:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:48:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:49:06"}]}],[{dateMessagesId:P.a.generate(),date:15794784e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]},{dateMessagesId:P.a.generate(),date:15812064e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15964128e5,dateMessages:[{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]},{dateMessagesId:P.a.generate(),date:15838848e5,dateMessages:[{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}],[{dateMessagesId:P.a.generate(),date:15840576e5,dateMessages:[{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:41:06"},{authorId:1,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:42:06"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:43:06"},{authorId:2,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:44:06"}]},{dateMessagesId:P.a.generate(),date:1584144e6,dateMessages:[{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"23:40:06"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"04:47:07"},{authorId:0,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:14:31"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"06:49:32"},{authorId:3,messageId:P.a.generate(),message:Object(T.loremIpsum)({count:3}),time:"08:38:10"}]}]],F=[{email:"test1@test.com",name:"The Shrek 1",avatar:"shrek1",password:"123456"},{email:"test2@test.com",name:"The Shrek 2",avatar:"shrek2",password:"1234567"},{email:"test3@test.com",name:"Rick Dalton 1",avatar:"RickDalton1",password:"12345678"},{email:"test4@test.com",name:"Rick Dalton 2",avatar:"RickDalton2",password:"123456789"}],q=k(R),W=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(g.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).state={chats:[],messages:[]},e.componentDidMount=function(){e.setState((function(e){return{chats:[].concat(Object(f.a)(e.chats),Object(f.a)(K)),messages:[].concat(Object(f.a)(e.messages),Object(f.a)(V))}}))},e.hanleSendMessage=function(a,t,s){var r=!1,n=new Date,m=e.getFormatDate(n),o=t.map((function(t){var s=new Date(t.date);return e.getFormatDate(s)===m&&(t.dateMessages.push(a),r=!0),t}));if(!r)return o.push({dateMessagesId:P.a.generate(),date:Date.parse(m),dateMessages:[a]}),e.setState((function(e){return{messages:[].concat(Object(f.a)(e.messages),[e.messages[s]=Object(f.a)(o)])}}));e.setState((function(e){return{messages:[].concat(Object(f.a)(e.messages),[Object(f.a)(o)])}}))},e.getFormatDate=function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.currentUserId,s=a.authors,n=this.state,m=n.chats,o=n.messages;return r.a.createElement("div",{className:"chat"},r.a.createElement(A,{authors:s,chats:m,messages:o}),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/chat",component:x}),r.a.createElement(u.b,{path:"/chat",render:function(a){return r.a.createElement(q,Object.assign({},a,{currentUserId:t,authors:s,chats:m,messages:o,sendMessage:e.hanleSendMessage}))}}),"/>"))}}]),t}(s.PureComponent),Y=(t(72),function(){var e=Object(s.useState)(""),a=Object(c.a)(e,2),t=a[0],n=a[1],m=Object(s.useState)(""),o=Object(c.a)(m,2),g=o[0],i=o[1],d=Object(s.useState)(""),l=Object(c.a)(d,2),I=l[0],h=l[1],p=Object(s.useState)(""),b=Object(c.a)(p,2),O=b[0],j=b[1],_=Object(s.useState)(!1),v=Object(c.a)(_,2),f=v[0],E=v[1],N=Object(s.useState)(F),M=Object(c.a)(N,2),w=M[0],y=M[1],U=Object(s.useState)(0),P=Object(c.a)(U,2),k=P[0],x=P[1];return r.a.createElement("div",{className:"app"},f?r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/chat",render:function(e){return r.a.createElement(W,Object.assign({},e,{currentUserId:k,authors:w}))}}),r.a.createElement(u.b,{path:"*",render:function(){return r.a.createElement(u.a,{to:"/chat"})}})):r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/authorization",render:function(e){return r.a.createElement(C,Object.assign({},e,{authors:w,userLogin:t,userName:g,userPassword:I,userPasswordConfirm:O,setUserLogin:n,setUserPasswordConfirm:j,addNewAuthor:y,setUserName:i,setUserPassword:h,setAuthorization:E,setCurrentUser:x,isAuthorization:f}))}}),r.a.createElement(u.b,{path:"*",render:function(){return r.a.createElement(u.a,{to:"/authorization"})}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(73);m.a.render(r.a.createElement(s.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b8634f2e.chunk.js.map