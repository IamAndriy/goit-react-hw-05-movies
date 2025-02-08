"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[138],{81:function(e,t,n){n.d(t,{Df:function(){return u},M1:function(){return h},TP:function(){return f},Wf:function(){return o},tx:function(){return m}});var r=n(861),a=n(757),s=n.n(a),i=n(16);function u(e){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("/trending/movie/day",{signal:t.signal});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={query:t,include_adult:!1,page:"1"},e.next=3,i.Z.get("/search/movie",{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("movie/".concat(t),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("movie/".concat(t,"/credits"),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("movie/".concat(t,"/reviews"),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers={accept:"application/json",authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWU5OGVkNjRhOTMyNTViMWE1OGRkYTBjMmQ3ZjgyZCIsIm5iZiI6MTY4ODEzNTI2MS40ODgsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3L17ajXIWbEuURTA8EQUPauHRGZSTBkQ0zYI6QS9vI"}},510:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(800),a=n(249),s={list:"MovieList_list__yjDCC",li:"MovieList_li__kXkJl"},i=n(184),u=function(e){var t=e.movies,n=(0,r.TH)();return t.length>0&&(0,i.jsx)("ul",{className:s.list,children:t.map((function(e){var t=e.id,u=e.title,c=e.year;return(0,i.jsx)("li",{className:s.li,children:(0,i.jsxs)(r.rU,{to:"".concat(a.H.MOVIES,"/").concat(t),state:{from:n},className:s.link,children:[u," ",c]})},t)}))})}},138:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(439),a=n(791),s=n(329),i="SearchForm_form__o80os",u="SearchForm_input__HOxJo",c="SearchForm_btn__TXrR3",o=n(184),l=function(e){var t=e.onSubmit,n=(0,a.useState)(""),l=(0,r.Z)(n,2),f=l[0],p=l[1];return(0,o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!f.trim())return(0,s.Am)("The query is empty! Please, point what do you want to find!");t(f),p("")},className:i,children:[(0,o.jsx)("input",{className:u,id:"searchQuery",type:"text",value:f,placeholder:"search movie",onChange:function(e){var t=e.target;p(t.value)}}),(0,o.jsx)("button",{className:c,type:"submit",children:"Search"})]})},f=n(510),p=n(705),h=n(861),d=n(757),m=n.n(d),v=n(800),g=n(81),y=function(){var e=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,a.useState)(!1),u=(0,r.Z)(i,2),c=u[0],o=u[1],l=(0,a.useState)(null),f=(0,r.Z)(l,2),p=f[0],d=f[1],y=(0,v.lr)(),x=(0,r.Z)(y,2),Z=x[0],_=x[1];return(0,a.useEffect)((function(){var e=new AbortController,t=Z.get("query"),n=function(){var n=(0,h.Z)(m().mark((function n(){var r,a,i;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,g.Wf)(t,e);case 4:r=n.sent,t&&0===r.length&&d("We didn't find any movie for your query \"".concat(t,'"')),a=r.map((function(e){var t=e.id,n=e.title,r=e.release_date;return{id:t,title:n,year:new Date(r).getFullYear()}})),s(a),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),null!==(i=e.signal)&&void 0!==i&&i.aborted||d(n.t0.message);case 13:return n.prev=13,o(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){e.abort()}}),[Z]),{list:n,isLoading:c,error:p,onChangeParams:function(e){_({query:e})}}}(),t=e.list,n=e.isLoading,s=e.error,i=e.onChangeParams;return(0,o.jsx)("main",{children:(0,o.jsx)("section",{children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l,{onSubmit:i}),t.length>0&&(0,o.jsx)(f.e,{movies:t}),n&&(0,o.jsx)(p.a,{}),s&&(0,o.jsx)("p",{className:"error",children:s})]})})})}}}]);
//# sourceMappingURL=138.f4789a2c.chunk.js.map