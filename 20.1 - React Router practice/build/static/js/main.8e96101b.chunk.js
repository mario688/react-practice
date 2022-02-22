(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";var c=n(27),r=n.n(c),s=n(0);t.a=function(){return Object(s.jsx)("div",{className:r.a.spinner})}},function(e,t,n){"use strict";var c=n(14),r=n(4),s=n.n(r),a=n(12),o=n(17),i=n(1);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(u,{status:t?"pending":null,data:null,error:null}),r=Object(o.a)(n,2),j=r[0],d=r[1],l=Object(i.useCallback)(function(){var t=Object(a.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,d({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:l},j)}},function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return x}));var c=n(4),r=n.n(c),s=n(14),a=n(12),o="https://react-http-2660e-default-rtdb.europe-west1.firebasedatabase.app";function i(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(r.a.mark((function e(){var t,n,c,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in c=[],n)i=Object(s.a)({id:a},n[a]),c.push(i);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(r.a.mark((function e(t){var n,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return a=Object(s.a)({id:t},c),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(r.a.mark((function e(t){var n,c,a,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(i in a=[],c)u=Object(s.a)({id:i},c[i]),a.push(u);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},,,,function(e,t,n){e.exports={header:"MainNavigation_header__3c6YD",logo:"MainNavigation_logo__xkEIK",nav:"MainNavigation_nav__aTaZz",active:"MainNavigation_active__3Cs8O"}},,,function(e,t,n){e.exports={form:"NewCommentForm_form__1SZf2",loading:"NewCommentForm_loading__1eYh1",control:"NewCommentForm_control__3pyjW",actions:"NewCommentForm_actions__3HPZT"}},,,,,function(e,t,n){e.exports={list:"QuoteList_list__2Meco",sorting:"QuoteList_sorting__3l5KO"}},,function(e,t,n){e.exports={item:"QuoteItem_item__3o_L6"}},,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2jueV"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__1Dm4a"}},function(e,t,n){e.exports={item:"CommentItem_item__3v7lg"}},function(e,t,n){e.exports={comments:"CommentsList_comments__1EPFw"}},function(e,t,n){e.exports={comments:"Comments_comments__3s33X"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__1HDTV"}},function(e,t,n){e.exports={main:"Layout_main__2nne0"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(24),r=n.n(c),s=n(5),a=(n(38),n(1)),o=n.n(a),i=n(2),u=n(10),j=n(11),d=n(25),l=n.n(d),m=n(0),b=function(e){return Object(m.jsxs)("li",{className:l.a.item,children:[Object(m.jsxs)("figure",{children:[Object(m.jsx)("blockquote",{children:Object(m.jsx)("p",{children:e.text})}),Object(m.jsx)("figcaption",{children:e.author})]}),Object(m.jsx)(s.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},h=n(23),x=n.n(h),p=function(e){var t,n,c=Object(i.h)(),r=Object(i.i)(),s="asc"===new URLSearchParams(r.search).get("sort"),o=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)("div",{className:x.a.sorting,children:Object(m.jsxs)("button",{onClick:function(){c.push({pathname:r.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"Descending":"Ascending"]})}),Object(m.jsx)("ul",{className:x.a.list,children:o.map((function(e){return Object(m.jsx)(b,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},f=n(9),O=n(28),v=n.n(O),_=function(){return Object(m.jsxs)("div",{className:v.a.noquotes,children:[Object(m.jsx)("p",{children:"No quotes found!"}),Object(m.jsx)(s.b,{to:"new-quote",className:"btn",children:"Add a Quote"})]})};function g(){var e=Object(u.a)(j.d,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(f.a,{})}):"error"===n?Object(m.jsx)("p",{className:"centered focused",children:r}):"completed"===n&&!c||0===c.length?Object(m.jsx)(_,{}):Object(m.jsx)(p,{quotes:c})}var N=n(17),w=n(29),q=n.n(w),C=function(e){return Object(m.jsx)("li",{className:q.a.item,children:Object(m.jsx)("p",{children:e.text})})},y=n(30),k=n.n(y),S=function(e){return Object(m.jsx)("ul",{className:k.a.comments,children:e.comments.map((function(e){return Object(m.jsx)(C,{text:e.text},e.id)}))})},E=n(31),Q=n.n(E),R=n(18),D=n.n(R),F=function(e){var t=Object(a.useRef)(),n=e.onAddedComment,c=Object(u.a)(j.a),r=c.sendRequest,s=c.status,o=c.error;Object(a.useEffect)((function(){"completed"!==s||o||n()}),[s,o,n]);var i=function(n){n.preventDefault(),r({commentData:{text:t.current.value},quoteId:e.quoteId})};return Object(m.jsxs)("form",{className:D.a.form,onSubmit:i,children:["pending"===s&&Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(f.a,{})}),Object(m.jsxs)("div",{className:D.a.control,onSubmit:i,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(m.jsx)("div",{className:D.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},I=function(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(i.j)(),s=Object(u.a)(j.c),o=s.sendRequest,d=s.status,l=s.data;Object(a.useEffect)((function(){o(r.idQuote)}),[r.idQuote,o]);var b,h=Object(a.useCallback)((function(){o(r.idQuote)}),[o,r.idQuote]);return"pending"===d&&(b=Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(f.a,{})})),"completed"===d&&l&&l.length>0&&(b=Object(m.jsx)(S,{comments:l})),"completed"!==d||l&&0!==l.length||(b=Object(m.jsx)("p",{className:"centered",children:"No comments"})),Object(m.jsxs)("section",{className:Q.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!n&&Object(m.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(m.jsx)(F,{quoteId:r.idQuote,onAddedComment:h}),b]})},A=n(32),L=n.n(A),M=function(e){return Object(m.jsxs)("figure",{className:L.a.quote,children:[Object(m.jsx)("p",{children:e.text}),Object(m.jsx)("figcaption",{children:e.author})]})};function T(){var e=Object(i.j)(),t=Object(i.k)(),n=e.idQuote,c=Object(u.a)(j.e,!0),r=c.sendRequest,o=c.status,d=c.data,l=c.error;return Object(a.useEffect)((function(){r(n)}),[r,n]),"pending"===o?Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(f.a,{})}):l?Object(m.jsx)("p",{className:"centered focused",children:l}):d.text?Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Qoute details"}),Object(m.jsx)(M,{text:d.text,author:d.author}),Object(m.jsx)(i.c,{path:t.path,exact:!0,children:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Comments"})})}),Object(m.jsx)(i.c,{path:"".concat(t.path,"/comments"),children:Object(m.jsx)(I,{})})]}):Object(m.jsx)("p",{className:"centered focused",children:"not found"})}var P=n(33),J=n.n(P),U=n(15),z=n.n(U);function H(){return Object(m.jsxs)("header",{className:z.a.header,children:[Object(m.jsx)("div",{className:z.a.logo,children:"Gerat Quotes"}),Object(m.jsx)("nav",{className:z.a.nav,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(s.c,{to:"/quotes",activeClassName:z.a.active,children:"All Quotes"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.c,{to:"/new-quote",activeClassName:z.a.active,children:"Add a quote"})})]})})]})}function V(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(H,{}),Object(m.jsx)("main",{className:J.a.main,children:e.children})]})}var Y=o.a.lazy((function(){return n.e(3).then(n.bind(null,53))})),Z=o.a.lazy((function(){return n.e(4).then(n.bind(null,52))}));var K=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(V,{children:Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(f.a,{})}),children:Object(m.jsxs)(i.e,{children:[Object(m.jsx)(i.c,{path:"/",exact:!0,children:Object(m.jsx)(i.b,{to:"/quotes"})}),Object(m.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(m.jsx)(g,{})}),Object(m.jsx)(i.c,{path:"/quotes/:idQuote",children:Object(m.jsx)(T,{})}),Object(m.jsx)(i.c,{path:"/new-quote",children:Object(m.jsx)(Y,{})}),Object(m.jsx)(i.c,{path:"*",children:Object(m.jsx)(Z,{})})]})})})})};r.a.render(Object(m.jsx)(s.a,{children:Object(m.jsx)(K,{})}),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.8e96101b.chunk.js.map