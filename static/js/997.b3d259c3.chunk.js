"use strict";(self.webpackChunkgoit_react_hw_04_images=self.webpackChunkgoit_react_hw_04_images||[]).push([[997],{997:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),u=n(16);function o(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day",{signal:t.signal});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.headers={accept:"application/json",authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWU5OGVkNjRhOTMyNTViMWE1OGRkYTBjMmQ3ZjgyZCIsIm5iZiI6MTY4ODEzNTI2MS40ODgsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3L17ajXIWbEuURTA8EQUPauHRGZSTBkQ0zYI6QS9vI"},u.Z.defaults.params={language:"en-US"};var h=n(162),d=n(249),f="MovieList_list__yjDCC",p="MovieList_li__kXkJl",v="MovieList_link__+cn-g",g=n(184),m=function(e){var t=e.movies,n=(0,h.TH)();return t.length>0&&(0,g.jsx)("ul",{className:f,children:t.map((function(e){var t=e.id,r=e.title,a=e.year;return(0,g.jsx)("li",{className:p,children:(0,g.jsxs)(h.rU,{to:"".concat(d.H.MOVIES,"/").concat(t),state:{from:n},className:v,children:[r," ",a]})},t)}))})},_=n(854),j={container:"Home_container__AHomM"},x=function(){var e=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],u=(0,c.useState)(!1),l=(0,a.Z)(u,2),h=l[0],d=l[1],f=(0,c.useState)(null),p=(0,a.Z)(f,2),v=p[0],g=p[1];return(0,c.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,r.Z)(s().mark((function t(){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,o(e);case 4:0===(n=t.sent).length&&g("Opps! Something went wrong. Try reload the page."),r=n.map((function(e){var t=e.id,n=e.title,r=e.release_date;return{id:t,title:n,year:new Date(r).getFullYear()}})),i(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),null!==(a=e.signal)&&void 0!==a&&a.aborted||g(t.t0);case 13:return t.prev=13,d(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[]),{list:n,isLoading:h,error:v}}(),t=e.list,n=e.isLoading,i=e.error;return(0,g.jsx)("main",{children:(0,g.jsx)("section",{children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h1",{className:j.title,children:"Trending movies"}),t.length>0&&(0,g.jsx)(m,{movies:t}),n&&(0,g.jsx)(_.a,{}),i&&(0,g.jsx)("p",{children:i})]})})})}}}]);
//# sourceMappingURL=997.b3d259c3.chunk.js.map