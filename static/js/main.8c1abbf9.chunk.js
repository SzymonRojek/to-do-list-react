(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{22:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,d,u,l,s,b,f,h,j,g,m,p,x,O,k=t(1),v=t.n(k),B=t(12),w=t.n(B),D=(t(22),t(4)),y=t(3),C=t(2),T=C.default.main(o||(o=Object(y.a)([" \n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),S=t(0),M=function(n){var e=n.children;return Object(S.jsx)(T,{children:e})},L=function(n){var e=n.title;return Object(S.jsx)("header",{children:Object(S.jsx)("h1",{children:e})})},z=C.default.section(r||(r=Object(y.a)(["\n  margin: 10px 0;\n  background-color: ",";\n  box-shadow: 0 0 5px ",";\n"])),(function(n){return n.theme.backgroundColor.section}),(function(n){return n.theme.accent.shadow})),A=C.default.header(c||(c=Object(y.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid ",";\n\n  @media (max-width: ","px)  {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.accent.borderLight}),(function(n){return n.theme.breakpoint.mobile})),F=C.default.h2(i||(i=Object(y.a)(["\n  font-size: 20px;\n  margin: 0;\n"]))),N=C.default.div(a||(a=Object(y.a)(["\n  padding: 20px;\n"]))),H=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(S.jsxs)(z,{children:[Object(S.jsxs)(A,{children:[Object(S.jsx)(F,{children:e}),o]}),Object(S.jsx)(N,{children:t})]})},I=C.default.form(d||(d=Object(y.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.breakpoint.mobile})),J=C.default.input(u||(u=Object(y.a)(["\n  padding: 10px;\n  border: 1px solid ",";\n  outline: none;\n  border-radius: 3px;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.accent.borderLight}),(function(n){return n.theme.accent.borderDark})),P=C.default.button(l||(l=Object(y.a)(["\n  padding: 10px;\n  color: ",";\n  border: 1px solid transparent;\n  background-color: ",";\n  cursor: pointer;\n  transition: transform .3s, background-color .3s ease-in;\n\n  &:hover {\n    background-color: ",";\n\n    @media (min-width: ","px) {\n      transform: scale(1.1);\n    }\n  }\n\n  &:active {\n    outline: 1px solid ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.addButton}),(function(n){return n.theme.backgroundColor.addButton}),(function(n){return n.theme.hover.addButton}),(function(n){return n.theme.breakpoint.horizontal}),(function(n){return n.theme.accent.outline}),(function(n){return n.theme.active.addButton})),E=function(n){var e=n.addNewTask,t=Object(k.useState)(""),o=Object(D.a)(t,2),r=o[0],c=o[1],i=Object(k.useRef)(null);return Object(S.jsxs)(I,{onSubmit:function(n){n.preventDefault();var t=r.trim();t&&(e(t),c(""))},children:[Object(S.jsx)(J,{ref:i,value:r,placeholder:"What you have to do?",autoFocus:!0,onChange:function(n){var e=n.target;return c(e.value)}}),Object(S.jsx)(P,{onClick:function(){i.current.focus()},children:"Add task"})]})},G=C.default.ul(s||(s=Object(y.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),R=C.default.li(b||(b=Object(y.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid ",";\n\n  ","\n"])),(function(n){return n.theme.accent.borderLight}),(function(n){return n.hidden&&Object(C.css)(f||(f=Object(y.a)([" display: none;"])))})),W=C.default.button(h||(h=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px 0 10px;\n  color: ",";\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  transition: background-color .3s ease-in;\n\n  ","\n  \n  ","\n\n  &:active {\n    outline: 1px solid ",";\n  }\n"])),(function(n){return n.theme.color.doneButton}),(function(n){return n.remove&&Object(C.css)(j||(j=Object(y.a)(["\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  "])),(function(n){return n.theme.backgroundColor.removeButton}),(function(n){return n.theme.hover.removeButton}))}),(function(n){return n.toggleDone&&Object(C.css)(g||(g=Object(y.a)(["\n    background-color: ",";\n    \n    &:hover {\n    background-color: ",";\n  "])),(function(n){return n.theme.backgroundColor.doneButton}),(function(n){return n.theme.hover.doneButton}))}),(function(n){return n.theme.accent.outline})),q=C.default.span(m||(m=Object(y.a)(["\n  word-break: break-word;\n\n  ","\n"])),(function(n){return n.done&&Object(C.css)(p||(p=Object(y.a)(["text-decoration: line-through;"])))})),K=function(n){var e=n.tasks,t=n.hideDone,o=n.removeTask,r=n.toggleTaskDone;return Object(S.jsx)(G,{children:e.map((function(n){return Object(S.jsxs)(R,{hidden:n.done&&t,children:[Object(S.jsx)(W,{toggleDone:!0,onClick:function(){return r(n.id)},children:n.done?"\u2713":""}),Object(S.jsx)(q,{done:n.done,children:n.content}),Object(S.jsx)(W,{remove:!0,onClick:function(){return o(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},Q=C.default.div(x||(x=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),U=C.default.button(O||(O=Object(y.a)(["\n  margin: 0 20px 0 0;\n  color: ",";\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: color .2s ease-in;\n\n  &:hover {\n    color: ","\n  }\n\n  &:active {\n    color: ",";\n  }\n\n  &:disabled {\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  @media (max-width: ","px){\n    flex-basis: 100%;\n    margin: 10px;\n  }\n"])),(function(n){return n.theme.color.hideMarkButtons}),(function(n){return n.theme.hover.hideMarkButtons}),(function(n){return n.theme.active.hideMarkButtons}),(function(n){return n.theme.disabled.hideDoneButton}),(function(n){return n.theme.breakpoint.mobile})),V=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone;return Object(S.jsx)(Q,{children:e.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(U,{onClick:o,disabled:e.every((function(n){return!n.done})),children:[t?"Show":"Hide"," done"]}),Object(S.jsx)(U,{onClick:r,disabled:e.every((function(n){return n.done})),children:"Mark all done"})]})})},X=t(17),Y=t(6),Z=function(){var n=function(n,e){var t=Object(k.useState)((function(){return null===localStorage.getItem(n)?e:JSON.parse(localStorage.getItem(n))})),o=Object(D.a)(t,2),r=o[0],c=o[1];return Object(k.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,c]}("tasks",[]),e=Object(D.a)(n,2),t=e[0],o=e[1];return{tasks:t,removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(Y.a)(Object(Y.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){o((function(n){return n.map((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){o((function(e){return[].concat(Object(X.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}};function $(){var n=Object(k.useState)(!1),e=Object(D.a)(n,2),t=e[0],o=e[1],r=Z(),c=r.tasks,i=r.removeTask,a=r.toggleTaskDone,d=r.setAllDone,u=r.addNewTask;return Object(S.jsxs)(M,{children:[Object(S.jsx)(L,{title:"List of tasks"}),Object(S.jsx)(H,{title:"Add new task",body:Object(S.jsx)(E,{addNewTask:u})}),Object(S.jsx)(H,{title:"List of to do",body:Object(S.jsx)(K,{tasks:c,hideDone:t,removeTask:i,toggleTaskDone:a}),extraHeaderContent:Object(S.jsx)(V,{tasks:c,hideDone:t,toggleHideDone:function(){o((function(n){return!n}))},setAllDone:d})})]})}var _,nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),r(n),c(n),i(n)}))},en=t(16),tn=Object(C.createGlobalStyle)(_||(_=Object(y.a)(["\n \n  ","\n\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: #eee;\n  }\n"])),en.normalize);w.a.render(Object(S.jsx)(v.a.StrictMode,{children:Object(S.jsxs)(C.ThemeProvider,{theme:{color:{hideMarkButtons:"teal",addButton:"#fff",doneButton:"#fff"},backgroundColor:{body:"#eee",container:"#fff",section:"#fff",doneButton:"#1C8622",removeButton:"hsl(0, 83%, 47%)",addButton:"hsl(180, 100%, 25%)"},hover:{addButton:"hsl(180, 100%, 30%)",hideMarkButtons:"hsl(180, 100%, 40%)",doneButton:"#05af05",removeButton:"hsl(0, 83%, 60%)"},active:{hideMarkButtons:"hsl(180, 100%, 15%)",addButton:"hsl(180, 100%, 35%)"},disabled:{hideDoneButton:"rgb(201, 194, 194)"},accent:{shadow:"#ddd",outline:"#222",borderLight:"#ddd",borderDark:"hsl(0, 1%, 17%)"},breakpoint:{mobile:767,horizontal:768}},children:[Object(S.jsx)(tn,{}),Object(S.jsx)($,{})]})}),document.getElementById("root")),nn()}},[[26,1,2]]]);
//# sourceMappingURL=main.8c1abbf9.chunk.js.map