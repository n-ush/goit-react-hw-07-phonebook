(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={list:"ContactList_list__3ikVR",list_item:"ContactList_list_item__2NQ4d",contact:"ContactList_contact__2xXPv"}},32:function(t,e,n){t.exports={input:"Filter_input__148r7"}},70:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),i=n(13),u=n(14),s=n(16),b=n(15),l=n(4),d=n(6),j=n(21),f=n.n(j),h=n(8),m=n.n(h),O=n(22),p=n.n(O),C=n(31),g=n(9),v=n.n(g),x=n(2),_=Object(x.b)("contacts/fetchContactRequest"),y=Object(x.b)("contacts/fetchContactSuccess"),I=Object(x.b)("contacts/fetchContactError"),k=Object(x.b)("contacts/addContactRequest"),F=Object(x.b)("contacts/addContactSuccess"),S=Object(x.b)("contacts/addContactError"),L=Object(x.b)("contacts/deleteContactRequest"),N=Object(x.b)("contacts/deleteContactSuccess"),w=Object(x.b)("contacts/deleteContactError"),A=Object(x.b)("contacts/changeFilter");v.a.defaults.baseURL=" http://localhost:4040";var z,R,q=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n,id:""};t(k()),v.a.post("/contacts",c).then((function(e){var n=e.data;return t(F(n))})).catch((function(e){return t(S(e))}))}},D=function(t){return function(e){e(L()),v.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(w(t))}))}},E=function(){return function(){var t=Object(C.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,v.a.get("/contacts");case 4:n=t.sent,c=n.data,e(y(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(I(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},M=n(1),J=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=f.a.generate(),t.numberInputId=f.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(l.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(M.jsxs)("form",{onSubmit:this.handleSubmit,className:m.a.form,children:[Object(M.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(M.jsx)("input",{value:this.state.name,type:"text",name:"name",id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange,className:m.a.input}),Object(M.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(M.jsx)("input",{value:this.state.number,id:this.numberInputId,onChange:this.handleInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:m.a.input}),Object(M.jsx)("button",{type:"submit",className:m.a.btn,children:"Add contact"})]})}}]),n}(c.Component),T=Object(d.b)(null,(function(t){return{onSubmit:function(e,n){return t(q(e,n))}}}))(J),Z=n(17),B=n.n(Z),P=n(12),H=function(t){return t.contacts.filter},K={getLoading:function(t){return t.contacts.loading},getFilter:H,getFilteredContacts:Object(P.a)([function(t){return t.contacts.items},H],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},Q=Object(d.b)((function(t){return{contacts:K.getFilteredContacts(t)}}),(function(t){return{onDelete:function(e){return t(D(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(M.jsx)("ul",{className:B.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(M.jsxs)("li",{className:B.a.list_item,children:[Object(M.jsxs)("div",{className:B.a.contact,children:[Object(M.jsxs)("p",{children:[c,":"]}),Object(M.jsx)("p",{children:a})]}),Object(M.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),U=n(32),V=n.n(U),X=Object(d.b)((function(t){return{value:K.getFilter(t)}}),(function(t){return{onChange:function(e){return t(A(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(M.jsxs)("label",{children:["Find contacts by name",Object(M.jsx)("input",{type:"text",value:e,onChange:n,className:V.a.input})]})})),$=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{children:"Phonebook"}),Object(M.jsx)(T,{}),Object(M.jsx)("h2",{children:"Contacts"}),Object(M.jsx)(X,{}),Object(M.jsx)(Q,{}),this.props.isLoading&&Object(M.jsx)("h1",{children:"Loading..."})]})}}]),n}(c.Component),G=Object(d.b)((function(t){return{isLoading:K.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(E())}}}))($),W=(n(70),n(33)),Y=n(3),tt=Object(x.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(z={},Object(l.a)(z,y,(function(t,e){return e.payload})),Object(l.a)(z,F,(function(t,e){var n=e.payload;return[].concat(Object(W.a)(t),[n])})),Object(l.a)(z,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),z)),et=Object(x.c)(!1,(R={},Object(l.a)(R,_,(function(){return!0})),Object(l.a)(R,y,(function(){return!1})),Object(l.a)(R,I,(function(){return!1})),Object(l.a)(R,k,(function(){return!0})),Object(l.a)(R,F,(function(){return!1})),Object(l.a)(R,S,(function(){return!1})),Object(l.a)(R,L,(function(){return!0})),Object(l.a)(R,N,(function(){return!1})),Object(l.a)(R,w,(function(){return!1})),R)),nt=Object(x.c)("",Object(l.a)({},A,(function(t,e){return e.payload}))),ct=Object(x.c)(null,{}),at=Object(Y.b)({items:tt,filter:nt,loading:et,error:ct}),rt=n(7),ot=Object(x.a)({reducer:{contacts:at},devTools:!1,middleware:Object(x.d)({serializableCheck:{ignoredActions:[rt.a,rt.f,rt.b,rt.c,rt.d,rt.e]}})});console.log(ot),o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(d.a,{store:ot,children:Object(M.jsx)(G,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__zlgxM",input:"ContactForm_input__1gTh-",label:"ContactForm_label__1CCsp"}}},[[71,1,2]]]);
//# sourceMappingURL=main.9d64909c.chunk.js.map