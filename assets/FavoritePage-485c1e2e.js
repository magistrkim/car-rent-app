import{n as c,r as e,j as t,a as l}from"./index-e50ba741.js";import{g as x,A as g}from"./advert-568d3f41.js";const p=c.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,f=c.div`
  width: 100%;
  min-height: 100vh;
`,m=()=>{const[n,h]=e.useState([]),[i,o]=e.useState(!1),[s,d]=e.useState(""),a=1;return e.useEffect(()=>{(async()=>{try{o(!0);const r=await x(a);d(""),a===1&&h(r)}catch(r){d(r.response.data)}finally{o(!1)}})()},[a]),t.jsx(p,{children:t.jsxs(f,{children:[i&&t.jsx(l,{}),s&&t.jsx("div",{children:s}),!i&&!s&&n.length>0&&t.jsx(t.Fragment,{children:t.jsx(g,{data:n})})]})})};export{m as default};
