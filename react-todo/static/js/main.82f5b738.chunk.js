(this["webpackJsonpreact-tests-01"]=this["webpackJsonpreact-tests-01"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),u=function(e){var t=e.setInputText,a=e.todos,o=e.setTodos,c=e.inputText,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(r.a)(a),[{text:c,completed:!1,id:(1e3*Math.random()).toFixed(2)}])),t("")},type:"submit",className:"todo-button"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},i=a(4),m=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){c(o.map((function(e){return e.id===a.id?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{key:e.id,text:e.text,setTodos:a,todos:t,todo:e})}))))},f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),i=r[0],m=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(o.useState)([]),N=Object(s.a)(v,2),O=N[0],g=N[1];Object(o.useEffect)((function(){j()}),[]),Object(o.useEffect)((function(){!function(e,t,a){switch(e){case"completed":a(t.filter((function(e){return!0===e.completed})));break;case"uncompleted":a(t.filter((function(e){return!1===e.completed})));break;default:a(t)}}(E,i,g),function(e){localStorage.setItem("todos",JSON.stringify(e))}(i)}),[i,E]);var j=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));m(e)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Todo List")),n.a.createElement(u,{inputText:a,todos:i,setTodos:m,setInputText:c,setStatus:b}),n.a.createElement(d,{setTodos:m,todos:i,filteredTodos:O}))};l.a.render(n.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.82f5b738.chunk.js.map