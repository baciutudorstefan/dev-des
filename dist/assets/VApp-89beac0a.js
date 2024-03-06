import{j as M,G as F,z as P,ae as le,M as ue,J as ie,ar as Z,as as K,a1 as U,k as v,aa as $,H as W,a7 as X,Y as re,x as V,ab as ce,g as Y,a as A,y as ve,A as de,a9 as fe}from"./index-5ec4ca75.js";const D=M({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function G(e){const r=F("useRender");r.render=e}function pe(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=P(),l=P();if(le){const a=new ResizeObserver(t=>{e==null||e(t,a),t.length&&(r==="content"?l.value=t[0].contentRect:l.value=t[0].target.getBoundingClientRect())});ue(()=>{a.disconnect()}),ie(o,(t,u)=>{u&&(a.unobserve(Z(u)),l.value=void 0),t&&a.observe(Z(t))},{flush:"post"})}return{resizeRef:o,contentRect:K(l)}}const T=Symbol.for("vuetify:layout"),me=Symbol.for("vuetify:layout-item"),q=1e3,ye=M({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function ge(){const e=U(T);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const he=(e,r,o,l)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const u of e){const p=r.get(u),y=o.get(u),g=l.get(u);if(!p||!y||!g)continue;const b={...a,[p.value]:parseInt(a[p.value],10)+(g.value?parseInt(y.value,10):0)};t.push({id:u,layer:b}),a=b}return t};function be(e){const r=U(T,null),o=v(()=>r?r.rootZIndex.value-100:q),l=P([]),a=$(new Map),t=$(new Map),u=$(new Map),p=$(new Map),y=$(new Map),{resizeRef:g,contentRect:b}=pe(),J=v(()=>{const s=new Map,d=e.overlaps??[];for(const n of d.filter(c=>c.includes(":"))){const[c,i]=n.split(":");if(!l.value.includes(c)||!l.value.includes(i))continue;const m=a.get(c),h=a.get(i),S=t.get(c),w=t.get(i);!m||!h||!S||!w||(s.set(i,{position:m.value,amount:parseInt(S.value,10)}),s.set(c,{position:h.value,amount:-parseInt(w.value,10)}))}return s}),x=v(()=>{const s=[...new Set([...u.values()].map(n=>n.value))].sort((n,c)=>n-c),d=[];for(const n of s){const c=l.value.filter(i=>{var m;return((m=u.get(i))==null?void 0:m.value)===n});d.push(...c)}return he(d,a,t,p)}),E=v(()=>!Array.from(y.values()).some(s=>s.value)),I=v(()=>x.value[x.value.length-1].layer),Q=v(()=>({"--v-layout-left":V(I.value.left),"--v-layout-right":V(I.value.right),"--v-layout-top":V(I.value.top),"--v-layout-bottom":V(I.value.bottom),...E.value?void 0:{transition:"none"}})),R=v(()=>x.value.slice(1).map((s,d)=>{let{id:n}=s;const{layer:c}=x.value[d],i=t.get(n),m=a.get(n);return{id:n,...c,size:Number(i.value),position:m.value}})),H=s=>R.value.find(d=>d.id===s),L=F("createLayout"),_=W(!1);X(()=>{_.value=!0}),re(T,{register:(s,d)=>{let{id:n,order:c,position:i,layoutSize:m,elementSize:h,active:S,disableTransitions:w,absolute:ne}=d;u.set(n,c),a.set(n,i),t.set(n,m),p.set(n,S),w&&y.set(n,w);const j=ce(me,L==null?void 0:L.vnode).indexOf(s);j>-1?l.value.splice(j,0,n):l.value.push(n);const N=v(()=>R.value.findIndex(z=>z.id===n)),B=v(()=>o.value+x.value.length*2-N.value*2),oe=v(()=>{const z=i.value==="left"||i.value==="right",C=i.value==="right",se=i.value==="bottom",k={[i.value]:0,zIndex:B.value,transform:`translate${z?"X":"Y"}(${(S.value?0:-110)*(C||se?-1:1)}%)`,position:ne.value||o.value!==q?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!_.value)return k;const f=R.value[N.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${n}"`);const O=J.value.get(n);return O&&(f[O.position]+=O.amount),{...k,height:z?`calc(100% - ${f.top}px - ${f.bottom}px)`:h.value?`${h.value}px`:void 0,left:C?void 0:`${f.left}px`,right:C?`${f.right}px`:void 0,top:i.value!=="bottom"?`${f.top}px`:void 0,bottom:i.value!=="top"?`${f.bottom}px`:void 0,width:z?h.value?`${h.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ae=v(()=>({zIndex:B.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ae,zIndex:B}},unregister:s=>{u.delete(s),a.delete(s),t.delete(s),p.delete(s),y.delete(s),l.value=l.value.filter(d=>d!==s)},mainRect:I,mainStyles:Q,getLayoutItem:H,items:R,layoutRect:b,rootZIndex:o});const ee=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),te=v(()=>({zIndex:r?o.value:void 0,position:r?"relative":void 0,overflow:r?"hidden":void 0}));return{layoutClasses:ee,layoutStyles:te,getLayoutItem:H,items:R,layoutRect:b,layoutRef:g}}function xe(){const e=W(!1);return X(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:K(e)}}const Ie=M({tag:{type:String,default:"div"}},"tag"),Re=M({scrollable:Boolean,...D(),...Ie({tag:"main"})},"VMain"),$e=Y()({name:"VMain",props:Re(),setup(e,r){let{slots:o}=r;const{mainStyles:l}=ge(),{ssrBootStyles:a}=xe();return G(()=>A(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,a.value,e.style]},{default:()=>{var t,u;return[e.scrollable?A("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(u=o.default)==null?void 0:u.call(o)]}})),{}}});const Se=M({...D(),...ye({fullHeight:!0}),...ve()},"VApp"),Me=Y()({name:"VApp",props:Se(),setup(e,r){let{slots:o}=r;const l=de(e),{layoutClasses:a,getLayoutItem:t,items:u,layoutRef:p}=be(e),{rtlClasses:y}=fe();return G(()=>{var g;return A("div",{ref:p,class:["v-application",l.themeClasses.value,a.value,y.value,e.class],style:[e.style]},[A("div",{class:"v-application__wrap"},[(g=o.default)==null?void 0:g.call(o)])])}),{getLayoutItem:t,items:u,theme:l}}});export{$e as V,Me as a,Ie as b,pe as c,xe as d,D as m,G as u};
