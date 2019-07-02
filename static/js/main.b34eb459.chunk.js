(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(83)},53:function(e,t,a){},55:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=(a(53),a(9)),l=a(10),i=a(13),m=a(11),u=a(14),p=a(15),d=a(18),h=(a(54),a(55),function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))});h.defaultProps={branding:"My App"};var b=h,f=a(12),E=a(2),v=a.n(E),y=a(19),C=a(21),N=a.n(C),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onShowClick=function(e){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(e){a.props.deleteContact(e)},a.state={showContactInfo:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.contact,t=e.id,a=e.name,n=e.email,c=e.phone,o=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a," ",r.a.createElement("i",{onClick:this.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,t)}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),o&&r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"email : ",n),r.a.createElement("li",{className:"list-group-item"},"phone : ",c)))}}]),t}(n.Component),g=Object(f.b)(null,{deleteContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 3:a({type:"DELETE_CONTACT",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:"DELETE_CONTACT",payload:e});case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}})(O),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.map(function(e){return r.a.createElement(g,{key:e.id,contact:e})}))}}]),t}(n.Component),w=Object(f.b)(function(e){return{contacts:e.contact.contacts}},{getContacts:function(){return function(){var e=Object(y.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(j),k=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},e.match.params.id,"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},T=a(20),S=a(44),x=a.n(S),A=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:x()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}),l&&r.a.createElement("div",{className:"invalid-feedback"},"This is wrong"))};A.defaultProps={type:"text"};var _=A,D=a(45),P=a.n(D),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,c=t.phone;if(""!==n)if(""!==r)if(""!==c){var o={id:P()(),name:n,email:r,phone:c};a.props.addContact(o),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{email:"Email  is required"}});else a.setState({errors:{name:"Name is required"}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(_,{label:"Email",onChange:this.onChange,value:a,placeholder:"Enter Email...",name:"email",type:"email",error:c.email}),r.a.createElement(_,{label:"Phone",onChange:this.onChange,value:n,type:"tel",placeholder:"Enter Phone...",name:"phone",error:c.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),I=Object(f.b)(null,{addContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(q),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},M=a(17),U=a(46),G=a(47),R=a(22),X={contact:{},contacts:[]},F=Object(M.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return Object(R.a)({},e,{contacts:t.payload});case"GET_CONTACT":return Object(R.a)({},e,{contact:t.payload});case"DELETE_CONTACT":return Object(R.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(R.a)({},e,{contacts:[t.payload].concat(Object(G.a)(e.contacts))});case"UPDATE_CONTACT":return Object(R.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?t.payload:e})});default:return e}}}),V=[U.a],W=Object(M.e)(F,{},Object(M.d)(M.a.apply(void 0,V),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(y.a)(v.a.mark(function e(t){var n,r,c,o,s,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.name,c=n.email,o=n.phone,""!==r){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==c){e.next=8;break}return a.setState({errors:{email:"Email  is required"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:s=a.props.match.params.id,l={id:s,name:r,email:c,phone:o},a.props.updateContact(l),a.props.history.push("/");case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,r=a.email,c=a.phone;this.setState({name:n,email:r,phone:c})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(_,{label:"Email",onChange:this.onChange,value:a,placeholder:"Enter Email...",name:"email",type:"email",error:c.email}),r.a.createElement(_,{label:"Phone",onChange:this.onChange,value:n,type:"tel",placeholder:"Enter Phone...",name:"phone",error:c.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),J=Object(f.b)(function(e){return{contact:e.contact.contact}},{getContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,a({type:"GET_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e);case 2:n=t.sent,a({type:"UPDATE_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(B),H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:W},r.a.createElement(p.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(b,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:w}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:J}),r.a.createElement(d.a,{exact:!0,path:"/about/:id",component:k}),r.a.createElement(d.a,{component:L}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.b34eb459.chunk.js.map