(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),o=n.n(r),s=(n(14),n(9)),i=n(2),u=n.p+"static/media/header-logo.5f3664ca.svg",l=n(0);var p=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{className:"header__logo",src:u,alt:"\u043b\u043e\u0433\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e-\u0420\u043e\u0441\u0441\u0438\u044f"})})})},d=c.a.createContext();var h=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,r=e.onCardDelete,o=c.a.useContext(d),s=t.owner._id===o._id,i="card__delete ".concat(s&&"card__delete_style_active"),u=t.likes.some((function(e){return e._id===o._id})),p="card__like ".concat(u&&"card__like_active");return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("button",{className:i,type:"button",onClick:function(){r(t)}}),Object(l.jsx)("img",{className:"card__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(l.jsxs)("div",{className:"card__caption",children:[Object(l.jsx)("h2",{className:"card__title",children:t.name}),Object(l.jsxs)("div",{className:"card__like-container",children:[Object(l.jsx)("button",{className:p,type:"button",onClick:function(){a(t)}}),Object(l.jsx)("p",{className:"card__like-counter",children:t.likes.length})]})]})]})};var _=function(e){var t=e.cards,n=e.onEditAvatar,a=e.onEditProfile,r=e.onAddPlace,o=e.onCardClick,s=e.onCardLike,i=e.onCardDelete,u=c.a.useContext(d);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__container",children:[Object(l.jsx)("button",{className:"profile__avatar-edit",onClick:n,children:Object(l.jsx)("img",{className:"profile__avatar",src:u.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043b\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__user",children:[Object(l.jsx)("h1",{className:"profile__name",children:u.name}),Object(l.jsx)("button",{className:"profile__edit-button",type:"button",onClick:a})]}),Object(l.jsx)("p",{className:"profile__caption",children:u.about})]})]}),Object(l.jsx)("button",{className:"profile__add-button",onClick:r,type:"button"})]}),Object(l.jsx)("section",{className:"cards",children:Object(l.jsx)("ul",{className:"cards__list",children:t.map((function(e){return Object(l.jsx)(h,{card:e,onCardClick:o,onCardLike:s,onCardDelete:i},e._id)}))})})]})})};var j=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copy",children:"\xa9 2021 Mesto Russia"})})};var f=function(e){var t=e.card,n=e.onClose;return Object(l.jsx)("div",{className:"popup popup_type_image ".concat(t.link?"popup_opened ":""),children:Object(l.jsxs)("div",{className:"popup__photo-box",children:[Object(l.jsx)("button",{className:"popup__close-button",type:"button",onClick:n}),Object(l.jsx)("img",{className:"popup__img",src:t.link,alt:t.name}),Object(l.jsx)("p",{className:"popup__img-caption",children:t.name})]})})},b=n(7),m=n(8),O=new(function(){function e(t){Object(b.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(m.a)(e,[{key:"_checkOk",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getCards",value:function(){var e=this;return fetch(this._url+"cards",{method:"GET",headers:this._headers}).then((function(t){return e._checkOk(t)}))}},{key:"postCards",value:function(e,t){var n=this;return fetch(this._url+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkOk(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._url+"users/me",{method:"GET",headers:this._headers}).then((function(t){return e._checkOk(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch(this._url+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkOk(e)}))}},{key:"updAvatar",value:function(e){var t=this;return fetch(this._url+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkOk(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this._url+"cards/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkOk(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch(this._url+"cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then((function(e){return n._checkOk(e)})):fetch(this._url+"cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return n._checkOk(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23/",headers:{authorization:"577b546f-6478-4029-92a1-5665bab78a44","Content-Type":"application/json"}});var v=function(e){return Object(l.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened ":""),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(l.jsxs)("form",{className:"popup__form popup__form_".concat(e.name,'" name="').concat(e.name),onSubmit:e.onSubmit,children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{className:"popup__submit",type:"submit",name:"submit",children:e.buttonText})]})]})})};var x=function(e){var t=c.a.useState(" "),n=Object(i.a)(t,2),a=n[0],r=n[1],o=c.a.useState(""),s=Object(i.a)(o,2),u=s[0],p=s[1],h=c.a.useContext(d);return c.a.useEffect((function(){r(h.name),p(h.about)}),[h]),Object(l.jsxs)(v,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,description:u})},children:[Object(l.jsx)("input",{name:"profile",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"popup__input popup__input_type_profile",type:"text",minLength:"2",maxLength:"40",onChange:function(e){r(e.target.value)},value:a,required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"profile-error"}),Object(l.jsx)("input",{name:"caption",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_type_caption",type:"text",minLength:"2",maxLength:"200",onChange:function(e){p(e.target.value)},value:u,required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"caption-error"})]})};var k=function(e){var t=c.a.useRef();return Object(l.jsxs)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(l.jsx)("input",{name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_avatar",type:"url",ref:t,required:!0}),Object(l.jsx)("span",{id:"avatar-error",className:"popup__error"})]})};var C=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],r=n[1],o=c.a.useState(""),s=Object(i.a)(o,2),u=s[0],p=s[1];return Object(l.jsxs)(v,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),r(""),p("")},children:[Object(l.jsx)("input",{name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_place",type:"text",minLength:"2",maxLength:"30",value:a,onChange:function(e){r(e.target.value)},required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"place-error"}),Object(l.jsx)("input",{name:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_place-link",type:"url",value:u,onChange:function(e){p(e.target.value)},required:!0}),Object(l.jsx)("span",{id:"place-link-error",className:"popup__error"})]})};var g=function(e){return Object(l.jsx)(v,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onCardDelete(e.card)}})};var N=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),o=Object(i.a)(r,2),u=o[0],h=o[1],b=c.a.useState(!1),m=Object(i.a)(b,2),v=m[0],N=m[1],y=c.a.useState(!1),S=Object(i.a)(y,2),E=S[0],L=S[1],T=c.a.useState(!1),P=Object(i.a)(T,2),D=P[0],A=P[1],U=c.a.useState({}),F=Object(i.a)(U,2),I=F[0],q=F[1],J=c.a.useState([]),w=Object(i.a)(J,2),B=w[0],G=w[1],H=c.a.useState({name:"",about:""}),M=Object(i.a)(H,2),R=M[0],z=M[1];c.a.useEffect((function(){Promise.all([O.getUserInfo(),O.getCards()]).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];z(n),G(a)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){O.getCards().then((function(e){G(e)})).catch((function(e){return console.log(e)}))}),[]);var K=function(){a(!1),h(!1),N(!1),L(!1),A({})};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(d.Provider,{value:R,children:[Object(l.jsx)(p,{}),Object(l.jsx)(_,{cards:B,onEditAvatar:function(){a(!0)},onEditProfile:function(){h(!0)},onAddPlace:function(){N(!0)},onCardClick:function(e){A(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===R._id}));O.changeLikeCardStatus(e._id,!t).then((function(t){G((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){L(!0),q(e)}}),Object(l.jsx)(j,{}),Object(l.jsx)(k,{isOpen:n,onClose:K,onUpdateAvatar:function(e){O.updAvatar(e.avatar).then((function(e){z(e),K()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(x,{isOpen:u,onClose:K,onUpdateUser:function(e){O.setUserInfo(e.name,e.description).then((function(e){z(e),K()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(C,{isOpen:v,onClose:K,onAddPlace:function(e){O.postCards(e.name,e.link).then((function(e){G([e].concat(Object(s.a)(B))),K()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(g,{card:I,isOpen:E,onClose:K,onCardDelete:function(e){O.deleteCard(e._id).then((function(){G((function(t){return t.filter((function(t){return t._id!==e._id}))})),K()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(f,{card:D,onClose:K})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.2e2179c5.chunk.js.map