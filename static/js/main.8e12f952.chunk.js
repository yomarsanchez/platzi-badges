(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},,,function(e,a,t){e.exports=t.p+"static/media/astronauts.71addf45.svg"},function(e,a,t){e.exports=t.p+"static/media/twitter.c9f12008.svg"},,function(e,a,t){e.exports=t.p+"static/media/badge-header.973f5842.svg"},function(e,a,t){e.exports=t.p+"static/media/img404.8d15ecbc.png"},function(e,a,t){e.exports=t(48)},,,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(20),c=t.n(l),s=(t(34),t(35),t(9)),o=t(10),m=t(2),i=t(3),d=t(4),u=t(5),f=(t(36),t(21)),p=t.n(f),b=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Navbar"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{to:"/",className:"Navbar__brand"},n.a.createElement("img",{className:"Navbar__brand-logo",src:p.a,alt:"Logo"}),n.a.createElement("span",{className:"font-weight-light"},"Platzi"),n.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),t}(n.a.Component);var g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),e.children)},h=(t(42),t(12)),E=t.n(h),v=t(24),N=t.n(v),w=function(){return n.a.createElement("div",{className:"Home"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"Home__col col-12 col-md-4"},n.a.createElement("img",{src:E.a,alt:"Conf Logo",className:"img-fluid mt-5 mb-3"}),n.a.createElement("h1",null,"PRINT YOUR BADGES"),n.a.createElement("p",null,"The easiest way to manage your conference"),n.a.createElement(s.b,{to:"/badges",className:"btn btn-primary"},"Start now")),n.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},n.a.createElement("img",{src:N.a,alt:"Astronauts",className:"img-fluid p-4"})))))},y=(t(43),t(44),t(25)),j=t.n(y),_=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"BadgesListItem"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-2 text-center"},n.a.createElement("img",{src:this.props.badge.avatarUrl,className:"BadgesListItem__avatar",alt:"".concat(this.props.badge.firstName," ").concat(this.props.badge.lastName)})),n.a.createElement("div",{className:"col-10"},n.a.createElement("div",{className:"BadgesListItem__body"},n.a.createElement("h6",{className:"font-weight-bold"},this.props.badge.firstName," ",this.props.badge.lastName),n.a.createElement("div",{className:"BadgesListItem__body-twitter"},n.a.createElement("img",{src:j.a,alt:"Twitter",width:"15"}),n.a.createElement("small",{className:"font-weight-normal"},"\xa0",n.a.createElement("b",null,"@"),this.props.badge.twitter)),n.a.createElement("small",null,this.props.badge.jobTitle),n.a.createElement("p",{className:"card-text text-right"},n.a.createElement("small",{className:"text-muted"},"3 mins ago"))))))}}]),t}(r.Component),O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"BadgesList"},n.a.createElement("ul",{className:"list-unstyled"},this.props.badges.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(_,{badge:e}))}))))}}]),t}(r.Component),C=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={badges:[{id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",firstName:"Freda",lastName:"Grady",email:"Leann_Berge@gmail.com",jobTitle:"Legacy Brand Director",twitter:"FredaGrady22221-7573",avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"},{id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",firstName:"Major",lastName:"Rodriguez",email:"Ilene66@hotmail.com",jobTitle:"Human Research Architect",twitter:"MajorRodriguez61545",avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"},{id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",firstName:"Daphney",lastName:"Torphy",email:"Ron61@hotmail.com",jobTitle:"National Markets Officer",twitter:"DaphneyTorphy96105",avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"},{id:"925952de-f43d-49c3-8e04-98f1c6b9e3e6",firstName:"Jasen",lastName:"Kulas",email:"Frieda89@yahoo.com",jobTitle:"Senior Research Consultant",twitter:"JasenKulas35396-9255",avatarUrl:"https://www.gravatar.com/avatar/0b7dc92c5cbcc2159b5ed9cb5d074867?d=identicon"},{id:"5f9b5d9f-4225-4706-b3b3-330762447071",firstName:"Maynard",lastName:"Rowe",email:"Ressie79@yahoo.com",jobTitle:"Dynamic Creative Engineer",twitter:"MaynardRowe74584",avatarUrl:"https://www.gravatar.com/avatar/4626f448a94e6d7c81c7bc3f7fc160da?d=identicon"},{id:"92e7da01-75e1-401a-80ab-11e97d14f87a",firstName:"Patricia",lastName:"Koch",email:"Eula98@yahoo.com",jobTitle:"Legacy Paradigm Developer",twitter:"PatriciaKoch50746",avatarUrl:"https://www.gravatar.com/avatar/d7be7c9206d8bdf7b99a61802ef42bfc?d=identicon"},{id:"c5f4a4ec-8cc0-4c09-a8f2-a3780d740084",firstName:"Helena",lastName:"Kilback",email:"Eryn2@gmail.com",jobTitle:"Dynamic Directives Orchestrator",twitter:"HelenaKilback49886-1693",avatarUrl:"https://www.gravatar.com/avatar/b2e9d23a39f852ab3bc67bd9a0176464?d=identicon"}]},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Badges"},n.a.createElement("div",{className:"Badges__hero"},n.a.createElement("div",{className:"Badges__container"},n.a.createElement("img",{className:"Badges_conf-logo",src:E.a,alt:"Logo"})))),n.a.createElement("div",{className:"Badges__container"},n.a.createElement("div",{className:"Badges__buttons"},n.a.createElement(s.b,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),n.a.createElement(O,{badges:this.state.badges})))}}]),t}(r.Component),T=t(14),B=t(26),x=(t(45),t(46),t(27)),k=t.n(x),L=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).attendantName=function(){return""!==e.props.firstName||""!==e.props.lastName?n.a.createElement("h1",null,e.props.firstName," ",n.a.createElement("br",null)," ",e.props.lastName):n.a.createElement("h1",null,"FIRST_NAME ",n.a.createElement("br",null)," LAST_NAME")},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Badge"},n.a.createElement("div",{className:"Badge__header"},n.a.createElement("img",{src:k.a,alt:"Logo de la conferencia"})),n.a.createElement("div",{className:"Badge__section-name"},n.a.createElement("img",{className:"Badge__avatar",src:this.props.avatarUrl,alt:"Avatar"}),this.attendantName()),n.a.createElement("div",{className:"Badge__section-info"},n.a.createElement("h3",null,this.props.jobTitle),n.a.createElement("div",null,"@",this.props.twitter)),n.a.createElement("div",{className:"Badge__footer"},"#PlatziConf"))}}]),t}(n.a.Component),F=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).handleClick=function(e){console.log("Button was clicked!")},e.handleSubmit=function(a){a.preventDefault(),console.log("Form was submitted!"),console.log(e.props.formValues)},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"New Attendant"),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",value:this.props.formValues.firstName,maxLength:"255",onChange:this.props.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",value:this.props.formValues.lastName,maxLength:"255",onChange:this.props.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.props.formValues.email,maxLength:"255",onChange:this.props.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"jobTitle"},"Job Title"),n.a.createElement("input",{type:"text",className:"form-control",id:"jobTitle",name:"jobTitle",value:this.props.formValues.jobTitle,maxLength:"255",onChange:this.props.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"twitter"},"Twitter"),n.a.createElement("input",{type:"text",className:"form-control",id:"twitter",name:"twitter",value:this.props.formValues.twitter,maxLength:"255",onChange:this.props.onChange})),n.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},"Save")))}}]),t}(r.Component),A=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(a){e.setState({form:Object(B.a)({},e.state.form,Object(T.a)({},a.target.name,a.target.value))})},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"BadgeNew__hero"},n.a.createElement("div",{className:"BadgeNew__container"},n.a.createElement("img",{className:"BadgeNew_conf-logo",src:E.a,alt:"Logo"}))),n.a.createElement("div",{className:"container mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 col-12 pt-2"},n.a.createElement(L,{firstName:this.state.form.firstName,lastName:this.state.form.lastName,email:this.state.form.email,jobTitle:this.state.form.jobTitle.length?this.state.form.jobTitle:"Job_Title",twitter:this.state.form.twitter.length?this.state.form.twitter:"Twitter",avatarUrl:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"})),n.a.createElement("div",{className:"col-md-6 col-12 pt-2"},n.a.createElement(F,{onChange:this.handleChange,formValues:this.state.form})))))}}]),t}(r.Component),R=(t(47),t(28)),U=t.n(R),S=function(){return n.a.createElement("div",{className:"Error404"},n.a.createElement("div",{className:"Error404__container"},n.a.createElement("figure",{className:"Error404__image"},n.a.createElement("img",{src:U.a,alt:"404 Not Found"})),n.a.createElement("div",{className:"text-center"},n.a.createElement("h4",null,"Whoops!"),n.a.createElement("p",null,"Error 404 page not found."))))};var D=function(){return n.a.createElement(s.a,null,n.a.createElement(g,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/"},n.a.createElement(w,null)),n.a.createElement(o.a,{exact:!0,path:"/badges"},n.a.createElement(C,null)),n.a.createElement(o.a,{exact:!0,path:"/badges/new"},n.a.createElement(A,null)),n.a.createElement(o.a,null,n.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.8e12f952.chunk.js.map