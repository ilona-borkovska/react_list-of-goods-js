(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s=n(5),c=n.n(s),r=n(4),o=(n(10),n(11),n(1)),i=n(2),a=n.n(i),u=n(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var b="sortByAlphabet",j="sortByLength",h=function(){var t=Object(o.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(""),i=Object(r.a)(c,2),h=i[0],d=i[1],g=function(t){var e=[].concat(l);switch(t){case b:return e.sort((function(t,e){return t.localeCompare(e)}));case j:return e.sort((function(t,e){return t.length-e.length}));default:return e}}(h);return n&&g.reverse(),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:a()("button",["is-info"],{"is-light":h!==b}),onClick:function(){return d(b)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:a()("button",["is-success"],{"is-light":h!==j}),onClick:function(){return d(j)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:a()("button",["is-warning"],{"is-light":!n}),onClick:function(){return s(!n)},children:"Reverse"}),(h||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(!1),d("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:g.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cc56e10f.chunk.js.map