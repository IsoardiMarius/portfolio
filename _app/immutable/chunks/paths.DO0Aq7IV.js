import{A as b,s as _}from"./scheduler.BPnewtNl.js";const e=[];function g(o,a=b){let i;const n=new Set;function r(t){if(_(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function p(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=a(r,f)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:p}}var l;const d=((l=globalThis.__sveltekit_p2qdn4)==null?void 0:l.base)??"/slick-portfolio-svelte";var u;const q=((u=globalThis.__sveltekit_p2qdn4)==null?void 0:u.assets)??d;export{q as a,d as b,g as w};
