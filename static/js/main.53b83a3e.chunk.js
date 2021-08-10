(this.webpackJsonpdir=this.webpackJsonpdir||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),i=n(12),s=n.n(i),d=(n(28),n(22)),o=n(3),l=(n(29),n(30),n(1)),u=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Task Manager"})})},j=n(8);!function(e){e.ADD_TASK="ADD_TASK",e.DELETE_TASK="DELETE_TASK",e.DELETE_ALL_TASKS="DELETE_ALL_TASKS"}(c||(c={}));n(36);var x=function(e){return e.length<56?e:"".concat(e.slice(0,53),"...")},b=function(e){var t=e.date,n=e.text,a=e.id,r=e.expired,i=Object(j.c)(),s=function(e){var t=e.target.closest(".task-item").getAttribute("data-id");i(function(e){var t=e.id;return{type:c.DELETE_TASK,id:t}}({id:String(t)}))};return r?Object(l.jsxs)("div",{className:"task-item expired","data-id":a,children:[Object(l.jsx)("span",{children:new Date(t).toDateString()}),Object(l.jsx)("p",{children:x(n)}),Object(l.jsx)("span",{className:"delete-task",onClick:s,children:"\u274c"})]}):Object(l.jsxs)("div",{className:"task-item","data-id":a,children:[Object(l.jsx)("span",{children:new Date(t).toDateString()}),Object(l.jsx)("p",{children:x(n)}),Object(l.jsx)("span",{className:"delete-task",onClick:s,children:"\u274c"})]})},p=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))},O=(n(37),function(){var e=Object(j.c)(),t=r.a.createRef();return Object(l.jsxs)("div",{className:"new-task",children:[Object(l.jsx)("input",{ref:t,type:"text",placeholder:"Enter new task",maxLength:120,size:50}),Object(l.jsx)("div",{className:"button-add-task",onClick:function(){var n,a=null===(n=t.current)||void 0===n?void 0:n.value,r=function(e){var t=e.text;return{id:p(),date:+new Date+6048e5,text:t,expired:!1}}({text:String(a)});e(function(e){var t=e.id,n=e.date,a=e.text;return{type:c.ADD_TASK,id:t,date:n,text:a,expired:!1}}(r))},children:Object(l.jsx)("span",{children:"Add new task"})})]})}),h=(n(38),function(){var e=Object(j.c)();return Object(l.jsx)("div",{className:"button-clear-all-wrapper",children:Object(l.jsx)("div",{className:"button-clear-all",onClick:function(){e({type:c.DELETE_ALL_TASKS}),console.log("clear all tasks")},children:Object(l.jsx)("span",{children:"Clear All"})})})}),f=Object(j.b)((function(e){return{tasks:e.taskReducer}}))((function(e){var t=e.tasks;return Object(l.jsxs)("div",{className:"tasks-container",children:[t.map((function(e){return Object(l.jsx)(b,{id:e.id,date:e.date,text:e.text,expired:e.expired},e.id)})),Object(l.jsx)(O,{}),Object(l.jsx)(h,{})]})})),v=(n(39),function(){return Object(l.jsx)("a",{href:"/Task-Manager/#/events",children:Object(l.jsx)("div",{className:"button-events",children:Object(l.jsx)("span",{children:"Events"})})})}),D=function(){return Object(l.jsx)("div",{className:"home-container",children:Object(l.jsx)(v,{})})},S=n(9),E=n(21),g=n(23),m=[{id:p(),date:new Date(+new Date-864e5),text:"Implementation testing application",expired:!1},{id:p(),date:new Date(+new Date+864e5),text:"Deploying testing application",expired:!1},{id:p(),date:new Date(+new Date+869e5),text:"Send testing application",expired:!1}],T=function(e){return e.map((function(e){return new Date(e.date)>=new Date||(e.expired=!0),e}))};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):m,t=arguments.length>1?arguments[1]:void 0;switch(e=T(e),t.type){case c.ADD_TASK:return[].concat(Object(g.a)(e),[{id:t.id,date:t.date,text:t.text,expired:t.expired}]);case c.DELETE_TASK:return e.filter((function(e){return e.id!==t.id}));case c.DELETE_ALL_TASKS:return[];default:return e}},A=Object(S.c)({taskReducer:k}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,w=Object(S.e)(A,_(Object(S.a)(E.a)));w.subscribe((function(){localStorage["redux-store"]=JSON.stringify(w.getState().taskReducer)}));var L=w;var N=function(){return Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)(u,{}),Object(l.jsx)(j.a,{store:L,children:Object(l.jsx)(d.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:D}),Object(l.jsx)(o.a,{exact:!0,path:"/events",component:f})]})})})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),K()}},[[41,1,2]]]);
//# sourceMappingURL=main.53b83a3e.chunk.js.map