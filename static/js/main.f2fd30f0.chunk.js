(this.webpackJsonpvk_android=this.webpackJsonpvk_android||[]).push([[0],{128:function(e,t,a){e.exports=a(161)},152:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),l=a(20),o=a.n(l),s=a(32),m=a.n(s),u=a(26),d=a(49),p=a.n(d),f=a(48),E=a.n(f),b=(a(134),a(25)),h=a.n(b),v=a(22),k=a.n(v),g=a(43),j=a.n(g),O=a(33),x=a.n(O),y=a(40),_=a.n(y),w=a(42),P=a.n(w),C=a(41),U=a.n(C),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.a,{id:t},c.a.createElement(k.a,null,"Example"),n&&c.a.createElement(x.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(_.a,{before:n.photo_200?c.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(x.a,{title:"Navigation Example"},c.a.createElement(P.a,null,c.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},I=a(34),K=a(47),S=a.n(K),V=a(44),N=a.n(V),W=a(45),z=a.n(W),J=a(46),T=a.n(J),B=(a(152),Object(I.b)()),D=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"home"},B===I.a?c.a.createElement(N.a,null):c.a.createElement(z.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},F=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(u.a)(i,2),s=l[0],d=l[1],f=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),b=Object(u.a)(f,2),h=b[0],v=b[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,d(e),v(null);case 5:case"end":return t.stop()}}))}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:h},c.a.createElement(A,{id:"home",fetchedUser:s,go:k}),c.a.createElement(D,{id:"persik",go:k}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(F,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[128,1,2]]]);
//# sourceMappingURL=main.f2fd30f0.chunk.js.map