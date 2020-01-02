(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},26:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),o=n.n(c),s=n(7),l=n(5),u=(n(19),n(10)),p=n(8),i=n.n(p),m=n(11),d=n(17),b=n(13),f=n(23),h=n(14),y=n.n(h),g=function(e){var t=e.selected,n=e.selectRow,r=e.headers,c=e.person,o=c.id,s=c.sex,l=c.born,u=c.age,p=c.century;return a.a.createElement("tr",{className:y()("person","person person--lived-in-".concat(p),"m"===s?"person--male":"person--female",{"person--selected":t}),onClick:function(){return n(o)}},r.map(function(e){return a.a.createElement("td",{key:e.code,className:y()({person__bornBefore1650:"name"===e.code&&l<1650},{person__after65:"age"===e.code&&u>=65})},c[e.code])}))},E=[{code:"id",label:"Id",type:"number"},{code:"name",label:"Name",type:"string"},{code:"sex",label:"Sex",type:"string"},{code:"born",label:"Born",type:"number"},{code:"died",label:"Died",type:"number"},{code:"age",label:"Age",type:"number"},{code:"century",label:"Century",type:"number"},{code:"mother",label:"Mother",type:"string"},{code:"father",label:"Father",type:"string"}],O=a.a.memo(function(e){var t=e.people,n=e.sortFields,c=(e.sortData,Object(l.f)()),o=Object(l.e)(),s=Object(l.g)(),u=new URLSearchParams(c.search),p=u.get("sortBy"),i=u.get("sortOrder");Object(r.useEffect)(function(){p&&n(p,E.find(function(e){return e.code===p}).type,i)},[]);var m=function(e){o.push({pathname:"/people/".concat(t.find(function(t){return e===t.id}).name.toLowerCase().replace(/\s/g,"-")),search:c.search})};return t.length>0&&a.a.createElement("table",{className:"people__table"},a.a.createElement("thead",null,a.a.createElement("tr",null,E.map(function(e){return a.a.createElement("th",{key:e.code,onClick:function(){n(e.code,e.type)}},e.label)}))),a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement(g,{key:e.name,person:e,headers:E,selected:e.name.toLowerCase().replace(/\s/g,"-")===s.params.person,selectRow:m})})))}),w=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://mate-academy.github.io/react_people-table/api/people.json"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},j=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),s=Object(d.a)(o,2),p=s[0],h=s[1],y=Object(l.f)(),g=Object(l.e)(),E=new URLSearchParams(y.search),j=E.get("query"),v=Object(m.a)(n);if(Object(r.useEffect)(function(){!function(){var e,t;i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(w());case 2:e=n.sent,t=e.map(function(e,t){return Object(b.a)({},e,{id:t,age:e.died-e.born,century:Math.ceil(e.died/100)})}),c(t);case 5:case"end":return n.stop()}})}()},[]),j){var C=j.trim().toLowerCase();v=n.filter(function(e){return(e.name+e.mother+e.father).toLowerCase().includes(C)})}var N=function(e,t){var r=Object(m.a)(n);switch(t){case"string":return r=r.map(function(t){return Object(b.a)({},t,Object(u.a)({},e,t[e]||""))}).sort(function(t,n){return t[e].localeCompare(n[e])});case"number":return r.sort(function(t,n){return t[e]-n[e]}),r;default:return r.sort(),r}};return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"title"},"People table"),a.a.createElement("section",{className:"people"},a.a.createElement(f.DebounceInput,{className:"search",placeholder:"Type to search...",type:"search",debounceTimeout:500,onChange:function(e){E.set("query",e.target.value),g.push({search:E.toString()})}}),n.length>0?a.a.createElement(O,{people:v,sortFields:function(e,t,n){E.set("sortBy",e),e!==p?("asc"===n?(c(N(e,t)),E.set("sortOrder","asc")):(c(N(e,t).reverse()),E.set("sortOrder","desc")),h(e)):(c(function(e){return Object(m.a)(e).reverse()}),h(""),E.set("sortOrder","desc"===E.get("sortOrder")?"asc":"desc")),g.push({search:E.toString()})},sortData:N}):"Loading...",a.a.createElement("div",{className:"people__count"},"Rows in table: ".concat(v.length))))},v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.b,{to:"/people"},"People"),a.a.createElement(l.a,{path:"/people/:person?",component:j}))};o.a.render(a.a.createElement(s.a,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.789f7010.chunk.js.map