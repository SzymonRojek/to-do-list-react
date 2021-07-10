(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{50:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,u,d,l,b,j,h,f,x,p,O,g,m,v,k,w,y,C,D,B,F,S=t(0),T=t.n(S),A=t(22),L=t.n(A),E=t(17),I=t(8),z=t(9),H=t(5),P=t(4),N=P.default.main(r||(r=Object(H.a)([" \n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),U=t(2),J=function(n){var e=n.title;return Object(U.jsx)("header",{children:Object(U.jsx)("h1",{children:e})})},R=P.default.section(o||(o=Object(H.a)(["\n  margin: 10px 0;\n  background-color: ",";\n  box-shadow: 0 0 5px ",";\n"])),(function(n){return n.theme.section.backgroundColor}),(function(n){return n.theme.accent.shadow})),M=P.default.header(c||(c=Object(H.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid ",";\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.accent.borderLight}),(function(n){return n.theme.breakpoint.mobile})),G=P.default.h2(a||(a=Object(H.a)(["\n  font-size: 20px;\n  margin: 0;\n"]))),W=P.default.div(i||(i=Object(H.a)(["\n  padding: 20px;\n"]))),Y=function(n){var e=n.title,t=n.button,r=n.body,o=n.extraHeaderContent;return Object(U.jsxs)(R,{children:[Object(U.jsxs)(M,{children:[Object(U.jsx)(G,{children:e}),t,o]}),Object(U.jsx)(W,{children:r})]})},Z=t(33),q=t(21),K="tasks",Q=function(n){return localStorage.setItem(K,JSON.stringify(n))},V=Object(q.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(K))||[],hideDone:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},setAllDone:function(n){var e,t=n.tasks,r=Object(Z.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},fetchExampleTasks:function(n){n.loading=!0},setTasks:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},setError:function(n){n.loading=!1}}}),X=V.actions,$=X.addTask,_=X.toggleHideDone,nn=X.toggleTaskDone,en=X.setAllDone,tn=X.removeTask,rn=X.fetchExampleTasks,on=X.setTasks,cn=X.setError,an=function(n){return n.tasks},sn=function(n){return an(n).tasks},un=function(n){return an(n).hideDone},dn=function(n){return 0===sn(n).length},ln=function(n){return sn(n).every((function(n){return n.done}))},bn=function(n){return n.tasks.loading},jn=V.reducer,hn=function(){var n=Object(I.i)().id,e=Object(z.c)((function(e){return function(n,e){return sn(n).find((function(n){return n.id===e}))}(e,n)}));return Object(U.jsxs)(N,{children:[Object(U.jsx)(J,{title:"Task details:"}),Object(U.jsx)(Y,{title:e?e.content:"Task has not been found \ud83d\ude22",body:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("strong",{children:"Finshed:"})," ",e.done?"Yes":"No"]})})]})},fn=t(36),xn=P.default.form(s||(s=Object(H.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.breakpoint.mobile})),pn=P.default.button(u||(u=Object(H.a)(["\n  padding: 10px;\n  color: ",";\n  border: 1px solid transparent;\n  background-color: ",";\n  cursor: pointer;\n  transition: transform .3s, background-color .3s ease-in;\n\n  &:hover {\n    background-color: ",";\n\n    @media (min-width: ","px) {\n      transform: scale(1.1);\n    }\n  }\n\n  &:active {\n    outline: 1px solid ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.addButton.color}),(function(n){return n.theme.addButton.backgroundColor}),(function(n){return n.theme.addButton.hover}),(function(n){return n.theme.breakpoint.mobile}),(function(n){return n.theme.accent.outline}),(function(n){return n.theme.addButton.active})),On=P.default.input(d||(d=Object(H.a)(["\n  padding: 10px;\n  border: 1px solid ",";\n  outline: none;\n  border-radius: 3px;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.accent.borderLight}),(function(n){return n.theme.accent.borderDark})),gn=function(){var n=Object(S.useState)(""),e=Object(fn.a)(n,2),t=e[0],r=e[1],o=Object(S.useRef)(null),c=Object(z.b)();return Object(U.jsxs)(xn,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c($({content:e,done:!1,id:Object(q.c)()})),r(""))},children:[Object(U.jsx)(On,{ref:o,value:t,placeholder:"What you have to do?",autoFocus:!0,onChange:function(n){var e=n.target;return r(e.value)}}),Object(U.jsx)(pn,{onClick:function(){o.current.focus()},children:"Add task"})]})},mn="search",vn=P.default.ul(l||(l=Object(H.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),kn=P.default.li(b||(b=Object(H.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid ",";\n\n  ","\n;"])),(function(n){return n.theme.accent.borderLight}),(function(n){return n.hidden&&Object(P.css)(j||(j=Object(H.a)(["display: none;"])))})),wn=Object(P.default)(E.b)(h||(h=Object(H.a)(["\n  text-decoration: none;\n  color: ",";\n  transition: color .2s ease-in;\n\n  &:hover {\n    color: ","\n  }\n"])),(function(n){return n.theme.links.color}),(function(n){return n.theme.links.hover})),yn=P.default.button(f||(f=Object(H.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px 0 10px;\n  color: ",";\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  transition: background-color .3s ease-in;\n\n  ","\n  \n  ","\n\n  &:active {\n    outline: 1px solid ",";\n  }\n"])),(function(n){return n.theme.doneButton.color}),(function(n){return n.remove&&Object(P.css)(x||(x=Object(H.a)(["\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  "])),(function(n){return n.theme.removeButton.backgroundColor}),(function(n){return n.theme.removeButton.hover}))}),(function(n){return n.toggleDone&&Object(P.css)(p||(p=Object(H.a)(["\n    background-color: ",";\n    \n    &:hover {\n    background-color: ",";\n  "])),(function(n){return n.theme.doneButton.backgroundColor}),(function(n){return n.theme.doneButton.hover}))}),(function(n){return n.theme.accent.outline})),Cn=P.default.span(O||(O=Object(H.a)(["\n  word-break: break-word;\n\n  ","\n"])),(function(n){return n.done&&Object(P.css)(g||(g=Object(H.a)(["text-decoration: line-through;"])))})),Dn=function(){var n=Object(I.h)(),e=new URLSearchParams(n.search).get(mn),t=Object(z.c)((function(n){return function(n,e){var t=sn(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(z.c)(un),o=Object(z.b)();return Object(U.jsx)(vn,{children:t.map((function(n){return Object(U.jsxs)(kn,{hidden:n.done&&r,children:[Object(U.jsx)(yn,{toggleDone:!0,onClick:function(){return o(nn(n.id))},children:n.done?"\u2713":""}),Object(U.jsx)(Cn,{done:n.done,children:Object(U.jsx)(wn,{to:"/zadania/".concat(n.id),children:n.content})}),Object(U.jsx)(yn,{remove:!0,onClick:function(){return o(tn(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},Bn=P.default.div(m||(m=Object(H.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Fn=P.default.button(v||(v=Object(H.a)(["\n  margin: 0 20px 0 0;\n  color: ",";\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: color .2s ease-in;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n\n  &:disabled {\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    margin: 10px;\n  }\n"])),(function(n){return n.theme.hideAndFinishButtons.color}),(function(n){return n.theme.hideAndFinishButtons.hover}),(function(n){return n.theme.hideAndFinishButtons.active}),(function(n){return n.theme.hideAndFinishButtons.disabled}),(function(n){return n.theme.breakpoint.mobile})),Sn=function(){var n=Object(z.c)(dn),e=Object(z.c)(ln),t=Object(z.c)(un),r=Object(z.b)();return Object(U.jsx)(Bn,{children:!n&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(Fn,{onClick:function(){return r(_())},children:[t?"Show":"Hide"," done"]}),Object(U.jsx)(Fn,{onClick:function(){return r(en())},disabled:e,children:"Finish all"})]})})},Tn=function(){var n=Object(z.b)(),e=Object(z.c)(bn);return Object(U.jsx)(Fn,{disabled:e,onClick:function(){return n(rn())},children:e?"Loading...":"Download tasks examples"})},An=P.default.div(k||(k=Object(H.a)(["\n  display: grid;\n  grid-template-columns: 1fr\n"]))),Ln=function(){var n=Object(I.h)(),e=Object(I.g)(),t=new URLSearchParams(n.search).get(mn);return Object(U.jsx)(An,{children:Object(U.jsx)(On,{placeholder:"Filter tasks",value:t||"",onChange:function(t){var r=t.target,o=new URLSearchParams(n.search);""===r.value.trim()?o.delete(mn):o.set(mn,r.value),e.push("".concat(n.pathname,"?").concat(o.toString()))}})})},En=function(){return Object(U.jsxs)(N,{children:[Object(U.jsx)(J,{title:"List of tasks"}),Object(U.jsx)(Y,{button:Object(U.jsx)(Tn,{}),title:"Add new task",body:Object(U.jsx)(gn,{})}),Object(U.jsx)(Y,{title:"Search tasks",body:Object(U.jsx)(Ln,{})}),Object(U.jsx)(Y,{title:"List of to do",body:Object(U.jsx)(Dn,{}),extraHeaderContent:Object(U.jsx)(Sn,{})})]})},In=function(){return Object(U.jsxs)(N,{children:[Object(U.jsx)(J,{title:"About me"}),Object(U.jsx)(Y,{title:"Hello! I'm Szymon \ud83d\udc4b",body:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("p",{children:["I learn programming and I ",Object(U.jsx)("strong",{children:"really"})," love it! \ud83d\udc96"]}),Object(U.jsx)("p",{children:"Hopefully I will become a front-end developer  \ud83d\udcab"}),Object(U.jsx)("p",{children:"If you want to get to know my skills, please have a check my github profile."})]})})]})},zn=P.default.ul(w||(w=Object(H.a)(["\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  padding: 25px;\n  background-color: ",";\n"])),(function(n){return n.theme.navigation.backgroundColor})),Hn=P.default.li(y||(y=Object(H.a)(['\n  padding: 15px;\n  margin: 0 10px;\n  position: relative;\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: .5px;\n    background-color: white;\n    transform: scale(0, 1);\n    transition: transform 0.3s ease;\n      \n    ',"\n\n    ","\n  }\n\n  &:hover::after {\n    transform: scale(1, 1);\n  }\n"])),(function(n){return n.left&&Object(P.css)(C||(C=Object(H.a)(["\n      transform-origin: 0% 100%;\n    "])))}),(function(n){return n.right&&Object(P.css)(D||(D=Object(H.a)(["\n      transform-origin: 100% 0%;\n    "])))})),Pn="active",Nn=Object(P.default)(E.c).attrs((function(){return{activeClassName:Pn}}))(B||(B=Object(H.a)(["\n  padding: 20px;\n  color: ",";\n  letter-spacing: 1px;\n  text-decoration: none;\n  transition: .2s ease;\n\n  &:hover {\n    color: ",";\n  }\n\n  &."," {\n    font-weight: bold;\n  }\n"])),(function(n){return n.theme.navigation.color}),(function(n){return n.theme.navigation.hover}),Pn),Un=function(){return Object(U.jsx)("nav",{children:Object(U.jsxs)(zn,{children:[Object(U.jsx)(Hn,{left:!0,children:Object(U.jsx)(Nn,{to:"/zadania",children:"Zadania"})}),Object(U.jsx)(Hn,{right:!0,children:Object(U.jsx)(Nn,{to:"/author",children:"About me"})})]})})},Jn=function(){return Object(U.jsxs)(E.a,{children:[Object(U.jsx)(Un,{}),Object(U.jsxs)(I.d,{children:[Object(U.jsx)(I.b,{path:"/zadania/:id",children:Object(U.jsx)(hn,{})}),Object(U.jsx)(I.b,{path:"/zadania",children:Object(U.jsx)(En,{})}),Object(U.jsx)(I.b,{path:"/author",children:Object(U.jsx)(In,{})}),Object(U.jsx)(I.b,{path:"/",children:Object(U.jsx)(I.a,{to:"/zadania"})})]})]})},Rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},Mn=t(34),Gn=Object(P.createGlobalStyle)(F||(F=Object(H.a)(["\n\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  *, ::after, ::before {\n     box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.body.backgroundColor})),Wn="#FFF",Yn="#EEE",Zn="#DDD",qn="#008080",Kn="#00CCCC",Qn="#222",Vn={body:{backgroundColor:Yn},container:{backgroundColor:Wn},section:{backgroundColor:Wn},navigation:{color:Wn,backgroundColor:qn,hover:Yn},links:{color:qn,hover:Kn},addButton:{color:Wn,backgroundColor:qn,hover:"#009999",active:"#00B3B3"},hideAndFinishButtons:{color:qn,hover:Kn,active:"#004D4D",disabled:"#C9C2C2"},doneButton:{color:Wn,backgroundColor:"#1C8622",hover:"#05Af05"},removeButton:{backgroundColor:"#DB1414",hover:"#EE4444"},accent:{shadow:Zn,outline:Qn,borderLight:Zn,borderDark:Qn},breakpoint:{mobile:767,ipad:768}},Xn=t(37),$n=t(12),_n=t.n($n),ne=t(16),ee=t(35),te=function(){var n=Object(ee.a)(_n.a.mark((function n(){var e;return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/to-do-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=_n.a.mark(ae),oe=_n.a.mark(ie),ce=_n.a.mark(se);function ae(){var n;return _n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ne.c)(1e3);case 3:return e.next=5,Object(ne.b)(te);case 5:return n=e.sent,e.next=8,Object(ne.d)(on(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(ne.d)(cn());case 14:return e.next=16,Object(ne.b)(alert,"Something wrong!");case 16:case"end":return e.stop()}}),re,null,[[0,10]])}function ie(){var n;return _n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.e)(sn);case 2:return n=e.sent,e.next=5,Object(ne.b)(Q,n);case 5:case"end":return e.stop()}}),oe)}function se(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.g)(rn.type,ae);case 2:return n.next=4,Object(ne.f)("*",ie);case 4:case"end":return n.stop()}}),ce)}var ue=_n.a.mark(de);function de(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.a)([se()]);case 2:case"end":return n.stop()}}),ue)}var le=Object(Xn.a)(),be=Object(q.a)({reducer:{tasks:jn},middleware:[le]});le.run(de);var je=be;L.a.render(Object(U.jsx)(T.a.StrictMode,{children:Object(U.jsx)(z.a,{store:je,children:Object(U.jsxs)(P.ThemeProvider,{theme:Vn,children:[Object(U.jsx)(Mn.Normalize,{}),Object(U.jsx)(Gn,{}),Object(U.jsx)(Jn,{})]})})}),document.getElementById("root")),Rn()}},[[50,1,2]]]);
//# sourceMappingURL=main.ead8587c.chunk.js.map