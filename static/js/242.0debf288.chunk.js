"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[242],{81:function(e,t,n){n.d(t,{Df:function(){return u},M1:function(){return d},TP:function(){return p},Wf:function(){return o},tx:function(){return v}});var r=n(861),a=n(757),s=n.n(a),i=n(16);function u(e){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("/trending/movie/day",{signal:t.signal});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={query:t,include_adult:!1,page:"1"},e.next=3,i.Z.get("/search/movie",{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("movie/".concat(t),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("movie/".concat(t,"/credits"),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.Z.defaults.params={language:"en-US"},e.next=3,i.Z.get("movie/".concat(t,"/reviews"),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers={accept:"application/json",authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWU5OGVkNjRhOTMyNTViMWE1OGRkYTBjMmQ3ZjgyZCIsIm5iZiI6MTY4ODEzNTI2MS40ODgsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3L17ajXIWbEuURTA8EQUPauHRGZSTBkQ0zYI6QS9vI"}},510:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(800),a=n(249),s={list:"MovieList_list__yjDCC",li:"MovieList_li__kXkJl"},i=n(184),u=function(e){var t=e.movies,n=(0,r.TH)();return t.length>0&&(0,i.jsx)("ul",{className:s.list,children:t.map((function(e){var t=e.id,u=e.title,c=e.year;return(0,i.jsx)("li",{className:s.li,children:(0,i.jsxs)(r.rU,{to:"".concat(a.H.MOVIES,"/").concat(t),state:{from:n},className:s.link,children:[u," ",c]})},t)}))})}},242:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),s=n(757),i=n.n(s),u=n(791),c=n(81),o=n(510),l=n(705),p="Home_title__L087v",f=n(184),d=function(){var e=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,u.useState)(!1),l=(0,a.Z)(o,2),p=l[0],f=l[1],d=(0,u.useState)(null),h=(0,a.Z)(d,2),v=h[0],g=h[1];return(0,u.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,r.Z)(i().mark((function t(){var n,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,(0,c.Df)(e);case 4:0===(n=t.sent).length&&g("Opps! Something went wrong. Try reload the page."),r=n.map((function(e){var t=e.id,n=e.title,r=e.release_date;return{id:t,title:n,year:new Date(r).getFullYear()}})),s(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),null!==(a=e.signal)&&void 0!==a&&a.aborted||g(t.t0.message);case 13:return t.prev=13,f(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[]),{list:n,isLoading:p,error:v}}(),t=e.list,n=e.isLoading,s=e.error;return(0,f.jsx)("main",{children:(0,f.jsx)("section",{children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h1",{className:p,children:"Trending movies"}),t.length>0&&(0,f.jsx)(o.e,{movies:t}),n&&(0,f.jsx)(l.a,{}),s&&(0,f.jsx)("p",{className:"error",children:s})]})})})}}}]);
//# sourceMappingURL=242.0debf288.chunk.js.map