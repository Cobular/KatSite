import{S as t,i as e,s as n,e as a,c as r,a as l,d as s,b as o,f as c,N as i,E as u,O as g,j as d,m,o as p,x as f,u as h,v as $,r as v,w as x,I as y,P as k,D,k as w,n as M}from"../chunks/vendor-ff810e93.js";function I(t){let e,n,d,m,p;return{c(){e=a("div"),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0,role:!0,alt:!0}),l(e).forEach(s),this.h()},h(){o(e,"class","image svelte-1erg296"),o(e,"style",n=`\n\t\t${b(t[0].url)} \n\t\tbackground-position-x: ${t[0].crop.x}; \n\t\tbackground-position-y: ${t[0].crop.y};\n\t\t`),o(e,"role","img"),o(e,"alt",d=t[0].alt)},m(n,a){c(n,e,a),m||(p=[i(e,"click",t[2]),i(e,"mouseover",t[3])],m=!0)},p(t,[a]){1&a&&n!==(n=`\n\t\t${b(t[0].url)} \n\t\tbackground-position-x: ${t[0].crop.x}; \n\t\tbackground-position-y: ${t[0].crop.y};\n\t\t`)&&o(e,"style",n),1&a&&d!==(d=t[0].alt)&&o(e,"alt",d)},i:u,o:u,d(t){t&&s(e),m=!1,g(p)}}}function b(t){return`\n    background-image: url(${t}.1_1.jpg); \n    background-image: -webkit-image-set(\n      url(${t}.1_1.jpg) 4x,\n      url(${t}.1_2.jpg) 2x,\n      url(${t}.1_4.jpg) 1x);\n    background-image: image-set(\n      url(${t}.1_1.jpg) 4x,\n      url(${t}.1_2.jpg) 2x);\n      url(${t}.1_4.jpg) 1x);\n    `}function F(t,e,n){let{imageDatum:a}=e,{onClickProp:r}=e;return t.$$set=t=>{"imageDatum"in t&&n(0,a=t.imageDatum),"onClickProp"in t&&n(1,r=t.onClickProp)},[a,r,()=>r(a),()=>fetch(a.url)]}class j extends t{constructor(t){super(),e(this,t,F,I,n,{imageDatum:0,onClickProp:1})}}const E=[{url:"/art-images/0.png",alt:"Demon Girl",crop:{x:"center",y:"top"}},{url:"/art-images/1.png",alt:"Waterfall",crop:{x:"left",y:"center"}},{url:"/art-images/2.png",alt:"Gloves",crop:{x:"center",y:"center"}},{url:"/art-images/3.png",alt:"Pride Month",crop:{x:"center",y:"top"}},{url:"/art-images/4.png",alt:"Baseball Card",crop:{x:"center",y:"center"}},{url:"/art-images/5.png",alt:"Quintiverse",crop:{x:"center",y:"top"}},{url:"/art-images/6.png",alt:"Pride Month",crop:{x:"center",y:"center"}},{url:"/art-images/7.png",alt:"Baseball Card",crop:{x:"center",y:"center"}},{url:"/art-images/8.png",alt:"Quintiverse",crop:{x:"center",y:"center"}}];function P(t,e,n){const a=t.slice();return a[1]=e[n],a}function C(t){let e,n;return e=new j({props:{imageDatum:t[1],onClickProp:t[0]}}),{c(){d(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,a){p(e,t,a),n=!0},p(t,n){const a={};1&n&&(a.onClickProp=t[0]),e.$set(a)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function V(t){let e,n,i=E,u=[];for(let a=0;a<i.length;a+=1)u[a]=C(P(t,i,a));const g=t=>h(u[t],1,1,(()=>{u[t]=null}));return{c(){e=a("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){e=r(t,"DIV",{id:!0,class:!0});var n=l(e);for(let e=0;e<u.length;e+=1)u[e].l(n);n.forEach(s),this.h()},h(){o(e,"id","grid"),o(e,"class","svelte-ex18qe")},m(t,a){c(t,e,a);for(let n=0;n<u.length;n+=1)u[n].m(e,null);n=!0},p(t,[n]){if(1&n){let a;for(i=E,a=0;a<i.length;a+=1){const r=P(t,i,a);u[a]?(u[a].p(r,n),f(u[a],1)):(u[a]=C(r),u[a].c(),f(u[a],1),u[a].m(e,null))}for(v(),a=i.length;a<u.length;a+=1)g(a);x()}},i(t){if(!n){for(let t=0;t<i.length;t+=1)f(u[t]);n=!0}},o(t){u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)h(u[e]);n=!1},d(t){t&&s(e),y(u,t)}}}function _(t,e,n){let{displayImageModalFunc:a}=e;return t.$$set=t=>{"displayImageModalFunc"in t&&n(0,a=t.displayImageModalFunc)},[a]}class B extends t{constructor(t){super(),e(this,t,_,V,n,{displayImageModalFunc:0})}}function G(t){let e,n,u,g,d,m,p;return{c(){e=a("div"),n=a("div"),u=a("img"),this.h()},l(t){e=r(t,"DIV",{id:!0,class:!0});var a=l(e);n=r(a,"DIV",{id:!0,class:!0});var o=l(n);u=r(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(s),a.forEach(s),this.h()},h(){k(u.src,g=t[1].url)||o(u,"src",g),o(u,"alt",d=t[1].alt),o(u,"class","svelte-witd6o"),o(n,"id","modal-inner"),o(n,"class","svelte-witd6o"),o(e,"id","modal"),o(e,"class","svelte-witd6o")},m(a,r){c(a,e,r),D(e,n),D(n,u),m||(p=i(e,"click",t[4]),m=!0)},p(t,e){2&e&&!k(u.src,g=t[1].url)&&o(u,"src",g),2&e&&d!==(d=t[1].alt)&&o(u,"alt",d)},d(t){t&&s(e),m=!1,p()}}}function Q(t){let e,n,o,g=t[0]&&G(t);return{c(){e=a("div"),g&&g.c()},l(t){e=r(t,"DIV",{});var n=l(e);g&&g.l(n),n.forEach(s)},m(a,r){c(a,e,r),g&&g.m(e,null),n||(o=i(window,"keydown",t[3]),n=!0)},p(t,[n]){t[0]?g?g.p(t,n):(g=G(t),g.c(),g.m(e,null)):g&&(g.d(1),g=null)},i:u,o:u,d(t){t&&s(e),g&&g.d(),n=!1,o()}}}function q(t,e,n){let{showModal:a}=e,{imageData:r}=e,{hideModalFunc:l}=e;return t.$$set=t=>{"showModal"in t&&n(0,a=t.showModal),"imageData"in t&&n(1,r=t.imageData),"hideModalFunc"in t&&n(2,l=t.hideModalFunc)},[a,r,l,function(t){"Escape"==t.key&&l()},()=>l()]}class N extends t{constructor(t){super(),e(this,t,q,Q,n,{showModal:0,imageData:1,hideModalFunc:2})}}function O(t){let e,n,i,u,g;return n=new B({props:{displayImageModalFunc:t[2]}}),u=new N({props:{showModal:t[0],imageData:t[1],hideModalFunc:t[3]}}),{c(){e=a("div"),d(n.$$.fragment),i=w(),d(u.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var a=l(e);m(n.$$.fragment,a),i=M(a),m(u.$$.fragment,a),a.forEach(s),this.h()},h(){o(e,"class","content wide svelte-un7dex")},m(t,a){c(t,e,a),p(n,e,null),D(e,i),p(u,e,null),g=!0},p(t,[e]){const n={};1&e&&(n.showModal=t[0]),2&e&&(n.imageData=t[1]),u.$set(n)},i(t){g||(f(n.$$.fragment,t),f(u.$$.fragment,t),g=!0)},o(t){h(n.$$.fragment,t),h(u.$$.fragment,t),g=!1},d(t){t&&s(e),$(n),$(u)}}}function S(t,e,n){var a=!1,r=void 0;return[a,r,function(t){n(0,a=!0),n(1,r=t),console.log(t.url)},function(){n(0,a=!1),n(1,r=void 0)}]}class W extends t{constructor(t){super(),e(this,t,S,O,n,{})}}function z(t){let e,n,o;return n=new W({}),{c(){e=a("div"),d(n.$$.fragment)},l(t){e=r(t,"DIV",{});var a=l(e);m(n.$$.fragment,a),a.forEach(s)},m(t,a){c(t,e,a),p(n,e,null),o=!0},p:u,i(t){o||(f(n.$$.fragment,t),o=!0)},o(t){h(n.$$.fragment,t),o=!1},d(t){t&&s(e),$(n)}}}export default class extends t{constructor(t){super(),e(this,t,null,z,n,{})}}