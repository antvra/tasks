(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(10),r=n.n(c),i=n(8),s=n(2),o=n(3),l=n(4),u=n(5),d=n(7),j=n(6),f=n(0),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.onSubmit=function(t){var n=e.state.value,a=e.props.addTask;t.preventDefault(),n.trim()&&a(n),e.setState({value:""})},e.onInputChange=function(t){e.setState({value:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return Object(f.jsxs)("form",{className:"header",onSubmit:this.onSubmit,children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)("label",{children:Object(f.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.onInputChange,value:e})})]})}}]),n}(a.Component),p=b,h=n(11),k=function(e){var t=e.id,n=e.description,a=e.time,c=e.deleteTask,r=e.onToggleCompleted,i=e.onEditing,s=e.editing,o=e.active,l=e.editTask,u=Object(h.a)(a,{includeSeconds:!0}),d="";return o||(d+=" completed"),o&&(d+=" active"),s&&(d+=" editing"),Object(f.jsxs)("li",{className:d,children:[Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{id:t,checked:!o,className:"toggle",type:"checkbox",onChange:function(){return r(t)}}),Object(f.jsxs)("label",{htmlFor:t,children:[Object(f.jsx)("span",{className:"description",children:n}),Object(f.jsx)("span",{className:"created",children:u})]}),Object(f.jsx)("button",{"aria-label":"edit btn",type:"button",className:"icon icon-edit",onClick:function(){return i(t)}}),Object(f.jsx)("button",{"aria-label":"delete btn",type:"button",className:"icon icon-destroy",onClick:function(){return c(t)}})]}),s&&Object(f.jsx)("label",{style:{padding:0},children:Object(f.jsx)("input",{type:"text",className:"edit",defaultValue:n,onKeyDown:function(e){if(13===e.keyCode){var n=e.target.value;n.trim()&&l(t,n),i(t)}else 27===e.keyCode&&i(t)}})})]})},O=function(e){var t=e.tasks,n=e.deleteTask,c=e.onToggleCompleted,r=e.onEditing,i=e.editTask;return Object(f.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(a.createElement)(k,Object(s.a)(Object(s.a)({},e),{},{key:e.id,deleteTask:function(e){return n(e)},onToggleCompleted:function(e){return c(e)},onEditing:function(e){return r(e)},editTask:function(e,t){return i(e,t)}}))}))})};O.defaultProps={tasks:[]};var v=O,m=function(e){var t=e.changeFilter,n=e.filterProp;return Object(f.jsxs)("ul",{className:"filters",children:[Object(f.jsx)("li",{children:Object(f.jsx)("button",{type:"button",className:"all"===n?"selected":null,onClick:function(){return t("all")},children:"All"})}),Object(f.jsx)("li",{children:Object(f.jsx)("button",{type:"button",className:"active"===n?"selected":null,onClick:function(){return t("active")},children:"Active"})}),Object(f.jsx)("li",{children:Object(f.jsx)("button",{type:"button",className:"completed"===n?"selected":null,onClick:function(){return t("completed")},children:"Completed"})})]})},g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).callDeleteForAll=function(){var t=e.props,n=t.tasks,a=t.deleteTask;n.filter((function(e){return!e.active})).map((function(e){return e.id})).forEach((function(e){return a(e)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.leftCount,n=e.changeFilter,a=e.filterProp;return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[t," items left"]}),Object(f.jsx)(m,{changeFilter:function(e){return n(e)},filterProp:a}),Object(f.jsx)("button",{type:"button",className:"clear-completed",onClick:this.callDeleteForAll,children:"Clear completed"})]})}}]),n}(a.Component);g.defaultProps={leftCount:0,filterProp:"all"};var x=g,T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).maxId=100,e.state={tasks:[e.createTask("Completed task"),e.createTask("Editing task"),e.createTask("Active task")],filterProp:"all"},e.changeFilter=function(t){e.setState({filterProp:t})},e.addTask=function(t,n){var a=e.createTask(t,n);e.setState((function(e){var t=e.tasks;return{tasks:[].concat(Object(o.a)(t),[a])}}))},e.deleteTask=function(t){e.setState((function(e){var n=e.tasks,a=n.findIndex((function(e){return e.id===t}));return{tasks:[].concat(Object(o.a)(n.slice(0,a)),Object(o.a)(n.slice(a+1)))}}))},e.onToggleCompleted=function(t){e.setState((function(n){var a=n.tasks;return{tasks:e.toggleProps(a,t,"active")}}))},e.onEditing=function(t){e.setState((function(n){var a=n.tasks;return{tasks:e.toggleProps(a,t,"editing")}}))},e.editTask=function(t,n){var a=e.state.tasks,c=a.findIndex((function(e){return e.id===t})),r=a[c],i=Object(s.a)(Object(s.a)({},r),{},{description:n}),l=[].concat(Object(o.a)(a.slice(0,c)),[i],Object(o.a)(a.slice(c+1)));e.setState({tasks:l})},e}return Object(u.a)(n,[{key:"toggleProps",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),c=e[a],r=Object(s.a)(Object(s.a)({},c),{},Object(i.a)({},n,!c[n]));return[].concat(Object(o.a)(e.slice(0,a)),[r],Object(o.a)(e.slice(a+1)))}},{key:"createTask",value:function(e){var t=Date.now();return this.maxId+=1,{description:e,time:t,id:this.maxId,editing:!1,active:!0}}},{key:"render",value:function(){var e=this,t=this.state,n=t.tasks,a=t.filterProp,c="all"===a?n:n.filter((function(e){return"completed"===a?!e.active:e.active})),r=n.filter((function(e){return!e.active})).length,i=n.length-r;return Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsx)(p,{addTask:this.addTask}),Object(f.jsxs)("section",{className:"main",children:[Object(f.jsx)(v,{tasks:c,deleteTask:function(t){return e.deleteTask(t)},onToggleCompleted:function(t){return e.onToggleCompleted(t)},onEditing:function(t){return e.onEditing(t)},editTask:function(t,n){return e.editTask(t,n)}}),Object(f.jsx)(x,{leftCount:i,filterProp:a,tasks:n,deleteTask:function(t){return e.deleteTask(t)},changeFilter:function(t){return e.changeFilter(t)}})]})]})}}]),n}(a.Component),C=T;n(17);r.a.render(Object(f.jsx)(C,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6af20171.chunk.js.map