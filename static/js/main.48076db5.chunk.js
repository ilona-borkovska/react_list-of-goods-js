(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),o=n(3),r=(n(10),n(11),n(1)),i=n(2),a=n.n(i),u=n(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="sortByAlphabet",j="sortByLength",h=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),h=i[0],d=i[1],f=Object(r.useState)([].concat(l)),g=Object(o.a)(f,2),p=g[0],O=g[1],m=function(t){d(t);var e=function(t){var e=[].concat(l);switch(t){case b:return e.sort((function(t,e){return t.localeCompare(e)}));case j:return e.sort((function(t,e){return t.length-e.length}));case"":return e;default:return 0}}(t);O(e)};return n&&p.reverse(),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:a()("button",["is-info"],{"is-light":h!==b}),onClick:function(){return m(b)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:a()("button",["is-success"],{"is-light":h!==j}),onClick:function(){return m(j)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:a()("button",["is-warning"],{"is-light":!n}),onClick:function(){return n?(m(h),void c(!n)):c(!n)},children:"Reverse"}),(h||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),d(""),O([].concat(l))},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.48076db5.chunk.js.map