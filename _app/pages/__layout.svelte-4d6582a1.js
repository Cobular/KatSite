import{S as s,i as e,s as t,e as a,t as n,c as r,a as l,g as c,d as o,b as i,f as u,D as h,E as f,F as g,G as $,h as m,H as p,j as b,m as d,o as v,p as k,q as x,x as E,u as O,v as T,k as w,n as q,r as F,w as H,I as _,B as A,J as S,K as j,L as B,M as z}from"../chunks/vendor-b7600148.js";function D(s){let e,t,g;return{c(){e=a("footer"),t=a("h1"),g=n("FOOOTTT!!!!"),this.h()},l(s){e=r(s,"FOOTER",{class:!0});var a=l(e);t=r(a,"H1",{class:!0});var n=l(t);g=c(n,"FOOOTTT!!!!"),n.forEach(o),a.forEach(o),this.h()},h(){i(t,"class","svelte-1xk4o5q"),i(e,"class","svelte-1xk4o5q")},m(s,a){u(s,e,a),h(e,t),h(t,g)},p:f,i:f,o:f,d(s){s&&o(e)}}}class G extends s{constructor(s){super(),e(this,s,null,D,t,{})}}const I={subscribe:s=>(()=>{const s=g("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}})().page.subscribe(s)};function J(s){let e,t;return{c(){e=a("a"),t=n(s[0]),this.h()},l(a){e=r(a,"A",{href:!0,class:!0});var n=l(e);t=c(n,s[0]),n.forEach(o),this.h()},h(){i(e,"href",s[1]),i(e,"class","nav-item link svelte-1utqazw"),$(e,"selected",s[3](s[2].path))},m(s,a){u(s,e,a),h(e,t)},p(s,[a]){1&a&&m(t,s[0]),2&a&&i(e,"href",s[1]),12&a&&$(e,"selected",s[3](s[2].path))},i:f,o:f,d(s){s&&o(e)}}}function K(s,e,t){let a;p(s,I,(s=>t(2,a=s)));let{label:n}=e,{url:r}=e;return s.$$set=s=>{"label"in s&&t(0,n=s.label),"url"in s&&t(1,r=s.url)},[n,r,a,function(s){return s.startsWith(r)}]}class L extends s{constructor(s){super(),e(this,s,K,J,t,{label:0,url:1})}}function M(s,e,t){const a=s.slice();return a[1]=e[t],a}function N(s){let e,t;const a=[s[1]];let n={};for(let r=0;r<a.length;r+=1)n=A(n,a[r]);return e=new L({props:n}),{c(){b(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,a){v(e,s,a),t=!0},p(s,t){const n=1&t?k(a,[x(s[1])]):{};e.$set(n)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function R(s){let e,t,f,g,$,m,p=s[0],b=[];for(let a=0;a<p.length;a+=1)b[a]=N(M(s,p,a));const d=s=>O(b[s],1,1,(()=>{b[s]=null}));return{c(){e=a("nav"),t=a("a"),f=a("h1"),g=n("Shushicate"),$=w();for(let s=0;s<b.length;s+=1)b[s].c();this.h()},l(s){e=r(s,"NAV",{class:!0});var a=l(e);t=r(a,"A",{href:!0,id:!0,class:!0});var n=l(t);f=r(n,"H1",{class:!0});var i=l(f);g=c(i,"Shushicate"),i.forEach(o),n.forEach(o),$=q(a);for(let e=0;e<b.length;e+=1)b[e].l(a);a.forEach(o),this.h()},h(){i(f,"class","svelte-1bm30hk"),i(t,"href","."),i(t,"id","title"),i(t,"class","svelte-1bm30hk"),i(e,"class","svelte-1bm30hk")},m(s,a){u(s,e,a),h(e,t),h(t,f),h(f,g),h(e,$);for(let t=0;t<b.length;t+=1)b[t].m(e,null);m=!0},p(s,[t]){if(1&t){let a;for(p=s[0],a=0;a<p.length;a+=1){const n=M(s,p,a);b[a]?(b[a].p(n,t),E(b[a],1)):(b[a]=N(n),b[a].c(),E(b[a],1),b[a].m(e,null))}for(F(),a=p.length;a<b.length;a+=1)d(a);H()}},i(s){if(!m){for(let s=0;s<p.length;s+=1)E(b[s]);m=!0}},o(s){b=b.filter(Boolean);for(let e=0;e<b.length;e+=1)O(b[e]);m=!1},d(s){s&&o(e),_(b,s)}}}function V(s){return[[{label:"Home",url:"/"}]]}class W extends s{constructor(s){super(),e(this,s,V,R,t,{})}}function y(s){let e,t,a,n,r;e=new W({});const l=s[1].default,c=S(l,s,s[0],null);return n=new G({}),{c(){b(e.$$.fragment),t=w(),c&&c.c(),a=w(),b(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=q(s),c&&c.l(s),a=q(s),d(n.$$.fragment,s)},m(s,l){v(e,s,l),u(s,t,l),c&&c.m(s,l),u(s,a,l),v(n,s,l),r=!0},p(s,[e]){c&&c.p&&(!r||1&e)&&j(c,l,s,s[0],r?z(l,s[0],e,null):B(s[0]),null)},i(s){r||(E(e.$$.fragment,s),E(c,s),E(n.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),O(c,s),O(n.$$.fragment,s),r=!1},d(s){T(e,s),s&&o(t),c&&c.d(s),s&&o(a),T(n,s)}}}function C(s,e,t){let{$$slots:a={},$$scope:n}=e;return s.$$set=s=>{"$$scope"in s&&t(0,n=s.$$scope)},[n,a]}class P extends s{constructor(s){super(),e(this,s,C,y,t,{})}}export{P as default};