import{S as Ul,i as Sl,s as Kl,w as Ft,Z as Vt,M as Rl,e as kl,a as c,k as r,q as $,y,O as Il,N as Ol,h as l,c as u,l as d,m as i,r as m,z as U,n as et,G as e,b as p,A as S,_ as qt,g as K,d as R,B as I,H as Qe,a2 as Fl}from"../chunks/index.2b5a13c2.js";import{B as At}from"../chunks/Button.879704b7.js";import{M as Jt}from"../chunks/Modal.8021d56a.js";import{H as Bl}from"../chunks/HighlightSvelte.1f58988f.js";import{h as Vl}from"../chunks/vs2015.657c0888.js";import{p as ql,a as Al}from"../chunks/PageTitle.50d2d268.js";function Gl(n){let o;return{c(){o=$("Basic Modal")},l(s){o=m(s,"Basic Modal")},m(s,f){p(s,o,f)},d(s){s&&l(o)}}}function Nl(n){let o,s;return{c(){o=r("div"),s=$("test"),this.h()},l(f){o=d(f,"DIV",{class:!0});var _=i(o);s=m(_,"test"),_.forEach(l),this.h()},h(){et(o,"class","box")},m(f,_){p(f,o,_),e(o,s)},p:Qe,d(f){f&&l(o)}}}function Pl(n){let o;return{c(){o=$('close="button"')},l(s){o=m(s,'close="button"')},m(s,f){p(s,o,f)},d(s){s&&l(o)}}}function jl(n){let o,s;return{c(){o=r("div"),s=$("test"),this.h()},l(f){o=d(f,"DIV",{class:!0});var _=i(o);s=m(_,"test"),_.forEach(l),this.h()},h(){et(o,"class","box")},m(f,_){p(f,o,_),e(o,s)},p:Qe,d(f){f&&l(o)}}}function zl(n){let o;return{c(){o=$('close="key"')},l(s){o=m(s,'close="key"')},m(s,f){p(s,o,f)},d(s){s&&l(o)}}}function Ll(n){let o,s;return{c(){o=r("div"),s=$('close="key"'),this.h()},l(f){o=d(f,"DIV",{class:!0});var _=i(o);s=m(_,'close="key"'),_.forEach(l),this.h()},h(){et(o,"class","box")},m(f,_){p(f,o,_),e(o,s)},p:Qe,d(f){f&&l(o)}}}function Yl(n){let o;return{c(){o=$('close="user"')},l(s){o=m(s,'close="user"')},m(s,f){p(s,o,f)},d(s){s&&l(o)}}}function Zl(n){let o;return{c(){o=$("close")},l(s){o=m(s,"close")},m(s,f){p(s,o,f)},d(s){s&&l(o)}}}function Jl(n){let o,s,f,_,v,E;return v=new At({props:{class:"modal-close-user",$$slots:{default:[Zl]},$$scope:{ctx:n}}}),v.$on("click",function(){Fl(n[4])&&n[4].apply(this,arguments)}),{c(){o=r("div"),s=r("p"),f=$('close="user"'),_=c(),y(v.$$.fragment),this.h()},l(h){o=d(h,"DIV",{class:!0});var g=i(o);s=d(g,"P",{});var b=i(s);f=m(b,'close="user"'),b.forEach(l),_=u(g),U(v.$$.fragment,g),g.forEach(l),this.h()},h(){et(o,"class","box")},m(h,g){p(h,o,g),e(o,s),e(s,f),e(o,_),S(v,o,null),E=!0},p(h,g){n=h;const b={};g&16384&&(b.$$scope={dirty:g,ctx:n}),v.$set(b)},i(h){E||(K(v.$$.fragment,h),E=!0)},o(h){R(v.$$.fragment,h),E=!1},d(h){h&&l(o),I(v)}}}function Ql(n){let o,s,f,_,v,E,h,g,b,at,lt,G,N,ot,J,nt,T,P,ft,k,rt,Qt,Wt,dt,Xt,xt,it,te,ee,ct,le,oe,ut,se,ae,H,B,$t,ne,fe,mt,re,de,_t,ie,ce,pt,ue,$e,ht,me,_e,M,vt,pe,he,bt,ve,be,gt,ge,Ee,Et,Te,De,Tt,ke,Be,C,Dt,Me,Ce,kt,we,He,Bt,ye,Ue,Mt,Se,Ke,Ct,Re,Ie,w,wt,Oe,Fe,Ht,Ve,qe,yt,Ae,Ge,Ut,Ne,Pe,St,je,Gt,j,Nt,z,ze,Pt,L,jt,Y,Le,zt,Z,Lt,O,Ye,Ze,Yt,X,x,Zt;h=new At({props:{$$slots:{default:[Gl]},$$scope:{ctx:n}}}),h.$on("click",n[5]);function Ml(t){n[6](t)}let We={$$slots:{default:[Nl]},$$scope:{ctx:n}};n[0]!==void 0&&(We.active=n[0]),b=new Jt({props:We}),Ft.push(()=>Vt(b,"active",Ml)),N=new Bl({props:{code:`<script lang="ts">
  let modalDefault: boolean;
<\/script>
<Button
  on:click={() => {
    modalDefault = !modalDefault;
  }}>Basic Modal</Button
>
<Modal bind:active={modalDefault}>
  <div class="box">test</div>
</Modal>`}}),j=new At({props:{$$slots:{default:[Pl]},$$scope:{ctx:n}}}),j.$on("click",n[7]);function Cl(t){n[8](t)}let Xe={close:"button",$$slots:{default:[jl]},$$scope:{ctx:n}};n[1]!==void 0&&(Xe.active=n[1]),z=new Jt({props:Xe}),Ft.push(()=>Vt(z,"active",Cl)),L=new At({props:{$$slots:{default:[zl]},$$scope:{ctx:n}}}),L.$on("click",n[9]);function wl(t){n[10](t)}let xe={close:"key",$$slots:{default:[Ll]},$$scope:{ctx:n}};n[2]!==void 0&&(xe.active=n[2]),Y=new Jt({props:xe}),Ft.push(()=>Vt(Y,"active",wl)),Z=new At({props:{$$slots:{default:[Yl]},$$scope:{ctx:n}}}),Z.$on("click",n[11]);function Hl(t){n[12](t)}function yl(t){n[13](t)}let Je={close:"user",$$slots:{default:[Jl]},$$scope:{ctx:n}};return n[3]!==void 0&&(Je.active=n[3]),n[4]!==void 0&&(Je.closeModal=n[4]),O=new Jt({props:Je}),Ft.push(()=>Vt(O,"active",Hl)),Ft.push(()=>Vt(O,"closeModal",yl)),x=new Bl({props:{code:`<script lang="ts">
  let modalCloseButton: boolean;
  let modalCloseKey: boolean;
  let modalCloseUser: boolean;
  let closeModal: (() => void) | undefined;
<\/script>
<Button
  on:click={() => {
    modalCloseButton = !modalCloseButton;
  }}>close="button"</Button
>
<Modal bind:active={modalCloseButton} close="button">
  <div class="box">test</div>
</Modal>

<Button
  on:click={() => {
    modalCloseKey = !modalCloseKey;
  }}>close="key"</Button
>
<Modal bind:active={modalCloseKey} close="key">
  <div class="box">close="key"</div>
</Modal>

<Button
  on:click={() => {
    modalCloseUser = !modalCloseUser;
  }}>close="user"</Button
>
<Modal bind:active={modalCloseUser} bind:closeModal close="user">
  <div class="box">
    <p>close="user"</p>
    <Button class="modal-close-user" on:click={closeModal}>close</Button>
  </div>
</Modal>`}}),{c(){o=new Rl(!1),s=kl(),f=c(),_=r("h2"),v=$("Basic"),E=c(),y(h.$$.fragment),g=c(),y(b.$$.fragment),lt=c(),G=r("figure"),y(N.$$.fragment),ot=c(),J=r("h2"),nt=$("Close Options"),T=c(),P=r("table"),ft=r("thead"),k=r("tr"),rt=r("th"),Qt=$("Option Name"),Wt=c(),dt=r("th"),Xt=$("System Close Button"),xt=c(),it=r("th"),te=$("User Close Button"),ee=c(),ct=r("th"),le=$("Background Click"),oe=c(),ut=r("th"),se=$("Esc Key"),ae=c(),H=r("tbody"),B=r("tr"),$t=r("td"),ne=$("Default Setting"),fe=c(),mt=r("td"),re=$("👌"),de=c(),_t=r("td"),ie=$("👌"),ce=c(),pt=r("td"),ue=$("👌"),$e=c(),ht=r("td"),me=$("👌"),_e=c(),M=r("tr"),vt=r("td"),pe=$("button"),he=c(),bt=r("td"),ve=$("👌"),be=c(),gt=r("td"),ge=$("👌"),Ee=c(),Et=r("td"),Te=$("❌"),De=c(),Tt=r("td"),ke=$("❌"),Be=c(),C=r("tr"),Dt=r("td"),Me=$("key"),Ce=c(),kt=r("td"),we=$("❌"),He=c(),Bt=r("td"),ye=$("❌"),Ue=c(),Mt=r("td"),Se=$("❌"),Ke=c(),Ct=r("td"),Re=$("👌"),Ie=c(),w=r("tr"),wt=r("td"),Oe=$("user"),Fe=c(),Ht=r("td"),Ve=$("❌"),qe=c(),yt=r("td"),Ae=$("👌"),Ge=c(),Ut=r("td"),Ne=$("❌"),Pe=c(),St=r("td"),je=$("❌"),Gt=c(),y(j.$$.fragment),Nt=c(),y(z.$$.fragment),Pt=c(),y(L.$$.fragment),jt=c(),y(Y.$$.fragment),zt=c(),y(Z.$$.fragment),Lt=c(),y(O.$$.fragment),Yt=c(),X=r("figure"),y(x.$$.fragment),this.h()},l(t){const a=Il("svelte-fyjslq",document.head);o=Ol(a,!1),s=kl(),a.forEach(l),f=u(t),_=d(t,"H2",{});var Kt=i(_);v=m(Kt,"Basic"),Kt.forEach(l),E=u(t),U(h.$$.fragment,t),g=u(t),U(b.$$.fragment,t),lt=u(t),G=d(t,"FIGURE",{class:!0});var st=i(G);U(N.$$.fragment,st),st.forEach(l),ot=u(t),J=d(t,"H2",{});var Rt=i(J);nt=m(Rt,"Close Options"),Rt.forEach(l),T=u(t),P=d(t,"TABLE",{class:!0});var Q=i(P);ft=d(Q,"THEAD",{});var It=i(ft);k=d(It,"TR",{});var D=i(k);rt=d(D,"TH",{});var Ot=i(rt);Qt=m(Ot,"Option Name"),Ot.forEach(l),Wt=u(D),dt=d(D,"TH",{});var tt=i(dt);Xt=m(tt,"System Close Button"),tt.forEach(l),xt=u(D),it=d(D,"TH",{});var tl=i(it);te=m(tl,"User Close Button"),tl.forEach(l),ee=u(D),ct=d(D,"TH",{});var el=i(ct);le=m(el,"Background Click"),el.forEach(l),oe=u(D),ut=d(D,"TH",{});var ll=i(ut);se=m(ll,"Esc Key"),ll.forEach(l),D.forEach(l),It.forEach(l),ae=u(Q),H=d(Q,"TBODY",{});var W=i(H);B=d(W,"TR",{});var F=i(B);$t=d(F,"TD",{});var ol=i($t);ne=m(ol,"Default Setting"),ol.forEach(l),fe=u(F),mt=d(F,"TD",{});var sl=i(mt);re=m(sl,"👌"),sl.forEach(l),de=u(F),_t=d(F,"TD",{});var al=i(_t);ie=m(al,"👌"),al.forEach(l),ce=u(F),pt=d(F,"TD",{});var nl=i(pt);ue=m(nl,"👌"),nl.forEach(l),$e=u(F),ht=d(F,"TD",{});var fl=i(ht);me=m(fl,"👌"),fl.forEach(l),F.forEach(l),_e=u(W),M=d(W,"TR",{});var V=i(M);vt=d(V,"TD",{});var rl=i(vt);pe=m(rl,"button"),rl.forEach(l),he=u(V),bt=d(V,"TD",{});var dl=i(bt);ve=m(dl,"👌"),dl.forEach(l),be=u(V),gt=d(V,"TD",{});var il=i(gt);ge=m(il,"👌"),il.forEach(l),Ee=u(V),Et=d(V,"TD",{});var cl=i(Et);Te=m(cl,"❌"),cl.forEach(l),De=u(V),Tt=d(V,"TD",{});var ul=i(Tt);ke=m(ul,"❌"),ul.forEach(l),V.forEach(l),Be=u(W),C=d(W,"TR",{});var q=i(C);Dt=d(q,"TD",{});var $l=i(Dt);Me=m($l,"key"),$l.forEach(l),Ce=u(q),kt=d(q,"TD",{});var ml=i(kt);we=m(ml,"❌"),ml.forEach(l),He=u(q),Bt=d(q,"TD",{});var _l=i(Bt);ye=m(_l,"❌"),_l.forEach(l),Ue=u(q),Mt=d(q,"TD",{});var pl=i(Mt);Se=m(pl,"❌"),pl.forEach(l),Ke=u(q),Ct=d(q,"TD",{});var hl=i(Ct);Re=m(hl,"👌"),hl.forEach(l),q.forEach(l),Ie=u(W),w=d(W,"TR",{});var A=i(w);wt=d(A,"TD",{});var vl=i(wt);Oe=m(vl,"user"),vl.forEach(l),Fe=u(A),Ht=d(A,"TD",{});var bl=i(Ht);Ve=m(bl,"❌"),bl.forEach(l),qe=u(A),yt=d(A,"TD",{});var gl=i(yt);Ae=m(gl,"👌"),gl.forEach(l),Ge=u(A),Ut=d(A,"TD",{});var El=i(Ut);Ne=m(El,"❌"),El.forEach(l),Pe=u(A),St=d(A,"TD",{});var Tl=i(St);je=m(Tl,"❌"),Tl.forEach(l),A.forEach(l),W.forEach(l),Q.forEach(l),Gt=u(t),U(j.$$.fragment,t),Nt=u(t),U(z.$$.fragment,t),Pt=u(t),U(L.$$.fragment,t),jt=u(t),U(Y.$$.fragment,t),zt=u(t),U(Z.$$.fragment,t),Lt=u(t),U(O.$$.fragment,t),Yt=u(t),X=d(t,"FIGURE",{class:!0});var Dl=i(X);U(x.$$.fragment,Dl),Dl.forEach(l),this.h()},h(){o.a=s,et(G,"class","highlight"),et(P,"class","table is-fullwidth is-hoverable is-fixed"),et(X,"class","highlight")},m(t,a){o.m(Vl,document.head),e(document.head,s),p(t,f,a),p(t,_,a),e(_,v),p(t,E,a),S(h,t,a),p(t,g,a),S(b,t,a),p(t,lt,a),p(t,G,a),S(N,G,null),p(t,ot,a),p(t,J,a),e(J,nt),p(t,T,a),p(t,P,a),e(P,ft),e(ft,k),e(k,rt),e(rt,Qt),e(k,Wt),e(k,dt),e(dt,Xt),e(k,xt),e(k,it),e(it,te),e(k,ee),e(k,ct),e(ct,le),e(k,oe),e(k,ut),e(ut,se),e(P,ae),e(P,H),e(H,B),e(B,$t),e($t,ne),e(B,fe),e(B,mt),e(mt,re),e(B,de),e(B,_t),e(_t,ie),e(B,ce),e(B,pt),e(pt,ue),e(B,$e),e(B,ht),e(ht,me),e(H,_e),e(H,M),e(M,vt),e(vt,pe),e(M,he),e(M,bt),e(bt,ve),e(M,be),e(M,gt),e(gt,ge),e(M,Ee),e(M,Et),e(Et,Te),e(M,De),e(M,Tt),e(Tt,ke),e(H,Be),e(H,C),e(C,Dt),e(Dt,Me),e(C,Ce),e(C,kt),e(kt,we),e(C,He),e(C,Bt),e(Bt,ye),e(C,Ue),e(C,Mt),e(Mt,Se),e(C,Ke),e(C,Ct),e(Ct,Re),e(H,Ie),e(H,w),e(w,wt),e(wt,Oe),e(w,Fe),e(w,Ht),e(Ht,Ve),e(w,qe),e(w,yt),e(yt,Ae),e(w,Ge),e(w,Ut),e(Ut,Ne),e(w,Pe),e(w,St),e(St,je),p(t,Gt,a),S(j,t,a),p(t,Nt,a),S(z,t,a),p(t,Pt,a),S(L,t,a),p(t,jt,a),S(Y,t,a),p(t,zt,a),S(Z,t,a),p(t,Lt,a),S(O,t,a),p(t,Yt,a),p(t,X,a),S(x,X,null),Zt=!0},p(t,[a]){const Kt={};a&16384&&(Kt.$$scope={dirty:a,ctx:t}),h.$set(Kt);const st={};a&16384&&(st.$$scope={dirty:a,ctx:t}),!at&&a&1&&(at=!0,st.active=t[0],qt(()=>at=!1)),b.$set(st);const Rt={};a&16384&&(Rt.$$scope={dirty:a,ctx:t}),j.$set(Rt);const Q={};a&16384&&(Q.$$scope={dirty:a,ctx:t}),!ze&&a&2&&(ze=!0,Q.active=t[1],qt(()=>ze=!1)),z.$set(Q);const It={};a&16384&&(It.$$scope={dirty:a,ctx:t}),L.$set(It);const D={};a&16384&&(D.$$scope={dirty:a,ctx:t}),!Le&&a&4&&(Le=!0,D.active=t[2],qt(()=>Le=!1)),Y.$set(D);const Ot={};a&16384&&(Ot.$$scope={dirty:a,ctx:t}),Z.$set(Ot);const tt={};a&16400&&(tt.$$scope={dirty:a,ctx:t}),!Ye&&a&8&&(Ye=!0,tt.active=t[3],qt(()=>Ye=!1)),!Ze&&a&16&&(Ze=!0,tt.closeModal=t[4],qt(()=>Ze=!1)),O.$set(tt)},i(t){Zt||(K(h.$$.fragment,t),K(b.$$.fragment,t),K(N.$$.fragment,t),K(j.$$.fragment,t),K(z.$$.fragment,t),K(L.$$.fragment,t),K(Y.$$.fragment,t),K(Z.$$.fragment,t),K(O.$$.fragment,t),K(x.$$.fragment,t),Zt=!0)},o(t){R(h.$$.fragment,t),R(b.$$.fragment,t),R(N.$$.fragment,t),R(j.$$.fragment,t),R(z.$$.fragment,t),R(L.$$.fragment,t),R(Y.$$.fragment,t),R(Z.$$.fragment,t),R(O.$$.fragment,t),R(x.$$.fragment,t),Zt=!1},d(t){l(s),t&&o.d(),t&&l(f),t&&l(_),t&&l(E),I(h,t),t&&l(g),I(b,t),t&&l(lt),t&&l(G),I(N),t&&l(ot),t&&l(J),t&&l(T),t&&l(P),t&&l(Gt),I(j,t),t&&l(Nt),I(z,t),t&&l(Pt),I(L,t),t&&l(jt),I(Y,t),t&&l(zt),I(Z,t),t&&l(Lt),I(O,t),t&&l(Yt),t&&l(X),I(x)}}}function Wl(n,o,s){ql.set("Modal"),Al.set('&gt; <a href="/components/field">Components</a> &gt; <a href="/components/modal">Modal</a>');let f,_,v,E,h=null;const g=()=>{s(0,f=!f)};function b(T){f=T,s(0,f)}const at=()=>{s(1,_=!_)};function lt(T){_=T,s(1,_)}const G=()=>{s(2,v=!v)};function N(T){v=T,s(2,v)}const ot=()=>{s(3,E=!E)};function J(T){E=T,s(3,E)}function nt(T){h=T,s(4,h)}return[f,_,v,E,h,g,b,at,lt,G,N,ot,J,nt]}class so extends Ul{constructor(o){super(),Sl(this,o,Wl,Ql,Kl,{})}}export{so as default};
