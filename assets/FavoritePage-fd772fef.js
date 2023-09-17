import{n as c,r as e,j as t,a as l}from"./index-b2423703.js";import{g as x,F as g,A as p}from"./advert-77ab504d.js";const f=c.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,j=c.div`
  width: 100%;
  min-height: 100vh;
`,u=()=>{const[n,h]=e.useState([]),[i,o]=e.useState(!1),[s,d]=e.useState(""),a=1;return e.useEffect(()=>{(async()=>{try{o(!0);const r=await x(a);d(""),a===1&&h(r)}catch(r){d(r.response.data)}finally{o(!1)}})()},[a]),t.jsx(f,{children:t.jsxs(j,{children:[t.jsx(g,{}),i&&t.jsx(l,{}),s&&t.jsx("div",{children:s}),!i&&!s&&n.length>0&&t.jsx(t.Fragment,{children:t.jsx(p,{data:n})})]})})};export{u as default};
