(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/spinner.aa42f151.gif"},17:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),c=n.n(o),i=(n(26),n(6)),l=n(7),s=n(9),u=n(5),p=n(8),h=(n(28),n(11)),m=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg bg-light"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},"NewsMonkey"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link active","aria-current":"page",to:"/general"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/Business"},"Business")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/Entertainment"},"Entertainment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/General"},"General")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/Health"},"Health")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/Science"},"Science")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/Sports"},"Sports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/Technology"},"Technology")))))))}}]),t}(a.Component),f=n(4),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,a=e.imageUrl,o=e.newsUrl,c=e.author,i=e.date,l=e.source;return r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{class:"card",style:{width:"18rem"}},r.a.createElement("img",{src:a,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},t,r.a.createElement("span",{className:"badge bg-secondary"},"New"),r.a.createElement("span",{className:"position-absolute top-0  translate-middle badge rounded-pill bg-danger",style:{left:"90%",zIndex:"1"}},l)),r.a.createElement("p",{class:"card-text"},n),r.a.createElement("p",{class:"card-text"},r.a.createElement("small",{className:"text-muted"},"By ",c||"Unknown"," on ",new Date(i).toGMTString())),r.a.createElement("a",{href:o,target:"_blank",class:"btn btn-sm btn-primary",rel:"noreferrer"},"Read More"))))}}]),t}(a.Component),g=n(16),y=n.n(g),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:y.a,alt:"spinner"}))}}]),t}(a.Component),b=n(13),E=n.n(b);function w(){w=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(z){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new O(r||[]);return a(c,"_invoke",{value:x(e,n,i)}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(z){return{type:"throw",arg:z}}}e.wrap=s;var p={};function h(){}function m(){}function f(){}var d={};l(d,o,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==t&&n.call(y,o)&&(d=y);var v=f.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;a(this,"_invoke",{value:function(a,o){function c(){return new t(function(r,c){!function a(r,o,c,i){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then(function(e){a("next",e,c,i)},function(e){a("throw",e,c,i)}):t.resolve(p).then(function(e){s.value=e,c(s)},function(e){return a("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}})}function x(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===p)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=f,a(v,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:m,configurable:!0}),m.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new E(s(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(v),l(v,i,"Generator"),l(v,o,function(){return this}),l(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}var x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},n.handlePrevClick=Object(f.a)(w().mark(function e(){var t,a,r;return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(n.props.country,"&category=").concat(n.props.category,"&apiKey=b8a64c874eb04772b999a9df634d9f8c &page=").concat(n.state.page-1,"&pageSize=").concat(n.props.pageSize),n.setState({loading:!0}),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,console.log(r),n.setState({page:n.state.page-1,articles:r.articles,loading:!1});case 10:case"end":return e.stop()}},e)})),n.handleNextClick=Object(f.a)(w().mark(function e(){var t,a,r;return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Next"),n.state.page+1>Math.ceil(n.state.totalResults/n.props.pageSize)){e.next=12;break}return t="https://newsapi.org/v2/top-headlines?country=".concat(n.props.country,"&category=").concat(n.props.category,"&apiKey=b8a64c874eb04772b999a9df634d9f8c &page=").concat(n.state.page+1,"&pageSize=").concat(n.props.pageSize),n.setState({loading:!0}),e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,console.log(r),n.setState({page:n.state.page+1,articles:r.articles,loading:!1});case 12:case"end":return e.stop()}},e)})),console.log("Hello I am a constructor from News component"),n.state={articles:[],loading:!1,page:1},document.title="".concat(n.capitalizeFirstLetter(n.props.category),"-NewsMonkey}"),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(w().mark(function e(){var t,n,a;return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cdm"),t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=b8a64c874eb04772b999a9df634d9f8c&page-1&pageSize=").concat(this.props.pageSize),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,console.log(a),this.setState({articles:a.articles});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container my-3"},r.a.createElement("h1",{className:"text-center m-5 text-danger"},"NewsMonkey-Top ",this.capitalizeFirstLetter(this.props.category)," Headlines"),this.state.loading&&r.a.createElement(v,null),r.a.createElement("div",{className:"row"},!this.state.loading&&this.state.articles.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.url},r.a.createElement(d,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name}))}),r.a.createElement("div",null,r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("button",{disabled:this.state.page<=1,type:"button",className:"btn btn-dark",onClick:this.handlePrevClick},"\u2190 Previous"),r.a.createElement("button",{disebled:this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize),type:"button",className:"btn btn-dark",onClick:this.handleNextClick},"Next \u2192")))))}}]),t}(a.Component);x.defaultProps={country:"in",pageSize:6,category:"genral"},x.defaultProps={country:E.a.string,pageSize:E.a.number,category:E.a.string};var N=x,k=n(0),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/general",element:r.a.createElement(N,{key:"general",pageSize:5,country:"in",category:"general"})}," "),r.a.createElement(k.a,{exact:!0,path:"/business",element:r.a.createElement(N,{key:"business",pageSize:5,country:"in",category:"business"})}," "),r.a.createElement(k.a,{exact:!0,path:"/entertainment",element:r.a.createElement(N,{key:"entertainment",pageSize:5,country:"in",category:"entertainment"})}," "),r.a.createElement(k.a,{exact:!0,path:"/general",element:r.a.createElement(N,{pageSize:5,key:"general",country:"in",category:"general"})}," "),r.a.createElement(k.a,{exact:!0,path:"/health",element:r.a.createElement(N,{pageSize:5,key:"health",country:"in",category:"health"})}," "),r.a.createElement(k.a,{exact:!0,path:"/science",element:r.a.createElement(N,{pageSize:5,key:"science",country:"in",category:"science"})}," "),r.a.createElement(k.a,{exact:!0,path:"/sports",element:r.a.createElement(N,{key:"sports",pageSize:5,country:"in",category:"sports"})}," "),r.a.createElement(k.a,{exact:!0,path:"/technology",element:r.a.createElement(N,{key:"technology",pageSize:5,country:"in",category:"technology"})}," "))))}}]),t}(a.Component),O=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,33)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),O()}},[[17,3,2]]]);
//# sourceMappingURL=main.9a658be9.chunk.js.map